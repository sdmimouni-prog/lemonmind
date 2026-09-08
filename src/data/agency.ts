import { clientLogos } from './homepage';

type AgencyCertification = {
  name: string;
  src: string;
};

export const agencyMeta = {
  title: 'Lemon Mind | Agence d’influence et de contenu au Maroc',
  description:
    'Découvrez Lemon Mind, agence créative au Maroc spécialisée en influence, production de contenu, UGC, social media, média et stratégie digitale.',
  canonical: '/agence',
  ogImage: '/assets/lemon/studio-meeting.webp',
};

export const agencyLinks = {
  expertises: '/nos-expertises',
  contact: '/contact',
  team: '/agence/equipe',
  references: '/agence/references',
  certifications: '/agence/certifications',
  ecosystem: '/nos-expertises#ecosysteme',
  realisations: '/realisations',
};

export const agencyHero = {
  eyebrow: 'Notre agence',
  title: 'Des idées qui marquent. Des contenus qui engagent. Des stratégies qui font grandir.',
  titleLines: [
    { text: 'Des idées qui marquent.' },
    { text: 'Des contenus qui engagent.' },
    { text: 'Des stratégies qui font grandir.', highlight: true },
  ],
  text:
    'Lemon Mind est une agence créative marocaine spécialisée en influence, production de contenu, social media, UGC, amplification média et conseil digital.',
  primaryCta: 'Découvrir nos expertises',
  secondaryCta: 'Parler de votre projet',
  image: '/assets/lemon/studio-meeting.webp',
  imageAlt: 'Equipe Lemon Mind en reunion creative autour de contenus et campagnes digitales',
  annotation: 'Good ideas. Better brands.',
  caption: 'Lemon Mind — Digital Agency — Casablanca',
  reassurance: ['Expertise intégrée', 'Équipe créative', 'Basée à Casablanca', 'Projets au Maroc'],
};

export const agencyPurpose = {
  eyebrow: 'Notre raison d’être',
  title: 'Nous ne créons pas simplement des campagnes. Nous construisons des connexions durables entre les marques et leurs audiences.',
  paragraphs: [
    'Dans un monde où l’attention est plus rare que jamais, nous aidons les marques à créer du sens, à raconter des histoires qui résonnent et à bâtir des relations authentiques avec leurs communautés.',
    'Notre mission : transformer la créativité et la culture digitale en leviers de croissance concrets pour nos clients au Maroc et au-delà.',
  ],
  signature: 'Ideas. Content. Growth.',
  image: '/assets/lemon/production-experience.webp',
  imageAlt: 'Activation de marque et experience client pilotee par Lemon Mind au Maroc',
  caption: 'Ancrés au Maroc. Connectés au monde.',
};

export const agencyDifferentiators = {
  eyebrow: 'Ce qui nous différencie',
  title: 'Une approche complète, une exécution sans compromis.',
  text: 'Des compétences complémentaires pour transformer vos objectifs en réalisations concrètes.',
  annotation: 'Same people. Different perspectives.',
  items: [
    {
      title: 'Créativité utile',
      text: 'Des idées qui servent vos objectifs business, pas seulement de beaux contenus.',
      icon: 'bulb',
      tone: 'yellow',
    },
    {
      title: 'Culture des plateformes',
      text: 'Une parfaite maîtrise des codes, des formats et des tendances de chaque plateforme sociale et média.',
      icon: 'people',
      tone: 'violet',
    },
    {
      title: 'Exécution intégrée',
      text: 'Stratégie, création, production, diffusion et optimisation réunies au sein d’une même équipe.',
      icon: 'paperplane',
      tone: 'mint',
    },
    {
      title: 'Résultats mesurables',
      text: 'Des campagnes pensées pour la performance, avec des indicateurs clairs et un suivi rigoureux.',
      icon: 'bars',
      tone: 'pink',
    },
  ],
};

