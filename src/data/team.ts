export type TeamDepartmentId =
  | 'all'
  | 'direction-strategie'
  | 'client-service'
  | 'gestion-projet'
  | 'creation-design'
  | 'media-production'
  | 'technologie-operations';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  category: string;
  department: Exclude<TeamDepartmentId, 'all'>;
  image: string;
  imageAlt: string;
  isLeadership: boolean;
  linkedinUrl?: string;
  displayOrder: number;
};

export type TeamDepartment = {
  id: Exclude<TeamDepartmentId, 'all'>;
  title: string;
  description: string;
  memberIds: string[];
  icon: string;
  tone: string;
};

const teamAsset = (file: string) => `/assets/lemon/team/${file}`;

export const teamMeta = {
  title: 'Équipe Lemon Mind | Stratégie, influence, création et production',
  description:
    'Découvrez l’équipe mobilisée par Lemon Mind au Maroc : direction, stratégie, gestion de projet, création, média, production et technologie.',
  canonical: '/agence/equipe',
  ogImage: teamAsset('salah.webp'),
  sourceUrl: 'https://www.richmedia.ma/equipe/',
};

const member = (
  id: string,
  name: string,
  role: string,
  category: string,
  department: TeamMember['department'],
  imageFile: string,
  displayOrder: number,
  isLeadership = false,
): TeamMember => ({
  id,
  name,
  role,
  category,
  department,
  image: teamAsset(imageFile),
  imageAlt: `Portrait de ${name}, ${role}`,
  isLeadership,
  displayOrder,
});

export const teamMembers: TeamMember[] = [
  member('salah-eddine-mimouni', 'Salah-Eddine Mimouni', 'CEO & CTO', 'Direction', 'direction-strategie', 'salah.webp', 1, true),
  member('amal-amazouz', 'Amal Amazouz', 'COO & CDO', 'Direction', 'direction-strategie', 'amal.webp', 2, true),
  member('tarik-el-abbadi', 'Tarik El Abbadi', 'Directeur Communication & Event', 'Direction', 'direction-strategie', 'tarik.webp', 3, true),
  member('elhoussine-essmami', 'Elhoussine Essmami', 'Planneur stratégique', 'Stratégie', 'direction-strategie', 'elhoussine-bw.webp', 4),
  member('ikram-dehiri', 'Ikram Dehiri', 'Responsable de compte senior', 'Gestion de compte', 'client-service', 'ikram.webp', 5),
  member('oussama-tahtah', 'Oussama TAHTAH', 'Senior Account Manager', 'Gestion de compte', 'client-service', 'oussama.webp', 6),
  member('oumaima-lassri', 'Oumaima LASSRI', 'Senior Account Manager', 'Gestion de compte', 'client-service', 'oumaima-lassri.webp', 7),
  member('fellioui-halima', 'FELLIOUI Halima', 'Account Manager', 'Gestion de compte', 'client-service', 'halima-felloui.webp', 8),
  member('soukaina-sammouni', 'Soukaina SAMMOUNI', 'Account Manager', 'Gestion de compte', 'client-service', 'soukaina-sammouni.webp', 9),
  member('yasmine-ouazzani-touhamy', 'Yasmine Ouazzani Touhamy', 'Account Manager', 'Gestion de compte', 'client-service', 'yasmine-ouazzani-touhamy.webp', 10),
  member('zouhair-lyzouli', 'Zouhair Lyzouli', 'Développeur full stack senior', 'Développement', 'technologie-operations', 'zouhair-bw.webp', 11),
  member('zakaria-mouchtati', 'Zakaria Mouchtati', 'Développeur full stack senior', 'Développement', 'technologie-operations', 'zakaria.webp', 12),
  member('wafae-lamsabni', 'Wafae Lamsabni', 'Chef de projet', 'Gestion de projet', 'gestion-projet', 'yassmine.webp', 13),
  member('mohamed-yassine-dargal', 'Mohamed Yassine Dargal', 'Chef de projet', 'Gestion de projet', 'gestion-projet', 'yassine.webp', 14),
  member('ayoub-es-samlali', 'Ayoub Es-Samlali', 'Chef de projet', 'Gestion de projet', 'gestion-projet', 'ayoub.webp', 15),
  member('yassmine-boudial', 'Yassmine Boudial', 'Chef de projet', 'Gestion de projet', 'gestion-projet', 'wafaa.webp', 16),
  member('safwane-moustaine', 'Safwane MOUSTAINE', 'Trafic Manager senior', 'Média & performance', 'media-production', 'safwane.webp', 17),
  member('malak-billaore', 'Malak BILLAORE', 'Responsable administrative', 'Administration', 'technologie-operations', 'malak-billaore.webp', 18),
  member('rachid-oualla', 'Rachid OUALLA', 'Directeur artistique', 'Création', 'creation-design', 'rachid-oualla.webp', 19),
  member('rachid-hlalma', 'Rachid Hlalma', 'Directeur artistique', 'Création', 'creation-design', 'rachid.webp', 20),
  member('abdelkader-el-bouhaddouti', 'Abdelkader El Bouhaddouti', 'Graphiste finaliste', 'Design', 'creation-design', 'abdelkader.webp', 21),
  member('youssef-amazouz', 'Youssef Amazouz', 'Graphiste finaliste', 'Design', 'creation-design', 'youssef.webp', 22),
  member('wail-el-asri', 'Wail El Asri', 'Graphiste finaliste', 'Design', 'creation-design', 'wail.webp', 23),
  member('ghita-mimouni', 'Ghita MIMOUNI', 'Junior Design Scout', 'Design', 'creation-design', 'ghita-mimouni.webp', 24),
];

