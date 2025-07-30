import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: " IoT & Embedded Developer",
    icon: mobile,
  },
  {
    title: " Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX & Prototyping",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer Flutter",
    company_name: "Indépendant",
    icon: starbucks,
    iconBg: "#383E56",
    date: "9 mois",
    points: [
      "Conception et développement de 6 applications full stack multiplateformes (mobile, web, desktop) avec Flutter.",
      "Création d’interfaces utilisateur performantes et réactives adaptées aux besoins clients.",
      "Mise en place de bases de données locales (SQLite) et cloud (Firebase), gestion de l’authentification, des paiements et de l’impression via Bluetooth.",
      "Déploiement et livraison professionnelle pour des systèmes de caisse intelligents utilisés en conditions réelles.",
    ],
  },
  {
    title: "Stage ouvrier - 1ère année ingénierie",
    company_name: "UDGroup",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2 mois",
    points: [
      "Développement d’une application web moderne pour la gestion des artisans (planning, fiches, contacts, services).",
      "Architecture MERN : Next.js pour le front-end, MongoDB pour la persistance, API REST sécurisées.",
      "Mise en œuvre d’un système de filtrage, tri et recherche dynamique pour améliorer l'expérience utilisateur.",
      "Déploiement de la solution sur un environnement cloud pour tests en conditions réelles.",
    ],
  },
  {
    title: "Projet PFE Licence – Maison Intelligente",
    company_name: "Yazaki Bizerte",
    icon: shopify,
    iconBg: "#383E56",
    date: "6 mois",
    points: [
      "Développement d’un système domotique intelligent pour surveiller et sécuriser un environnement résidentiel.",
      "Capteurs IoT pour la température/humidité, contrôle d’accès biométrique (empreinte digitale et reconnaissance faciale).",
      "Envoi automatique d’alertes via module GSM en cas d’anomalie détectée.",
      "Dashboard interactif sur Node-RED pour visualisation en temps réel, communication entre microcontrôleur et base locale SQLite.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Mouhanned est un étudiant sérieux et passionné. Il a mené un projet innovant en intégrant plusieurs technologies avancées.",
    name: "Abdelaziz Sahbani",
    designation: "Professeur universitaire",
    company: "ISIMS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "J’ai collaboré avec Mouhanned dans un cadre académique et professionnel. C’est un profil polyvalent, impliqué et compétent.",
    name: "Abderrahim Ncir",
    designation: "Étudiant master recherche & Associé",
    company: "Projet entrepreneurial",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "En entreprise, Mouhanned a su rapidement s’adapter aux besoins de notre projet. Il a apporté des solutions fiables et efficaces.",
    name: "Développeur Yazaki",
    designation: "Développeur",
    company: "Yazaki Bizerte",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];


const projects = [
  {
    name: "Plateforme Événements Environnementaux",
    description:
      "Conception d’une plateforme de gestion des événements environnementaux (Design Thinking) avec Flutter.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "ux", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gestion des Hôtels",
    description:
      "Application mobile et web Flutter pour la gestion complète des hôtels (réservation, chambres, gestion clients).",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Annonce 3D",
    description:
      "Création et animation d’une annonce publicitaire en 3D avec 3ds Max pour un projet de communication visuelle.",
    tags: [
      { name: "3dsmax", color: "blue-text-gradient" },
      { name: "animation", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gestion Événements",
    description:
      "Application web pour gérer les événements, développée avec Spring Boot, XML, HTML5 et CSS3.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "html5", color: "green-text-gradient" },
      { name: "css3", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Système de Traduction & Sécurité",
    description:
      "Prototype pour aider les personnes sourdes via un système de traduction et sécuriser leur habitat.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "cv", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Maison Intelligente",
    description:
      "Projet PFE complet de maison connectée : contrôle d’accès, capteurs, alertes GSM et tableau de bord interactif.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "sqlite", color: "green-text-gradient" },
      { name: "node-red", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


const education = [
  {
    title: "Cycle Ingénieur en Informatique - Génie Logiciel",
    school_name: "ISIMS (Institut Supérieur d’Informatique et de Mathématiques de Monastir)",
    icon: starbucks, // remplace avec une icône d’université
    iconBg: "#383E56",
    date: "2025 - maintenant",
    points: [
      "Spécialisation en génie logiciel, IoT, systèmes embarqués et cybersécurité.",
      "Développement d'applications Flutter (web, mobile, desktop) avec intégration de capteurs, GSM, RFID et dashboard Node-RED.",
      "Projet de fin d’étude : maison intelligente avec surveillance, contrôle d’accès et alertes automatisées.",
      "Utilisation de technologies comme SQLite, GSM module, reconnaissance faciale et empreinte digitale.",
    ],
  },
  {
    title: "Licence en Ingénierie des Systèmes Informatiques",
    school_name: "FSB (Faculté des Sciences de Bizerte)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021 - 2024",
    points: [
      "Spécialisation en systèmes embarqués et IoT.",
      "Réalisation de projets comme : système de sécurité pour personnes sourdes, gestion d’événements, gestion d’hôtels (Flutter, Spring Boot).",
      "Stage chez YAZAKI : conception d’un système de surveillance embarqué (température, humidité, contrôle d’accès).",
      "Participation active à des clubs tech : SmarTech, Art of Code, Enactus.",
    ],
  },
  {
    title: "Certifications Techniques & Projets Professionnels",
    school_name: "Diverses plateformes (Coursera, PEEC, Google, IBM)",
    icon: tesla, // mettre une icône de diplôme ou de certification
    iconBg: "#383E56",
    date: "2021 - 2024",
    points: [
      "🔐 Cyber Security Fundamentals – University of London (Coursera)",
      "🐍 Python for Data Science, AI & Development – IBM (Coursera)",
      "🌐 Création d’un site web avec WordPress",
      "🤖 Robotique – niveau 1 & 2 (FSB Innovation)",
      "🧠 Étudiant Entrepreneur (PEEC) – 2 fois",
      "🖥️ Technical Support Fundamentals – Google (en cours)",
      "⌨️ Certificat FastTyping – vitesse de frappe",
      "🏆 Organisation de la compétition FSB-Robots 3.0",
    ],
  },
  {
    title: "Baccalauréat – Sciences Expérimentales",
    school_name: "Lycée secondaire – Tunisie",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Mention : assez bien",
      "Bonnes bases scientifiques et logiques, début en électronique et programmation.",
    ],
  },
];


export { services, technologies, experiences, testimonials, projects, education };
