export const strategyContactHref = '/contact?projet=strategie-conseil';
export const strategyAuditHref = '/contact?projet=audit-digital';

export const strategyConsultingMeta = {
  title: 'Agence de stratégie digitale au Maroc | Lemon Mind',
  description:
    'Lemon Mind accompagne les marques au Maroc en audit digital, positionnement, stratégie de contenu, roadmap, acquisition et pilotage de la performance.',
  canonical: '/expertises/strategie-conseil-digital-maroc',
  ogImage: '/assets/lemon/studio-meeting.webp',
};

export const strategyRelatedLinks = [
  { label: 'stratégie social media', href: '/expertises/social-media-management-maroc' },
  { label: 'stratégie d’influence', href: '/expertises/influence-marketing-maroc' },
  { label: 'production UGC', href: '/expertises/ugc-creator-content-maroc' },
  { label: 'production de contenu', href: '/expertises/production-contenu-maroc' },
  { label: 'stratégie média et acquisition', href: '/expertises/media-amplification-maroc' },
  { label: 'découvrir nos réalisations', href: '/realisations' },
  { label: 'parler à un consultant', href: strategyContactHref },
];

export const strategyHero = {
  eyebrow: 'Stratégie & Conseil Digital',
  title: 'Agence de stratégie digitale et conseil marketing au Maroc',
  lead: ['Clarifier la direction.', 'Prioriser les bons leviers.', 'Transformer la stratégie en actions mesurables.'],
  paragraphs: [
    'Lemon Mind accompagne les marques dans la définition et le déploiement de leur stratégie digitale au Maroc.',
    'Audit, positionnement, audiences, contenus, social media, influence, média et mesure de la performance : nous construisons une feuille de route claire, réaliste et adaptée à vos objectifs business.',
  ],
  primaryCta: 'Parler de votre stratégie',
  secondaryCta: 'Découvrir notre approche',
  primaryHref: strategyContactHref,
  secondaryHref: '#notre-approche',
  tags: ['Audit', 'Positionnement', 'Roadmap', 'Performance'],
  annotation: 'Ideas. Strategy. Impact.',
  sideNote: 'From insights to impact.',
  mainImage: '/assets/lemon/studio-meeting.webp',
  supportImage: '/assets/lemon/projects/uir-campaign.webp',
  alt: 'Session stratégique Lemon Mind avec équipe, contenus et feuille de route de campagne',
  levers: [
    { label: 'Stratégie', icon: 'target', tone: 'pink' },
    { label: 'Contenus', icon: 'doc', tone: 'violet' },
    { label: 'Média', icon: 'megaphone', tone: 'yellow' },
    { label: 'Croissance', icon: 'bars', tone: 'mint' },
  ],
};

export const strategyDefinition = {
  eyebrow: 'Une direction avant des actions',
  title: 'Qu’est-ce qu’une stratégie digitale, concrètement ?',
  paragraphs: [
    'Une stratégie digitale définit la manière dont une entreprise utilise les canaux, les contenus, la technologie et la data pour atteindre ses objectifs.',
    'Elle précise les audiences prioritaires, le positionnement, les messages, les plateformes, les investissements, les responsabilités et les indicateurs de performance.',
    'Son rôle n’est pas d’ajouter de nouveaux leviers, mais de déterminer quelles actions doivent être menées, dans quel ordre, avec quels moyens et pour quels résultats.',
  ],
  image: '/assets/lemon/projects/tbs-casablanca.webp',
  alt: 'Carnet de stratégie et notes de cadrage pour structurer une feuille de route digitale',
  strongLine: 'Une bonne stratégie ne multiplie pas les actions. Elle facilite les bonnes décisions.',
  principles: [
    {
      number: '01',
      title: 'Aligner',
      text: 'Relier les actions digitales aux objectifs de la marque, du marketing et du développement commercial.',
      icon: 'bulb',
      tone: 'violet',
    },
    {
      number: '02',
      title: 'Prioriser',
      text: 'Concentrer les ressources sur les audiences, les contenus et les canaux qui peuvent réellement créer de la valeur.',
      icon: 'motion',
      tone: 'mint',
    },
    {
      number: '03',
      title: 'Mesurer',
      text: 'Définir dès le départ les indicateurs qui permettront d’évaluer les résultats et d’améliorer les décisions.',
      icon: 'bars',
      tone: 'yellow',
    },
  ],
};