export const teamMembersById = new Map(teamMembers.map((profile) => [profile.id, profile]));

export const teamHero = {
  eyebrow: 'Notre équipe',
  title: 'Les talents derrière les idées, les contenus et les résultats.',
  highlightedText: 'les résultats',
  paragraphs: [
    'Lemon Mind mobilise des profils complémentaires en stratégie, influence, création, production, social media, technologie et performance.',
    'Une équipe pluridisciplinaire réunie autour d’un même objectif : faire grandir les marques avec des idées fortes et une exécution rigoureuse.',
  ],
  primaryCta: 'Découvrir notre culture',
  primaryHref: '#notre-culture',
  secondaryCta: 'Nous rejoindre',
  secondaryHref: '/agence/carrieres',
  reassurance: [
    'Une équipe pluridisciplinaire',
    'Des expertises complémentaires',
    'Un esprit collaboratif',
    'Basée à Casablanca',
  ],
  annotation: 'Same team. Bigger impact.',
};

export const teamValues = {
  eyebrow: 'Notre manière de travailler',
  title: 'Des expertises différentes. Une même façon d’avancer.',
  paragraphs: [
    'Nous croyons à la force du collectif, à la diversité des regards et à l’envie constante d’apprendre.',
    'Notre équipe évolue dans un environnement exigeant, bienveillant et tourné vers l’impact.',
  ],
  annotation: 'Curiosity. Collaboration. Progress.',
  items: [
    {
      title: 'Collaboration',
      text: 'Des idées plus fortes lorsque les talents travaillent ensemble.',
      icon: 'people',
      tone: 'yellow',
    },
    {
      title: 'Curiosité',
      text: 'Toujours en veille sur les cultures digitales, les tendances et les nouvelles opportunités.',
      icon: 'bulb',
      tone: 'violet',
    },
    {
      title: 'Responsabilité',
      text: 'Des engagements clairs, une exécution rigoureuse et une culture du résultat.',
      icon: 'target',
      tone: 'pink',
    },
    {
      title: 'Exigence',
      text: 'Des standards élevés, créatifs, stratégiques et humains.',
      icon: 'check',
      tone: 'mint',
    },
  ],
};

export const teamLeadership = {
  eyebrow: 'Notre leadership',
  title: 'Une direction au service de la créativité et de la performance.',
  text:
    'Une équipe de direction engagée, complémentaire et proche des équipes, pour faire grandir les marques et les talents.',
  memberIds: ['salah-eddine-mimouni', 'amal-amazouz', 'tarik-el-abbadi'],
};