export const agencyIntegratedModel = {
  eyebrow: 'Notre modèle intégré',
  title: 'De la stratégie à la diffusion, une seule équipe pilote le projet.',
  text: 'Un processus fluide et collaboratif pour transformer vos objectifs en résultats concrets.',
  summary: ['Plus simple.', 'Plus rapide.', 'Plus efficace.'],
  steps: [
    {
      number: '01',
      title: 'Stratégie & conseil',
      text: 'Comprendre, analyser et définir la direction.',
      tone: 'violet',
    },
    {
      number: '02',
      title: 'Concept & création',
      text: 'Imaginer des idées et des territoires qui marquent.',
      tone: 'mint',
    },
    {
      number: '03',
      title: 'Casting & influence',
      text: 'Activer les bons talents, au bon moment.',
      tone: 'yellow',
    },
    {
      number: '04',
      title: 'Production de contenu',
      text: 'Produire des contenus à fort impact.',
      tone: 'pink',
    },
    {
      number: '05',
      title: 'Diffusion & amplification',
      text: 'Maximiser la visibilité sur les bons canaux.',
      tone: 'blue',
    },
    {
      number: '06',
      title: 'Optimisation & performance',
      text: 'Mesurer, apprendre et améliorer en continu.',
      tone: 'lavender',
    },
  ],
};

export const agencyGroupStrength = {
  eyebrow: 'La force du groupe',
  title: 'L’agilité d’une agence créative. Les ressources d’un groupe digital.',
  titleLines: ['L’agilité d’une agence créative.', 'Les ressources d’un groupe digital.'],
  text:
    'Lemon Mind s’appuie sur l’expertise et les ressources du groupe pour offrir à ses clients un accompagnement complet, de la stratégie à la performance.',
  cta: 'En savoir plus sur notre écosystème',
  annotation: 'Together we go further.',
  resources: [
    { label: 'Média & acquisition', icon: 'bars', tone: 'yellow' },
    { label: 'Data & insights', icon: 'stack', tone: 'orange' },
    { label: 'Création & production', icon: 'camera', tone: 'mint' },
    { label: 'Technologie & innovation', icon: 'bulb', tone: 'blue' },
    { label: 'Conseil & stratégie', icon: 'people', tone: 'violet' },
  ],
};

export const agencyTeamPreview = {
  eyebrow: 'Notre équipe',
  title: 'Des profils différents, une même exigence.',
  text:
    'Stratèges, créatifs, producteurs, experts média, passionnés de culture digitale : notre équipe réunit des talents complémentaires avec un objectif commun, faire grandir vos marques.',
  cta: 'Rencontrer notre équipe',
  profiles: [
    {
      name: 'Amal AMAZOUZ',
      role: 'CEO & co-fondatrice',
      keyword: 'Direction',
      image: '/assets/lemon/leader-portrait.webp',
      alt: 'Portrait de Amal AMAZOUZ, CEO et co-fondatrice Lemon Mind',
      documented: true,
    },
    { keyword: 'Creative', documented: false },
    { keyword: 'Strategy', documented: false },
    { keyword: 'Social', documented: false },
    { keyword: 'Production', documented: false },
  ],
};

const trustedReferenceNames = new Set([
  'UIR',
  'Asswak Assalam',
  'Don Simon',
  'Maserati',
  'Tramway de Rabat',
  'Prestigia',
  'Excelia',
  'Terroir du Maroc',
]);

export const agencyTrust = {
  eyebrow: 'Ils nous font confiance',
  title: 'Des marques ambitieuses, dans tous les secteurs.',
  text: '',
  cta: 'Découvrir toutes nos références',
  certificationEyebrow: 'Nos certifications',
  certificationCta: 'Voir nos certifications',
  references: clientLogos.filter((logo) => trustedReferenceNames.has(logo.name)),
  certifications: [] as AgencyCertification[],
  missingCertificationsLabel: 'Certifications officielles à documenter',
};

export const agencyFinalCta = {
  eyebrow: '',
  title: 'Vous cherchez une agence capable de penser, produire et activer ?',
  text:
    'Présentez-nous votre marque, votre ambition et vos enjeux. Nous construirons l’équipe et le dispositif adaptés à votre projet.',
  primaryCta: 'Parler de votre projet',
  secondaryCta: 'Découvrir nos réalisations',
  annotation: 'Better brands. Together.',
};