export const strategyChallenges = {
  eyebrow: 'Vos enjeux',
  title: 'Une stratégie utile commence toujours par le bon problème.',
  text:
    'Lemon Mind intervient lorsque la marque doit clarifier sa direction, structurer ses actions ou repenser l’utilisation de ses ressources digitales.',
  items: [
    {
      title: 'Lancer une marque ou une offre',
      text: 'Définir le positionnement, les audiences, les messages, les contenus et le plan de lancement.',
      icon: 'paperplane',
      tone: 'pink',
    },
    {
      title: 'Repenser une présence digitale',
      text: 'Identifier les canaux réellement utiles et construire une présence cohérente entre le site, les réseaux sociaux, l’influence et le média.',
      icon: 'target',
      tone: 'mint',
    },
    {
      title: 'Structurer une stratégie de contenu',
      text: 'Organiser les territoires éditoriaux, les formats, les temps forts et le rythme de production.',
      icon: 'doc',
      tone: 'violet',
    },
    {
      title: 'Améliorer l’acquisition',
      text: 'Analyser les parcours, les campagnes, les landing pages et la qualité des leads afin d’identifier les leviers d’amélioration.',
      icon: 'bars',
      tone: 'yellow',
    },
    {
      title: 'Aligner plusieurs équipes ou prestataires',
      text: 'Clarifier les rôles, les processus, les objectifs et les indicateurs pour éviter les actions isolées ou contradictoires.',
      icon: 'people',
      tone: 'coral',
    },
    {
      title: 'Construire une roadmap annuelle',
      text: 'Hiérarchiser les projets, les campagnes, les ressources et les budgets selon leur impact et leur faisabilité.',
      icon: 'calendar',
      tone: 'blue',
    },
  ],
};

export const digitalAudit = {
  eyebrow: 'Audit stratégique',
  title: 'Nous commençons par comprendre avant de recommander.',
  paragraphs: [
    'Avant de définir une nouvelle stratégie, nous analysons l’existant : ce qui fonctionne, ce qui limite la performance, ce qui manque et ce qui doit être priorisé.',
    'L’objectif n’est pas de produire une accumulation de constats, mais de transformer l’audit en décisions concrètes.',
  ],
  dimensions: [
    {
      title: 'Marque, offre et positionnement',
      text: 'Proposition de valeur, différenciation, promesse, messages, cohérence de marque et perception souhaitée.',
      icon: 'heart',
      tone: 'pink',
    },
    {
      title: 'Audiences et parcours',
      text: 'Segments prioritaires, besoins, freins, comportements, étapes de décision et principaux points de contact.',
      icon: 'people',
      tone: 'violet',
    },
    {
      title: 'Contenus et présence sociale',
      text: 'Ligne éditoriale, formats, qualité créative, régularité, engagement et cohérence entre les plateformes.',
      icon: 'doc',
      tone: 'yellow',
    },
    {
      title: 'Acquisition et activation',
      text: 'Paid Media, influence, UGC, SEO, landing pages, conversion, retargeting et répartition des investissements.',
      icon: 'megaphone',
      tone: 'mint',
    },
    {
      title: 'Data, organisation et pilotage',
      text: 'Outils, qualité des données, KPI, reporting, gouvernance, rôles et processus de validation.',
      icon: 'chart-box',
      tone: 'blue',
    },
  ],
  checklistEyebrow: 'Nous identifions',
  checklist: [
    'Forces à préserver',
    'Faiblesses à corriger',
    'Opportunités à exploiter',
    'Risques à anticiper',
    'Quick wins',
    'Priorités à moyen terme',
  ],
  cta: 'Demander un audit digital',
  href: strategyAuditHref,
};