export const teamDepartments: TeamDepartment[] = [
  {
    id: 'direction-strategie',
    title: 'Direction & stratégie',
    description: 'Positionnement, cadrage, conseil, communication et vision business.',
    memberIds: ['salah-eddine-mimouni', 'amal-amazouz', 'tarik-el-abbadi', 'elhoussine-essmami'],
    icon: 'bars',
    tone: 'yellow',
  },
  {
    id: 'client-service',
    title: 'Client service',
    description: 'Gestion des comptes, coordination client et accompagnement quotidien.',
    memberIds: [
      'ikram-dehiri',
      'oussama-tahtah',
      'oumaima-lassri',
      'fellioui-halima',
      'soukaina-sammouni',
      'yasmine-ouazzani-touhamy',
    ],
    icon: 'people',
    tone: 'violet',
  },
  {
    id: 'gestion-projet',
    title: 'Gestion de projet',
    description: 'Planification, coordination des équipes, suivi des livrables et qualité d’exécution.',
    memberIds: ['wafae-lamsabni', 'mohamed-yassine-dargal', 'ayoub-es-samlali', 'yassmine-boudial'],
    icon: 'calendar',
    tone: 'mint',
  },
  {
    id: 'creation-design',
    title: 'Création & design',
    description: 'Direction artistique, concepts, design, identité visuelle et contenus de marque.',
    memberIds: [
      'rachid-oualla',
      'rachid-hlalma',
      'abdelkader-el-bouhaddouti',
      'youssef-amazouz',
      'wail-el-asri',
      'ghita-mimouni',
    ],
    icon: 'bulb',
    tone: 'pink',
  },
  {
    id: 'media-production',
    title: 'Média & production',
    description: 'Activation média, performance, réalisation vidéo, montage et production.',
    memberIds: ['safwane-moustaine'],
    icon: 'camera',
    tone: 'blue',
  },
  {
    id: 'technologie-operations',
    title: 'Technologie & opérations',
    description: 'Développement, plateformes digitales et support administratif.',
    memberIds: ['zouhair-lyzouli', 'zakaria-mouchtati', 'malak-billaore'],
    icon: 'stack',
    tone: 'lavender',
  },
];

export const teamFilters = [
  { id: 'all' as const, label: 'Tous' },
  ...teamDepartments.map((department) => ({ id: department.id, label: department.title })),
];

export const teamDirectory = {
  eyebrow: 'Les visages de Lemon Mind',
  title: 'Des personnalités engagées, animées par la même passion.',
  annotation: 'Good people. Great work.',
};

export const teamCulture = {
  eyebrow: 'Notre culture',
  title: 'Le travail compte. La manière de travailler aussi.',
  text:
    'Brainstormings, tournages, ateliers, réunions, événements et moments d’équipe : découvrez les coulisses de notre quotidien.',
  gallery: [
    {
      src: '/assets/lemon/studio-meeting.webp',
      alt: 'Session de travail Lemon Mind autour d’une table de création',
      caption: 'Réunions créatives',
    },
    {
      src: '/assets/lemon/production-experience.webp',
      alt: 'Production de contenu et activation Lemon Mind',
      caption: 'Production',
    },
    {
      src: '/assets/lemon/creative-presentation.webp',
      alt: 'Présentation de contenu social-first Lemon Mind',
      caption: 'Création',
    },
    {
      src: '/assets/lemon/influence-reel.webp',
      alt: 'Format social media produit par Lemon Mind',
      caption: 'Diffusion',
    },
  ],
};

export const teamRecruitment = {
  eyebrow: 'Rejoignez l’équipe',
  title: 'Vous vous reconnaissez dans notre façon de créer ?',
  text:
    'Nous recherchons des profils curieux, responsables et passionnés par les marques, les contenus et les nouvelles cultures digitales.',
  secondaryCta: 'Envoyer une candidature',
  secondaryHref: '/agence/carrieres#candidature-spontanee',
  annotation: 'Create. Learn. Grow. Together.',
};
