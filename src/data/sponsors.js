import logoSponsor from "../assets/sponsors/xyresic/logo.png";
import background from "../assets/sponsors/xyresic/background.png";

import singtelLogo from "../assets/sponsors/singtel-gold/logo.png";
import singtelBackground from "../assets/sponsors/singtel-gold/background.jpg";

import infinergyLogo from "../assets/sponsors/infinergy-silver/logo.png";
import infinergyBackground from "../assets/sponsors/infinergy-silver/background.jpg";

import adsecLogo from "../assets/sponsors/adsec-bronze/logo.png";
import adsecBackground from "../assets/sponsors/adsec-bronze/background.jpg";

import alaiLogo from "../assets/sponsors/alai-bronze/logo.png";
import alaiBackground from "../assets/sponsors/alai-bronze/background.jpg";

import yyLogo from "../assets/sponsors/yy-hongye-bronze/logo.png";
import yyBackground from "../assets/sponsors/yy-hongye-bronze/background.jpg";

import resustLogo from "../assets/sponsors/resustainability-bronze/logo.png";
import resustBackground from "../assets/sponsors/resustainability-bronze/background.jpg";

import detail1 from "../assets/sponsors/xyresic/details/detail1.png";

export const TIER_FEATURES = {
  bronze: ["who"],
  silver: ["who", "contact", "video", "icon"],
  gold: ["who", "contact", "video", "icon", "additional"],
};