export const strategyFramework = {
  eyebrow: 'Notre cadre stratégique',
  title: 'Une stratégie construite autour de cinq décisions essentielles.',
  text: 'Audience, positionnement, contenus, canaux et mesure : chaque décision doit renforcer les autres.',
  decisions: [
    {
      number: '01',
      title: 'À qui parlons-nous ?',
      text: 'Définition des audiences prioritaires, de leurs besoins, de leurs motivations, de leurs objections et de leurs parcours de décision.',
      icon: 'people',
      tone: 'pink',
    },
    {
      number: '02',
      title: 'Quelle place voulons-nous occuper ?',
      text: 'Clarification du positionnement, de la proposition de valeur, de la personnalité de marque et des messages différenciants.',
      icon: 'target',
      tone: 'mint',
    },
    {
      number: '03',
      title: 'Que devons-nous raconter ?',
      text: 'Construction des territoires de contenu, des sujets, des formats, des preuves et des prises de parole.',
      icon: 'doc',
      tone: 'violet',
    },
    {
      number: '04',
      title: 'Où devons-nous investir ?',
      text: 'Sélection des plateformes et leviers selon leur rôle : notoriété, considération, engagement, trafic, leads, vente ou fidélisation.',
      icon: 'bars',
      tone: 'mint',
    },
    {
      number: '05',
      title: 'Comment saurons-nous que cela fonctionne ?',
      text: 'Définition des objectifs, KPI, sources de données, tableaux de bord, rythmes d’analyse et règles d’optimisation.',
      icon: 'chart-box',
      tone: 'coral',
    },
  ],
};

export const consultingServices = {
  eyebrow: 'Nos missions de conseil',
  title: 'Des expertises complémentaires pour une stratégie activable.',
  text: 'Du diagnostic à la roadmap, nous produisons des livrables conçus pour être réellement utilisés par vos équipes.',
  missions: [
    {
      title: 'Audit et recommandations stratégiques',
      text: 'Analyse de la présence digitale, de la concurrence, des audiences, des contenus, des canaux et de la performance.',
      icon: 'search',
      tone: 'violet',
      detailsTitle: 'Livrables',
      details: ['Rapport d’audit', 'Synthèse des constats', 'Matrice de priorisation', 'Quick wins', 'Recommandations à moyen terme'],
    },
    {
      title: 'Positionnement et plateforme de communication',
      text: 'Définition de la proposition de valeur, des messages, de la tonalité et du territoire de communication.',
      icon: 'heart',
      tone: 'pink',
      detailsTitle: 'Livrables',
      details: ['Positionnement', 'Promesse', 'Piliers de communication', 'Messages par audience', 'Tonalité de marque'],
    },
    {
      title: 'Stratégie de contenu et social media',
      text: 'Construction d’un système éditorial cohérent capable d’alimenter durablement les plateformes de la marque.',
      icon: 'calendar',
      tone: 'mint',
      detailsTitle: 'Livrables',
      details: ['Territoires éditoriaux', 'Piliers de contenu', 'Formats recommandés', 'Rôle de chaque plateforme', 'Calendrier des temps forts'],
    },
    {
      title: 'Stratégie d’influence et Creator Content',
      text: 'Définition du rôle des influenceurs, ambassadeurs et créateurs UGC dans le dispositif global.',
      icon: 'creator',
      tone: 'yellow',
      detailsTitle: 'Livrables',
      details: ['Objectifs de l’influence', 'Profils prioritaires', 'Types de collaborations', 'Formats', 'Processus de casting', 'Droits d’utilisation'],
    },
    {
      title: 'Stratégie média et acquisition',
      text: 'Organisation des plateformes, audiences, budgets et campagnes selon les objectifs commerciaux.',
      icon: 'megaphone',
      tone: 'yellow',
      detailsTitle: 'Livrables',
      details: ['Architecture des campagnes', 'Répartition budgétaire', 'Parcours de conversion', 'Plan de test', 'KPI et optimisation'],
    },
    {
      title: 'Roadmap et gouvernance digitale',
      text: 'Transformation des recommandations en un plan d’action priorisé et attribué aux bonnes équipes.',
      icon: 'stack',
      tone: 'blue',
      detailsTitle: 'Livrables',
      details: ['Roadmap 90 jours', 'Plan annuel', 'Priorités trimestrielles', 'Répartition des responsabilités', 'Dashboard de suivi'],
    },
    {
      title: 'Workshops et accompagnement des équipes',
      text: 'Sessions de travail pour aligner les équipes, accélérer les décisions et renforcer les compétences internes.',
      icon: 'people',
      tone: 'mint',
      detailsTitle: 'Formats',
      details: ['Atelier de positionnement', 'Workshop audiences', 'Atelier stratégie de contenu', 'Workshop influence et UGC', 'Formation aux KPI', 'Session de priorisation'],
    },
  ],
};

