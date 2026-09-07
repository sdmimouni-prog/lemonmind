import type { APIRoute } from 'astro';
import { careersContact, spontaneousApplication } from '../../data/careers-data';

export const prerender = false;

const requiredFields = ['fullName', 'email', 'domain', 'cv', 'consent'] as const;

const labels: Record<(typeof requiredFields)[number], string> = {
  fullName: 'Nom et prénom',
  email: 'Email',
  domain: 'Métier ou domaine recherché',
  cv: 'CV',
  consent: 'Consentement au traitement des données',
};

const acceptedMimeTypes = new Set([
  '',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const getText = (formData: FormData, key: string) => String(formData.get(key) || '').trim();

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const isHttpUrl = (value: string) => {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const errors: Record<string, string> = {};

  if (getText(formData, 'website')) {
    return json({ ok: false, message: 'Votre candidature n’a pas pu être validée.' }, 400);
  }

  requiredFields.forEach((field) => {
    if (field === 'cv') {
      return;
    }

    if (field === 'consent') {
      if (formData.get('consent') !== 'on') {
        errors.consent = `${labels[field]} est requis.`;
      }
      return;
    }

    if (!getText(formData, field)) {
      errors[field] = `${labels[field]} est requis.`;
    }
  });

  const email = getText(formData, 'email');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Indiquez un email valide.';
  }

  const phone = getText(formData, 'phone');
  if (phone && phone.replace(/[^\d+]/g, '').length < 8) {
    errors.phone = 'Indiquez un numéro de téléphone valide.';
  }

  const linkedinUrl = getText(formData, 'linkedinUrl');
  if (!isHttpUrl(linkedinUrl)) {
    errors.linkedinUrl = 'Indiquez une URL LinkedIn valide.';
  }

  const portfolioUrl = getText(formData, 'portfolioUrl');
  if (!isHttpUrl(portfolioUrl)) {
    errors.portfolioUrl = 'Indiquez une URL de portfolio valide.';
  }

  const cv = formData.get('cv');
  if (!(cv instanceof File) || cv.size === 0) {
    errors.cv = 'Ajoutez votre CV au format PDF, DOC ou DOCX.';
  } else {
    const extension = cv.name.split('.').pop()?.toLowerCase() || '';

    if (!spontaneousApplication.acceptedExtensions.includes(extension)) {
      errors.cv = 'Format accepté : PDF, DOC ou DOCX.';
    }

    if (!acceptedMimeTypes.has(cv.type)) {
      errors.cv = 'Le type du fichier CV n’est pas accepté.';
    }

    if (cv.size > spontaneousApplication.maxFileSize) {
      errors.cv = 'Le CV ne doit pas dépasser 10 Mo.';
    }
  }

  if (Object.keys(errors).length) {
    return json({ ok: false, message: 'Merci de corriger les champs indiqués.', errors }, 400);
  }

  const source = getText(formData, 'source') || 'Candidature spontanée';
  const subject = `Candidature Lemon Mind - ${getText(formData, 'fullName')}`;
  const bodyLines = [
    'Bonjour Lemon Mind,',
    '',
    'Voici ma candidature :',
    '',
    `Source : ${source}`,
    `Nom : ${getText(formData, 'fullName')}`,
    `Email : ${email}`,
    `Téléphone : ${phone || 'Non renseigné'}`,
    `Ville : ${getText(formData, 'city') || 'Non renseignée'}`,
    `Métier ou domaine : ${getText(formData, 'domain')}`,
    `Niveau d’expérience : ${getText(formData, 'experienceLevel') || 'Non renseigné'}`,
    `LinkedIn : ${linkedinUrl || 'Non renseigné'}`,
    `Portfolio : ${portfolioUrl || 'Non renseigné'}`,
    '',
    'Message :',
    getText(formData, 'message') || 'Non renseigné.',
    '',
    cv instanceof File && cv.size > 0
      ? `CV validé par le formulaire, à joindre manuellement à cet email : ${cv.name}`
      : 'CV : non fourni.',
  ];

  const mailto = `${careersContact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join('\n'),
  )}`;

  return json({
    ok: true,
    message:
      'Votre candidature est validée. Votre logiciel email va s’ouvrir pour finaliser l’envoi à l’équipe Lemon Mind et joindre votre CV.',
    mailto,
  });
};
