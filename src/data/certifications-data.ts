export type CertificationProofStatus = 'group-attribution-unverified-logo';

export type CertificationScope = 'groupe';

export type CertificationTone = 'blue' | 'mint' | 'pink' | 'violet' | 'yellow' | 'coral';

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  description: string;
  category: string;
  scope: CertificationScope;
  attribution: string;
  logo: string | null;
  logoAlt: string;
  verificationUrl: string | null;
  proofStatus: CertificationProofStatus;
  tone: CertificationTone;
  relatedUrl: string;
  displayOrder: number;
};

export const certificationsMeta = {
  title: 'Certifications & partenaires digitaux | Lemon Mind',
  description:
    'Découvrez les certifications, accréditations et expertises digitales mobilisées par Lemon Mind et son groupe en média, data, CRM, SEO et social ads.',
  canonical: '/agence/certifications',
  ogImage: '/assets/lemon/studio-meeting.webp',
};

export const certificationsHero = {
  eyebrow: 'CERTIFICATIONS & PARTENAIRES',
  titleLines: [
    { text: 'Des compétences' },
    { text: 'vérifiées pour accompagner' },
    { text: 'vos ambitions digitales.', highlight: true },
  ],
  text:
    'Lemon Mind s’appuie sur des expertises certifiées, des partenaires technologiques reconnus et une culture de formation continue pour concevoir des dispositifs créatifs, performants et maîtrisés.',
  primaryCta: 'Parler de votre projet',
  secondaryCta: 'Découvrir nos expertises',
  image: '/assets/lemon/studio-meeting.webp',
  imageAlt: 'Réunion stratégique Lemon Mind autour de dispositifs digitaux certifiés',
  annotation: 'Skills. Partners. Growth',
  wallNote: 'Lemon Mind Digital certified for a brighter tomorrow',
  caption: 'Nos métiers. Plus de repères.',
  reassurance: [
    { label: 'Des standards reconnus', icon: 'check' },
    { label: 'Une équipe certifiée', icon: 'people' },
    { label: 'Des expertises à jour', icon: 'bars' },
    { label: 'Plus de valeur pour vos projets', icon: 'target' },
  ],
};

const groupAttribution = 'Des expertises certifiées mobilisées au sein de notre groupe.';

const certificationItems: CertificationItem[] = [
  {
    id: 'google-ads-certified',
    name: 'Google Ads Certified',
    issuer: 'Google Ads',
    description: 'Expertise en campagnes Search, Display, YouTube et Performance Max.',
    category: 'Publicité digitale',
    scope: 'groupe',
    attribution: groupAttribution,
    logo: null,
    logoAlt: 'Logo officiel Google Ads Certified à fournir',
    verificationUrl: null,
    proofStatus: 'group-attribution-unverified-logo',
    tone: 'blue',
    relatedUrl: '/expertises/media-amplification-maroc',
    displayOrder: 1,
  },
  {
    id: 'google-analytics-certified',
    name: 'Google Analytics Certified',
    issuer: 'Google Analytics',
    description: 'Analyse de données, mesure de performance et exploitation des insights.',
    category: 'Data & Analytics',
    scope: 'groupe',
    attribution: groupAttribution,
    logo: null,
    logoAlt: 'Logo officiel Google Analytics Certified à fournir',
    verificationUrl: null,
    proofStatus: 'group-attribution-unverified-logo',
    tone: 'mint',
    relatedUrl: '/expertises/media-amplification-maroc',
    displayOrder: 2,
  },
  {
    id: 'hubspot-certified',
    name: 'HubSpot Certified',
    issuer: 'HubSpot',
    description: 'Inbound marketing, CRM, automatisation et pilotage des parcours.',
    category: 'CRM & Automation',
    scope: 'groupe',
    attribution: groupAttribution,
    logo: null,
    logoAlt: 'Logo officiel HubSpot Certified à fournir',
    verificationUrl: null,
    proofStatus: 'group-attribution-unverified-logo',
    tone: 'pink',
    relatedUrl: '/expertises/strategie-conseil-digital-maroc',
    displayOrder: 3,
  },
  {
    id: 'iab-rich-media-certified',
    name: 'IAB Rich Media Certified',
    issuer: 'IAB Rich Media',
    description: 'Maîtrise des formats rich media, des standards digitaux et des bonnes pratiques.',
    category: 'Formats digitaux',
    scope: 'groupe',
    attribution: groupAttribution,
    logo: null,
    logoAlt: 'Logo officiel IAB Rich Media Certified à fournir',
    verificationUrl: null,
    proofStatus: 'group-attribution-unverified-logo',
    tone: 'violet',
    relatedUrl: '/expertises/media-amplification-maroc',
    displayOrder: 4,
  },
  {
    id: 'meta-blueprint-certified',
    name: 'Meta Blueprint Certified',
    issuer: 'Meta Blueprint',
    description: 'Publicité et activation sur Facebook, Instagram et l’écosystème Meta.',
    category: 'Social Ads',
    scope: 'groupe',
    attribution: groupAttribution,
    logo: null,
    logoAlt: 'Logo officiel Meta Blueprint Certified à fournir',
    verificationUrl: null,
    proofStatus: 'group-attribution-unverified-logo',
    tone: 'coral',
    relatedUrl: '/expertises/social-media-management-maroc',
    displayOrder: 5,
  },
  {
    id: 'semrush-certified',
    name: 'Semrush Certified',
    issuer: 'Semrush',
    description: 'SEO, stratégie de contenu, analyse concurrentielle et optimisation digitale.',
    category: 'SEO & Content',
    scope: 'groupe',
    attribution: groupAttribution,
    logo: null,
    logoAlt: 'Logo officiel Semrush Certified à fournir',
    verificationUrl: null,
    proofStatus: 'group-attribution-unverified-logo',
    tone: 'yellow',
    relatedUrl: '/expertises/strategie-conseil-digital-maroc',
    displayOrder: 6,
  },
];

