export const mainNavItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Genera", url: "/genus" },
  { id: 3, title: "Plant Profiles", url: "/plant-profiles" },
  { id: 4, title: "Articles", url: "/articles" },
];

export const socialNavItems = [
  { id: 1, title: "Facebook", url: "https://www.facebook.com/houseplants.xyz" },
  {
    id: 2,
    title: "Instagram",
    url: "https://www.instagram.com/houseplants.xyz",
  },
  {
    id: 3,
    title: "Pinterest",
    url: "https://www.pinterest.com/houseplantsxyz",
  },
  { id: 4, title: "Patreon", url: "https://www.patreon.com/houseplants" },
];

export const adminNavItems = [
  { id: 1, url: "/admin/plants", title: "Plants" },
  { id: 2, url: "/admin/plant-profiles", title: "Plant Profiles" },
  { id: 3, url: "/admin/genera", title: "Genera" },
  { id: 4, url: "/admin/articles", title: "Articles" },
  { id: 5, url: "/admin/pages", title: "Pages" },
];

export const articleFields = [
  {
    id: 1,
    name: "title",
    label: "Article Title",
    element: "input",
    type: "text",
  },
  {
    id: 2,
    name: "slug",
    label: "Slug",
    element: "input",
    type: "text",
  },
  {
    id: 3,
    name: "intro",
    label: "Intro",
    element: "textarea",
  },
  {
    id: 4,
    name: "content",
    label: "Article content",
    element: "textarea",
  },
  {
    id: 5,
    name: "imageCredits",
    label: "Image credits",
    element: "input",
    type: "text",
  },
  {
    id: 6,
    name: "published",
    label: "Article status",
    element: "select",
    options: ["PUBLISHED", "DRAFT", "REVIEW"],
  },
  {
    id: 7,
    name: "language",
    label: "Choose a language",
    element: "select",
    options: ["ENGLISH", "SRPSKI"],
  },
];

export const pageFields = [
  {
    id: 1,
    name: "title",
    label: "Page Title",
    element: "input",
    type: "text",
  },
  {
    id: 2,
    name: "slug",
    label: "Slug",
    element: "input",
    type: "text",
  },
  {
    id: 3,
    name: "content",
    label: "Article content",
    element: "textarea",
  },
  {
    id: 4,
    name: "language",
    label: "Choose a language",
    element: "select",
    options: ["ENGLISH", "SRPSKI"],
  },
  {
    id: 5,
    name: "published",
    label: "Article status",
    element: "select",
    options: ["PUBLISHED", "DRAFT", "REVIEW"],
  },
];

