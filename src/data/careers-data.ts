import { contact } from './homepage';

export type CareerDepartmentId =
  | 'strategy-consulting'
  | 'influence-casting'
  | 'creative-design'
  | 'photo-video-production'
  | 'social-media'
  | 'media-performance'
  | 'project-management'
  | 'technology';

export type CareerPosition = {
  id: string;
  slug: string;
  title: string;
  department: string;
  departmentId: CareerDepartmentId;
  location: string;
  contractType: string;
  experienceLevel: string;
  workMode: string;
  publishedAt: string;
  validThrough?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  applicationUrl?: string;
  isActive: boolean;
  displayOrder: number;
};

export const careersMeta = {
  title: 'Carrières chez Lemon Mind | Rejoignez notre équipe',
  description:
    'Découvrez les opportunités chez Lemon Mind au Maroc et rejoignez une équipe spécialisée en stratégie, influence, création, production, social media et média.',
  canonical: '/agence/carrieres',
  ogImage: '/assets/lemon/studio-meeting.webp',
};

export const careersHero = {
  eyebrow: 'Rejoignez Lemon Mind',
  title: 'Créez, apprenez et grandissez avec nous.',
  highlight: 'avec nous.',
  paragraphs: [
    'Lemon Mind réunit des profils passionnés par les marques, les contenus, les créateurs, la production et les nouvelles cultures digitales.',
    'Nous recherchons des personnes curieuses, responsables et prêtes à construire de grandes idées en équipe.',
  ],
  primaryCta: 'Voir les opportunités',
  primaryHref: '#opportunites',
  secondaryCta: 'Candidature spontanée',
  secondaryHref: '#candidature-spontanee',
  image: '/assets/lemon/studio-meeting.webp',
  imageAlt: 'Atelier créatif Lemon Mind autour d’une table de travail',
  imageLabel: 'Photo interne ou asset validé Lemon Mind',
  annotation: 'Better people. Brighter brands. Together.',
  sideAnnotation: 'Join the crew.',
  reassurance: [
    { label: 'Des projets variés', icon: 'doc' },
    { label: 'Une équipe bienveillante', icon: 'people' },
    { label: 'Un environnement stimulant', icon: 'target' },
    { label: 'Un impact concret', icon: 'check' },
  ],
};

export const careersBenefits = {
  eyebrow: 'Pourquoi nous rejoindre ?',
  title: 'Plus qu’un poste, un environnement pour progresser.',
  text:
    'Nous offrons un cadre de travail stimulant où chacun peut apprendre, prendre des responsabilités et contribuer à des projets qui font la différence.',
  items: [
    {
      title: 'Des projets variés',
      text: 'Travailler avec des marques, des secteurs et des problématiques différentes.',
      icon: 'bulb',
      tone: 'yellow',
    },
    {
      title: 'Une vraie responsabilité',
      text: 'Participer aux décisions et mesurer l’impact concret de son travail.',
      icon: 'people',
      tone: 'violet',
    },
    {
      title: 'Une culture d’apprentissage',
      text: 'Formations, veille, tests, workshops et partage de connaissances.',
      icon: 'bars',
      tone: 'mint',
    },
    {
      title: 'Un collectif exigeant',
      text: 'Des profils complémentaires, responsables et engagés qui avancent ensemble.',
      icon: 'heart',
      tone: 'pink',
    },
  ],
};

export const careersCulture = {
  eyebrow: 'La vie chez Lemon Mind',
  title: 'Le travail compte. La manière de travailler aussi.',
  text:
    'Des bureaux où les idées circulent, des projets qui prennent vie, des moments de partage et une équipe qui avance ensemble.',
  gallery: [
    {
      src: '/assets/lemon/studio-meeting.webp',
      alt: 'Session de travail Lemon Mind autour d’une table de création',
      caption: 'Réunions créatives',
      width: 1280,
      height: 720,
    },
    {
      src: '/assets/lemon/production-experience.webp',
      alt: 'Production de contenu et activation Lemon Mind',
      caption: 'Production',
      width: 1024,
      height: 1536,
    },
    {
      src: '/assets/lemon/creative-presentation.webp',
      alt: 'Présentation de contenu social-first Lemon Mind',
      caption: 'Création',
      width: 560,
      height: 996,
    },
    {
      src: '/assets/lemon/influence-reel.webp',
      alt: 'Format social media produit par Lemon Mind',
      caption: 'Diffusion',
      width: 276,
      height: 404,
    },
  ],
};

export const careerDepartments: {
  id: CareerDepartmentId;
  label: string;
  icon: string;
  tone: string;
}[] = [
  { id: 'strategy-consulting', label: 'Stratégie & conseil', icon: 'target', tone: 'violet' },
  { id: 'influence-casting', label: 'Influence & casting', icon: 'people', tone: 'blue' },
  { id: 'creative-design', label: 'Création & design', icon: 'image', tone: 'mint' },
  { id: 'photo-video-production', label: 'Production photo & vidéo', icon: 'camera', tone: 'pink' },
  { id: 'social-media', label: 'Social media', icon: 'heart', tone: 'blue' },
  { id: 'media-performance', label: 'Media & performance', icon: 'bars', tone: 'yellow' },
  { id: 'project-management', label: 'Gestion de projet', icon: 'calendar', tone: 'mint' },
  { id: 'technology', label: 'Technologie', icon: 'stack', tone: 'pink' },
];

