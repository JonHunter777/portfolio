const I18N = {
  ua: {
    "nav.about": "Про мене",
    "nav.skills": "Навички",
    "nav.experience": "Досвід",
    "nav.education": "Освіта",
    "nav.contact": "Контакти",

    "hero.kicker": "Резюме · 2026",
    "hero.name": "Талавиря Іван",
    "hero.role": "Frontend Developer",
    "hero.tagline": "Junior, який кодить, вчиться і запускає.",
    "hero.cta.contact": "Зв'язатися",
    "hero.cta.work": "Переглянути досвід",
    "hero.loc": "Дніпро, Україна · відкритий до релокації",

    "about.label": "01 — Про мене",
    "about.title": "Коротко про мене",
    "about.body": "Шукаю позицію, де можу застосувати технічні навички верстки та вміння працювати з контентом. Маю досвід самостійної роботи над веб-проєктами, регулярно використовую AI-інструменти. Швидко навчаюся новому, вмію самостійно знаходити рішення нестандартних задач.",
    "about.qualitiesTitle": "Сильні сторони",

    "skills.label": "02 — Навички",
    "skills.title": "Технічний стек",
    "skills.note": "Інструменти, з якими працюю щодня",

    "exp.label": "03 — Досвід",
    "exp.title": "Досвід роботи",

    "edu.label": "04 — Освіта",
    "edu.title": "Освіта",

    "contact.label": "05 — Контакти",
    "contact.title": "Працюймо разом",
    "contact.body": "Відкритий до пропозицій та цікавих проєктів. Найшвидше відповім у Telegram.",
    "footer.copy": "© 2026 Іван Талавиря. Зібрано на HTML, CSS та Vanilla JS.",

    "theme.toggle": "Тема",
    "present": "по т. ч.",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.kicker": "Résumé · 2026",
    "hero.name": "Ivan Talavyrya",
    "hero.role": "Frontend Developer",
    "hero.tagline": "Junior who codes, learns and ships.",
    "hero.cta.contact": "Get in touch",
    "hero.cta.work": "View experience",
    "hero.loc": "Dnipro, Ukraine · open to relocation",

    "about.label": "01 — About",
    "about.title": "A little about me",
    "about.body": "Looking for a role where I can apply my markup skills and ability to work with content. I have hands-on experience building web projects independently and use AI tools daily. I learn fast and can find solutions to non-standard tasks on my own.",
    "about.qualitiesTitle": "Strengths",

    "skills.label": "02 — Skills",
    "skills.title": "Tech stack",
    "skills.note": "Tools I work with every day",

    "exp.label": "03 — Experience",
    "exp.title": "Work experience",

    "edu.label": "04 — Education",
    "edu.title": "Education",

    "contact.label": "05 — Contact",
    "contact.title": "Let's work together",
    "contact.body": "Open to offers and interesting projects. Telegram is the fastest way to reach me.",
    "footer.copy": "© 2026 Ivan Talavyrya. Hand-built with HTML, CSS & Vanilla JS.",

    "theme.toggle": "Theme",
    "present": "present",
  }
};


const LISTS = {
  qualities: {
    ua: ["Аналітичне мислення", "Швидке навчання", "Легкість у спілкуванні", "Готовність до викликів", "Орієнтація на результат"],
    en: ["Analytical thinking", "Fast learner", "Easy communication", "Ready for challenges", "Result-oriented"]
  },
  
  skills: [
    "HTML5", "CSS3", "JavaScript", "Git", "WordPress", "Figma", "Canva", "AI Tools"
  ],
  experience: {
    ua: [
      {
        org: "Fernir",
        role: "Frontend-розробник",
        period: "2025 — 2026",
        tag: "SaaS · міжнародні клієнти · UpWork · ESLint",
        points: [
          "Верстав інтерфейси за макетами: адаптивна верстка, валідація форм",
          "Писав JS-логіку (Vanilla JS) для інтерактивних компонентів порталу",
          "Працював у команді через GitLab, здавав задачі в реліз"
        ]
      },
      {
        org: "Агро-Країна",
        role: "Ведучий менеджер з продажу",
        period: "2022 — 2026",
        tag: "Продажі · CRM · команда",
        points: [
          "Активний продаж сільгосппродукції та обладнання",
          "Консультації та індивідуальний підбір обладнання для клієнтів",
          "Виконання плану продажу, постановка цілей перед командою",
          "Робота з CRM для аналізу даних та управління базою клієнтів",
          "Навчання співробітників, розвиток рекламних кампаній бренду"
        ]
      }
    ],
    en: [
      {
        org: "Fernir",
        role: "Frontend Developer",
        period: "2025 — 2026",
        tag: "SaaS · International clients · UpWork",
        points: [
          "Built interfaces from mockups: responsive layout, form validation",
          "Wrote JS logic (Vanilla JS) for interactive portal components",
          "Worked in a team via GitLab, shipped tasks to release"
        ]
      },
      {
        org: "Agro-Kraina",
        role: "Lead Sales Manager",
        period: "2022 — 2026",
        tag: "Sales · CRM · team",
        points: [
          "Active sales of agricultural products and equipment",
          "Client consulting and individual equipment selection",
          "Meeting sales targets, setting goals for the team",
          "Using CRM for data analysis and managing the client base",
          "Training employees, developing brand advertising campaigns"
        ]
      }
    ]
  },
  education: {
    ua: [
      {
        org: "Український державний університет науки та технологій (УДУНТ)",
        field: "Матеріалознавство, магістр",
        period: "2019 — 2024"
      },
      {
        org: "Дніпровський індустріально-педагогічний фаховий коледж",
        field: "Технік-механік",
        period: "2013 — 2019"
      }
    ],
    en: [
      {
        org: "Ukrainian State University of Science and Technologies (USUST)",
        field: "Materials Science, Master's",
        period: "2019 — 2024"
      },
      {
        org: "Dnipro Industrial-Pedagogical Vocational College",
        field: "Mechanical Technician",
        period: "2013 — 2019"
      }
    ]
  }
};


const CONTACTS = [
  { id: "phone",    label: "Phone",    value: "+380 50 227 23 86",        href: "tel:+380502272386" },
  { id: "email",    label: "Email",    value: "vanwa1997@gmail.com",        href: "mailto:vanwa1997@gmail.com" },
  { id: "telegram", label: "Telegram", value: "@ivandarber",               href: "https://t.me/ivandarber" },
  { id: "linkedin", label: "LinkedIn", value: "Ivan Talavyrya",       href: "https://www.linkedin.com/in/ivan-talavyrya-027574347/" },
  { id: "github",   label: "GitHub",   value: "JonHunter777",     href: "https://github.com/JonHunter777" },
];
