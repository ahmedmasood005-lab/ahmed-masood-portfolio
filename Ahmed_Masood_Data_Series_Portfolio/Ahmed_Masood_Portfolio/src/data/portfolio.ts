import certificateDocuments from './certificates.json';
/**
 * Central portfolio data — generated from Ahmed's resume (Ahmed_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  "fullName": "Ahmed Masood",
  "displayName": "Ahmed Masood",
  "firstName": "AHMED",
  "seriesTag": "THE DATA SERIES",
  "originalLabel": "AN AHMED MASOOD ORIGINAL",
  "role": "Data Science Student",
  "tagline": [
    "Data Science",
    "Machine Learning",
    "Generative AI"
  ],
  "intro": "I am a Data Science student at PAF-IAST, turning raw data into practical solutions with Python, SQL, Machine Learning, Generative AI and Power BI. My projects explore healthcare analytics, predictive modelling and AI applications.",
  "location": "Haripur, Pakistan",
  "email": "ahmed321masood@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/ahmed-masood-37b3a72a7",
    "github": "https://github.com/ahmedmasood005-lab"
  },
  "resumePdf": "/assets/Ahmed_Masood_Profile.pdf",
  "portrait": {
    "src": "/assets/portrait-720.webp",
    "srcSet": "/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w",
    "alt": "Ahmed Masood in a navy suit"
  },
  "interests": [
    "Healthcare AI",
    "Generative AI & RAG",
    "Data Analytics"
  ]
};

export const education = [
  {
    "school": "Pak-Austria Fachhochschule (PAF-IAST)",
    "place": "Haripur, Pakistan",
    "degree": "BS Data Science",
    "period": "October 2025 – December 2029",
    "score": "Undergraduate · Expected 2029"
  },
  {
    "school": "Royal Edward School and College",
    "place": "Haripur",
    "degree": "ICS — Computer Science",
    "period": "June 2023 – June 2024",
    "score": "Intermediate"
  },
  {
    "school": "Shoukat Public School and College",
    "place": "Pind Muneem",
    "degree": "Matric — Biology",
    "period": "June 2022 – June 2023",
    "score": "Secondary education"
  }
];

export const experience = [
  {
    "company": "BeeNeural.AI",
    "role": "Data Science Intern",
    "place": "Pakistan",
    "period": "2 July – 27 August 2026",
    "points": [
      "Data cleaning, exploratory analysis and machine-learning model development with Python.",
      "Worked with Pandas, NumPy, Scikit-learn, SQL and visualization tools."
    ]
  },
  {
    "company": "M Tech Production & Marketing",
    "role": "Data Science Intern",
    "place": "Pakistan",
    "period": "10 June – 25 July 2026",
    "points": [
      "Healthcare analytics, missing-data analysis and predictive modelling.",
      "Built practical dashboards and AI applications; documented project results."
    ]
  },
  {
    "company": "CodeAlpha",
    "role": "Data Science Intern",
    "place": "Pakistan",
    "period": "10 May – 10 June 2026",
    "points": [
      "Developed Iris Flower Classification and Sales Prediction projects.",
      "Applied data preprocessing, exploratory analysis and model evaluation."
    ]
  }
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  cover?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    "id": "careshield",
    "title": "CareShield AI",
    "year": "2026",
    "genre": "Healthcare · Machine Learning",
    "logline": "An educational platform for exploring 30-day hospital readmission risk using synthetic patient encounters.",
    "stack": [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "SQLite"
    ],
    "build": [
      "An educational platform for exploring 30-day hospital readmission risk using synthetic patient encounters.",
      "Repository documentation describes synthetic healthcare data, adjustable risk thresholds, patient-level explanations, csv and pdf exports."
    ],
    "features": [
      "Synthetic healthcare data",
      "Adjustable risk thresholds",
      "Patient-level explanations",
      "CSV and PDF exports"
    ],
    "metrics": [
      {
        "value": "Python",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "Prototype",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/hospital-readmission-risk-platform",
    "palette": {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"},
    "motif": "shield",
    "cover": "/assets/projects/careshield.webp"
  },
  {
    "id": "medibook",
    "title": "MediBook AI",
    "year": "2026",
    "genre": "Generative AI · Tool Calling",
    "logline": "A clinic appointment platform with an AI assistant that calls authenticated booking tools.",
    "stack": [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "SQLite"
    ],
    "build": [
      "A clinic appointment platform with an AI assistant that calls authenticated booking tools.",
      "Repository documentation describes appointment management, function calling, role-based access, booking conflict prevention."
    ],
    "features": [
      "Appointment management",
      "Function calling",
      "Role-based access",
      "Booking conflict prevention"
    ],
    "metrics": [
      {
        "value": "Next.js",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "GitHub",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/medibook-ai-clinic-appointment-chatbot",
    "palette": {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"},
    "motif": "flow",
    "cover": "/assets/projects/medibook.webp"
  },
  {
    "id": "deepsight",
    "title": "DeepSight",
    "year": "2026",
    "genre": "Deep Learning · Computer Vision",
    "logline": "A research prototype combining RGB and frequency features to explore AI-generated face detection.",
    "stack": [
      "Python",
      "PyTorch",
      "FastAPI",
      "Next.js"
    ],
    "build": [
      "A research prototype combining RGB and frequency features to explore AI-generated face detection.",
      "Repository documentation describes rgb and frequency branches, image validation, evaluation tooling, demo mode; performance not yet evaluated."
    ],
    "features": [
      "RGB and frequency branches",
      "Image validation",
      "Evaluation tooling",
      "Demo mode; performance not yet evaluated"
    ],
    "metrics": [
      {
        "value": "Python",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "Prototype",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/DeepSight-Deepfake-Image-Detection",
    "palette": {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"},
    "motif": "flow",
    "cover": "/assets/projects/deepsight.webp"
  },
  {
    "id": "iris",
    "title": "Iris Classification",
    "year": "2026",
    "genre": "Machine Learning · Classification",
    "logline": "A Python classification project exploring Iris flower species from measured flower features.",
    "stack": [
      "Python",
      "Scikit-learn",
      "Pandas"
    ],
    "build": [
      "A Python classification project exploring Iris flower species from measured flower features.",
      "Repository documentation describes data preparation, species classification, model evaluation."
    ],
    "features": [
      "Data preparation",
      "Species classification",
      "Model evaluation"
    ],
    "metrics": [
      {
        "value": "Python",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "GitHub",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/Iris-Flower-Classification",
    "palette": {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"},
    "motif": "flow",
    "cover": "/assets/projects/iris.webp"
  },
  {
    "id": "sales",
    "title": "Sales Prediction",
    "year": "2026",
    "genre": "Machine Learning · Regression",
    "logline": "Linear regression to predict sales from TV, radio and newspaper advertising budgets.",
    "stack": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib"
    ],
    "build": [
      "Linear regression to predict sales from TV, radio and newspaper advertising budgets.",
      "Repository documentation describes advertising dataset, linear regression, actual versus predicted visualization."
    ],
    "features": [
      "Advertising dataset",
      "Linear regression",
      "Actual versus predicted visualization"
    ],
    "metrics": [
      {
        "value": "Python",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "GitHub",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/Sales_Prediction",
    "palette": {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"},
    "motif": "flow",
    "cover": "/assets/projects/sales.webp"
  },
  {
    "id": "missing-data",
    "title": "Hospital Missing-Data Repair",
    "year": "2026",
    "genre": "Healthcare · Data Quality",
    "logline": "A synthetic hospital occupancy study comparing imputation methods and their effect on predictive modelling.",
    "stack": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Tkinter"
    ],
    "build": [
      "A synthetic hospital occupancy study comparing imputation methods and their effect on predictive modelling.",
      "Repository documentation describes missingness simulation, imputation comparison, feature engineering, desktop interface."
    ],
    "features": [
      "Missingness simulation",
      "Imputation comparison",
      "Feature engineering",
      "Desktop interface"
    ],
    "metrics": [
      {
        "value": "Python",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "GitHub",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/Hospital-Bed-Occupancy-Missing-Data-Repair",
    "palette": {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"},
    "motif": "flow",
    "cover": "/assets/projects/careshield.webp"
  },
  {
    "id": "melting-spot",
    "title": "The Melting Spot",
    "year": "2026",
    "genre": "Web Development · Ordering",
    "logline": "A responsive restaurant ordering website with menu discovery, cart, order tracking and owner administration.",
    "stack": [
      "JavaScript",
      "Supabase",
      "Vercel"
    ],
    "build": [
      "A responsive restaurant ordering website with menu discovery, cart, order tracking and owner administration.",
      "Repository documentation describes menu and deals, persistent cart, order tracking, owner dashboard."
    ],
    "features": [
      "Menu and deals",
      "Persistent cart",
      "Order tracking",
      "Owner dashboard"
    ],
    "metrics": [
      {
        "value": "JavaScript",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "GitHub",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/the-melting-spot-restaurant-website",
    "palette": {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"},
    "motif": "flow",
    "live": "https://the-melting-spot.vercel.app"
  },
  {
    "id": "sabahat",
    "title": "Sabahat Homeoclinic",
    "year": "2026",
    "genre": "Web Development · Healthcare",
    "logline": "A public clinic website with a private doctor dashboard for visits, treatment records and follow-ups.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ],
    "build": [
      "A public clinic website with a private doctor dashboard for visits, treatment records and follow-ups.",
      "Repository documentation describes doctor access, patient records, follow-up management, excel-compatible export."
    ],
    "features": [
      "Doctor access",
      "Patient records",
      "Follow-up management",
      "Excel-compatible export"
    ],
    "metrics": [
      {
        "value": "Next.js",
        "label": "Core technology"
      },
      {
        "value": "2026",
        "label": "Project year"
      },
      {
        "value": "GitHub",
        "label": "Project context"
      }
    ],
    "github": "https://github.com/ahmedmasood005-lab/Sabahat-Homeoclinic-Management-System",
    "palette": {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"},
    "motif": "shield",
    "live": "https://sabahat-homeoclinic.vercel.app"
  }
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    "id": "intern-0",
    "title": "Data Science Internship",
    "org": "BeeNeural.AI",
    "detail": "Data cleaning, exploratory analysis and machine-learning model development with Python. Worked with Pandas, NumPy, Scikit-learn, SQL and visualization tools.",
    "laurel": "2 July – 27 August 2026"
  },
  {
    "id": "intern-1",
    "title": "Data Science Internship",
    "org": "M Tech Production & Marketing",
    "detail": "Healthcare analytics, missing-data analysis and predictive modelling. Built practical dashboards and AI applications; documented project results.",
    "laurel": "10 June – 25 July 2026"
  },
  {
    "id": "intern-2",
    "title": "Data Science Internship",
    "org": "CodeAlpha",
    "detail": "Developed Iris Flower Classification and Sales Prediction projects. Applied data preprocessing, exploratory analysis and model evaluation.",
    "laurel": "10 May – 10 June 2026"
  }
];

export type Certification = { issuer: string; name: string; link: string; preview: string; kind: string; date: string };

export const certifications: Certification[] = certificateDocuments;

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    "id": "programming",
    "title": "Programming",
    "subtitle": "Tools for working with data",
    "skills": [
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "SQL",
        "mono": "SQ"
      },
      {
        "name": "C++",
        "mono": "C+"
      }
    ]
  },
  {
    "id": "analysis",
    "title": "Data Analysis",
    "subtitle": "Prepare, explore and explain",
    "skills": [
      {
        "name": "Pandas",
        "mono": "Pa"
      },
      {
        "name": "NumPy",
        "mono": "Nu"
      },
      {
        "name": "Matplotlib",
        "mono": "Ma"
      },
      {
        "name": "Seaborn",
        "mono": "Se"
      }
    ]
  },
  {
    "id": "ml",
    "title": "Machine Learning",
    "subtitle": "Prediction and evaluation",
    "skills": [
      {
        "name": "Scikit-learn",
        "mono": "Sc"
      },
      {
        "name": "Predictive Modelling",
        "mono": "Pr"
      },
      {
        "name": "Model Evaluation",
        "mono": "Mo"
      },
      {
        "name": "PyTorch",
        "mono": "Py"
      }
    ]
  },
  {
    "id": "genai",
    "title": "Generative AI",
    "subtitle": "Assistants and intelligent workflows",
    "skills": [
      {
        "name": "Function Calling",
        "mono": "Fu"
      },
      {
        "name": "RAG",
        "mono": "RA"
      },
      {
        "name": "Generative AI",
        "mono": "Ge"
      }
    ]
  },
  {
    "id": "bi",
    "title": "BI & Visualization",
    "subtitle": "Communicating insights",
    "skills": [
      {
        "name": "Power BI",
        "mono": "Po"
      },
      {
        "name": "Tableau",
        "mono": "Ta"
      },
      {
        "name": "Plotly",
        "mono": "Pl"
      },
      {
        "name": "Streamlit",
        "mono": "St"
      }
    ]
  },
  {
    "id": "tools",
    "title": "Development Tools",
    "subtitle": "Build and share projects",
    "skills": [
      {
        "name": "Git / GitHub",
        "mono": "Gi"
      },
      {
        "name": "SQLite",
        "mono": "SQ"
      },
      {
        "name": "Tkinter",
        "mono": "Tk"
      },
      {
        "name": "Docker",
        "mono": "Do"
      }
    ]
  }
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  "Python": [
    "CareShield AI",
    "Sales Prediction",
    "Iris Classification"
  ],
  "Scikit-learn": [
    "Iris Classification",
    "CareShield AI"
  ],
  "PyTorch": [
    "DeepSight research prototype"
  ],
  "Function Calling": [
    "MediBook AI"
  ],
  "SQLite": [
    "CareShield AI",
    "MediBook AI"
  ],
  "Git / GitHub": [
    "Public project repositories"
  ],
  "Streamlit": [
    "CareShield AI"
  ]
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};







export const seasons: Season[] = [
  {
    "number": 1,
    "title": "The Foundations",
    "period": "2022 – 2024",
    "synopsis": "Matric at Shoukat Public School and College, followed by ICS at Royal Edward School and College.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Foundations",
        "description": "Matric at Shoukat Public School and College, followed by ICS at Royal Edward School and College.",
        "tags": [
          "Biology",
          "Computer Science"
        ],
        "runtime": "2022 – 2024",
        "palette": {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"}
      }
    ]
  },
  {
    "number": 2,
    "title": "Data Science Begins",
    "period": "2025 – 2029",
    "synopsis": "BS Data Science at PAF-IAST, Haripur. Expected graduation: December 2029.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "Data Science Begins",
        "description": "BS Data Science at PAF-IAST, Haripur. Expected graduation: December 2029.",
        "tags": [
          "Python",
          "Statistics",
          "Data Science"
        ],
        "runtime": "2025 – 2029",
        "palette": {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"}
      }
    ]
  },
  {
    "number": 3,
    "title": "Learning Through Internships",
    "period": "2026",
    "synopsis": "Data Science internship experience at CodeAlpha, M Tech Production & Marketing and BeeNeural.AI.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "Learning Through Internships",
        "description": "Data Science internship experience at CodeAlpha, M Tech Production & Marketing and BeeNeural.AI.",
        "tags": [
          "Analysis",
          "Machine Learning",
          "Teamwork"
        ],
        "runtime": "2026",
        "palette": {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"}
      }
    ]
  },
  {
    "number": 4,
    "title": "Building Practical Solutions",
    "period": "2026",
    "synopsis": "Healthcare analytics, appointment assistants, image detection research and deployed websites.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Building Practical Solutions",
        "description": "Healthcare analytics, appointment assistants, image detection research and deployed websites.",
        "tags": [
          "Healthcare AI",
          "Generative AI",
          "Web Applications"
        ],
        "runtime": "2026",
        "palette": {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"}
      }
    ]
  },
  {
    "number": 5,
    "title": "The Next Chapter",
    "period": "Now",
    "synopsis": "Open to Data Science internships, collaborative projects and learning opportunities.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "The Next Chapter",
        "description": "Open to Data Science internships, collaborative projects and learning opportunities.",
        "tags": [
          "Data Analytics",
          "Responsible AI",
          "Collaboration"
        ],
        "runtime": "Now",
        "palette": {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"}
      }
    ]
  }
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    "label": "Focus",
    "title": "Healthcare AI",
    "detail": "Exploring practical healthcare analytics",
    "palette": {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"}
  },
  {
    "label": "Language",
    "title": "Python",
    "detail": "Data preparation, modelling and applications",
    "palette": {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"}
  },
  {
    "label": "Featured project",
    "title": "CareShield AI",
    "detail": "Readmission risk prototype",
    "palette": {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"}
  },
  {
    "label": "AI assistant",
    "title": "MediBook AI",
    "detail": "Authenticated booking tools",
    "palette": {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"}
  },
  {
    "label": "Research",
    "title": "DeepSight",
    "detail": "RGB and frequency image analysis",
    "palette": {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"}
  },
  {
    "label": "Analytics",
    "title": "Sales Prediction",
    "detail": "Advertising budgets and regression",
    "palette": {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"}
  },
  {
    "label": "Learning",
    "title": "PAF-IAST",
    "detail": "BS Data Science · Expected 2029",
    "palette": {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"}
  },
  {
    "label": "Experience",
    "title": "Three Internships",
    "detail": "CodeAlpha · M Tech · BeeNeural.AI",
    "palette": {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"}
  },
  {
    "label": "Live website",
    "title": "The Melting Spot",
    "detail": "Restaurant ordering experience",
    "palette": {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"}
  },
  {
    "label": "Open to",
    "title": "Collaboration",
    "detail": "Data Science, AI and analytics",
    "palette": {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"}
  }
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    "kicker": "Meet Ahmed",
    "title": "Data Science Student",
    "lines": [
      "PAF-IAST · Haripur, Pakistan",
      "Python · SQL · Machine Learning · Generative AI"
    ]
  },
  {
    "kicker": "Experience",
    "title": "Learning by Building",
    "lines": [
      "BeeNeural.AI · 2 July – 27 August 2026",
      "M Tech Production & Marketing · 10 June – 25 July 2026",
      "CodeAlpha · 10 May – 10 June 2026"
    ]
  },
  {
    "kicker": "Projects",
    "title": "Data into Decisions",
    "lines": [
      "CareShield AI · MediBook AI · DeepSight",
      "Iris Classification · Sales Prediction",
      "Healthcare analytics and deployed web applications"
    ]
  },
  {
    "kicker": "Next chapter",
    "title": "Let’s Collaborate",
    "lines": [
      "Open to internships and collaborative projects",
      "ahmed321masood@gmail.com"
    ]
  }
];

export type ProfileId = 'ahmed' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ahmed',
    name: 'Ahmed',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: '10 project and learning highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Experience', card: 'Internship Experience', meta: `${achievements.length} Internships`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