export const strategyMethod = {
  eyebrow: 'De la réflexion à l’action',
  title: 'Pas de recommandation générique. Un plan clair, priorisé et activable.',
  text: 'Une recommandation n’est utile que si elle peut être comprise, attribuée, financée, exécutée et mesurée.',
  annotation: 'Lemon Mind',
  steps: [
    {
      number: '01',
      title: 'Diagnostiquer',
      text: 'Analyser la marque, ses objectifs, ses audiences, sa présence digitale, ses résultats et son organisation.',
      tone: 'violet',
    },
    {
      number: '02',
      title: 'Clarifier',
      text: 'Reformuler les enjeux, identifier les décisions prioritaires et définir le rôle attendu du digital.',
      tone: 'pink',
    },
    {
      number: '03',
      title: 'Construire',
      text: 'Définir le positionnement, les audiences, les messages, les contenus, les canaux et les indicateurs.',
      tone: 'mint',
    },
    {
      number: '04',
      title: 'Prioriser',
      text: 'Classer les actions selon leur impact, leur urgence, leur coût, leur complexité et les ressources disponibles.',
      tone: 'yellow',
    },
    {
      number: '05',
      title: 'Accompagner',
      text: 'Aider les équipes à lancer la roadmap, suivre les résultats et ajuster les décisions.',
      tone: 'blue',
    },
  ],
};

export const strategyCaseStudies = {
  eyebrow: 'La stratégie en action',
  title: 'La qualité d’une stratégie se mesure à ce qu’elle permet de réaliser.',
  text:
    'Une stratégie ne doit pas rester dans une présentation. Elle doit permettre de produire de meilleurs contenus, de mieux coordonner les équipes et d’investir plus intelligemment.',
  cta: 'Découvrir nos réalisations',
  href: '/realisations',
  projects: [
    {
      sector: 'Beauté',
      title: 'Recommandation et stratégie digitale',
      tags: ['Positionnement', 'Contenu', 'Média'],
      image: '/assets/lemon/production-experience.webp',
      alt: 'Activation beauté et recommandations digitales pour une marque',
      href: '/realisations',
    },
    {
      sector: 'Food & Beverage',
      title: 'Stratégie de contenu et acquisition',
      tags: ['Contenu', 'Social Ads', 'ROI'],
      image: '/assets/lemon/projects/don-simon.webp',
      alt: 'Campagne Food and Beverage structurée autour du contenu et de l’acquisition',
      href: '/realisations',
    },
    {
      sector: 'Retail / E-commerce',
      title: 'Roadmap et activation multicanale',
      tags: ['Audit', 'Roadmap', 'Croissance'],
      image: '/assets/lemon/projects/uir-campaign.webp',
      alt: 'Pilotage retail et activation multicanale pour améliorer la croissance',
      href: '/realisations',
    },
  ],
  lessonsEyebrow: 'Ce que nos missions confirment',
  lessons: [
    'Plus de canaux ne signifie pas nécessairement plus d’impact.',
    'Une création performante commence par un objectif clair.',
    'Les KPI doivent être définis avant la production, pas après la campagne.',
  ],
};