// Define sponsor positions in original image pixels
export const SPONSORS = [
  {
    id: "singtel",
    name: "Singtel",
    tier: "gold",
    logo: singtelLogo,
    imageUrl: singtelBackground,
    description: [
      "Singtel is Asia's leading communications technology group, driving innovation across next-generation connectivity, digital infrastructure, and enterprise solutions.",
      "Through its IoT-as-a-Service (IoTaaS) offering, Singtel enables businesses and public agencies to deploy, manage, and scale IoT solutions seamlessly across facilities, cities, and industries.",
      "For the LOO Awards 2025, Singtel proudly partners with the Restroom Association (Singapore), showcasing its Digital Smart Washroom solution—a comprehensive IoT platform engineered to elevate hygiene, boost operational efficiency, and advance sustainability through real-time insights and smart automation.",
    ],
    contactLink: "https://www.linkedin.com/showcase/singtelenterprisesolutions",
    videoUrl: "",
    points: [
      // {
      //   id: "icon1",
      //   title: "What is Smart Toilet?",
      //   description:
      //     "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
      //   imageUrl: detail1,
      //   icon: "mdi:toilet-paper-outline",
      // },
      // {
      //   id: "icon2",
      //   title: "What is Smart Toilet?",
      //   description:
      //     "In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.",
      //   imageUrl: detail1,
      //   icon: "hugeicons:toilet-01",
      // },
    ],
    additionals: [
      // {
      //   id: "additional1",
      //   title: "Journey and innovation programs",
      //   description:
      //     "We believe that the world is a better place when technology is used to help people and businesses communicate effortlessly. We make communication easier, faster and more reliable for customers, while delivering value to our stakeholders. Click here to find out more about us!",
      // },
    ],
    x: 950,
    y: 250,
  },
  {
    id: "infinergy",
    name: "Infinergy Systems",
    tier: "silver",
    logo: infinergyLogo,
    imageUrl: infinergyBackground,
    description: [
      "Infinergy Systems is a technology company that develops smart restroom and integrated facility management solutions for achieving greater efficiency in a sustainable build environment. Since its incorporation in 2013, Infinergy have a long list of prominent and successful projects which includes Integrated Resort, Attractions, Shopping-Malls, Commercial and Grade A offices, Schools, Service Providers, etc. Innovation is the key as we continue to excel together with our value partners.",
    ],
    contactLink: "",
    videoUrl: "",
    points: [
      {
        id: "icon1",
        title: "Flexible Form Factors & Sizes",
        description:
          "Uscan® Interactive Feedback Panels comes in 3 form factors and sizes to cater for different requirements and budgets from every customer.",
        imageUrl: detail1,
        icon: "mdi:toilet-paper-outline",
      },
      {
        id: "icon2",
        title: "World-Class Integration Partnership",
        description:
          "System integrator and partner with World class manufacturer.",
        imageUrl: detail1,
        icon: "hugeicons:toilet-01",
      },
    ],
    x: 600,
    y: 400,
  },
  {
    id: "adsec-system",
    name: "Adsecs Systems",
    tier: "bronze",
    logo: adsecLogo,
    imageUrl: adsecBackground,
    description: [
      "Adsec Systems Pte Ltd offers products under the 'ELIMINATE' category of the DFEC systems and solutions, specializing in removing surface and air odours, bacteria, and viruses. Established on July 2, 2018, as a branch of Adsec Global Pte Ltd (formerly Inovshop APAC Pte Ltd), the company is dedicated to providing environmentally friendly solutions that enhance cost efficiency and boost productivity. Our Bi-Polar Ionizers and Ozonated Water systems effectively address odor control and sanitize against bacteria and viruses. As a founding member of DFEC Smart Restroom Solutions, Adsec Systems is committed to reducing chemical use and carbon footprint in the cleaning industry.",
    ],
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [],
    x: 1300,
    y: 480,
  },
  {
    id: "alai",
    name: "Alai Labs Pte Ltd",
    tier: "bronze",
    logo: alaiLogo,
    imageUrl: alaiBackground,
    description: [
      "Alai Labs is a Singapore-headquartered deep-tech company pioneering AI, IoT, and robotic solutions that transform how cities and facilities are maintained. Founded in 2016, we design and build intelligent systems that connect sensors, machines, and data into a unified operational platform — empowering cleaner, safer, and more sustainable environments.",
      "As part of our commitment to advancing hygiene innovation, Alai Labs developed the AJAR series — the world's first semi-humanoid janitorial robot designed for restroom automation. The AJAR robot performs autonomous 3D cleaning of toilet bowls, urinals, and washbasins with precision and consistency, addressing the sector's long-standing manpower challenges while ensuring high cleanliness standards.",
      "Our technologies extend beyond robotics: through our SensZ.Al platform, we integrate vision analytics, sensor data, and AI agents to enable smart facility management — from waste bin monitoring and flood detection to predictive maintenance and on-demand cleaning.",
      "At the heart of Alai Labs' mission is the belief that technology should enhance human dignity and environmental health. By fusing AI and automation, we strive to build resilient cleaning ecosystems that uphold the spirit of World Toilet Day — universal access to clean, safe, and well-maintained sanitation for all.",
    ],
    contactLink: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQs",
    points: [],
    x: 400,
    y: 640,
  },
  {
    id: "yy",
    name: "YY Group",
    tier: "bronze",
    logo: yyLogo,
    imageUrl: yyBackground,
    description: [
      "Hong Ye Group, a subsidiary of YY Group Holding Ltd., is one of Singapore's leading facilities services providers, delivering comprehensive cleaning and sanitation solutions that keep spaces spotless and safe.",
      "The company provides a full suite of facilities support services, including landscaping stewarding, security, and specialist cleaning such as disinfection and pest control, serving commercial, industrial, and hospitality sectors.",
      "Accredited with ISO 9001, ISO 14001 and ISO 45001 certifications and recognised with awards such as the Singapore Quality Award (2020) and LOO Awards (2022), Hong Ye Group is trusted for its quality, reliability and commitment to excellence.",
      "The organisation creates cleaner, safer and better environments for businesses that prioritise health, safety and customer experience.",
      "Click here to find out more about us! (www.hongyegroup.com.sg)",
    ],
    contactLink: "www.hongyegroup.com.sg",
    videoUrl: "",
    points: [],
    x: 950,
    y: 700,
  },
  {
    id: "resustainability",
    name: "RESustainability",
    tier: "bronze",
    logo: resustLogo,
    imageUrl: resustBackground,
    description: [
      "Re Sustainability Singapore is a trusted partner for commercial and industrial cleaning solutions, backed by decades of operational excellence under the Re Sustainability global network. We specialise in addressing diverse cleaning challenges across business environments, ensuring hygienic, safe, and productivity-enhancing workplaces.",
      "Leveraging a modern fleet of cleaning equipment, advanced technology, and a highly trained workforce, we deliver end-to-end cleaning services tailored to client needs. Our focus is simple: maintain the highest standards of cleanliness, safety, and operational efficiency across every facility we manage.",
    ],
    contactLink: "",
    videoUrl: "",
    points: [],
    x: 1480,
    y: 660,
  },
];