export const careerDepartmentsIntro = {
  eyebrow: 'Nos métiers',
  title: 'Des talents pour faire grandir les marques.',
  text:
    'Stratégie, création, production, influence, social media, média et technologie : des métiers complémentaires pour imaginer, produire et amplifier des idées qui comptent.',
};

export const opportunitiesContent = {
  eyebrow: 'Nos opportunités',
  title: 'Les postes actuellement ouverts.',
  text:
    'Rejoignez une équipe passionnée et contribuez à des projets qui comptent. Nous publions régulièrement de nouvelles opportunités.',
  viewAllLabel: 'Voir toutes les offres',
  emptyTitle: 'Aucune opportunité ouverte pour le moment.',
  emptyText:
    'Notre équipe continue d’évoluer. Envoyez-nous votre candidature spontanée afin que nous puissions vous contacter lorsqu’un besoin correspond à votre profil.',
  filteredEmptyText:
    'Aucune offre ouverte dans ce domaine pour le moment. Vous pouvez toutefois nous envoyer une candidature spontanée.',
  emptyCta: 'Envoyer une candidature spontanée',
};

export const recruitmentProcess = {
  eyebrow: 'Notre processus de recrutement',
  title: 'Un processus clair, humain et transparent.',
  text:
    'Nous prenons le temps de bien connaître chaque candidat afin de construire une collaboration durable et épanouissante.',
  steps: [
    {
      number: '01',
      title: 'Candidature',
      text: 'Vous nous envoyez votre CV et les éléments utiles à l’étude de votre profil.',
      tone: 'mint',
      isVisible: true,
    },
    {
      number: '02',
      title: 'Premier échange',
      text: 'Un premier contact pour faire connaissance et comprendre vos attentes.',
      tone: 'mint',
      isVisible: true,
    },
    {
      number: '03',
      title: 'Entretien métier',
      text: 'Un échange avec l’équipe pour discuter de votre parcours et de vos compétences.',
      tone: 'mint',
      isVisible: true,
    },
    {
      number: '04',
      title: 'Cas pratique, si nécessaire',
      text: 'Pour certains postes, un exercice court et proportionné peut être proposé.',
      tone: 'mint',
      isVisible: true,
    },
    {
      number: '05',
      title: 'Décision et proposition',
      text: 'Nous revenons vers vous avec une réponse claire et rapide.',
      tone: 'mint',
      isVisible: true,
    },
  ],
};

export const spontaneousApplication = {
  eyebrow: 'Candidature spontanée',
  title: 'Construisons la prochaine étape de votre parcours.',
  text:
    'Vous ne trouvez pas d’offre qui correspond à votre profil ? Envoyez-nous votre candidature spontanée.',
  cta: 'Envoyer ma candidature',
  annotation: 'Great minds grow together.',
  formTitle: 'Votre candidature',
  statusIdle: 'Les champs marqués d’un astérisque sont obligatoires.',
  privacyHref: '/politique-confidentialite',
  privacyLabel: 'politique de confidentialité',
  submitLabel: 'Envoyer ma candidature',
  acceptedExtensions: ['pdf', 'doc', 'docx'],
  maxFileSize: 10 * 1024 * 1024,
  departments: careerDepartments.map((department) => department.label),
  experienceLevels: ['Débutant', '1 à 2 ans', '3 à 5 ans', '5 ans et plus'],
};

export const careersFaq = {
  eyebrow: 'FAQ',
  title: 'Vos questions, nos réponses.',
  questions: [
    {
      question: 'Acceptez-vous les candidatures spontanées ?',
      answer:
        'Oui. Vous pouvez nous transmettre votre profil même lorsqu’aucune offre ne correspond exactement à votre métier. Nous pourrons vous contacter lorsqu’un besoin pertinent se présente.',
    },
    {
      question: 'Recrutez-vous des stagiaires et alternants ?',
      answer:
        'Les opportunités de stage ou d’alternance dépendent des besoins et des capacités d’encadrement des équipes. Lorsqu’une opportunité est ouverte, elle est publiée dans cette page.',
    },
    {
      question: 'Quels profils recherchez-vous ?',
      answer:
        'Nous recherchons des profils curieux, responsables et engagés dans les métiers de la stratégie, de la création, de l’influence, de la production, du social media, du média, de la gestion de projet et de la technologie.',
    },
    {
      question: 'Puis-je postuler depuis une autre ville ?',
      answer:
        'La localisation et le mode de travail dépendent du poste. Chaque offre précise si la présence à Casablanca, un mode hybride ou une autre organisation est possible.',
    },
    {
      question: 'Comment mes données de candidature sont-elles utilisées ?',
      answer:
        'Les informations transmises sont utilisées uniquement pour étudier votre candidature et gérer le processus de recrutement, conformément à la politique de confidentialité de Lemon Mind.',
    },
  ],
};

export const careerPositions: CareerPosition[] = [];

export const isCareerPositionActive = (position: CareerPosition, now = new Date()) => {
  if (!position.isActive) {
    return false;
  }

  if (!position.validThrough) {
    return true;
  }

  const validThrough = new Date(position.validThrough);

  return Number.isNaN(validThrough.getTime()) || validThrough >= now;
};

export const getActiveCareerPositions = (now = new Date()) =>
  careerPositions
    .filter((position) => isCareerPositionActive(position, now))
    .sort((first, second) => first.displayOrder - second.displayOrder);

export const careersContact = {
  email: contact.email,
  emailHref: contact.emailHref,
};
