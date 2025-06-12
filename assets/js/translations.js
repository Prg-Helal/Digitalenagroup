// // translations.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Translation dictionary
//     const translations = {
//         "home": {
//             "en": "Home",
//             "ar": "الرئيسية"
//         },
//         "about": {
//             "en": "About",
//             "ar": "من نحن"
//         },
//         "services": {
//             "en": "Services",
//             "ar": "خدماتنا"
//         },
//         "contact": {
//             "en": "Contact",
//             "ar": "اتصل بنا"
//         },
//         "blogs": {
//             "en": "Blogs",
//             "ar": "المدونة"
//         },
//         "statistics_card1": {
//             "en": "<span>Of small businesses </span>that invest in digital marketing see a significant boost in brand awareness within the first year.",
//             "ar": "<span>من الشركات الصغيرة </span>التي تستثمر في التسويق الرقمي تشهد زيادة كبيرة في الوعي بالعلامة التجارية خلال السنة الأولى."
//         },
//         "statistics_card2": {
//             "en": "<span>Of people feel</span> more loyal to brands with great content.",
//             "ar": "<span>من الناس يشعرون</span> بالولاء للعلامات التجارية التي تقدم محتوى رائعًا."
//         },
//         "about_title": {
//             "en": "About Digitalena",
//             "ar": "من نحن"
//         },
//         "about_text": {
//             "en": "We are a digital marketing agency with over 21 years of experience helping brands grow online. From SEO to paid campaigns, we specialize in making your presence stand out.",
//             "ar": "نحن وكالة تسويق رقمي لدينا أكثر من 21 عامًا من الخبرة في مساعدة العلامات التجارية على النمو عبر الإنترنت. من تحسين محركات البحث إلى الحملات المدفوعة، نحن متخصصون في جعل وجودك مميزًا."
//         },
//         "services_title": {
//             "en": "Our Services",
//             "ar": "خدماتنا"
//         },
//         "search_placeholder": {
//             "en": "Search",
//             "ar": "بحث"
//         },
//         "contact_us": {
//             "en": "Contact Us",
//             "ar": "اتصل بنا"
//         },
//         "get_in_touch": {
//             "en": "Get in Touch",
//             "ar": "ابقى على تواصل"
//         },
//         "phone_label": {
//             "en": "Phone Number",
//             "ar": "رقم الهاتف"
//         },
//         "email_label": {
//             "en": "Email",
//             "ar": "البريد الإلكتروني"
//         },
//         "location_label": {
//             "en": "Location",
//             "ar": "الموقع"
//         },
//         "contact_title": {
//             "en": "Let’s Talk About Your Next Project",
//             "ar": "لنتحدث عن مشروعك القادم"
//         },
//         "name_placeholder": {
//             "en": "Your Name",
//             "ar": "اسمك"
//         },
//         "email_placeholder": {
//             "en": "Your Email",
//             "ar": "بريدك الإلكتروني"
//         },
//         "phone_placeholder": {
//             "en": "Your Phone",
//             "ar": "هاتفك"
//         },
//         "message_placeholder": {
//             "en": "Your Message",
//             "ar": "رسالتك"
//         },
//         "send_button": {
//             "en": "Send",
//             "ar": "إرسال"
//         }
//     };

//     // Elements that need translation
//     const elements = document.querySelectorAll('[data-translate]');
    
//     // Language buttons
//     const langButtons = document.querySelectorAll('.lang-btn');
    
//     // Global icon for toggling
//     const globalIcon = document.querySelector('.global-icon');
    
//     // Function to set language
//     function setLanguage(lang) {
//         // Update HTML direction
//         document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
//         document.documentElement.lang = lang;
        
//         // Update all translatable elements
//         elements.forEach(el => {
//             const key = el.getAttribute('data-translate');
            
//             if (translations[key] && translations[key][lang]) {
//                 if (el.hasAttribute('data-translate-html')) {
//                     // Handle HTML content
//                     el.innerHTML = translations[key][lang];
//                 } else {
//                     // Handle text content
//                     el.textContent = translations[key][lang];
//                 }
//             }
//         });
        
//         // Update active state for language buttons
//         langButtons.forEach(btn => {
//             if (btn.getAttribute('data-lang') === lang) {
//                 btn.classList.add('active');
//             } else {
//                 btn.classList.remove('active');
//             }
//         });
        
//         // Save language preference
//         localStorage.setItem('language', lang);
        
//         // Toggle RTL-specific classes
//         document.body.classList.toggle('rtl-mode', lang === 'ar');
//     }
    
//     // Function to toggle language menu
//     function toggleLanguageMenu() {
//         document.querySelector('.language-switcher').classList.toggle('show-menu');
//     }
    
//     // Set up event listeners
//     langButtons.forEach(btn => {
//         btn.addEventListener('click', function() {
//             const lang = this.getAttribute('data-lang');
//             setLanguage(lang);
//         });
//     });
    
//     if (globalIcon) {
//         globalIcon.addEventListener('click', toggleLanguageMenu);
//     }
    
//     // Initialize with saved language or default to Arabic
//     const savedLang = localStorage.getItem('language') || 'ar';
//     setLanguage(savedLang);
// });