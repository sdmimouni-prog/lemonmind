import { teamMembers, type TeamMember } from './team';

export type InsightStatus = 'draft' | 'scheduled' | 'published' | 'archived';

export type InsightCategoryId =
  | 'influence'
  | 'ugc'
  | 'production'
  | 'social-media'
  | 'media-performance'
  | 'strategie-digitale'
  | 'tendances';

export type InsightArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategoryId;
  image: string;
  imageAlt: string;
  authorId: string | null;
  publishedAt: string | null;
  updatedAt: string | null;
  readingTime: string | null;
  featured: boolean;
  status: InsightStatus;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  relatedExpertiseUrls: string[];
  displayOrder: number;
};

export type InsightAuthorProfile = TeamMember & {
  authorUrl: string;
  bio: string;
  topics: string[];
};

export type InsightTakeaway = {
  id: string;
  title: string;
  text: string;
  icon: string;
  tone: 'blue' | 'mint' | 'pink' | 'violet' | 'yellow' | 'cream';
};

export type InsightTableColumn = {
  key: string;
  label: string;
};

export type InsightTable = {
  caption: string;
  columns: InsightTableColumn[];
  rows: Record<string, string>[];
};

export type InsightContentCallout = {
  title: string;
  items: string[];
  cta?: {
    label: string;
    href: string;
  };
};

export type InsightContentSection = {
  id: string;
  level: 2 | 3;
  title: string;
  tocTitle?: string;
  paragraphs?: string[];
  list?: string[];
  table?: InsightTable;
  highlight?: string;
  callout?: InsightContentCallout;
  links?: {
    label: string;
    href: string;
  }[];
};

export type InsightExpertQuote = {
  quote: string;
  authorId: string;
};

export type InsightFaqItem = {
  question: string;
  answer: string;
};

export type InsightDownloadableResource = {
  title: string;
  subtitle: string;
  text: string;
  url: string;
  cta: string;
  coverImage?: string;
  coverImageAlt?: string;
};

export type InsightDetailArticle = InsightArticle & {
  secondaryKeywords: string[];
  heroExcerpt?: string;
  coverImage: string;
  coverImageAlt: string;
  canonical: string;
  ogImage: string;
  introduction: string[];
  keyTakeaways: {
    title: string;
    text: string;
    factors: InsightTakeaway[];
  };
  sections: InsightContentSection[];
  tables: InsightTable[];
  expertQuote: InsightExpertQuote | null;
  faq: InsightFaqItem[];
  relatedArticleIds: string[];
  relatedExpertiseUrl: string;
  downloadableResource: InsightDownloadableResource | null;
  heroAnnotation: string;
  locationLabel: string;
  sidebarCta: {
    title: string;
    text: string;
    label: string;
    href: string;
    annotation: string;
  };
};

export type PremiumResource = {
  id: string;
  title: string;
  description: string;
  icon: string;
  tone: 'blue' | 'mint' | 'pink' | 'violet' | 'yellow' | 'cream';
  url: string | null;
  available: boolean;
  resourceCount: number | null;
};

export const insightsMeta = {
  title: 'Insights marketing digital au Maroc | Lemon Mind',
  description:
    'Découvrez les analyses Lemon Mind sur l’influence, l’UGC, le social media, la production, la publicité digitale et la stratégie marketing au Maroc.',
  canonical: '/insights',
  ogImage: '/assets/lemon/studio-meeting.webp',
};

export const insightCategories: { id: 'all' | InsightCategoryId; label: string; shortLabel: string; tone: string }[] = [
  { id: 'all', label: 'Tous', shortLabel: 'Tous', tone: 'ink' },
  { id: 'influence', label: 'Influence', shortLabel: 'Influence', tone: 'pink' },
  { id: 'ugc', label: 'UGC & Creator Content', shortLabel: 'UGC', tone: 'violet' },
  { id: 'production', label: 'Production', shortLabel: 'Production', tone: 'coral' },
  { id: 'social-media', label: 'Social Media', shortLabel: 'Social Media', tone: 'mint' },
  { id: 'media-performance', label: 'Media & Performance', shortLabel: 'Media', tone: 'yellow' },
  { id: 'strategie-digitale', label: 'Stratégie digitale', shortLabel: 'Stratégie', tone: 'blue' },
  { id: 'tendances', label: 'Tendances', shortLabel: 'Tendances', tone: 'lavender' },
];

