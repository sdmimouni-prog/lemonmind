import { contact } from './homepage';

export type LegalPageId = 'mentions-legales' | 'politique-confidentialite' | 'politique-cookies';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
};

export type LegalPage = {
  id: LegalPageId;
  title: string;
  shortTitle: string;
  description: string;
  canonical: string;
  eyebrow: string;
  intro: string;
  updatedAt: string;
  status: 'draft' | 'ready-for-legal-review' | 'published';
  sections: LegalSection[];
};

export const legalOwner = {
  brand: 'Lemon Mind Digital',
  activity: 'Agence d’influence, de contenu et de stratégie digitale au Maroc.',
  city: contact.city,
  country: 'Maroc',
  email: contact.email,
  phone: contact.phone,
  missingLegalDetails: [
    'Forme juridique',
    'Capital social',
    'Adresse du siège social',
    'Registre de commerce',
    'Identifiant fiscal',
    'ICE',
    'Numéro CNDP, si applicable',
    'Hébergeur définitif du site',
  ],
};

export const legalNavigation = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'Politique cookies', href: '/politique-cookies' },
];

export const legalPages: LegalPage[] = [
  {
    id: 'mentions-legales',
    title: 'Mentions légales | Lemon Mind Digital',
    shortTitle: 'Mentions légales',
    description:
      'Mentions légales du site Lemon Mind Digital : éditeur, contact, propriété intellectuelle, responsabilité et informations à compléter.',
    canonical: '/mentions-legales',
    eyebrow: 'Cadre légal',
    intro:
      'Cette page présente les informations légales relatives au site Lemon Mind Digital. Les champs administratifs non disponibles dans le projet sont signalés comme informations à compléter avant validation finale.',
    updatedAt: '2026-09-08',
    status: 'ready-for-legal-review',
    sections: [
      {
        id: 'editeur',
        title: 'Éditeur du site',
        paragraphs: [
          `${legalOwner.brand} édite le présent site pour présenter ses expertises, ses réalisations, ses contenus éditoriaux et ses moyens de contact.`,
          `${legalOwner.brand} exerce une activité d’agence d’influence, de contenu et de stratégie digitale basée à ${legalOwner.city}.`,
        ],
        items: [
          `Nom commercial : ${legalOwner.brand}`,
          `Activité : ${legalOwner.activity}`,
          `Localisation : ${legalOwner.city}`,
          `Email : ${legalOwner.email}`,
          `Téléphone : ${legalOwner.phone}`,
        ],
        note: 'Les informations juridiques complètes de la société doivent être ajoutées dès qu’elles sont validées.',
      },
      {
        id: 'informations-complementaires',
        title: 'Informations à compléter',
        paragraphs: [
          'Pour finaliser les mentions légales, les informations administratives suivantes doivent être renseignées avec les données officielles de la société.',
        ],
        items: legalOwner.missingLegalDetails,
      },
      {
        id: 'directeur-publication',
        title: 'Direction de la publication',
        paragraphs: [
          'La direction de la publication doit être renseignée avec le nom de la personne légalement responsable de la publication du site.',
        ],
        note: 'À compléter avec le nom et la fonction validés.',
      },
      {
        id: 'hebergement',
        title: 'Hébergement',
        paragraphs: [
          'Les informations relatives à l’hébergeur doivent être confirmées avant publication définitive : raison sociale, adresse, site web et pays d’hébergement.',
        ],
        note: 'À compléter avec l’hébergeur effectivement utilisé en production.',
      },
      {
        id: 'propriete-intellectuelle',
        title: 'Propriété intellectuelle',
        paragraphs: [
          'Les textes, images, logos, éléments graphiques, contenus éditoriaux et interfaces présents sur le site sont protégés par les règles applicables en matière de propriété intellectuelle.',
          'Toute reproduction, représentation, adaptation, diffusion ou exploitation non autorisée de tout ou partie du site est interdite sans accord écrit préalable de Lemon Mind Digital.',
        ],
      },
      {
        id: 'responsabilite',
        title: 'Responsabilité',
        paragraphs: [
          'Lemon Mind Digital s’efforce de fournir des informations exactes et à jour. Des erreurs, omissions ou indisponibilités temporaires peuvent toutefois survenir.',
          'Les contenus publiés sur le site sont fournis à titre informatif et ne constituent pas un engagement contractuel, sauf mention expresse contraire.',
        ],
      },
      {
        id: 'liens-externes',
        title: 'Liens externes',
        paragraphs: [
          'Le site peut contenir des liens vers des sites ou services tiers. Lemon Mind Digital n’exerce pas de contrôle permanent sur ces contenus externes et ne saurait être tenue responsable de leurs pratiques.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact',
        paragraphs: [
          `Pour toute question relative au site ou à ces mentions légales, vous pouvez écrire à ${legalOwner.email}.`,
        ],
      },
    ],
  },
  {
    id: 'politique-confidentialite',
    title: 'Politique de confidentialité | Lemon Mind Digital',
    shortTitle: 'Politique de confidentialité',
    description:
      'Politique de confidentialité Lemon Mind Digital : données collectées, finalités, formulaires, candidatures, newsletter, droits des personnes et contact.',
    canonical: '/politique-confidentialite',
    eyebrow: 'Données personnelles',
    intro:
      'Cette politique explique comment Lemon Mind Digital traite les données personnelles transmises via le site, notamment les formulaires de contact, de candidature et de newsletter.',
    updatedAt: '2026-09-08',
    status: 'ready-for-legal-review',
    sections: [
      {
        id: 'responsable-traitement',
        title: 'Responsable du traitement',
        paragraphs: [
          `${legalOwner.brand} est responsable des traitements de données réalisés via ce site, sous réserve de confirmation des informations juridiques complètes de la société.`,
          `Contact pour les données personnelles : ${legalOwner.email}.`,
        ],
      },
      {
        id: 'donnees-collectees',
        title: 'Données collectées',
        paragraphs: [
          'Les données collectées dépendent des formulaires utilisés et des informations que vous choisissez de transmettre.',
        ],
        items: [
          'Formulaire de contact : nom, email, téléphone, type de projet, message et éventuelle pièce jointe.',
          'Candidature : nom, email, téléphone, ville, domaine, niveau d’expérience, lien LinkedIn, portfolio, message, CV et consentement.',
          'Newsletter : adresse email, consentement et données techniques nécessaires à la sécurité du formulaire.',
          'Navigation : données techniques strictement nécessaires au bon fonctionnement du site et, le cas échéant, cookies ou traceurs décrits dans la politique cookies.',
        ],
      },
      {
        id: 'finalites',
        title: 'Finalités des traitements',
        items: [
          'Répondre aux demandes envoyées via le formulaire de contact.',
          'Qualifier les besoins projet et préparer un échange commercial.',
          'Étudier les candidatures et gérer le processus de recrutement.',
          'Envoyer la newsletter lorsque la personne y consent.',
          'Sécuriser les formulaires et limiter le spam.',
          'Améliorer le fonctionnement, la lisibilité et la performance du site.',
        ],
      },
      {
        id: 'bases-legales',
        title: 'Bases légales',
        paragraphs: [
          'Les traitements reposent selon les cas sur le consentement, l’exécution de mesures précontractuelles, l’intérêt légitime de Lemon Mind Digital à répondre aux demandes reçues, ou le respect d’obligations légales applicables.',
          'Au Maroc, les traitements de données personnelles sont encadrés par la loi n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel.',
        ],
      },
      {
        id: 'destinataires',
        title: 'Destinataires',
        paragraphs: [
          'Les données sont destinées aux équipes Lemon Mind Digital concernées par la demande : direction, développement commercial, gestion de projet, recrutement ou communication.',
          'Certaines données peuvent être transmises à des prestataires techniques strictement nécessaires au fonctionnement du site, de l’hébergement, de la messagerie, des formulaires ou de la newsletter.',
        ],
      },
      {
        id: 'durees-conservation',
        title: 'Durées de conservation',
        paragraphs: [
          'Les données sont conservées pendant la durée nécessaire au traitement de la demande, puis archivées ou supprimées selon leur finalité et les obligations applicables.',
        ],
        items: [
          'Demandes de contact : durée nécessaire au suivi commercial et à la gestion de la relation.',
          'Candidatures : durée nécessaire à l’étude du profil et aux échanges liés au recrutement.',
          'Newsletter : jusqu’au retrait du consentement ou à la désinscription.',
          'Logs techniques : durée limitée à la sécurité, au diagnostic et au bon fonctionnement du site.',
        ],
        note: 'Des durées chiffrées peuvent être ajoutées après validation interne ou juridique.',
      },
      {
        id: 'droits',
        title: 'Vos droits',
        paragraphs: [
          'Conformément à la réglementation applicable, vous pouvez demander l’accès, la rectification ou l’opposition au traitement de vos données personnelles, dans les limites prévues par la loi.',
          `Pour exercer vos droits, écrivez à ${legalOwner.email} en indiquant l’objet de votre demande.`,
        ],
      },
      {
        id: 'securite',
        title: 'Sécurité',
        paragraphs: [
          'Lemon Mind Digital met en œuvre des mesures organisationnelles et techniques raisonnables pour protéger les données transmises via le site contre l’accès non autorisé, la perte, l’altération ou la divulgation.',
        ],
      },
      {
        id: 'transferts',
        title: 'Transferts et services tiers',
        paragraphs: [
          'Le site peut utiliser des prestataires techniques ou services tiers, notamment pour l’hébergement, les emails, les formulaires, la newsletter ou la cartographie.',
          'Lorsque ces services impliquent un transfert ou un accès hors du Maroc, Lemon Mind Digital doit veiller à encadrer ces traitements conformément aux règles applicables.',
        ],
      },
      {
        id: 'cndp',
        title: 'Autorité compétente',
        paragraphs: [
          'La Commission Nationale de contrôle de la protection des Données à caractère Personnel, CNDP, est l’autorité marocaine compétente en matière de protection des données personnelles.',
        ],
      },
    ],
  },
  {
    id: 'politique-cookies',
    title: 'Politique cookies | Lemon Mind Digital',
    shortTitle: 'Politique cookies',
    description:
      'Politique cookies Lemon Mind Digital : types de cookies, finalités, consentement, gestion des préférences et services tiers.',
    canonical: '/politique-cookies',
    eyebrow: 'Cookies et traceurs',
    intro:
      'Cette politique présente les cookies et traceurs susceptibles d’être utilisés sur le site Lemon Mind Digital, ainsi que les moyens de gérer vos préférences.',
    updatedAt: '2026-09-08',
    status: 'ready-for-legal-review',
    sections: [
      {
        id: 'definition',
        title: 'Qu’est-ce qu’un cookie ?',
        paragraphs: [
          'Un cookie ou traceur est un petit fichier ou identifiant pouvant être enregistré sur votre navigateur ou votre terminal lors de la consultation d’un site.',
          'Il peut servir à faire fonctionner le site, mémoriser un choix, mesurer l’audience ou activer certains services tiers.',
        ],
      },
      {
        id: 'cookies-utilises',
        title: 'Cookies utilisés sur le site',
        paragraphs: [
          'À ce stade, le site utilise principalement des éléments nécessaires à son fonctionnement et peut intégrer des services tiers, notamment une carte Google Maps sur la page contact.',
        ],
        items: [
          'Cookies nécessaires : fonctionnement du site, sécurité des formulaires et prévention du spam.',
          'Cookies de mesure d’audience : uniquement si un outil analytics est activé.',
          'Cookies de services tiers : notamment Google Maps lorsque la carte intégrée est chargée.',
          'Cookies marketing : uniquement si des outils publicitaires ou de retargeting sont ajoutés ultérieurement.',
        ],
      },
      {
        id: 'consentement',
        title: 'Consentement',
        paragraphs: [
          'Les cookies strictement nécessaires peuvent être utilisés sans consentement préalable lorsqu’ils sont indispensables au fonctionnement du site.',
          'Les cookies non essentiels, notamment les cookies de mesure d’audience non exemptés, publicitaires ou de services tiers impliquant des données personnelles, doivent être soumis à votre consentement avant leur dépôt.',
        ],
      },
      {
        id: 'gestion',
        title: 'Gérer vos préférences',
        paragraphs: [
          'Vous pouvez gérer ou supprimer les cookies depuis les paramètres de votre navigateur.',
          'Si un bandeau ou module de consentement est activé sur le site, il devra permettre d’accepter, refuser ou modifier les préférences de cookies non essentiels.',
        ],
        note: 'À compléter lorsqu’un outil de gestion du consentement cookies est ajouté au site.',
      },
      {
        id: 'duree',
        title: 'Durée de conservation',
        paragraphs: [
          'La durée de conservation dépend du type de cookie et du service concerné. Les durées exactes devront être précisées lors de l’activation d’outils tiers de mesure, publicité ou consentement.',
        ],
      },
      {
        id: 'services-tiers',
        title: 'Services tiers',
        paragraphs: [
          'Certains contenus intégrés, comme une carte, peuvent dépendre de services tiers qui appliquent leurs propres règles de confidentialité et de cookies.',
          'Lorsque vous interagissez avec ces contenus, des données peuvent être traitées par le fournisseur du service.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact',
        paragraphs: [
          `Pour toute question relative aux cookies, vous pouvez écrire à ${legalOwner.email}.`,
        ],
      },
    ],
  },
];

export const legalPagesById = new Map(legalPages.map((page) => [page.id, page]));