export const plantProfileFields = [
  {
    id: 1,
    name: "title",
    label: "Profile Title",
    element: "input",
    type: "text",
  },
  {
    id: 2,
    name: "slug",
    label: "Slug",
    element: "input",
    type: "text",
  },
  {
    id: 3,
    name: "botanicalName",
    label: "Botanical Name",
    element: "input",
    type: "text"
  },
  {
    id: 4,
    name: "synonyms",
    label: "Synonyms",
    element: "input",
    type: "text"
  },
  {
    id: 5,
    name: "namedBy",
    label: "Named by",
    element: "input",
    type: "text"
  },
  {
    id: 6,
    name: "inventor",
    label: "Inventor",
    element: "input",
    type: "text"
  },
  {
    id: 7,
    name: "patent",
    label: "Patent",
    element: "input",
    type: "text"
  },
  {
    id: 8,
    name: "tradeNames",
    label: "Trade Names",
    element: "input",
    type: "text"
  },
  {
    id: 9,
    name: "commonNames",
    label: "Common Names",
    element: "input",
    type: "text"
  },
  {
    id: 10,
    name: "narodniNaziv",
    label: "Narodni Naziv",
    element: "input",
    type: "text"
  },
  {
    id: 11,
    name: "family",
    label: "Family",
    element: "input",
    type: "text"
  },
  {
    id: 12,
    name: "subFamily",
    label: "Subfamily",
    element: "input",
    type: "text"
  },
  {
    id: 13,
    name: "genus",
    label: "Genus",
    element: "input",
    type: "text"
  },
  {
    id: 14,
    name: "nativeArea",
    label: "Native Area",
    element: "input",
    type: "text"
  },
  {
    id: 15,
    name: "podrucjePorekla",
    label: "Područje porekla",
    element: "input",
    type: "text"
  },
  {
    id: 16,
    name: "care",
    label: "Care",
    element: "select",
    options: ["EASY", "AVARAGE", "DIFFICULT"]
  },
  {
    id: 17,
    name: "light",
    label: "Light",
    element: "select",
    options: [
      "LOW_LIGHT",
      "PARTIAL_SHADE",
      "MEDIUM_LIGHT",
      "BRIGHT_LIGHT",
      "FULL_SUN",
    ]
  },
  {
    id: 18,
    name: "watering",
    label: "Watering",
    element: "input",
    type: "text"
  },
  {
    id: 19,
    name: "zalivanje",
    label: "Zalivanje",
    element: "input",
    type: "text"
  },
  {
    id: 20,
    name: "soil",
    label: "Soil",
    element: "input",
    type: "text"
  },
  {
    id: 21,
    name: "supstrat",
    label: "Supstrat",
    element: "input",
    type: "text"
  },
  {
    id: 22,
    name: "soilPH",
    label: "Soil PH",
    element: "input",
    type: "text"
  },
  {
    id: 23,
    name: "humidity",
    label: "Humidity",
    element: "select",
    options: ["LOW", "MEDIUM", "HIGH"]
  },
  {
    id: 24,
    name: "feeding",
    label: "Feeding",
    element: "input",
    type: "text"
  },
  {
    id: 25,
    name: "prihrana",
    label: "Prihrana",
    element: "input",
    type: "text"
  },
  {
    id: 26,
    name: "minimalT",
    label: "Minimal Temperature",
    element: "input",
    type: "number"
  },
  {
    id: 27,
    name: "optimalT",
    label: "Optimal Temperature",
    element: "input",
    type: "number"
  },
  {
    id: 28,
    name: "speedOfGrowth",
    label: "Speed Of Growth",
    element: "select",
    options: ["SLOW", "MODERATE", "FAST"]
  },
  {
    id: 29,
    name: "matureSize",
    label: "Mature Size",
    element: "input",
    type: "text"
  },
  {
    id: 30,
    name: "velicina",
    label: "Veličina",
    element: "input",
    type: "text"
  },
  {
    id: 31,
    name: "repotting",
    label: "Repotting",
    element: "input",
    type: "text"
  },
  {
    id: 32,
    name: "presadjivanje",
    label: "Presađivanje",
    element: "input",
    type: "text"
  },
  {
    id: 33,
    name: "flower",
    label: "Flower",
    element: "input",
    type: "text"
  },
  {
    id: 34,
    name: "cvet",
    label: "Cvet",
    element: "input",
    type: "text"
  },
  {
    id: 35,
    name: "propagation",
    label: "Propagation",
    element: "input",
    type: "text"
  },
  {
    id: 36,
    name: "razmnozavanje",
    label: "Razmnožavanje",
    element: "input",
    type: "text"
  },
  {
    id: 37,
    name: "toxicity",
    label: "Toxicity",
    element: "select",
    options: ["TOXIC", "NOT_TOXIC", "NO_INFO"]
  },
  {
    id: 38,
    name: "pests",
    label: "Pests",
    element: "input",
    type: "text"
  },
  {
    id: 39,
    name: "stetocine",
    label: "Štetočine",
    element: "input",
    type: "text"
  },
  {
    id: 40,
    name: "diseases",
    label: "Diseases",
    element: "input",
    type: "text"
  },
  {
    id: 41,
    name: "bolesti",
    label: "Bolesti",
    element: "input",
    type: "text"
  },
  {
    id: 42,
    name: "imageCredits",
    label: "Image Credits",
    element: "input",
    type: "text"
  },
  {
    id: 43,
    name: "notes",
    label: "Notes",
    element: "textarea"
  },
  {
    id: 44,
    name: "beleske",
    label: "Beleške",
    element: "textarea"
  },
  {
    id: 45,
    name: "published",
    label: "Published",
    element: "select",
    options: ["PUBLISHED", "DRAFT", "REVIEW"]
  },
]