export const insightsHero = {
  eyebrow: 'Insights',
  title: 'Analyses, tendances et idées pour faire grandir les marques.',
  titleLines: [
    { text: 'Analyses, tendances', highlight: false },
    { text: 'et idées pour faire', highlight: false },
    { text: 'grandir les marques.', highlight: true },
  ],
  text:
    'Influence, contenu, social media, média et stratégie : nos équipes partagent leurs analyses, leurs méthodes et les enseignements tirés du terrain pour vous aider à prendre de meilleures décisions.',
  cta: 'Découvrir nos derniers insights',
  image: '/assets/lemon/studio-meeting.webp',
  imageAlt: 'Atelier de réflexion Lemon Mind autour d’idées, de contenus et de stratégie digitale',
  annotation: 'Insights for a brighter tomorrow.',
  location: 'Lemon Mind — Casablanca, Maroc',
};

export const featuredInsight: InsightArticle = {
  id: 'influence-maroc-2026-featured',
  slug: '/insights/marketing-influence-maroc-2026-strategies-couts-kpi',
  title: 'Marketing d’influence au Maroc en 2026 : stratégies, coûts et indicateurs de performance',
  excerpt:
    'Comment choisir les bons créateurs, structurer le budget, cadrer les droits et mesurer l’impact réel d’une campagne d’influence au Maroc ? Découvrez les méthodes, critères et indicateurs essentiels.',
  category: 'influence',
  image: '/assets/lemon/influence-ai-beauty-creator.webp',
  imageAlt: 'Visuel éditorial illustrant une analyse sur le marketing d’influence au Maroc',
  authorId: null,
  publishedAt: null,
  updatedAt: null,
  readingTime: null,
  featured: true,
  status: 'draft',
  seoTitle: 'Marketing d’influence au Maroc en 2026 | Lemon Mind',
  metaDescription:
    'Méthode Lemon Mind pour structurer une campagne d’influence au Maroc : stratégie, budget, droits, contenus et indicateurs.',
  primaryKeyword: 'marketing influence Maroc 2026',
  relatedExpertiseUrls: ['/expertises/influence-marketing-maroc'],
  displayOrder: 0,
};

