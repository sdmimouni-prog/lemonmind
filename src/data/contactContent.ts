import { contact } from './homepage';

export const contactMeta = {
  title: 'Contactez Lemon Mind | Influence, production et création',
  description:
    'Présentez votre projet à Lemon Mind : campagne d’influence, production vidéo, UGC, social media ou accompagnement créatif au Maroc.',
  canonical: '/contact',
  ogImage: '/assets/lemon/studio-meeting.webp',
};

export const contactDetails = {
  ...contact,
  phoneDisplay: contact.phone,
  emailDisplay: contact.email,
  addressDisplay: contact.locationLabel,
  cityDisplay: contact.city,
  hoursDisplay: contact.businessHours,
};

export const contactHero = {
  eyebrow: 'Parlons de votre projet',
  title: 'Une idée, un lancement ou une campagne en tête ? Construisons la suite ensemble.',
  highlight: 'ensemble.',
  text:
    'Présentez-nous votre marque, vos objectifs et vos contraintes. L’équipe Lemon Mind vous répondra avec une première orientation adaptée à votre projet.',
  stats: [
    { value: '350+', label: 'créateurs activés' },
    { value: 'Des idées', label: 'qui performent' },
    { value: 'Une équipe', label: 'disponible et réactive' },
  ],
  annotation: 'Good ideas. Real impact.',
  note: 'Let’s create what’s next.',
  image: '/assets/lemon/studio-meeting.webp',
};

export const contactForm = {
  title: 'Dites-nous en plus sur votre projet',
  submitLabel: 'Envoyer mon brief',
  confidentiality: 'Vos informations sont confidentielles et ne seront jamais partagées.',
  briefLabel: 'Ajouter un brief optionnel',
  briefHelp: 'PDF, PPT, DOC, ZIP - max 10 Mo',
  projectTypes: [
    'Campagne d’influence',
    'Production vidéo',
    'Production UGC',
    'Social Media',
    'Media & Amplification',
    'Lancement de produit',
    'Activation événementielle',
    'Accompagnement global',
    'Autre besoin',
  ],
  objectives: [
    'Notoriété',
    'Engagement',
    'Acquisition',
    'Lancement',
    'Production de contenus',
    'Activation locale',
    'Stratégie globale',
  ],
  budgets: [
    'À définir ensemble',
    'Budget de lancement',
    'Budget campagne',
    'Dispositif complet',
  ],
  dates: [
    'Dès que possible',
    'Ce mois-ci',
    'Le mois prochain',
    'Date à préciser',
  ],
};

export const contactNeeds = {
  eyebrow: 'Choisissez votre besoin',
  title: 'Une expertise pour chaque ambition.',
  helper:
    'Vous avez déjà une idée précise ? Sélectionnez votre besoin pour pré-remplir le formulaire et gagner du temps.',
  cards: [
    {
      title: 'Influence',
      text: 'Trouver les bons créateurs et piloter une campagne de bout en bout.',
      tag: 'Campagne d’influence',
      value: 'Campagne d’influence',
      tone: 'violet',
      image: '/assets/lemon/influence-ai-beauty-creator.webp',
      alt: 'Créatrice Lemon Mind pour une campagne d’influence',
    },
    {
      title: 'Production',
      text: 'Concevoir et produire des vidéos, shootings, UGC et formats social-first.',
      tag: 'Production vidéo',
      value: 'Production vidéo',
      tone: 'mint',
      image: '/assets/lemon/studio-meeting.webp',
      alt: 'Équipe Lemon Mind en préparation de production',
    },
    {
      title: 'Accompagnement global',
      text: 'Construire un dispositif combinant stratégie, création, diffusion et reporting.',
      tag: 'Stratégie 360°',
      value: 'Accompagnement global',
      tone: 'peach',
      image: '/assets/lemon/creative-presentation.webp',
      alt: 'Préparation stratégique pour une campagne Lemon Mind',
    },
  ],
};