export const certifications = certificationItems.sort((a, b) => a.displayOrder - b.displayOrder);

export const missingCertificationLogos = certifications
  .filter((certification) => !certification.logo)
  .map((certification) => certification.name);

export const certificationsIntro = {
  eyebrow: 'NOS CERTIFICATIONS & ACCRÉDITATIONS',
  titleLines: ['Des partenaires de confiance.', 'Des expertises certifiées.'],
  text:
    'Ces certifications témoignent de notre maîtrise des principales plateformes, de nos compétences techniques et de notre engagement envers les meilleures pratiques du digital.',
  attribution: 'Certifications & accréditations du groupe.',
  annotation: 'More knowledge. Better brands',
};

export const certificationBenefits = {
  eyebrow: 'CE QUE CELA CHANGE POUR NOS CLIENTS',
  title: 'Une certification ne doit pas être un simple badge.',
  text:
    'Ces certifications nous permettent d’offrir à nos clients un accompagnement plus précis, plus efficace et aligné avec les standards les plus exigeants du marché.',
  items: [
    {
      title: 'Maîtrise des plateformes',
      text: 'Une connaissance approfondie des outils et de leurs dernières évolutions.',
      icon: 'people',
      tone: 'yellow',
    },
    {
      title: 'Méthodes actualisées',
      text: 'Des pratiques certifiées, régulièrement mises à jour par nos équipes.',
      icon: 'stack',
      tone: 'violet',
    },
    {
      title: 'Meilleures pratiques',
      text: 'Des recommandations basées sur les standards officiels des partenaires.',
      icon: 'target',
      tone: 'mint',
    },
    {
      title: 'Pilotage plus rigoureux',
      text: 'Une gestion plus précise des campagnes, des données et des résultats.',
      icon: 'bars',
      tone: 'pink',
    },
  ],
};

export const expertiseDomains = {
  eyebrow: 'NOS DOMAINES DE MAÎTRISE',
  title: 'Des compétences clés pour des dispositifs plus performants.',
  text:
    'Nous mobilisons nos certifications et notre expertise pour couvrir l’ensemble de la chaîne de valeur digitale.',
  items: [
    { label: 'Stratégie média', icon: 'target', tone: 'violet' },
    { label: 'Social Ads', icon: 'people', tone: 'mint' },
    { label: 'Acquisition', icon: 'bars', tone: 'pink' },
    { label: 'Tracking et mesure', icon: 'stack', tone: 'yellow' },
    { label: 'CRM et automation', icon: 'doc', tone: 'blue' },
    { label: 'Brand safety', icon: 'lock', tone: 'coral' },
    { label: 'Création adaptée', icon: 'image', tone: 'mint' },
    { label: 'Reporting et optimisation', icon: 'chart-box', tone: 'violet' },
  ],
};

export const learningAndMonitoring = {
  eyebrow: 'FORMATION & VEILLE',
  titleLines: ['Les plateformes évoluent.', 'Nos compétences aussi.'],
  text:
    'Nous investissons en continu dans la formation de nos équipes, la veille technologique et l’exploration de nouveaux formats pour toujours garder une longueur d’avance.',
  annotation: 'Learning. Sharing. Growing together',
  images: [
    {
      src: '/assets/lemon/creative-presentation.webp',
      alt: 'Présentation créative et partage de compétences digitales',
    },
    {
      src: '/assets/lemon/studio-meeting.webp',
      alt: 'Atelier de veille et planification de dispositifs digitaux',
    },
    {
      src: '/assets/lemon/production-experience.webp',
      alt: 'Expérience de production et activation de marque',
    },
  ],
  practices: [
    { label: 'Formations internes', icon: 'doc' },
    { label: 'Workshops et ateliers', icon: 'people' },
    { label: 'Veille technologique', icon: 'clock' },
    { label: 'Certifications individuelles', icon: 'lock' },
    { label: 'Tests de nouveaux formats', icon: 'camera' },
    { label: 'Partage de connaissances', icon: 'stack' },
  ],
};

export const certificationsFinalCta = {
  eyebrow: 'CONFIEZ VOS PROJETS À DES EXPERTISES CERTIFIÉES',
  title: 'Des idées plus fortes pour un impact durable.',
  text:
    'Parlons de vos enjeux, de vos objectifs et de vos ambitions. Nous construirons ensemble le dispositif adapté.',
  primaryCta: 'Parler de votre projet',
  secondaryCta: 'Découvrir nos expertises',
  annotation: 'Better brands. Together.',
};