export const insightArticles: InsightArticle[] = [
  {
    id: 'cout-campagne-influence-maroc',
    slug: '/insights/combien-coute-campagne-influence-maroc',
    title: 'Combien coûte une campagne d’influence au Maroc en 2026 ?',
    excerpt:
      'Créateurs, livrables, exclusivité, production, droits et amplification : les facteurs qui déterminent réellement le budget d’une campagne d’influence.',
    category: 'influence',
    image: '/assets/lemon/influence-ai-beauty-creator.webp',
    imageAlt: 'Créatrice de contenu préparant une activation d’influence pour une marque au Maroc',
    authorId: 'amal-amazouz',
    publishedAt: '2026-09-07',
    updatedAt: '2026-09-07',
    readingTime: '7 min de lecture',
    featured: false,
    status: 'published',
    seoTitle: 'Combien coûte une campagne d’influence au Maroc en 2026 ?',
    metaDescription:
      'Découvrez les facteurs qui déterminent le prix d’une campagne d’influence au Maroc : créateurs, contenus, droits, production, amplification et mesure.',
    primaryKeyword: 'prix campagne influence Maroc',
    relatedExpertiseUrls: ['/expertises/influence-marketing-maroc'],
    displayOrder: 1,
  },
  {
    id: 'ugc-createur-ou-influenceur',
    slug: '/insights/ugc-maroc-createur-ugc-ou-influenceur',
    title: 'UGC au Maroc : créateur UGC ou influenceur, quelle différence ?',
    excerpt:
      'Audience, production, diffusion, droits et usages publicitaires : comprendre les différences pour choisir le dispositif adapté à votre marque.',
    category: 'ugc',
    image: '/assets/lemon/creative-presentation.webp',
    imageAlt: 'Visuel éditorial pour expliquer la différence entre créateur UGC et influenceur',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'UGC au Maroc : créateur UGC ou influenceur ?',
    metaDescription:
      'Comprendre la différence entre créateur UGC et influenceur au Maroc pour choisir le bon dispositif de contenu.',
    primaryKeyword: 'créateur UGC Maroc',
    relatedExpertiseUrls: ['/expertises/ugc-creator-content-maroc'],
    displayOrder: 2,
  },
  {
    id: 'strategie-social-media-maroc-2026',
    slug: '/insights/strategie-social-media-maroc-2026',
    title: 'Stratégie Social Media au Maroc en 2026 : plateformes, formats et calendrier',
    excerpt:
      'Comment sélectionner les bons réseaux, construire une ligne éditoriale et organiser la production de contenu selon les objectifs de la marque.',
    category: 'social-media',
    image: '/assets/lemon/influence-reel.webp',
    imageAlt: 'Visuel éditorial pour une stratégie social media au Maroc',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'Stratégie Social Media au Maroc en 2026',
    metaDescription:
      'Méthode pour structurer une stratégie social media au Maroc : plateformes, formats, calendrier et objectifs.',
    primaryKeyword: 'stratégie social media Maroc',
    relatedExpertiseUrls: ['/expertises/social-media-management-maroc'],
    displayOrder: 3,
  },
  {
    id: 'budget-meta-ads-maroc',
    slug: '/insights/budget-meta-ads-maroc',
    title: 'Quel budget prévoir pour Meta Ads au Maroc ?',
    excerpt:
      'Objectifs, ciblages, créations, durée et concurrence : les éléments à analyser avant de fixer un budget publicitaire sur Facebook et Instagram.',
    category: 'media-performance',
    image: '/assets/lemon/projects/uir-campaign.webp',
    imageAlt: 'Visuel éditorial pour analyser le budget Meta Ads au Maroc',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'Quel budget prévoir pour Meta Ads au Maroc ?',
    metaDescription:
      'Objectifs, ciblages, créations et durée : les éléments à analyser pour définir un budget Meta Ads au Maroc.',
    primaryKeyword: 'budget Meta Ads Maroc',
    relatedExpertiseUrls: ['/expertises/media-amplification-maroc'],
    displayOrder: 4,
  },
  {
    id: 'tiktok-ads-maroc-guide',
    slug: '/insights/tiktok-ads-maroc-guide',
    title: 'TikTok Ads au Maroc : guide pour lancer une campagne performante',
    excerpt:
      'Formats natifs, créateurs, Spark Ads, ciblage et mesure : les principes à connaître avant d’investir sur TikTok Ads.',
    category: 'media-performance',
    image: '/assets/lemon/influence-ai-food-creator.webp',
    imageAlt: 'Visuel éditorial pour un guide TikTok Ads au Maroc',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'TikTok Ads au Maroc : guide de campagne',
    metaDescription:
      'Les principes à connaître pour lancer une campagne TikTok Ads au Maroc : formats, créateurs, ciblage et mesure.',
    primaryKeyword: 'TikTok Ads Maroc',
    relatedExpertiseUrls: ['/expertises/media-amplification-maroc'],
    displayOrder: 5,
  },
  {
    id: 'production-video-maroc-couts-delais-formats',
    slug: '/insights/production-video-maroc-couts-delais-formats',
    title: 'Production vidéo au Maroc : coûts, délais et formats à prévoir',
    excerpt:
      'Préproduction, tournage, équipe, matériel, montage et déclinaisons : ce qui influence le budget et le planning d’une production vidéo.',
    category: 'production',
    image: '/assets/lemon/studio-meeting.webp',
    imageAlt: 'Visuel éditorial pour un article sur les coûts et délais de production vidéo',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'Production vidéo au Maroc : coûts, délais et formats',
    metaDescription:
      'Préproduction, tournage, matériel, montage et déclinaisons : comprendre les coûts et délais d’une production vidéo au Maroc.',
    primaryKeyword: 'prix production vidéo Maroc',
    relatedExpertiseUrls: ['/expertises/production-contenu-maroc'],
    displayOrder: 6,
  },
  {
    id: 'construire-strategie-digitale-maroc',
    slug: '/insights/construire-strategie-digitale-maroc',
    title: 'Comment construire une stratégie digitale au Maroc ?',
    excerpt:
      'Audit, audiences, positionnement, contenus, canaux, budgets et KPI : une méthode structurée pour transformer les objectifs en roadmap activable.',
    category: 'strategie-digitale',
    image: '/assets/lemon/production-experience.webp',
    imageAlt: 'Visuel éditorial pour construire une stratégie digitale au Maroc',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'Comment construire une stratégie digitale au Maroc ?',
    metaDescription:
      'Méthode structurée pour construire une stratégie digitale au Maroc : audit, audiences, canaux, budgets et KPI.',
    primaryKeyword: 'stratégie digitale Maroc',
    relatedExpertiseUrls: ['/expertises/strategie-conseil-digital-maroc'],
    displayOrder: 7,
  },
  {
    id: 'mesurer-roi-influence-ugc',
    slug: '/insights/mesurer-roi-influence-ugc',
    title: 'Comment mesurer le ROI d’une campagne d’influence et d’UGC ?',
    excerpt:
      'Portée, vues, engagement, clics, trafic, leads, conversions et valeur des contenus : choisir les indicateurs qui correspondent réellement à l’objectif.',
    category: 'influence',
    image: '/assets/lemon/influence-ai-food-creator.webp',
    imageAlt: 'Visuel éditorial pour mesurer le ROI d’une campagne influence et UGC',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'Mesurer le ROI d’une campagne d’influence et d’UGC',
    metaDescription:
      'Indicateurs pour mesurer le ROI d’une campagne d’influence et d’UGC : portée, vues, engagement, trafic, leads et conversions.',
    primaryKeyword: 'ROI campagne influence',
    relatedExpertiseUrls: ['/expertises/influence-marketing-maroc', '/expertises/ugc-creator-content-maroc'],
    displayOrder: 8,
  },
  {
    id: 'ia-creation-contenu-marques',
    slug: '/insights/ia-creation-contenu-marques',
    title: 'IA et création de contenu : opportunités, limites et bonnes pratiques pour les marques',
    excerpt:
      'Comment utiliser l’intelligence artificielle pour accélérer la recherche, la création et la déclinaison sans perdre l’identité, la qualité ni la crédibilité de la marque.',
    category: 'tendances',
    image: '/assets/lemon/projects/tbs-casablanca.webp',
    imageAlt: 'Visuel éditorial pour un article sur l’IA et la création de contenu',
    authorId: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
    status: 'draft',
    seoTitle: 'IA et création de contenu : bonnes pratiques pour les marques',
    metaDescription:
      'Comment utiliser l’IA dans la création de contenu sans perdre l’identité, la qualité ni la crédibilité de la marque.',
    primaryKeyword: 'IA création de contenu',
    relatedExpertiseUrls: ['/expertises/strategie-conseil-digital-maroc'],
    displayOrder: 9,
  },
];