export const contactAfterSubmit = {
  eyebrow: 'Après l’envoi de votre demande',
  title: 'Votre demande ne disparaît pas dans une boîte mail.',
  text:
    'Nous nous engageons à revenir vers vous rapidement avec une première orientation claire.',
  annotation: 'Same team. Bigger ideas.',
  steps: [
    {
      number: '01',
      icon: 'target',
      title: 'Nous analysons votre besoin',
      text: 'Nous étudions votre brief et vos objectifs.',
    },
    {
      number: '02',
      icon: 'phone',
      title: 'Nous vous contactons pour préciser le brief',
      text: 'Un membre de l’équipe vous recontacte rapidement.',
    },
    {
      number: '03',
      icon: 'doc',
      title: 'Nous construisons une première recommandation',
      text: 'Nous vous proposons une approche adaptée à votre projet.',
    },
  ],
};

export const contactDirect = {
  eyebrow: 'Contact direct',
  title: 'Vous préférez échanger directement ?',
  text:
    'Notre équipe est à votre écoute du lundi au vendredi et accompagne des marques à Casablanca et partout au Maroc.',
  annotation: 'Here for what’s next.',
  items: [
    { icon: 'phone', title: contact.phone, label: 'Appelez-nous', href: contact.phoneHref },
    { icon: 'mail', title: contact.email, label: 'Envoyez un email', href: contact.emailHref },
    { icon: 'pin', title: contact.locationLabel, label: 'Notre agence', href: contact.mapsHref },
    { icon: 'clock', title: contact.businessHours, label: 'Nos horaires', href: contact.bookingHref },
  ],
  actions: [
    { label: 'Réserver un échange', href: contact.bookingHref, icon: 'calendar', tone: 'yellow' },
    { label: 'Nous écrire sur WhatsApp', href: contact.whatsappHref, icon: 'phone', tone: 'dark' },
    { label: 'Envoyer un email', href: contact.emailHref, icon: 'mail', tone: 'dark' },
  ],
};

export const contactFaq = {
  eyebrow: 'FAQ',
  title: 'Vos questions, nos réponses.',
  questions: [
    {
      question: 'Sous quel délai répondez-vous ?',
      answer:
        'Nous revenons vers vous rapidement après réception de votre demande afin de cadrer le besoin et préparer une première orientation claire.',
    },
    {
      question: 'Quel budget minimum faut-il prévoir ?',
      answer:
        'Le budget dépend du format, du nombre de contenus, des talents, de la production et de l’amplification. Nous le définissons après analyse du brief, sans annoncer de montant standard hors contexte.',
    },
    {
      question: 'Travaillez-vous avec des marques hors de Casablanca ?',
      answer:
        'Oui. Lemon Mind accompagne des marques à Casablanca et partout au Maroc, avec une organisation adaptée au terrain, aux créateurs et aux canaux de diffusion.',
    },
    {
      question: 'Peut-on vous transmettre un brief confidentiel ?',
      answer:
        'Oui. Vous pouvez partager les éléments nécessaires au cadrage. Les informations transmises sont traitées de manière confidentielle et ne sont pas partagées hors de l’équipe projet.',
    },
    {
      question: 'Pouvez-vous intervenir uniquement sur une partie du projet ?',
      answer:
        'Oui. Nous pouvons intervenir sur une étape précise, comme la stratégie, le casting, la production, le social media, l’amplification ou le reporting.',
    },
  ],
};

export const contactFinalCta = {
  eyebrow: 'Envie d’aller plus loin ?',
  title: 'Discutons de ce que l’on peut créer ensemble.',
  text:
    'Une marque, une campagne ou une simple question ? L’équipe Lemon Mind est là pour vous répondre.',
  primaryCta: 'Parler de votre projet',
  secondaryCta: 'Découvrir nos réalisations',
  annotation: 'Good ideas. Brighter brands.',
};

export const acceptedBriefExtensions = ['pdf', 'ppt', 'pptx', 'doc', 'docx', 'zip'];
export const maxBriefSize = 10 * 1024 * 1024;
