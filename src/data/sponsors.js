import logoSponsor from "../assets/sponsors/xyresic/logo.png";
import background from "../assets/sponsors/xyresic/background.png";
import detail1 from "../assets/sponsors/xyresic/details/detail1.png";

const TIER_FEATURES = {
  bronze: ["who"],
  silver: ["who", "contact", "video", "smartToilet"],
  gold: [
    "who",
    "contact",
    "video",
    "smartToilet",
    "journey",
    "insight",
    "contribution",
  ],
};

// At file top or in config
const SMART_TOILET_ICONS = [
  { id: "paper", icon: "mdi:toilet-paper-outline", label: "Toilet Paper" },
  { id: "toilet", icon: "hugeicons:toilet-01", label: "Toilet Unit" },
  // Add more later if needed
];

// Define sponsor positions in original image pixels
export const SPONSORS = [
  {
    id: "gold1",
    name: "Sponsor Gold 1",
    tier: "gold",
    logo: logoSponsor,
    imageUrl: background,
    description:
      "At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.",
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [
      {
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 100,
    y: 700,
  },
  {
    id: "gold2",
    name: "Sponsor Gold 2",
    tier: "gold",
    logo: logoSponsor,
    imageUrl: background,
    description:
      "At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.",
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [
      {
        id: "icon1",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        id: "icon2",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 730,
    y: 550,
  },
  {
    id: "silver1",
    name: "Sponsor Silver 1",
    tier: "silver",
    logo: logoSponsor,
    imageUrl: background,
    description:
      "At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.",
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [
      {
        id: "icon1",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        id: "icon2",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 940,
    y: 730,
  },
  {
    id: "silver2",
    name: "Sponsor Silver 2",
    tier: "silver",
    logo: logoSponsor,
    imageUrl: background,
    description:
      "At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.",
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [
      {
        id: "icon1",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        id: "icon2",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 1100,
    y: 730,
  },
  {
    id: "silver3",
    name: "Sponsor Silver 3",
    tier: "silver",
    logo: logoSponsor,
    imageUrl: background,
    description:
      "At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.",
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [
      {
        id: "icon1",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        id: "icon2",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 1300,
    y: 580,
  },
  {
    id: "bronze4",
    name: "Sponsor Bronze 1",
    tier: "bronze",
    logo: logoSponsor,
    imageUrl: background,
    description:
      "At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.",
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [
      {
        id: "icon1",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        id: "icon2",
        title: "What is Smart Toilet?",
        description:
          "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 1680,
    y: 580,
  },
];