export const latestInsights = insightArticles
  .slice()
  .sort((left, right) => left.displayOrder - right.displayOrder)
  .slice(0, 9);

export const publishedInsights = [featuredInsight, ...insightArticles].filter((article) => article.status === 'published');

export const premiumResources: PremiumResource[] = [
  {
    id: 'barometres',
    title: 'Baromètres',
    description: 'Chiffres, évolutions et tendances du marché.',
    icon: 'chart-box',
    tone: 'blue',
    url: null,
    available: false,
    resourceCount: null,
  },
  {
    id: 'guides-pratiques',
    title: 'Guides pratiques',
    description: 'Méthodes et conseils opérationnels.',
    icon: 'doc',
    tone: 'mint',
    url: null,
    available: false,
    resourceCount: null,
  },
  {
    id: 'checklists',
    title: 'Checklists',
    description: 'Des ressources courtes et directement actionnables.',
    icon: 'check',
    tone: 'pink',
    url: null,
    available: false,
    resourceCount: null,
  },
  {
    id: 'livres-blancs',
    title: 'Livres blancs',
    description: 'Analyses approfondies et recommandations.',
    icon: 'doc',
    tone: 'mint',
    url: null,
    available: false,
    resourceCount: null,
  },
  {
    id: 'benchmarks',
    title: 'Benchmarks',
    description: 'Comparatifs, repères et références sectorielles.',
    icon: 'search',
    tone: 'violet',
    url: null,
    available: false,
    resourceCount: null,
  },
  {
    id: 'etudes-cas',
    title: 'Études de cas',
    description: 'Retours d’expérience et enseignements concrets.',
    icon: 'target',
    tone: 'yellow',
    url: null,
    available: false,
    resourceCount: null,
  },
];

