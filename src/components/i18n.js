import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: savedLang,
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          skills: "Skills",
          services: "Services",
          portfolio: "Portfolio",
          clients: "Clients",
          contacts: "Contacts",
        },
        home: {
          titleHome: "Hi, I am Yuriy",
          paragraphHome:
            "I create stunning websites for your business, Highly experienced in web design and development",
          contactMe: "Contact me",
          scrollButton: "Scroll down",
        },
        about: {
          titleAbout: "About me",
          name: "I'm Yuriy",
          devLine: "A <0>Front-End Developer</0> based in <1>Ukraine</1>",
          paragraphAbout:
            "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio",
          experience: "Years of experience",
          customers: "Happy Customers",
          projects: "Success Projects",
          downloadButton: "Download",
        },
        skills: {
          educationSkills: "Education & Skills",
          educationSkillsParagraph:
            "For more than 3 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language.",
          education: "Education",
          awards: "Awards",
          skills: "Skills",
          workExperience: "Work & Experience",
          items: {
            html: "HTML",
            css: "CSS",
            js: "JavaScript",
            jquery: "jQuery",
            react: "React",
          },
          educationList: {
            phd: {
              degree: "Engineer",
              institution: "Kherson National Technical University",
            },
            fb: {
              degree: "Front-end Basic",
              institution: "Hillel IT Scholl",
            },
            fp: {
              degree: "Front-end Pro",
              institution: "Hillel IT Scholl",
            },
            fpr: {
              degree: "Front-end Pro React",
              institution: "Hillel IT Scholl",
            },
          },
          awardsList: {
            dev: {
              title: "Best Developer",
              institution: "University Of Melbourne, NA",
            },
            writer: {
              title: "Best Writer",
              institution: "Online Typodev Solution Ltd.",
            },
            freelancer: {
              title: "Best Freelancer",
              institution: "Fiverr & Upwork Level 2 & Top Rated",
            },
          },
          experience: {
            senior: {
              title: "Sr. Graphic Designer",
              type: "Part Time | Office",
              company: "Avada Theme.",
              description:
                "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
            },
            creative: {
              title: "Cr. Web Developer",
              type: "Full Time | InHouse",
              company: "ib-themes ltd.",
              description:
                "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
            },
            junior: {
              title: "Jr. Web Developer",
              type: "Full Time | Remote",
              company: "Creative Gigs.",
              description:
                "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
            },
          },
        },
        services: {
          title: "Services",
          subtitle: "Services",
          description: "What I provide",
          learnMore: "Learn more",
          items: {
            uiux: {
              title: "UI/UX Consultancy",
              subtitle: "What is UX consulting?",
              description:
                "UX consulting helps companies improve their product's overall usability and optimize user interaction to drive business goals.",
              list: [
                "Establish the right UX processes",
                "Create exceptional user experiences",
                "Discover new business opportunities",
                "Save resources",
              ],
            },
            branding: {
              title: "Branding & Design",
              subtitle: "What is Brand & Design?",
              description:
                "Brand design defines how a brand visually expresses itself across media to communicate its personality and values.",
              list: [
                "Logo design",
                "Banner design",
                "Visual identity packages",
                "Business cards and business systems",
              ],
            },
            webdev: {
              title: "Web Development",
              subtitle: "What is Web Development?",
              description:
                "Web development services cover designing, building, and supporting modern web applications and sites.",
              list: ["Web application development", "Testing", "Maintenance"],
            },
            content: {
              title: "Content Writing",
              subtitle: "What is Content Writing?",
              description:
                "Content writing is the process of planning, drafting, and editing digital copy to engage audiences and improve discoverability.",
              list: [
                "Web content writing",
                "Blog writing for websites",
                "Social media content",
              ],
            },
          },
        },
        footer: {
          role: "Frontend Developer",
          more: "More",
          follow: "Follow",
          copyright: "(c) {{year}} by Yuriy. All rights reserved.",
        },
        contact: {
          title: "Contact Me",
          subtitle: "Contact Me",
          heading: "Let's discuss your project",
          right: {
            text: "I'm always open to discussing product",
            highlight: "design work or partnerships.",
          },
          form: {
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            send: "Send Message",
          },
          items: {
            phone: {
              title: "Phone",
              value: "+38 068 9777710",
            },
            email: {
              title: "Email Address",
              value: "yuri.baranov83@gmail.com",
            },
            address: {
              title: "Official Address",
              value: "Odesa, Kurortny Lane 1a",
            },
          },
        },
        clients: {
          title: "Our Clients",
          subtitle: "Our Clients",
          items: {
            aria: {
              description:
                "Hi, I'm Aria Collins and I am a designer & developer who dreams of making the world a better place through products. I work actively with international clients.",
              position: "Marketing Manager",
            },
            cillian: {
              description:
                "Hi, I'm Cillian Metcalfe and I am a designer & developer who dreams of making the world a better place through products. I work actively with international clients.",
              position: "Graphic Designer",
            },
            kianna: {
              description:
                "Hi, I'm Kianna Baird and I am a designer & developer who dreams of making the world a better place through products. I work actively with international clients.",
              position: "App Developer",
            },
          },
        },
        portfolio: {
          title: "Portfolio",
          subtitle: "Portfolio",
          items: {
            uiux: {
              title: "UI/UX Design",
              category: "Mobile App",
              description:
                "Designing intuitive and user-friendly interfaces for mobile applications. Creating wireframes, design systems, and interactive prototypes focused on smooth user experience.",
            },
            branding: {
              title: "Branding & Design",
              category: "Brand Identity",
              description:
                "Developing complete brand identities including logos, color palettes, typography, and visual guidelines that build a strong and recognizable brand presence.",
            },
            webdesign: {
              title: "Web Design",
              category: "Landing Page",
              description:
                "Crafting modern and high-conversion web designs for landing pages. Focused on clean UI, strong visual hierarchy, and engaging interactive elements.",
            },
            webdev: {
              title: "Web Development",
              category: "Frontend",
              description:
                "Building responsive and functional websites using modern frontend technologies. Clean code, performance optimization, and interactive UI components.",
            },
            content: {
              title: "Content Writing",
              category: "Copywriting",
              description:
                "Creating engaging and well-structured content for websites, social media, and marketing campaigns. Clear messaging and brand-aligned tone of voice.",
            },
            interface: {
              title: "Interface Design",
              category: "Dashboard UI",
              description:
                "Designing user interfaces for complex dashboards and admin panels. Focus on data clarity, intuitive navigation, and seamless user workflows.",
            },
          },
        },
        getInTouch: {
          line1: "LET'S TALK",
          line2: "ABOUT YOUR",
          line3: "NEXT PROJECT",
          cta: "Contact me",
        },
      },
    },
    ua: {
      translation: {
        nav: {
          home: "Головна",
          about: "Про мене",
          skills: "Навички",
          services: "Послуги",
          portfolio: "Портфоліо",
          clients: "Клієнти",
          contacts: "Контакти",
        },
        home: {
          titleHome: "Привіт, я Юрій",
          paragraphHome:
            "Створюю вражаючі сайти для вашого бізнесу, маю великий досвід у вебдизайні та розробці.",
          contactMe: "Зв'язатися зі мною",
          scrollButton: "Прокрутити вниз",
        },
        about: {
          titleAbout: "Про мене",
          name: "Я Юрій",
          devLine: "<0>Фронтенд-розробник</0> з <1>України</1>",
          paragraphAbout:
            "Я проектую та розробляю сервіси для замовників, спеціалізуючись на створенні стильних, сучасних сайтів, вебсервісів і онлайн-магазинів. Моя пристрасть — проєктувати зручні цифрові досвіди через змістовні взаємодії. Погляньте моє портфоліо.",
          experience: "Роки досвіду",
          customers: "Задоволені клієнти",
          projects: "Успішні проєкти",
          downloadButton: "Завантажити",
        },
        skills: {
          educationSkills: "Освіта й навички",
          educationSkillsParagraph:
            "Понад 3 років наші експерти працюють із сучасною веброзробкою та новими мовами програмування для веба й застосунків.",
          education: "Освіта",
          awards: "Нагороди",
          skills: "Навички",
          workExperience: "Робота й досвід",
          items: {
            html: "HTML",
            css: "CSS",
            js: "JavaScript",
            jquery: "jQuery",
            react: "React",
          },
          educationList: {
            phd: {
              degree: "Інженер",
              institution: "Xерсонський національний технічний університет",
            },
            fb: {
              degree: "Front-end Basic",
              institution: "Hillel IT Scholl",
            },
            fp: {
              degree: "Front-end Pro",
              institution: "Hillel IT Scholl",
            },
            fpr: {
              degree: "Front-end Pro React",
              institution: "Hillel IT Scholl",
            },
          },
          awardsList: {
            dev: {
              title: "Найкращий розробник",
              institution: "Університет Мельбурна, NA",
            },
            writer: {
              title: "Найкращий автор",
              institution: "Online Typodev Solution Ltd.",
            },
            freelancer: {
              title: "Найкращий фрилансер",
              institution: "Fiverr & Upwork Level 2 & Top Rated",
            },
          },
          experience: {
            senior: {
              title: "Ст. графічний дизайнер",
              type: "Part Time | Office",
              company: "Avada Theme.",
              description:
                "Я проектую та розробляю сервіси для замовників будь-якого масштабу, спеціалізуючись на стильних, сучасних сайтах",
            },
            creative: {
              title: "Креативний веброзробник",
              type: "Full Time | InHouse",
              company: "ib-themes ltd.",
              description:
                "Я проектую та розробляю сервіси для замовників будь-якого масштабу, спеціалізуючись на стильних, сучасних сайтах",
            },
            junior: {
              title: "Мол. веброзробник",
              type: "Full Time | Remote",
              company: "Creative Gigs.",
              description:
                "Я проектую та розробляю сервіси для замовників будь-якого масштабу, спеціалізуючись на стильних, сучасних сайтах",
            },
          },
        },
        services: {
          title: "Послуги",
          subtitle: "Послуги",
          description: "Що я пропоную",
          learnMore: "Дізнатись більше",
          items: {
            uiux: {
              title: "UI/UX консалтинг",
              subtitle: "Що таке UX-консалтинг?",
              description:
                "UX-консалтинг допомагає компаніям покращувати загальну зручність продукту та оптимізувати взаємодію користувачів для досягнення бізнес-цілей.",
              list: [
                "Налагодити ефективні UX-процеси",
                "Створювати винятковий користувацький досвід",
                "Відкривати нові бізнес-можливості",
                "Економити ресурси",
              ],
            },
            branding: {
              title: "Брендинг і дизайн",
              subtitle: "Що таке бренд-дизайн?",
              description:
                "Бренд-дизайн визначає, як бренд візуально виражає себе в різних медіа, щоб передати свій характер і цінності.",
              list: [
                "Дизайн логотипів",
                "Дизайн банерів",
                "Пакети візуальної айдентики",
                "Візитки та фірмові бланки",
              ],
            },
            webdev: {
              title: "Веброзробка",
              subtitle: "Що таке веброзробка?",
              description:
                "Послуги веброзробки охоплюють проєктування, створення та підтримку сучасних вебзастосунків і сайтів.",
              list: ["Розробка вебзастосунків", "Тестування", "Підтримка"],
            },
            content: {
              title: "Написання контенту",
              subtitle: "Що таке написання контенту?",
              description:
                "Написання контенту — це процес планування, підготовки та редагування цифрових текстів для залучення аудиторії та покращення видимості.",
              list: [
                "Написання текстів для сайтів",
                "Блоги для вебсайтів",
                "Контент для соцмереж",
              ],
            },
          },
        },
        footer: {
          role: "Фронтенд-розробник",
          more: "Більше",
          follow: "Стежити",
          copyright: "(c) {{year}} від Yuriy. Усі права захищено.",
        },
        contact: {
          title: "Зв'яжіться зі мною",
          subtitle: "Зв'яжіться зі мною",
          heading: "Давайте обговоримо ваш проєкт",
          right: {
            text: "Я завжди відкритий до обговорення",
            highlight: "дизайну продуктів або партнерств.",
          },
          form: {
            name: "Ім'я",
            email: "Ел. пошта",
            subject: "Тема",
            message: "Повідомлення",
            send: "Надіслати повідомлення",
          },
          items: {
            phone: {
              title: "Телефон",
              value: "+38 068 9777710",
            },
            email: {
              title: "Електронна адреса",
              value: "yuri.baranov83@gmail.com",
            },
            address: {
              title: "Офіційна адреса",
              value: "Одеса, Курортний провулок 1а",
            },
          },
        },
        clients: {
          title: "Наші клієнти",
          subtitle: "Наші клієнти",
          items: {
            aria: {
              description:
                "Привіт, я Арія Коллінз — дизайнерка й розробниця, що мріє робити світ кращим через продукти. Активно співпрацюю з міжнародними клієнтами.",
              position: "Маркетинговий менеджер",
            },
            cillian: {
              description:
                "Привіт, я Сілліан Меткалф — дизайнер і розробник, який прагне робити світ кращим через продукти. Активно працюю з міжнародними клієнтами.",
              position: "Графічний дизайнер",
            },
            kianna: {
              description:
                "Привіт, я Кіанна Бейрд — дизайнерка й розробниця, що прагне робити світ кращим через продукти. Активно співпрацюю з міжнародними клієнтами.",
              position: "Розробниця застосунків",
            },
          },
        },
        portfolio: {
          title: "Портфоліо",
          subtitle: "Портфоліо",
          items: {
            uiux: {
              title: "UI/UX дизайн",
              category: "Мобільний застосунок",
              description:
                "Проєктування інтуїтивних і зручних інтерфейсів для мобільних застосунків. Створення вайрфреймів, дизайн-систем і інтерактивних прототипів з акцентом на плавний досвід користувача.",
            },
            branding: {
              title: "Брендинг і дизайн",
              category: "Айдентика бренду",
              description:
                "Розробка повної айдентики: логотипи, кольорові палітри, типографіка та гайдлайни, що формують сильний і впізнаваний бренд.",
            },
            webdesign: {
              title: "Вебдизайн",
              category: "Лендінг",
              description:
                "Створення сучасних дизайнів лендінгів із високою конверсією. Фокус на чистому UI, чіткій ієрархії та інтерактивних елементах.",
            },
            webdev: {
              title: "Веброзробка",
              category: "Frontend",
              description:
                "Розробка адаптивних і функціональних сайтів із використанням сучасних фронтенд-технологій. Чистий код, оптимізація продуктивності та інтерактивні компоненти.",
            },
            content: {
              title: "Контент-райтинг",
              category: "Копірайтинг",
              description:
                "Створення захопливого та структурованого контенту для сайтів, соцмереж і маркетингових кампаній. Чіткі меседжі та тон, що відповідає бренду.",
            },
            interface: {
              title: "Дизайн інтерфейсів",
              category: "Dashboard UI",
              description:
                "Дизайн інтерфейсів для складних дашбордів і адмін-панелей. Акцент на ясності даних, інтуїтивній навігації та безшовних сценаріях користувача.",
            },
          },
        },
        getInTouch: {
          line1: "ДАВАЙТЕ ОБГОВОРИМО",
          line2: "ВАШ",
          line3: "НАСТУПНИЙ ПРОЄКТ",
          cta: "Зв'язатися",
        },
      },
    },
  },
});

export default i18n;
