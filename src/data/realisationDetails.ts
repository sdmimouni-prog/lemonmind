import { featuredCollaborations, getReferenceById } from './references';

export type RealisationDetailStatus = 'published' | 'private-preview';

export type RealisationDetailTone =
  | 'yellow'
  | 'violet'
  | 'mint'
  | 'coral'
  | 'blue'
  | 'cream'
  | 'pink';

export type RealisationMetric = {
  value: string;
  label: string;
  icon: string;
  validated: boolean;
};

export type RealisationGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  kind?: 'image' | 'video';
  poster?: string;
  layout?: 'large' | 'wide' | 'tall' | 'small';
};

export type RealisationServiceCard = {
  title: string;
  text: string;
  icon: string;
  tone: RealisationDetailTone;
  image: string;
};

export type RealisationDetail = {
  slug: string;
  status: RealisationDetailStatus;
  client: string;
  sector: string;
  mission: string;
  attribution: 'Réalisation du groupe' | 'Lemon Mind';
  market?: string;
  year?: string;
  title: string;
  listingTitle: string;
  intro: string;
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  ogImage: string;
  hero: {
    eyebrow: string;
    title: string;
    highlightedText?: string;
    image: string;
    imageAlt: string;
    phoneImage?: string;
    phoneAlt?: string;
    cardImage?: string;
    cardAlt?: string;
    handPrimary: string;
    handSecondary: string;
  };
  meta: Array<{ label: string; value: string }>;
  metrics?: RealisationMetric[];
  challenge?: {
    title: string;
    paragraphs: string[];
  };
  response?: {
    title: string;
    intro: string;
    bullets: string[];
  };
  services?: RealisationServiceCard[];
  gallery?: {
    eyebrow: string;
    title: string;
    items: RealisationGalleryItem[];
  };
  creativeIdea?: {
    eyebrow: string;
    title: string;
    text: string;
    hand: string;
    pillars: Array<{
      number: string;
      title: string;
      text: string;
      tone: RealisationDetailTone;
    }>;
  };
  timeline?: {
    eyebrow: string;
    title: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  results?: {
    eyebrow: string;
    title: string;
    text: string;
    learnings: string[];
    metrics?: RealisationMetric[];
    chartLabel?: string;
    quote?: {
      text: string;
      author: string;
      role: string;
      validated: boolean;
    };
  };
  faq?: Array<{
    question: string;
    answer: string;
  }>;
};

type PublicCaseConfig = {
  referenceId: string;
  slug: string;
  title: string;
  listingTitle: string;
  intro: string;
  heroImage: string;
  phoneImage?: string;
  cardImage?: string;
  handPrimary: string;
  handSecondary: string;
  challengeTitle: string;
  challengeParagraphs: string[];
  responseTitle: string;
  responseIntro: string;
  serviceImages: string[];
  galleryItems: RealisationGalleryItem[];
};

const serviceCatalog: Record<string, Omit<RealisationServiceCard, 'image'>> = {
  Strategie: {
    title: 'Stratégie & cadrage',
    text: 'Clarification de l’objectif, des audiences et des leviers à activer.',
    icon: 'bulb',
    tone: 'yellow',
  },
  'Media & Amplification': {
    title: 'Média & amplification',
    text: 'Diffusion et amplification des contenus sur les canaux adaptés.',
    icon: 'megaphone',
    tone: 'blue',
  },
  'Social Media': {
    title: 'Social media',
    text: 'Adaptation des messages et formats aux usages des plateformes sociales.',
    icon: 'heart',
    tone: 'pink',
  },
  Production: {
    title: 'Production de contenu',
    text: 'Préparation et production de contenus visuels adaptés à la campagne.',
    icon: 'camera',
    tone: 'mint',
  },
  Activation: {
    title: 'Activation',
    text: 'Mise en cohérence des points de contact et des temps forts de campagne.',
    icon: 'target',
    tone: 'coral',
  },
  'Influence Marketing': {
    title: 'Influence marketing',
    text: 'Activation de créateurs et de formats sociaux alignés avec la marque.',
    icon: 'people',
    tone: 'violet',
  },
  'Production de contenu': {
    title: 'Production de contenu',
    text: 'Création de contenus photo, vidéo ou social-first selon le dispositif.',
    icon: 'video',
    tone: 'mint',
  },
  UGC: {
    title: 'UGC & creators',
    text: 'Formats incarnés et contenus pensés pour les usages sociaux.',
    icon: 'creator',
    tone: 'violet',
  },
  'Drive-to-store': {
    title: 'Drive-to-store',
    text: 'Dispositifs conçus pour rapprocher la communication des points de vente.',
    icon: 'pin',
    tone: 'cream',
  },
};

const defaultTimeline = [
  {
    title: 'Cadrer',
    text: 'Objectifs, cible, contexte et rôle de chaque levier.',
  },
  {
    title: 'Caster',
    text: 'Sélection des profils, canaux ou formats selon le besoin.',
  },
  {
    title: 'Produire',
    text: 'Préparation, contenus, déclinaisons et validations.',
  },
  {
    title: 'Diffuser',
    text: 'Mise en ligne, amplification et coordination des points de contact.',
  },
  {
    title: 'Mesurer',
    text: 'Suivi, synthèse et enseignements exploitables.',
  },
];

const defaultFaq = [
  {
    question: 'Les chiffres de performance sont-ils disponibles ?',
    answer:
      'Nous affichons uniquement les indicateurs validés. Lorsqu’ils ne sont pas publiés, le bloc de résultats chiffrés reste masqué.',
  },
  {
    question: 'Cette réalisation est-elle attribuée à Lemon Mind ?',
    answer:
      'Lorsque l’attribution Lemon Mind n’est pas confirmée, la page indique clairement “Réalisation du groupe”.',
  },
  {
    question: 'Pouvez-vous construire un dispositif similaire ?',
    answer:
      'Oui. Nous partons de vos objectifs, de vos contraintes et de vos canaux pour concevoir un dispositif adapté à votre marque.',
  },
  {
    question: 'Peut-on intégrer des vidéos dans la galerie ?',
    answer:
      'Oui. Le template accepte les images et les vidéos dès qu’elles sont disponibles et validées.',
  },
];

const featuredTagsByReference = new Map(
  featuredCollaborations.map((card) => [card.referenceId, card.tags]),
);

const getRequiredReference = (id: string) => {
  const reference = getReferenceById(id);

  if (!reference) {
    throw new Error(`Reference introuvable pour la réalisation: ${id}`);
  }

  return reference;
};

const normalizeTagKey = (tag: string) => {
  if (tag === 'Stratégie') {
    return 'Strategie';
  }

  return tag;
};

const buildServices = (referenceId: string, images: string[]) => {
  const tags = featuredTagsByReference.get(referenceId) || [];

  return tags.map((tag, index) => {
    const service = serviceCatalog[normalizeTagKey(tag)] || serviceCatalog.Strategie;
    return {
      ...service,
      image: images[index % images.length],
    };
  });
};

const buildPublicCase = (config: PublicCaseConfig): RealisationDetail => {
  const reference = getRequiredReference(config.referenceId);
  const attribution = reference.attribution === 'lemon-mind' ? 'Lemon Mind' : 'Réalisation du groupe';

  return {
    slug: config.slug,
    status: 'published',
    client: reference.name,
    sector: reference.sourceSector,
    mission: reference.mission,
    attribution,
    market: 'Maroc',
    title: config.title,
    listingTitle: config.listingTitle,
    intro: config.intro,
    seoTitle: `${config.listingTitle} | Réalisation Lemon Mind`,
    metaDescription: `${config.intro} Page de réalisation sans résultats non validés.`,
    canonical: `/realisations/${config.slug}`,
    ogImage: config.heroImage,
    hero: {
      eyebrow: `${reference.sourceSector} / ${reference.mission}`,
      title: config.title,
      highlightedText: reference.name,
      image: config.heroImage,
      imageAlt: `Visuel de réalisation du groupe pour ${reference.name}`,
      phoneImage: config.phoneImage,
      phoneAlt: config.phoneImage ? `Format social associé à ${reference.name}` : undefined,
      cardImage: config.cardImage,
      cardAlt: config.cardImage ? `Visuel complémentaire associé à ${reference.name}` : undefined,
      handPrimary: config.handPrimary,
      handSecondary: config.handSecondary,
    },
    meta: [
      { label: 'Client', value: reference.name },
      { label: 'Mission', value: reference.mission },
      { label: 'Attribution', value: attribution },
      { label: 'Marché', value: 'Maroc' },
    ],
    challenge: {
      title: config.challengeTitle,
      paragraphs: config.challengeParagraphs,
    },
    response: {
      title: config.responseTitle,
      intro: config.responseIntro,
      bullets: [
        'Structurer le rôle de chaque levier avant la production.',
        'Adapter les contenus aux usages et aux canaux de diffusion.',
        'Préserver une lecture claire des résultats sans publier de données non validées.',
      ],
    },
    services: buildServices(config.referenceId, config.serviceImages),
    gallery: {
      eyebrow: 'La campagne en images',
      title: 'Des contenus conçus pour être compris, vus et mémorisés.',
      items: config.galleryItems,
    },
    creativeIdea: {
      eyebrow: 'L’idée créative',
      title: 'Une direction claire, portée par les bons formats.',
      text:
        'Le détail créatif complet reste soumis aux validations client. Cette page présente uniquement les axes méthodologiques visibles dans le dispositif.',
      hand: 'Ideas that stay useful.',
      pillars: [
        {
          number: '01',
          title: 'Clarifier',
          text: 'Rendre le message lisible et directement exploitable.',
          tone: 'violet',
        },
        {
          number: '02',
          title: 'Adapter',
          text: 'Décliner les contenus selon les formats et les usages.',
          tone: 'coral',
        },
        {
          number: '03',
          title: 'Amplifier',
          text: 'Donner plus de portée aux contenus validés.',
          tone: 'mint',
        },
      ],
    },
    timeline: {
      eyebrow: 'Le déroulé de la campagne',
      title: 'Un processus maîtrisé, de l’idée aux enseignements.',
      steps: defaultTimeline,
    },
    results: {
      eyebrow: 'Résultats et enseignements',
      title: 'Des résultats à documenter après validation.',
      text:
        'Aucun chiffre de performance public n’est affiché pour cette réalisation. Les enseignements restent centrés sur la méthode et les assets disponibles.',
      learnings: [
        'Séparer clairement les informations validées des éléments à compléter.',
        'Prévoir des formats réutilisables pour faciliter la déclinaison multi-canal.',
        'Conserver une base visuelle et éditoriale cohérente pour les futurs cas clients.',
      ],
    },
    faq: defaultFaq,
  };
};

export const publishedRealisationDetails: RealisationDetail[] = [
  buildPublicCase({
    referenceId: 'uir',
    slug: 'uir-acquisition-leads',
    title: 'UIR : dispositif d’acquisition et de visibilité digitale.',
    listingTitle: 'UIR : acquisition et visibilité digitale',
    intro:
      'Une réalisation du groupe autour des enjeux d’admissions et de génération de leads, présentée sans indicateurs non validés.',
    heroImage: '/assets/lemon/projects/uir-campaign.webp',
    phoneImage: '/assets/lemon/creative-presentation.webp',
    cardImage: '/assets/lemon/projects/tbs-casablanca.webp',
    handPrimary: 'Good ideas. Clear paths.',
    handSecondary: 'From attention to action.',
    challengeTitle: 'Accompagner un enjeu d’admission dans un secteur exigeant.',
    challengeParagraphs: [
      'Le secteur éducation demande une communication claire, rassurante et orientée vers la décision.',
      'Les informations détaillées du brief et les résultats chiffrés ne sont pas publiés ; le template conserve donc une présentation volontairement factuelle.',
    ],
    responseTitle: 'Un dispositif pensé pour rendre le parcours plus lisible.',
    responseIntro:
      'Les équipes du groupe ont été mobilisées autour d’une mission d’admissions et de génération de leads.',
    serviceImages: [
      '/assets/lemon/projects/uir-campaign.webp',
      '/assets/lemon/studio-meeting.webp',
      '/assets/lemon/creative-presentation.webp',
    ],
    galleryItems: [
      {
        src: '/assets/lemon/projects/uir-campaign.webp',
        alt: 'Visuel de campagne UIR',
        caption: 'Visuel de campagne référencé',
        layout: 'large',
      },
      {
        src: '/assets/lemon/studio-meeting.webp',
        alt: 'Atelier de cadrage stratégique',
        caption: 'Cadrage et préparation',
        layout: 'wide',
      },
      {
        src: '/assets/lemon/creative-presentation.webp',
        alt: 'Format vertical de présentation créative',
        caption: 'Déclinaisons social-first',
        layout: 'tall',
      },
      {
        src: '/assets/lemon/projects/tbs-casablanca.webp',
        alt: 'Visuel education complémentaire',
        caption: 'Univers éducation',
        layout: 'small',
      },
    ],
  }),
  buildPublicCase({
    referenceId: 'amana',
    slug: 'amana-campagne-360-dooh',
    title: 'Amana : campagne 360° et activation DOOH.',
    listingTitle: 'Amana : campagne 360° & DOOH',
    intro:
      'Une réalisation du groupe autour d’un dispositif 360° et DOOH, documentée uniquement avec les éléments disponibles dans le projet.',
    heroImage: '/assets/lemon/projects/amana-social.webp',
    phoneImage: '/assets/lemon/projects/tramway-summer.webp',
    cardImage: '/assets/lemon/projects/amana-tram.webp',
    handPrimary: 'Visible ideas. Real routes.',
    handSecondary: 'From city to screen.',
    challengeTitle: 'Faire vivre une campagne sur plusieurs points de contact.',
    challengeParagraphs: [
      'Une campagne 360° doit rester cohérente entre les supports, les formats et les moments d’exposition.',
      'Les résultats détaillés ne sont pas publics ; le template évite donc tout chiffre non confirmé.',
    ],
    responseTitle: 'Une réponse construite autour de la cohérence de diffusion.',
    responseIntro:
      'Le dispositif référencé combine activation, production et amplification média selon les informations disponibles.',
    serviceImages: [
      '/assets/lemon/projects/amana-social.webp',
      '/assets/lemon/projects/amana-tram.webp',
      '/assets/lemon/studio-meeting.webp',
    ],
    galleryItems: [
      {
        src: '/assets/lemon/projects/amana-social.webp',
        alt: 'Visuel social Amana',
        caption: 'Déclinaison social media',
        layout: 'large',
      },
      {
        src: '/assets/lemon/projects/amana-tram.webp',
        alt: 'Habillage tramway Amana',
        caption: 'Activation DOOH',
        layout: 'wide',
      },
      {
        src: '/assets/lemon/projects/tramway-summer.webp',
        alt: 'Format vertical tramway',
        caption: 'Format mobilité',
        layout: 'tall',
      },
      {
        src: '/assets/lemon/studio-meeting.webp',
        alt: 'Coulisses de préparation Lemon Mind',
        caption: 'Préparation créative',
        layout: 'small',
      },
    ],
  }),
  buildPublicCase({
    referenceId: 'don-simon',
    slug: 'don-simon-social-media-influence',
    title: 'Don Simon : social media, influence et contenus food.',
    listingTitle: 'Don Simon : social media & influence',
    intro:
      'Une réalisation du groupe pour une marque food & beverage, avec un périmètre social media et influence présenté sans résultats non validés.',
    heroImage: '/assets/lemon/projects/don-simon.webp',
    phoneImage: '/assets/lemon/influence-ai-food-creator.webp',
    cardImage: '/assets/lemon/studio-meeting.webp',
    handPrimary: 'Taste. Content. Impact.',
    handSecondary: 'Content made to travel.',
    challengeTitle: 'Créer des contenus social-first dans un univers food.',
    challengeParagraphs: [
      'Les marques food & beverage doivent rendre leurs contenus immédiatement identifiables, désirables et adaptés aux usages mobiles.',
      'Les résultats et les données de diffusion ne sont pas publiés ; aucun indicateur chiffré n’est donc affiché en production.',
    ],
    responseTitle: 'Une approche combinant influence, social media et production.',
    responseIntro:
      'La mission référencée mobilise des expertises de social media, d’influence marketing et de production de contenu.',
    serviceImages: [
      '/assets/lemon/projects/don-simon.webp',
      '/assets/lemon/influence-ai-food-creator.webp',
      '/assets/lemon/creative-presentation.webp',
    ],
    galleryItems: [
      {
        src: '/assets/lemon/projects/don-simon.webp',
        alt: 'Contenu food and beverage Don Simon',
        caption: 'Visuel produit référencé',
        layout: 'large',
      },
      {
        src: '/assets/lemon/influence-ai-food-creator.webp',
        alt: 'Créateur food en format vertical',
        caption: 'Format créateur',
        layout: 'tall',
      },
      {
        src: '/assets/lemon/creative-presentation.webp',
        alt: 'Présentation de contenu social-first',
        caption: 'Déclinaison social-first',
        layout: 'wide',
      },
      {
        src: '/assets/lemon/studio-meeting.webp',
        alt: 'Préparation de contenus en studio',
        caption: 'Préparation de campagne',
        layout: 'small',
      },
    ],
  }),
  buildPublicCase({
    referenceId: 'moul-pounj',
    slug: 'moul-pounj-strategie-media-conversion',
    title: 'Moul Pounj : stratégie média et conversion.',
    listingTitle: 'Moul Pounj : média & conversion',
    intro:
      'Une réalisation du groupe autour d’un enjeu média et conversion, sans publication de chiffres de performance non confirmés.',
    heroImage: '/assets/lemon/projects/moul-pounj-world-cup.webp',
    phoneImage: '/assets/lemon/influence-reel.webp',
    cardImage: '/assets/lemon/production-experience.webp',
    handPrimary: 'Right moment. Right format.',
    handSecondary: 'From media to action.',
    challengeTitle: 'Relier visibilité, contexte commercial et intention.',
    challengeParagraphs: [
      'Les dispositifs de conversion nécessitent un cadrage précis des messages, des formats et des audiences.',
      'Les éléments chiffrés ne sont pas affichés tant qu’ils ne sont pas validés pour une publication publique.',
    ],
    responseTitle: 'Une activation structurée autour des leviers média.',
    responseIntro:
      'La mission référencée porte sur la stratégie média et la conversion, avec des formats adaptés aux usages digitaux.',
    serviceImages: [
      '/assets/lemon/projects/moul-pounj-world-cup.webp',
      '/assets/lemon/studio-meeting.webp',
      '/assets/lemon/production-experience.webp',
    ],
    galleryItems: [
      {
        src: '/assets/lemon/projects/moul-pounj-world-cup.webp',
        alt: 'Visuel Moul Pounj Coupe du Monde',
        caption: 'Visuel de campagne référencé',
        layout: 'large',
      },
      {
        src: '/assets/lemon/production-experience.webp',
        alt: 'Coulisses de production de contenu',
        caption: 'Production et adaptation',
        layout: 'tall',
      },
      {
        src: '/assets/lemon/studio-meeting.webp',
        alt: 'Réunion de préparation stratégique',
        caption: 'Cadrage média',
        layout: 'wide',
      },
      {
        src: '/assets/lemon/influence-reel.webp',
        alt: 'Format social vertical',
        caption: 'Format social',
        layout: 'small',
      },
    ],
  }),
];

const privatePreviewDetails: RealisationDetail[] = [
  {
    slug: 'maison-nura-preview',
    status: 'private-preview',
    client: 'Maison Nura',
    sector: 'Beauté',
    mission: 'Prévisualisation fictive',
    attribution: 'Réalisation du groupe',
    market: 'Maroc',
    year: 'Prévisualisation',
    title: 'Maison Nura : lancement social-first.',
    listingTitle: 'Maison Nura : prévisualisation privée',
    intro:
      'Prévisualisation privée du template avec un client et des chiffres fictifs issus de la maquette. Cette page est noindex et exclue de la production.',
    seoTitle: 'Prévisualisation privée Maison Nura | Lemon Mind',
    metaDescription:
      'Prévisualisation privée non publiée du template de détail réalisation Lemon Mind.',
    canonical: '/realisations/maison-nura-preview',
    ogImage: '/assets/lemon/influence-ai-beauty-creator.webp',
    hero: {
      eyebrow: 'Prévisualisation privée / Beauté',
      title: 'Maison Nura : lancement d’une gamme skincare social-first.',
      highlightedText: 'social-first',
      image: '/assets/lemon/influence-ai-beauty-creator.webp',
      imageAlt: 'Prévisualisation fictive beauté pour le template réalisation',
      phoneImage: '/assets/lemon/influence-reel.webp',
      phoneAlt: 'Prévisualisation fictive de format social',
      cardImage: '/assets/lemon/production-experience.webp',
      cardAlt: 'Prévisualisation fictive de production skincare',
      handPrimary: 'Good content. Real impact.',
      handSecondary: 'From idea to impact.',
    },
    meta: [
      { label: 'Client', value: 'Maison Nura - fictif' },
      { label: 'Mission', value: 'Influence, UGC, production, amplification' },
      { label: 'Attribution', value: 'Prévisualisation privée' },
      { label: 'Statut', value: 'Exclu de la production' },
    ],
    metrics: [
      { value: '3,2 M', label: 'impressions fictives', icon: 'image', validated: false },
      { value: '148 K', label: 'vues vidéo fictives', icon: 'video', validated: false },
      { value: '+285%', label: 'engagement fictif', icon: 'heart', validated: false },
      { value: '18 K', label: 'clics fictifs', icon: 'target', validated: false },
    ],
    challenge: {
      title: 'Révéler une nouvelle gamme dans un marché très concurrentiel.',
      paragraphs: [
        'Ce contenu reprend volontairement le contexte fictif de la maquette pour prévisualiser le template.',
        'Il ne doit pas être utilisé comme cas client public.',
      ],
    },
    response: {
      title: 'Une stratégie d’influence complète, du contenu à la conversion.',
      intro:
        'Les étapes ci-dessous servent uniquement à valider la composition de la page et ne constituent pas une référence publiée.',
      bullets: [
        'Créateurs alignés avec les valeurs de la marque fictive.',
        'Contenus social-first adaptés à plusieurs plateformes.',
        'Amplification fictive pour tester le rendu des blocs KPI.',
      ],
    },
    services: [
      {
        title: 'Stratégie d’influence',
        text: 'Audit, positionnement et sélection des bons créateurs.',
        icon: 'people',
        tone: 'violet',
        image: '/assets/lemon/influence-ai-beauty-creator.webp',
      },
      {
        title: 'Production UGC',
        text: 'Reels, tutoriels et contenus authentiques pour preview.',
        icon: 'camera',
        tone: 'mint',
        image: '/assets/lemon/influence-reel.webp',
      },
      {
        title: 'Amplification média',
        text: 'Bloc fictif réservé à la prévisualisation privée.',
        icon: 'megaphone',
        tone: 'coral',
        image: '/assets/lemon/studio-meeting.webp',
      },
    ],
    gallery: {
      eyebrow: 'La campagne en images',
      title: 'Prévisualisation de galerie asymétrique.',
      items: [
        {
          src: '/assets/lemon/influence-ai-beauty-creator.webp',
          alt: 'Prévisualisation beauté fictive',
          caption: 'Visuel principal de prévisualisation',
          layout: 'large',
        },
        {
          src: '/assets/lemon/production-experience.webp',
          alt: 'Prévisualisation production fictive',
          caption: 'Production fictive',
          layout: 'tall',
        },
        {
          src: '/assets/lemon/studio-meeting.webp',
          alt: 'Prévisualisation de cadrage',
          caption: 'Cadrage fictif',
          layout: 'wide',
        },
        {
          src: '/assets/lemon/influence-reel.webp',
          alt: 'Prévisualisation format vertical',
          caption: 'Format social fictif',
          layout: 'small',
        },
      ],
    },
    creativeIdea: {
      eyebrow: 'L’idée créative',
      title: 'Une peau vraie, dans la vraie vie.',
      text: 'Bloc fictif réservé à la prévisualisation privée du template.',
      hand: 'Real beauty. Real people.',
      pillars: [
        { number: '01', title: 'Créer la désirabilité', text: 'Preview de pilier créatif.', tone: 'violet' },
        { number: '02', title: 'Montrer l’usage réel', text: 'Preview de pilier créatif.', tone: 'coral' },
        { number: '03', title: 'Transformer l’attention', text: 'Preview de pilier créatif.', tone: 'mint' },
      ],
    },
    timeline: {
      eyebrow: 'La campagne en cadrage',
      title: 'Un processus maîtrisé, de l’idée aux résultats.',
      steps: defaultTimeline,
    },
    results: {
      eyebrow: 'Résultats',
      title: 'Résultats fictifs réservés à la prévisualisation.',
      text:
        'Les chiffres de la maquette sont fictifs. Aucun témoignage client n’est intégré.',
      learnings: [
        'Tester le rendu du bandeau KPI.',
        'Valider la hiérarchie du template.',
        'Contrôler les états responsive avant contenu réel.',
      ],
      metrics: [
        { value: '3,2 M', label: 'impressions fictives', icon: 'image', validated: false },
        { value: '148 K', label: 'vues vidéo fictives', icon: 'video', validated: false },
        { value: '+285%', label: 'engagement fictif', icon: 'heart', validated: false },
        { value: '18 K', label: 'clics fictifs', icon: 'target', validated: false },
      ],
      chartLabel: 'Graphique fictif - prévisualisation',
    },
    faq: defaultFaq,
  },
];

export const getAllRealisationDetails = () => [
  ...publishedRealisationDetails,
  ...(import.meta.env.DEV || import.meta.env.PUBLIC_ENABLE_REALISATION_PRIVATE_PREVIEWS === 'true'
    ? privatePreviewDetails
    : []),
];

export const getPublishedRealisationDetails = () => publishedRealisationDetails;

export const getRealisationDetailBySlug = (slug: string) =>
  getAllRealisationDetails().find((realisation) => realisation.slug === slug);

export const getRelatedRealisations = (current: RealisationDetail, limit = 3) => {
  const currentTags = new Set(featuredTagsByReference.get(
    featuredCollaborations.find((card) => getReferenceById(card.referenceId)?.name === current.client)?.referenceId || '',
  ) || []);

  return publishedRealisationDetails
    .filter((item) => item.slug !== current.slug)
    .map((item) => {
      const reference = featuredCollaborations.find((card) => getReferenceById(card.referenceId)?.name === item.client);
      const tags = reference ? featuredTagsByReference.get(reference.referenceId) || [] : [];
      const score = tags.filter((tag) => currentTags.has(tag)).length + (item.sector === current.sector ? 1 : 0);

      return { item, score };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ item }) => item);
};