const expertIds = ['amal-amazouz', 'salah-eddine-mimouni', 'safwane-moustaine', 'rachid-oualla'] as const;

const authorContentById = new Map<
  string,
  {
    bio: string;
    topics: string[];
  }
>([
  [
    'amal-amazouz',
    {
      bio: 'COO & CDO chez Lemon Mind Digital, Amal Amazouz intervient sur les sujets de stratégie, d’influence et de contenus de marque au Maroc.',
      topics: ['Stratégie', 'Influence', 'Contenu'],
    },
  ],
  [
    'salah-eddine-mimouni',
    {
      bio: 'CEO & CTO de Lemon Mind Digital, Salah-Eddine Mimouni accompagne la vision digitale, la technologie et la structuration des dispositifs de croissance.',
      topics: ['Stratégie', 'Digital', 'Technologie'],
    },
  ],
  [
    'safwane-moustaine',
    {
      bio: 'Trafic Manager senior chez Lemon Mind Digital, Safwane MOUSTAINE travaille sur les sujets media, performance et pilotage des campagnes digitales.',
      topics: ['Media', 'Performance', 'Acquisition'],
    },
  ],
  [
    'rachid-oualla',
    {
      bio: 'Directeur artistique chez Lemon Mind Digital, Rachid OUALLA intervient sur la direction artistique, les concepts visuels et les contenus de marque.',
      topics: ['Création', 'Direction artistique', 'Contenu'],
    },
  ],
]);

const getAuthorTopics = (member: TeamMember) =>
  authorContentById.get(member.id)?.topics ||
  (member.category ? [member.category] : ['Marketing digital']);

export const allInsightAuthors: InsightAuthorProfile[] = teamMembers.map((member) => ({
  ...member,
  authorUrl: `/insights/auteurs/${member.id}`,
  bio:
    authorContentById.get(member.id)?.bio ||
    `${member.name} fait partie de l’équipe Lemon Mind Digital et contribue aux projets de ${member.category.toLowerCase()}.`,
  topics: getAuthorTopics(member),
}));

export const insightAuthorsById = new Map(allInsightAuthors.map((author) => [author.id, author]));

export const insightExperts = expertIds
  .map((id) => insightAuthorsById.get(id))
  .filter((member): member is InsightAuthorProfile => Boolean(member));

const influenceCostTable: InsightTable = {
  caption: 'Repères éditoriaux pour comparer les typologies de créateurs sans publier de fourchettes non validées.',
  columns: [
    { key: 'typology', label: 'Typologie' },
    { key: 'audienceSize', label: 'Taille d’audience approximative' },
    { key: 'budgetRange', label: 'Budget indicatif' },
    { key: 'strengths', label: 'Points forts' },
  ],
  rows: [
    {
      typology: 'Nano-influenceur',
      audienceSize: '1 000 à 10 000 abonnés',
      budgetRange: 'Selon le profil, les livrables et les droits',
      strengths: 'Proximité, crédibilité, engagement de niche',
    },
    {
      typology: 'Micro-influenceur',
      audienceSize: '10 000 à 100 000 abonnés',
      budgetRange: 'Selon le profil, les livrables et les droits',
      strengths: 'Communauté ciblée, rapport affinité / coût, activation locale',
    },
    {
      typology: 'Macro-influenceur',
      audienceSize: '100 000 à 1 million d’abonnés',
      budgetRange: 'Selon le profil, les livrables et les droits',
      strengths: 'Couverture, visibilité, capacité de diffusion',
    },
    {
      typology: 'Célébrité',
      audienceSize: 'Plus de 1 million d’abonnés ou forte notoriété publique',
      budgetRange: 'Selon le profil, les livrables et les droits',
      strengths: 'Notoriété massive, impact image, temps fort de campagne',
    },
  ],
};