export const strategyFaq = {
  eyebrow: 'Questions fréquentes',
  title: 'Vos questions sur la stratégie digitale.',
  questions: [
    {
      question: 'Qu’est-ce qu’une agence de stratégie digitale ?',
      answer:
        'Une agence de stratégie digitale aide une entreprise à définir ses objectifs, ses audiences, son positionnement, ses contenus, ses canaux et ses indicateurs de performance. Elle transforme ces décisions en une feuille de route destinée à orienter les campagnes, les équipes et les investissements.',
    },
    {
      question: 'Quelle différence entre un audit digital et une stratégie digitale ?',
      answer:
        'L’audit analyse la situation existante et identifie les forces, les faiblesses et les opportunités. La stratégie définit ensuite la direction à suivre, les priorités, les actions, les responsabilités, les budgets et les résultats attendus.',
    },
    {
      question: 'Que comprend une mission de conseil en stratégie digitale ?',
      answer:
        'Le périmètre peut inclure l’audit, l’analyse des audiences, le positionnement, la stratégie de contenu, le social media, l’influence, l’UGC, le média, l’acquisition, la définition des KPI et la construction d’une roadmap.',
    },
    {
      question: 'Combien coûte une stratégie digitale au Maroc ?',
      answer:
        'Le coût dépend de la taille de l’entreprise, du nombre de marques ou de marchés concernés, de la profondeur de l’audit, du nombre d’entretiens, des ateliers nécessaires et des livrables attendus. Lemon Mind établit une proposition après un premier cadrage du besoin.',
    },
    {
      question: 'Combien de temps faut-il pour construire une stratégie digitale ?',
      answer:
        'La durée dépend du périmètre, de la disponibilité des données et du nombre de parties prenantes. Une mission comprend généralement une phase d’analyse, des ateliers, la formulation de la stratégie, la construction de la roadmap et la restitution aux équipes.',
    },
    {
      question: 'Lemon Mind peut-elle aussi exécuter la stratégie ?',
      answer:
        'Oui. Lemon Mind peut intervenir uniquement comme conseil ou accompagner ensuite l’activation : création de contenu, social media management, influence, production UGC, média et reporting.',
    },
    {
      question: 'Comment mesurez-vous les résultats d’une stratégie digitale ?',
      answer:
        'Les indicateurs dépendent des objectifs définis : notoriété, engagement, trafic, qualité des leads, conversion, ventes, fidélisation ou efficacité opérationnelle. Chaque KPI doit être associé à une source de données, un responsable et une fréquence de suivi.',
    },
    {
      question: 'Travaillez-vous avec des entreprises en dehors de Casablanca ?',
      answer:
        'Lemon Mind peut accompagner des marques et organisations dans différentes villes du Maroc. Les ateliers et réunions peuvent être organisés en présentiel ou à distance selon le projet.',
    },
  ],
};

export const strategyFinalCta = {
  eyebrow: 'Parlons de votre prochaine étape',
  title: 'Une stratégie claire avant d’investir davantage.',
  text:
    'Présentez-nous votre situation, vos objectifs et vos principales questions. Nous vous aiderons à identifier les décisions prioritaires et à construire une roadmap adaptée à votre marque.',
  primaryCta: 'Parler à un consultant',
  secondaryCta: 'Demander un audit digital',
  primaryHref: strategyContactHref,
  secondaryHref: strategyAuditHref,
  annotation: 'Better strategy. Brighter brands.',
};
