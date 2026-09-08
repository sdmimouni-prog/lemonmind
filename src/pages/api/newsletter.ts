import type { APIRoute } from 'astro';

export const prerender = false;

const getText = (formData: FormData, key: string) => String(formData.get(key) || '').trim();

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const errors: Record<string, string> = {};

  if (getText(formData, 'website')) {
    return json({ ok: false, message: 'Votre inscription n’a pas pu être validée.' }, 400);
  }

  const email = getText(formData, 'email').toLowerCase();
  if (!email) {
    errors.email = 'Adresse email requise.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Indiquez une adresse email valide.';
  }

  if (formData.get('consent') !== 'on') {
    errors.consent = 'Le consentement est obligatoire pour recevoir la newsletter.';
  }

  if (Object.keys(errors).length) {
    return json({ ok: false, message: 'Merci de corriger les champs indiqués.', errors }, 400);
  }

  const webhookUrl = import.meta.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return json(
      {
        ok: false,
        message: 'La newsletter n’est pas encore connectée. Configurez NEWSLETTER_WEBHOOK_URL côté serveur.',
      },
      503,
    );
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      consent: true,
      source: 'lemon-mind-insights',
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    return json(
      {
        ok: false,
        message: 'L’inscription n’a pas pu être finalisée. Réessayez dans un instant.',
      },
      502,
    );
  }

  return json({
    ok: true,
    message: 'Merci, votre inscription à la newsletter est confirmée.',
  });
};