const insightDetailContentById: Record<string, Omit<InsightDetailArticle, keyof InsightArticle>> = {
  'cout-campagne-influence-maroc': {
    secondaryKeywords: [
      'coût campagne influence Maroc',
      'tarif influenceur Maroc',
      'budget marketing d’influence',
      'prix micro-influenceur Maroc',
      'agence influence Maroc',
      'droits d’utilisation influenceur',
      'amplification contenu influenceur',
      'ROI campagne influence',
    ],
    heroExcerpt:
      'Créateurs, livrables, exclusivité, production, droits et amplification : découvrez les facteurs qui déterminent réellement le budget d’une campagne d’influence au Maroc et nos recommandations pour investir efficacement.',
    coverImage: '/assets/lemon/influence-ai-beauty-creator.webp',
    coverImageAlt: 'Créatrice de contenu filmant une activation d’influence avec ring light et produit de marque',
    canonical: '/insights/combien-coute-campagne-influence-maroc',
    ogImage: '/assets/lemon/influence-ai-beauty-creator.webp',
    introduction: [
      'Le budget d’une campagne d’influence dépend rarement d’un seul poste. Il combine la sélection des profils, les formats produits, les droits d’utilisation, la coordination, l’amplification média et la mesure des résultats.',
      'Cet article aide les marques à cadrer les bons paramètres avant de demander un devis ou de lancer une activation.',
    ],
    keyTakeaways: {
      title: 'À retenir',
      text:
        'Le coût d’une campagne d’influence au Maroc dépend du type de créateur, des contenus demandés, des droits d’utilisation, du niveau de production, de l’amplification média et des objectifs de performance.',
      factors: [
        {
          id: 'type-createur',
          title: 'Le type de créateur',
          text: 'Nano, micro, macro-influenceur ou célébrité.',
          icon: 'creator',
          tone: 'blue',
        },
        {
          id: 'livrables',
          title: 'Les livrables',
          text: 'Reels, Stories, TikTok, photos, présence événementielle ou contenus UGC.',
          icon: 'doc',
          tone: 'violet',
        },
        {
          id: 'droits',
          title: 'Les droits d’utilisation',
          text: 'Durée, plateformes, territoires, paid media et exclusivité.',
          icon: 'lock',
          tone: 'mint',
        },
        {
          id: 'production',
          title: 'La production',
          text: 'Concept, shooting, tournage, décor, montage et postproduction.',
          icon: 'clapper',
          tone: 'pink',
        },
        {
          id: 'amplification',
          title: 'L’amplification média',
          text: 'Partnership Ads, Spark Ads, whitelisting ou Paid Social.',
          icon: 'megaphone',
          tone: 'yellow',
        },
        {
          id: 'kpi',
          title: 'Les objectifs et KPI',
          text: 'Notoriété, engagement, trafic, leads, ventes ou drive-to-store.',
          icon: 'target',
          tone: 'cream',
        },
      ],
    },
    sections: [
      {
        id: 'facteurs-cout',
        level: 2,
        title: 'Les facteurs qui influencent le coût d’une campagne d’influence',
        tocTitle: 'Les facteurs qui influencent le coût',
        paragraphs: [
          'Le budget d’une campagne d’influence varie selon le profil des créateurs, le nombre de contenus, la complexité de la production, les droits négociés et le dispositif de diffusion. Chaque poste doit être défini avant le lancement afin de construire une enveloppe réaliste.',
        ],
      },
      {
        id: 'type-createur',
        level: 3,
        title: 'Le type de créateur',
        tocTitle: 'Nano, micro, macro-influenceurs et célébrités',
        paragraphs: [
          'Le tarif dépend notamment de la taille et de la qualité de l’audience, du taux d’engagement, du secteur, de la crédibilité du profil et de la complexité du contenu demandé.',
          'Une communauté plus importante ne garantit pas automatiquement de meilleurs résultats. Les nano et micro-créateurs peuvent être particulièrement pertinents pour les niches, les activations locales et les campagnes nécessitant une forte proximité avec l’audience.',
        ],
        table: influenceCostTable,
      },
      {
        id: 'livrables-formats',
        level: 3,
        title: 'Les livrables et formats',
        paragraphs: [
          'Le nombre et la nature des contenus changent fortement le périmètre de travail. Une Story, un Reel, une vidéo TikTok, une photo produit, une vidéo longue, une présence événementielle ou un contenu UGC ne demandent pas le même niveau de préparation, de tournage, de validation et de déclinaison.',
          'Le budget doit aussi intégrer l’exclusivité, le nombre d’allers-retours, les adaptations par plateforme et l’usage prévu dans le temps.',
        ],
        list: ['Reels', 'TikTok', 'Stories', 'Photos', 'Vidéos longues', 'Présence événementielle', 'Contenu UGC', 'Exclusivité', 'Nombre d’allers-retours'],
        links: [
          { label: 'Explorer l’UGC & Creator Content', href: '/expertises/ugc-creator-content-maroc' },
        ],
      },
      {
        id: 'droits-utilisation',
        level: 3,
        title: 'Les droits d’utilisation',
        paragraphs: [
          'Le contrat doit préciser la durée d’utilisation, le territoire, les plateformes, la publication organique, l’utilisation en publicité, l’amplification depuis le compte du créateur, l’exclusivité, le droit de modification et l’accès éventuel aux rushes.',
        ],
        highlight: 'La production d’un contenu ne transfère pas automatiquement tous les droits d’utilisation à la marque.',
        list: ['Durée', 'Territoire', 'Plateformes', 'Publication organique', 'Utilisation en publicité', 'Amplification depuis le compte du créateur', 'Exclusivité', 'Droit de modification', 'Accès aux rushes'],
      },
      {
        id: 'couts-production',
        level: 3,
        title: 'Les coûts de production',
        paragraphs: [
          'Le budget peut évoluer selon le concept créatif, le script, l’équipe de production, le shooting ou tournage, le matériel, le décor, le stylisme, le maquillage, les déplacements, le montage, le motion design et les déclinaisons demandées.',
        ],
        list: ['Concept créatif', 'Script', 'Équipe de production', 'Shooting ou tournage', 'Matériel', 'Décor', 'Stylisme', 'Maquillage', 'Déplacement', 'Montage', 'Motion design', 'Déclinaisons'],
      },
      {
        id: 'amplification-media',
        level: 3,
        title: 'L’amplification média',
        paragraphs: [
          'L’amplification permet de prolonger la portée d’un contenu créateur au-delà de son audience organique. Elle peut inclure les Partnership Ads, le whitelisting, les Spark Ads, le Paid Social, le retargeting, le géociblage et les tests créatifs.',
        ],
        list: ['Partnership Ads', 'Whitelisting', 'Spark Ads', 'Paid Social', 'Retargeting', 'Géociblage', 'Tests créatifs'],
        links: [
          { label: 'Voir l’expertise Media & Performance', href: '/expertises/media-amplification-maroc' },
          { label: 'Découvrir nos réalisations', href: '/realisations' },
        ],
      },
      {
        id: 'budget-campagne',
        level: 2,
        title: 'Comment établir le budget d’une campagne d’influence ?',
        tocTitle: 'Comment établir son budget',
        paragraphs: [
          'Pour construire un budget réaliste, il faut partir des objectifs, des audiences et des usages attendus. Le budget ne doit pas être réparti uniquement entre les créateurs : il doit aussi prévoir la production, les droits, la coordination, l’amplification et la mesure.',
        ],
        callout: {
          title: 'Notre checklist pour construire un budget maîtrisé',
          items: [
            'Définir des objectifs clairs et mesurables',
            'Identifier les audiences prioritaires',
            'Sélectionner les catégories de créateurs adaptées',
            'Définir les formats et le nombre de livrables',
            'Cadrer les droits d’utilisation et l’exclusivité',
            'Anticiper les coûts de production et de logistique',
            'Prévoir une enveloppe d’amplification média',
            'Définir les KPI et les outils de mesure',
            'Conserver une marge pour les ajustements',
          ],
          cta: {
            label: 'Parler de votre campagne',
            href: '/contact?projet=campagne-influence',
          },
        },
        links: [
          { label: 'Voir l’expertise Influence Marketing', href: '/expertises/influence-marketing-maroc' },
          { label: 'Contacter Lemon Mind', href: '/contact?projet=campagne-influence' },
        ],
      },
    ],
    tables: [influenceCostTable],
    expertQuote: null,
    faq: [
      {
        question: 'Quel budget minimum faut-il prévoir pour une campagne d’influence au Maroc ?',
        answer:
          'Il n’existe pas de budget minimum universel. L’enveloppe dépend du nombre de créateurs, des profils sélectionnés, des formats, des droits, de la production, de la durée de la campagne et de l’amplification prévue. Un cadrage préalable permet de construire un budget cohérent avec l’objectif.',
      },
      {
        question: 'Faut-il travailler uniquement avec des macro-influenceurs ?',
        answer:
          'Non. Les nano et micro-influenceurs peuvent générer une forte proximité, une meilleure crédibilité et un engagement pertinent sur des communautés ciblées. Les macro-influenceurs et célébrités sont davantage adaptés aux objectifs de couverture et de notoriété.',
      },
      {
        question: 'Les droits d’utilisation sont-ils systématiquement inclus ?',
        answer:
          'Non. Les droits doivent être négociés et formalisés dans le contrat. Celui-ci doit préciser la durée, les plateformes, les territoires, l’utilisation organique ou publicitaire, l’exclusivité et les possibilités de modification du contenu.',
      },
      {
        question: 'Combien de temps dure une campagne d’influence ?',
        answer:
          'La durée dépend du nombre de créateurs, des validations, de la production et du calendrier de diffusion. Une campagne comprend généralement une phase de cadrage, le casting, la contractualisation, la création des contenus, les validations, la publication et le reporting.',
      },
      {
        question: 'Comment mesurer le ROI d’une campagne d’influence ?',
        answer:
          'Les indicateurs doivent correspondre à l’objectif : portée, vues, taux de complétion, engagement, clics, trafic, leads, ventes, codes promotionnels ou coût par résultat. Il faut définir ces KPI avant le lancement et prévoir les outils de suivi adaptés.',
      },
    ],
    relatedArticleIds: ['ugc-createur-ou-influenceur', 'strategie-social-media-maroc-2026', 'mesurer-roi-influence-ugc'],
    relatedExpertiseUrl: '/expertises/influence-marketing-maroc',
    downloadableResource: null,
    heroAnnotation: 'Authentic creators. Stronger brands.',
    locationLabel: 'Lemon Mind — Casablanca, Maroc',
    sidebarCta: {
      title: 'Vous préparez une campagne d’influence au Maroc ?',
      text:
        'Nos experts vous accompagnent pour concevoir une stratégie, sélectionner les créateurs et produire les contenus adaptés à vos objectifs et à votre budget.',
      label: 'Parler de votre projet',
      href: '/contact?projet=campagne-influence',
      annotation: 'Ideas. People. Impact.',
    },
  },
};

const slugFromPath = (slug: string) => slug.replace(/^\/?insights\//, '').replace(/^\//, '');

export const detailedInsights: InsightDetailArticle[] = insightArticles
  .map((article) => {
    const detail = insightDetailContentById[article.id];

    if (!detail) {
      return null;
    }

    return {
      ...article,
      ...detail,
    };
  })
  .filter((article): article is InsightDetailArticle => Boolean(article));

export const publishedDetailedInsights = detailedInsights.filter((article) => article.status === 'published');

export const detailedInsightsBySlug = new Map(detailedInsights.map((article) => [slugFromPath(article.slug), article]));

export const getInsightDetailBySlug = (slug: string) => detailedInsightsBySlug.get(slugFromPath(slug));

export const getPublishedRelatedInsights = (article: InsightDetailArticle) =>
  article.relatedArticleIds
    .map((id) => publishedDetailedInsights.find((relatedArticle) => relatedArticle.id === id))
    .filter((relatedArticle): relatedArticle is InsightDetailArticle => Boolean(relatedArticle));

export const formatInsightDate = (date: string | null) => {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));
};
