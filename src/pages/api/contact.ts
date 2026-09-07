import type { APIRoute } from 'astro';
import { acceptedBriefExtensions, contactDetails, maxBriefSize } from '../../data/contactContent';

export const prerender = false;

const requiredFields = ['fullName', 'company', 'email', 'phone', 'projectType', 'objective'] as const;

const labels: Record<(typeof requiredFields)[number], string> = {
  fullName: 'Nom et prénom',
  company: 'Entreprise',
  email: 'Email professionnel',
  phone: 'Téléphone',
  projectType: 'Type de projet',
  objective: 'Objectif principal',
};

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
    return json({ ok: false, message: 'Votre demande n’a pas pu être validée.' }, 400);
  }

  requiredFields.forEach((field) => {
    if (!getText(formData, field)) {
      errors[field] = `${labels[field]} est requis.`;
    }
  });

  const email = getText(formData, 'email');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Indiquez un email professionnel valide.';
  }

  const phone = getText(formData, 'phone');
  if (phone && phone.replace(/[^\d+]/g, '').length < 8) {
    errors.phone = 'Indiquez un numéro de téléphone valide.';
  }

  const brief = formData.get('brief');
  if (brief instanceof File && brief.size > 0) {
    const extension = brief.name.split('.').pop()?.toLowerCase() || '';

    if (!acceptedBriefExtensions.includes(extension)) {
      errors.brief = 'Format accepté : PDF, PPT, PPTX, DOC, DOCX ou ZIP.';
    }

    if (brief.size > maxBriefSize) {
      errors.brief = 'Le brief ne doit pas dépasser 10 Mo.';
    }
  }

  if (Object.keys(errors).length) {
    return json({ ok: false, message: 'Merci de corriger les champs indiqués.', errors }, 400);
  }

  const subject = `Brief Lemon Mind - ${getText(formData, 'company')}`;
  const bodyLines = [
    'Bonjour Lemon Mind,',
    '',
    'Voici ma demande de projet :',
    '',
    `Nom : ${getText(formData, 'fullName')}`,
    `Entreprise : ${getText(formData, 'company')}`,
    `Email : ${email}`,
    `Téléphone : ${phone}`,
    `Type de projet : ${getText(formData, 'projectType')}`,
    `Objectif principal : ${getText(formData, 'objective')}`,
    `Budget estimatif : ${getText(formData, 'budget') || 'À définir'}`,
    `Date souhaitée : ${getText(formData, 'preferredDate') || 'À préciser'}`,
    '',
    'Message :',
    getText(formData, 'message') || 'À préciser ensemble.',
    '',
    brief instanceof File && brief.size > 0
      ? `Brief joint à ajouter manuellement dans l’email : ${brief.name}`
      : 'Brief joint : non fourni.',
  ];

  const mailto = `${contactDetails.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join('\n'),
  )}`;

  return json({
    ok: true,
    message: 'Votre brief est validé. Votre logiciel email va s’ouvrir pour finaliser l’envoi à l’équipe Lemon Mind.',
    mailto,
  });
};
