// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Contact Form Submission (only on pages that have the contact form)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Honeypot check
    if (this.company.value) {
      return; // silently fail (bot)
    }

    // Get the current language for messages
    const lang = isArabic ? 'ar' : 'en';

    emailjs.sendForm(
      "service_bhrgddh",
      "template_0pnuwmg",
      this
    ).then(
      function () {
        // Show success message
        const messageContainer = document.getElementById("contact-form-message");
        messageContainer.textContent = translations[lang]['contact-form-success'];
        messageContainer.classList.remove('error');
        messageContainer.classList.add('success', 'show');
        
        // Reset form
        e.target.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
          messageContainer.classList.remove('show');
          setTimeout(() => {
            messageContainer.classList.remove('success');
            messageContainer.textContent = '';
          }, 500);
        }, 5000);
      },
      function (error) {
        // Show error message
        const messageContainer = document.getElementById("contact-form-message");
        messageContainer.textContent = translations[lang]['contact-form-error'];
        messageContainer.classList.remove('success');
        messageContainer.classList.add('error', 'show');
        console.error(error);
        
        // Hide message after 5 seconds
        setTimeout(() => {
          messageContainer.classList.remove('show');
          setTimeout(() => {
            messageContainer.classList.remove('error');
            messageContainer.textContent = '';
          }, 500);
        }, 5000);
      }
    );
  });
}

// Language Toggle
const langToggle = document.getElementById("lang-toggle");
let isArabic = false;

const translations = {
    en: {
        'app-demo-plant': 'Plant a Tree',
        'app-demo-recycle': 'Recycle',
        'app-demo-share': 'Share Progress',
        'social-title': 'Follow Us',
        'footer-desc': 'Environmental community platform for a sustainable UAE future',
        // Team section
        'team-title': 'Our Team',
        'team-subtitle': 'Dedicated professionals working towards a greener UAE',
        'team-member-1-name': 'Dr. Sarah',
        'team-member-1-role': 'Environmental Director',
        'team-member-1-bio': 'Leading environmental scientist with over 15 years of experience in sustainable development and conservation projects across the UAE.',
        'team-member-2-name': 'Ahmed',
        'team-member-2-role': 'Community Engagement Manager',
        'team-member-2-bio': 'Passionate advocate for community involvement in environmental initiatives, specializing in youth engagement and educational programs.',
        'team-member-3-name': 'Fatima',
        'team-member-3-role': 'Project Coordinator',
        'team-member-3-bio': 'Expert in project management and coordination, ensuring successful implementation of tree planting and recycling initiatives.',
        'team-member-4-name': 'Omar',
        'team-member-4-role': 'Technology & Innovation Lead',
        'team-member-4-bio': 'Technology specialist focused on developing innovative solutions for environmental monitoring and community engagement platforms.',
        // Footer Quick Links and Programs
        'footer-quicklinks-title': 'Quick Links',
        'footer-link-about': 'About',
        'footer-link-goals': 'Goals',
        'footer-link-programs': 'Programs',
        'footer-link-app': 'Mobile App',
        'footer-programs-title': 'Programs',
        'footer-program-tree': 'Tree Planting',
        'footer-program-recycle': 'Recycling',
        'footer-program-workshops': 'School Workshops',
        'footer-program-events': 'Community Events',
        'footer-program-expo': 'Eco Expo',
        'footer-download-title': 'Download App',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-expo-about': 'About',
        'nav-goals': 'Goals',
        'nav-q3': 'Recycling Machines',
        'nav-q4': 'Education Bag',
        'nav-q5': 'Mobile Library',
        'nav-programs': 'Programs',
        'nav-team': 'Team',
        'nav-app': 'Mobile App',
        'nav-contact': 'Contact',
        'nav-vision': 'Vision',
        'nav-message': 'Message',
        'nav-topics': 'Topics',
        'lang-btn': 'عربي',
        'hero-title-main': 'Sheikha Shamma Initiative',
        'hero-title-arabic': 'مبادرة الشيخة شما',
        'hero-subtitle': 'Environmental community platform focused on tree planting and recycling culture, targeting youth and children within the framework of UAE Vision 2030 for environmental sustainability.',
        'download-app': 'Download App',
        'learn-more': 'Learn More',
        'about-title': 'About the Initiative',
        'about-subtitle': 'Under the patronage of Sheikha Shamma Bint Mohammed Bin Khalid Al Nahyan',
        'mission-title': 'Our Mission',
        'mission-text': 'The Shamma Initiative is an environmental community platform that aims to spread the culture of tree planting and recycling among community members, especially targeting youth and children, within the framework of UAE Vision 2030 for environmental sustainability.',
        'vision-title': 'Vision 2030',
        'vision-text': 'Aligned with the UAE\'s commitment to environmental sustainability, our initiative contributes to the national vision of creating a greener, more sustainable future for generations to come.',
        'trees-planted': 'Trees Planted',
        'community-members': 'Community Members',
        'schools-engaged': 'Schools Engaged',
        'goals-title': 'Our Goals',
        'goals-subtitle': 'Building a sustainable future for the UAE',
        'goal1-title': 'Raise Awareness',
        'goal1-text': 'Increase awareness about the importance of tree planting as a means to combat desertification and improve air quality',
        'goal2-title': 'Build Strong Institution',
        'goal2-text': 'Create a strong institutional image for the project under Sheikha Shamma\'s name',
        'goal3-title': 'Encourage Participation',
        'goal3-text': 'Promote community participation from individuals and institutions in tree planting and recycling',
        'goal4-title': 'Lead in Tree Planting',
        'goal4-text': 'Become the leading charitable organization specialized in tree planting',
        'goal5-title': 'Promote Recycling',
        'goal5-text': 'Contribute to raising awareness about recycling and its importance to the environment',
        'goal6-title': 'Environmental Impact',
        'goal6-text': 'Create measurable positive environmental impact across the UAE',
        'programs-title': 'Our Programs',
        'programs-subtitle': 'Year-round activities and initiatives',
        'q1-title': 'Eco Expo Industrial Forum and Exhibition',
        'q2-title': 'Smart Afforestation Platform (E.GHARS)',
        'q3-title': 'Distribution of Recycling Machines',
        'q3-subtitle': 'Spreading recycling culture',
        'q4-title': '"Environmental Education Bag" Program (Awareness Kits)',
        'q4-subtitle': 'Enhancing environmental awareness in schools',
        'q5-title': 'Mobile Library for Environmental Education',
        'q5-subtitle': 'Spreading knowledge across the Emirates',
        
        'q1-item1': 'Goal: To showcase the latest innovations and technological solutions in the field of environmental sustainability and clean industry.',
        'q1-item2': 'Slogan: "Smart Industry for a Clean Environment"',
        'q1-item3': 'Themes: Focuses on smart technologies, the circular economy, clean and renewable energy, and industrial emissions management.',
        'q1-item4': 'Date and Location: To be held during the period November 25 - 26, 2025, in Al Dhannah City - Abu Dhabi Emirate.',
        'q2-item1': 'Goal: Aims to promote sustainable afforestation practices using the E-GHARS application.',
        'q2-item2': 'It facilitates the sustainable afforestation process and provides an electronic payment option.',
        'q2-item3': 'It contributes to achieving the UAE\'s goals in reducing the carbon footprint and promoting sustainability.',
        'q3-item1': 'Goal: The objective is to spread the culture of recycling among community members.',
        'q3-item2': 'They provide users with instant rewards (such as mobile credit or points) for used water bottles and beverage cans.',
        'q3-item3': 'Quantitative Goal: To provide 2,000 machines by 2030 to become the main channel for collecting solid waste for recycling.',
        'q4-item1': 'The kit is distributed to students in schools to enhance environmental awareness and encourage correct environmental practices.',
        'q4-item2': 'Its contents include awareness stories, interactive activities, and recycling tools.',
        'q5-item1':'It is a mobile educational library aimed at spreading environmental knowledge and educating the community in various regions.',
        'q5-item2':'It conducts regular tours throughout the Emirates to achieve comprehensive access for all community members.',
        'app-title': 'Download Our Mobile App E.GHARS',
        'app-text': 'Join our community through our interactive mobile application for community participation in tree planting and recycling initiatives.',
        'feature1': 'Share before/after photos',
        'feature2': 'Participate in challenges',
        'feature3': 'Connect with community',
        'feature4': 'Access educational content',
        'team-title': 'Our Team',
        'team-subtitle': 'Dedicated professionals working towards a greener UAE',
        'contact-title': 'Get Involved',
        'contact-subtitle': 'Join our mission for a greener UAE',
        'contact-partnership-title': 'Partnership Opportunities',
        'contact-partnership-text': 'We welcome partnerships with schools, organizations, and individuals who share our vision for environmental sustainability.',
        'contact-email': 'sustainability@smbkc-culture.com',
        'contact-phone': '+971 54 327 4710',
        'contact-address': 'Al Ain, Abu Dhabi, UAE',
        'contact-address': 'Al Ain, Abu Dhabi, UAE',
        // Contact Form Fields - Edit translations below
        'contact-form-name-placeholder': 'Your Name',
        'contact-form-email-placeholder': 'Your Email',
        'contact-form-message-placeholder': 'Your Message',
        'contact-form-send-button': 'Send',
        // Contact Form Messages - Edit translations below
        'contact-form-success': 'Message sent successfully! Thank you for reaching out.',
        'contact-form-error': 'Failed to send message. Please try again later.',
        'footer-copyright': '© 2025 Shamma Initiative. All rights reserved.',
        'footer-powered': 'Powered by SMBKC Culture',
        'footer-follow': 'Follow us:',
        // Expo page translations
        'expo-title-main': 'First Eco Expo Industrial Forum and Exhibition',
        'expo-title-arabic': 'ملتقى ومعرض إيكو إكسبو الصناعي الأول',
        'expo-subtitle': 'Specialized industrial event showcasing the latest innovations and technological solutions in environmental sustainability and clean industry.',
        'learn-more-expo': 'Learn More',
        'expo-vision-title': 'Our Vision',
        'expo-topics-title': 'Paper Topics',
        'expo-goals-title': 'Event Goals',
        'expo-about-title': 'About the Event',
        'expo-message-title': 'Our Message',
        'get-involved': 'Get Involved',
        'definition-title': 'Definition',
        'definition-text': 'It is a specialized industrial event that aims to showcase the latest innovations and technological solutions in the field of environmental sustainability and clean industry, highlight smart applications that contribute to improving industrial processes efficiency, reducing emissions, bringing together companies and specialists to exchange experiences, and supporting the transformation towards a clean and sustainable industrial environment.',
        'vision-innovation': 'Innovation',
        'vision-innovation-text': 'Implementing technological solutions that contribute to reducing environmental impact',
        'vision-industries': 'Smart Industries',
        'vision-industries-text': 'Enabling prudent industries and enhancing social responsibility for sustainable development',
        'message-text': 'Providing a platform for displaying sustainable industrial solutions with emphasis on the role of wise leadership in the UAE, supporting sustainable innovation, and exchanging knowledge and experiences among specialists to achieve a balance between industrial growth, environmental protection, and community well-being.',
        'goal1': 'Enhance Innovation',
        'goal1-text': 'Enhancing industrial innovation in the field of environmental sustainability',
        'goal2': 'Highlight Technologies',
        'goal2-text': 'Highlighting smart technologies in industry to achieve a clean environment',
        'goal3': 'Exchange Experiences',
        'goal3-text': 'Exchanging experiences between companies and specialists in the industrial sector',
        'goal4': 'Stimulate Investments',
        'goal4-text': 'Stimulating investments in sustainable environmental solutions',
        'goal5': 'Raise Awareness',
        'goal5-text': 'Raising awareness of the importance of clean and sustainable industry technologies',
        'goal6': 'Support Innovations',
        'goal6-text': 'Supporting and adopting industrial innovations that contribute to environmental protection',
        'goal7': 'Enhance Cooperation',
        'goal7-text': 'Enhancing cooperation between the public and private sectors to implement innovative environmental solutions',
        'goal8': 'Showcase Solutions',
        'goal8-text': 'Showcasing innovative technological solutions to improve industrial processes efficiency and reduce emissions',
        'topic1-title': 'Smart Technologies in Sustainable Industry',
        'topic1-item1': 'Showcasing the latest technological solutions in green production fields',
        'topic1-item2': 'and Technologies that support sustainability',
        'topic1-item3': 'Monitoring and improving industrial processes for environmental efficiency',
        'topic1-item4': 'through Internet of Things (IoT) applications in industry',
        // Paper topic section
        'topic2-title': 'Circular Economy in Industry',
        'topic2-item1': 'How to apply circular economy concepts in the industrial sector to reduce waste and organize reuse and recycling',
        'topic2-item2': 'Strategies that contribute to reducing waste and improving resource sustainability',
        'topic3-title': 'Clean and Renewable Energy in the Industrial Sector',
        'topic3-item1': 'Technologies for transforming factories into sustainable environments using solar, wind, and biofuel energy',
        'topic3-item2': 'Challenges and opportunities in transitioning to clean energy in industry',
        'topic4-title': 'Innovation in Recycling and Sustainable Materials',
        'topic4-item1': 'New solutions for recycling industrial waste and using eco-friendly alternative materials',
        'topic4-item2': 'The role of biodegradable materials and innovation in manufacturing sustainable products',
        'topic5-title': 'Smart Technologies in Water and Energy Management in Industry',
        'topic5-item1': 'Innovative systems for rationalizing water and energy consumption in factories',
        'topic5-item2': 'Technological improvements in resource management systems to achieve high operational efficiency',
        'topic6-title': 'Management of Industrial Emissions and Carbon Reduction',
        'topic6-item1': 'Strategies and technologies for reducing carbon emissions from industrial processes',
        'topic6-item2': 'The role of clean technologies in achieving global goals for reducing emissions',
        'topic7-title': 'Industrial Innovation in Green Manufacturing',
        'topic7-item1': 'Adopting best practices in green manufacturing that aim to reduce environmental impact and enhance efficiency',
        'topic7-item2': 'Developing production technologies that balance industrial growth and environmental preservation',
        'topic8-title': 'Regulatory and Financial Challenges in Implementing Clean Industry Technologies',
        'topic8-item1': 'Challenges facing companies in adopting sustainable technological solutions',
        'topic8-item2': 'Discussing government policies and incentives to encourage green industrial innovation',
        'about-subtitle': 'A specialized industrial forum under Shamma Initiative',
        'vision-subtitle': 'Striving for a sustainable industrial environment',
        'message-subtitle': 'Providing a platform for sustainable industrial solutions',
        'goals-subtitle': 'Advancing industrial sustainability',
        'topics-subtitle': 'Focus areas for presentations and discussions',
        // Expo footer translations
        'expo-footer-quicklinks-title': 'Quick Links',
        'expo-footer-link-about': 'About',
        'expo-footer-link-vision': 'Vision',
        'expo-footer-link-message': 'Message',
        'expo-footer-link-goals': 'Goals',
        'expo-footer-link-topics': 'Topics',
        'expo-footer-programs-title': 'Programs',
        'expo-footer-download-title': 'Download App',
        // Expo Participation Button - Edit translations below
        'expo-participate-btn': 'Participate Now',
    },
    ar: {
        'app-demo-plant': 'ازرع شجرة',
        'app-demo-recycle': 'إعادة التدوير',
        'app-demo-share': 'شارك التقدم',
        'social-title': 'تابعنا',
        'footer-desc': 'منصة مجتمعية بيئية من أجل مستقبل مستدام لدولة الإمارات',
        // Team section
        'team-title': 'فريقنا',
        'team-subtitle': 'محترفون مكرسون للعمل من أجل إمارات أكثر خضرة',
        'team-member-1-name': 'د. سارة',
        'team-member-1-role': 'مديرة البيئة',
        'team-member-1-bio': 'عالمة بيئة رائدة تتمتع بخبرة تزيد عن 15 عامًا في التنمية المستدامة ومشاريع الحفظ في جميع أنحاء الإمارات.',
        'team-member-2-name': 'أحمد',
        'team-member-2-role': 'مدير مشاركة المجتمع',
        'team-member-2-bio': 'مدافع شغوف عن مشاركة المجتمع في المبادرات البيئية، متخصص في إشراك الشباب والبرامج التعليمية.',
        'team-member-3-name': 'فاطمة',
        'team-member-3-role': 'منسقة المشاريع',
        'team-member-3-bio': 'خبيرة في إدارة وتنسيق المشاريع، تضمن التنفيذ الناجح لمبادرات زراعة الأشجار وإعادة التدوير.',
        'team-member-4-name': 'عمر',
        'team-member-4-role': 'رئيس قسم التكنولوجيا والابتكار',
        'team-member-4-bio': 'أخصائي تكنولوجيا يركز على تطوير حلول مبتكرة لمراقبة البيئة ومنصات مشاركة المجتمع.',
        // Footer Quick Links and Programs
        'footer-quicklinks-title': 'روابط سريعة',
        'footer-link-about': 'حول',
        'footer-link-goals': 'الأهداف',
        'footer-link-programs': 'البرامج',
        'footer-link-app': 'تطبيق الجوال',
        'footer-programs-title': 'البرامج',
        'footer-program-tree': 'زراعة الأشجار',
        'footer-program-recycle': 'إعادة التدوير',
        'footer-program-workshops': 'ورش عمل مدرسية',
        'footer-program-events': 'فعاليات مجتمعية',
        'footer-program-expo': 'إيكو إكسبو',
        'footer-download-title': 'تحميل التطبيق',
        'nav-home': 'الرئيسية',
        'nav-about': 'حول المبادرة',
        'nav-expo-about': 'حول الملتقى',
        'nav-goals': 'الأهداف',
        'nav-q3': 'ماكينات إعادة التدوير',
        'nav-q4': 'حقيبة التثقيف',
        'nav-q5': 'المكتبة المتنقلة',
        'nav-programs': 'البرامج',
        'nav-team': 'الفريق',
        'nav-app': 'التطبيق',
        'nav-contact': 'تواصل معنا',
        'nav-vision': 'الرؤية',
        'nav-message': 'الرسالة',
        'nav-topics': 'المحاور',
        'lang-btn': 'English',
        'hero-title-main': 'مبادرة الشيخة شما',
        'hero-title-arabic': 'Sheikha Shamma Initiative',
        'hero-subtitle': 'منصة مجتمعية بيئية تهدف إلى نشر ثقافة التشجير وإعادة التدوير بين أفراد المجتمع، خاصة فئة الشباب والأطفال، في إطار رؤية الإمارات 2030 للاستدامة البيئية.',
        'download-app': 'تحميل التطبيق',
        'learn-more': 'اعرف المزيد',
        'about-title': 'حول المبادرة',
        'about-subtitle': 'تحت رعاية الشيخة شما بنت محمد بن خالد آل نهيان',
        'mission-title': 'مهمتنا',
        'mission-text': 'مبادرة الشيخة شما هي منصة مجتمعية بيئية تهدف إلى نشر ثقافة التشجير وإعادة التدوير بين أفراد المجتمع، خاصة فئة الشباب والأطفال، في إطار رؤية الإمارات 2030 للاستدامة البيئية.',
        'vision-title': 'رؤية 2030',
        'vision-text': 'تماشياً مع التزام دولة الإمارات بالاستدامة البيئية، تساهم مبادرتنا في الرؤية الوطنية لخلق مستقبل أكثر خضرة واستدامة للأجيال القادمة.',
        'trees-planted': 'شجرة مزروعة',
        'community-members': 'عضو في المجتمع',
        'schools-engaged': 'مدرسة مشاركة',
        'goals-title': 'أهدافنا',
        'goals-subtitle': 'بناء مستقبل مستدام لدولة الإمارات',
        'goal1-title': 'رفع الوعي',
        'goal1-text': 'زيادة الوعي بأهمية زراعة الأشجار كوسيلة لمكافحة التصحر وتحسين جودة الهواء',
        'goal2-title': 'بناء مؤسسة قوية',
        'goal2-text': 'إنشاء صورة مؤسسية قوية للمشروع تحت اسم الشيخة شما',
        'goal3-title': 'تشجيع المشاركة',
        'goal3-text': 'تعزيز المشاركة المجتمعية من الأفراد والمؤسسات في زراعة الأشجار وإعادة التدوير',
        'goal4-title': 'الريادة في التشجير',
        'goal4-text': 'أن نصبح المنظمة الخيرية الرائدة المتخصصة في زراعة الأشجار',
        'goal5-title': 'تعزيز إعادة التدوير',
        'goal5-text': 'المساهمة في رفع الوعي حول إعادة التدوير وأهميتها للبيئة',
        'goal6-title': 'التأثير البيئي',
        'goal6-text': 'خلق تأثير بيئي إيجابي قابل للقياس في جميع أنحاء دولة الإمارات',
        'programs-title': 'برامجنا',
        'programs-subtitle': 'أنشطة ومبادرات على مدار السنة',
        'q1-title': 'ملتقى ومعرض "إيكو أكسبو الصناعي الأول"',
        'q2-title': 'منصة التشجير الذكي (E.GHARS)',
        'q3-title': 'توزيع ماكينات إعادة التدوير',
        'q3-subtitle': 'نشر ثقافة إعادة التدوير',
        'q4-title': 'برنامج "حقيبة للتثقيف البيئي" (حقائب توعوية) ',
        'q4-subtitle': 'تعزيز الوعي البيئي في المدارس',
        'q5-title':'المكتبة المتنقلة للتثقيف البيئي',
        'q5-subtitle': 'نشر المعرفة عبر الإمارات',

        'q1-item1': 'الهدف : عرض أحدث الابتكارات والحلول التكنولوجية في مجال الاستدامة البيئية والصناعة النظيفة.',
        'q1-item2': 'الشعار :"صناعة ذكية من أجل بيئة نظيفة".',
        'q1-item3': 'المحاور : يركز على التقنيات الذكية، الاقتصاد الدائري، الطاقة النظيفة والمتجددة، وإدارة الانبعاثات الصناعية .',
        'q1-item4': 'التاريخ والمكان : يُقام خلال الفترة 25 - 26 نوفمبر 2025 م في مدينة الظنة - إمارة أبوظبي.',
        'q2-item1':'تهدف إلى تعزيز ممارسات التشجير المستدام باستخدام تطبيق E-GHARS.',
        'q2-item2': 'تسهل عملية التشجير المستدام وتوفر خيار الدفع الإلكتروني.',
        'q2-item3': 'تساهم في تحقيق أهداف الإمارات في خفض البصمة الكربونية وتعزيز الاستدامة.',
        'q3-item1': 'الهدف هو نشر ثقافة إعادة التدوير بين أفراد المجتمع.',
        'q3-item2': 'تمنح المستخدمين جوائز فورية (مثل رصيد موبايل او نقاط) مقابل زجاجات المياه وعلب المشروبات المستعملة.',
        'q3-item3': 'الهدف الكمي: توفير 2000 ماكينة بحلول عام 2030 لتصبح قناة التجميع الرئيسية للمخلفات الصلبة.',
        'q4-item1': 'يتم توزيع الحقيبة على الطلاب في المدارس لتعزيز الوعي البيئي وتشجيعهم على ممارسات بيئية صحيحة.',
        'q4-item2': 'محتوياتها تشمل قصصًا توعوية، وأنشطة تفاعلية، وأدوات إعادة التدوير.',
        'q5-item1':'مكتبة تعليمية متنقلة تهدف إلى نشر المعرفة البيئية وتثقيف المجتمع في مختلف المناطق.',
        'q5-item2':'تقوم بجولات منتظمة في جميع أنحاء الإمارات لتحقيق شمولية الوصول إلى كافة أفراد المجتمع.',
        'app-title': 'قم بتحميل تطبيقنا المحمول E.GHARS',
        'app-text': 'انضم إلى مجتمعنا من خلال تطبيقنا التفاعلي للمشاركة المجتمعية في مبادرات زراعة الأشجار وإعادة التدوير.',
        'feature1': 'شارك صور قبل وبعد',
        'feature2': 'شارك في التحديات',
        'feature3': 'تواصل مع المجتمع',
        'feature4': 'الوصول للمحتوى التعليمي',
        'team-title': 'فريقنا',
        'team-subtitle': 'محترفون مخصصون للعمل من أجل إمارات أكثر خضرة',
        'contact-title': 'شارك معنا',
        'contact-subtitle': 'انضم إلى مهمتنا من أجل إمارات أكثر خضرة',
        'contact-partnership-title': 'فرص الشراكة',
        'contact-partnership-text': 'نرحب بالشراكات مع المدارس والمنظمات والأفراد الذين يشاركوننا رؤيتنا للاستدامة البيئية.',
        'contact-email': 'sustainability@smbkc-culture.com',
        'contact-phone': '+971 54 327 4710',
        'contact-address': 'العين، أبوظبي، الإمارات العربية المتحدة',
        'contact-address': 'العين، أبوظبي، الإمارات العربية المتحدة',
        // Contact Form Fields - Edit translations below
        'contact-form-name-placeholder': 'اسمك',
        'contact-form-email-placeholder': 'بريدك الإلكتروني',
        'contact-form-message-placeholder': 'رسالتك',
        'contact-form-send-button': 'إرسال',
        // Contact Form Messages - Edit translations below
        'contact-form-success': 'تم إرسال الرسالة بنجاح! شكراً لتواصلك معنا.',
        'contact-form-error': 'فشل إرسال الرسالة. يرجى المحاولة لاحقاً.',
        // Footer translations
        'footer-copyright': '© 2025 مبادرة الشيخة شما. جميع الحقوق محفوظة.',
        'footer-powered': 'بدعم من مركز الثقافة SMBKC',
        'footer-follow': 'تابعنا:',
        // Expo page translations
        'expo-title-main': 'ملتقى ومعرض إيكو إكسبو الصناعي الأول',
        'expo-title-arabic': 'First Eco Expo Industrial Forum and Exhibition',
        'expo-subtitle': 'حدث صناعي متخصص يهدف إلى عرض أحدث الابتكارات والحلول التكنولوجية في مجال الاستدامة البيئية والصناعة النظيفة',
        'learn-more-expo': 'اعرف المزيد',
        'expo-goals-title': 'أهدافنا',
        'expo-topics-title': 'محاور الملتقى',
        'expo-about-title': 'حول الملتقى',
        'expo-vision-title': 'رؤية الملتقى',
        'expo-message-title': 'رسالة الملتقى',
        'get-involved': 'شارك معنا',
        'definition-title': 'التعريف',
        'definition-text': 'هو حدث صناعي متخصص يهدف إلى: عرض أحدث الابتكارات والحلول التكنولوجية في مجال الاستدامة البيئية والصناعة النظيفة تسليط الضوء على التطبيقات الذكية التي تساهم في: تحسين كفاءة العمليات الصناعية تقليل الانبعاثات جمع الشركات والمتخصصين لتبادل الخبرات دعم التحول نحو بيئة صناعية نظيفة ومستدامة',
        'vision-innovation': 'الابتكار',
        'vision-innovation-text': 'تطبيق الحلول التقنية التي تساهم في تقليل الأثر البيئي',
        'vision-industries': 'تمكين الصناعات الرشيدة',
        'vision-industries-text': 'تعزيز المسؤولية المجتمعية لتحقيق تنمية مستدامة',
        'message-text': 'توفير منصة لعرض الحلول الصناعية المستدامة مع التأكيد على: دور القيادة الرشيدة في دولة الإمارات دعم الابتكار المستدام تبادل المعرفة والخبرات بين المتخصصين بما يحقق توازنًا بين: النمو الصناعي حماية البيئة رفاهية المجتمع',
        'goal1': 'تعزيز الابتكار الصناعي في مجال الاستدامة البيئية',
        'goal1-text': 'تعزيز الابتكار الصناعي في مجال الاستدامة البيئية',
        'goal2': 'تسليط الضوء على التقنيات الذكية في الصناعة لتحقيق بيئة نظيفة',
        'goal2-text': 'تسليط الضوء على التقنيات الذكية في الصناعة لتحقيق بيئة نظيفة',
        'goal3': 'تبادل الخبرات بين الشركات والمتخصصين في القطاع الصناعي',
        'goal3-text': 'تبادل الخبرات بين الشركات والمتخصصين في القطاع الصناعي',
        'goal4': 'تحفيز الاستثمارات في الحلول البيئية المستدامة',
        'goal4-text': 'تحفيز الاستثمارات في الحلول البيئية المستدامة',
        'goal5': 'نشر الوعي بأهمية تقنيات الصناعات النظيفة والمستدامة',
        'goal5-text': 'نشر الوعي بأهمية تقنيات الصناعات النظيفة والمستدامة',
        'goal6': 'دعم وتبني الابتكارات الصناعية التي تساهم في حماية البيئة',
        'goal6-text': 'دعم وتبني الابتكارات الصناعية التي تساهم في حماية البيئة',
        'goal7': 'تعزيز التعاون بين القطاعين العام والخاص لتنفيذ حلول بيئية مبتكرة',
        'goal7-text': 'تعزيز التعاون بين القطاعين العام والخاص لتنفيذ حلول بيئية مبتكرة',
        'goal8': 'عرض حلول تكنولوجية مبتكرة لتحسين كفاءة العمليات الصناعية وتقليل الانبعاثات',
        'goal8-text': 'عرض حلول تكنولوجية مبتكرة لتحسين كفاءة العمليات الصناعية وتقليل الانبعاثات',
        'topic1-title': 'التقنيات الذكية في الصناعة المستدامة، وتشمل:',
        'topic1-item1': 'استعراض أحدث الحلول التكنولوجية في مجالات الإنتاج الأخضر',
        'topic1-item2': 'التقنيات التي تدعم الاستدامة',
        'topic1-item3': 'مراقبة وتحسين العمليات الصناعية لتحقيق كفاءة بيئية',
        'topic1-item4': 'تطبيقات إنترنت الأشياء (IoT) في الصناعة',
        // Paper topic section
        'topic2-title': 'الاقتصاد الدائري في الصناعة',
        'topic2-item1': 'كيفية تطبيق مفاهيم الاقتصاد الدائري في القطاع الصناعي لتقليل النفايات وتنظيم إعادة الاستخدام والتدوير',
        'topic2-item2': 'استراتيجيات تساهم في تقليل الفاقد وتحسين استدامة الموارد',
        'topic3-title': 'الطاقة النظيفة والمتجددة في القطاع الصناعي',
        'topic3-item1': 'تقنيات تحويل المصانع إلى بيئات مستدامة باستخدام الطاقة الشمسية، الرياح، والوقود الحيوي',
        'topic3-item2': 'التحديات والفرص في التحول إلى الطاقة النظيفة في الصناعة',
        'topic4-title': 'الابتكار في إعادة التدوير والمواد المستدامة',
        'topic4-item1': 'حلول جديدة لإعادة تدوير النفايات الصناعية واستخدام مواد بديلة صديقة للبيئة',
        'topic4-item2': 'دور المواد القابلة للتحلل والابتكار في تصنيع منتجات مستدامة',
        'topic5-title': 'التقنيات الذكية في إدارة المياه والطاقة في الصناعة',
        'topic5-item1': 'أنظمة مبتكرة لترشيد استهلاك المياه والطاقة في المصانع',
        'topic5-item2': 'التحسينات التكنولوجية في أنظمة إدارة الموارد لتحقيق كفاءة تشغيلية عالية',
        'topic6-title': 'إدارة الانبعاثات الصناعية وتقليل الكربون',
        'topic6-item1': 'استراتيجيات وتقنيات تقليل انبعاثات الكربون من العمليات الصناعية',
        'topic6-item2': 'دور التقنيات النظيفة في تحقيق الأهداف العالمية لخفض الانبعاثات',
        'topic7-title': 'الابتكار الصناعي في مجال التصنيع الأخضر',
        'topic7-item1': 'تبني أفضل ممارسات التصنيع الأخضر التي تسعى إلى تقليل التأثير البيئي وتعزيز الكفاءة',
        'topic7-item2': 'تطوير تقنيات الإنتاج التي تحقق التوازن بين النمو الصناعي والحفاظ على البيئة',
        'topic8-title': 'التحديات التنظيمية والتمويلية في تطبيق تقنيات الصناعة النظيفة',
        'topic8-item1': 'التحديات التي تواجه الشركات في تبني الحلول التكنولوجية المستدامة',
        'topic8-item2': 'مناقشة السياسات الحكومية والحوافز لتشجيع الابتكار الصناعي الأخضر',
        'about-subtitle': 'ملتقى صناعي متخصص تحت مظلة مبادرة الشيخة شما',
        'vision-subtitle': 'السعي إلى تحقيق بيئة صناعية مستدامة',
        'message-subtitle': 'توفير منصة للحلول الصناعية المستدامة',
        'goals-subtitle': 'النهوض بالاستدامة الصناعية',
        'topics-subtitle': 'مجالات التركيز للعروض والمناقشات',
        // Expo footer translations
        'expo-footer-quicklinks-title': 'روابط سريعة',
        'expo-footer-link-about': 'حول',
        'expo-footer-link-vision': 'الرؤية',
        'expo-footer-link-message': 'الرسالة',
        'expo-footer-link-goals': 'الأهداف',
        'expo-footer-link-topics': 'المحاور',
        'expo-footer-programs-title': 'البرامج',
        'expo-footer-download-title': 'تحميل التطبيق',
        // Expo Participation Button - Edit translations below
        'expo-participate-btn': 'شارك الآن',
    }
};

langToggle.addEventListener("click", () => {
  // Toggle the language state first
  isArabic = !isArabic;
 
  const lang = isArabic ? "ar" : "en";

  // Update text direction
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Update navigation links
  const navItems = document.querySelectorAll(".nav-link");
  let keys;
  if (document.getElementById('expo-title-main')) {
    keys = [
      "nav-home",
      "nav-expo-about",
      "nav-vision",
      "nav-message",
      "nav-goals",
      "nav-topics",
    ];
  } else {
    keys = [
      // "nav-home",
      "nav-about",
      "nav-goals",
      "nav-q3",
      "nav-q4",
      "nav-q5",
      "nav-app",
      // "nav-team",
      "nav-contact",
    ];
  }
  navItems.forEach((item, index) => {
    if (keys[index] && translations[lang][keys[index]]) {
      item.textContent = translations[lang][keys[index]];
    }
  });

  // Update language button
  langToggle.textContent = translations[lang]["lang-btn"];

  // Update hero section
  const heroTitleMain = document.querySelector(".title-main");
  const heroTitleArabic = document.querySelector(".title-arabic");
  const heroSubtitle = document.querySelector(".hero-subtitle");

  if (heroTitleMain)
    heroTitleMain.textContent = translations[lang]["hero-title-main"];
  if (heroTitleArabic)
    heroTitleArabic.textContent = translations[lang]["hero-title-arabic"];
  if (heroSubtitle)
    heroSubtitle.textContent = translations[lang]["hero-subtitle"];

  // Update buttons
  const downloadBtn = document.querySelector(".btn-primary");
  const learnMoreBtn = document.querySelector(".btn-secondary");

  if (downloadBtn) downloadBtn.textContent = translations[lang]["download-app"];
  if (learnMoreBtn) learnMoreBtn.textContent = translations[lang]["learn-more"];

  // Update About section
  const aboutTitle = document.querySelector("#about .section-title");
  const aboutSubtitle = document.querySelector("#about .section-subtitle");
  const missionTitle = document.querySelector("#about h3:first-of-type");
  const missionText = document.querySelector("#mission-text");
  const visionTitle = document.querySelector("#about h3:last-of-type");
  const visionText = document.querySelector("#vision-text");

  if (aboutTitle) aboutTitle.textContent = translations[lang]["about-title"];
  if (aboutSubtitle)
    aboutSubtitle.textContent = translations[lang]["about-subtitle"];
  if (missionTitle)
    missionTitle.textContent = translations[lang]["mission-title"];
  if (missionText) missionText.textContent = translations[lang]["mission-text"];
  if (visionTitle) visionTitle.textContent = translations[lang]["vision-title"];
  if (visionText) visionText.textContent = translations[lang]["vision-text"];

  // Update stats
  const statTexts = document.querySelectorAll(".stat-item p");
  const statKeys = ["trees-planted", "community-members", "schools-engaged"];
  statTexts.forEach((stat, index) => {
    if (translations[lang][statKeys[index]]) {
      stat.textContent = translations[lang][statKeys[index]];
    }
  });

  // Update Goals section
  const goalsTitle = document.querySelector("#goals .section-title");
  const goalsSubtitle = document.querySelector("#goals .section-subtitle");

  if (goalsTitle) goalsTitle.textContent = translations[lang]["goals-title"];
  if (goalsSubtitle)
    goalsSubtitle.textContent = translations[lang]["goals-subtitle"];

  // Update goal cards
  const isExpo = !!document.getElementById('expo-title-main');
  const goalSelector = isExpo ? "#goals .goal-card" : ".goal-card";
  const numGoals = isExpo ? 8 : 6;
  const goalCards = document.querySelectorAll(goalSelector);
  const goalKeys = Array.from({length: numGoals}, (_, i) => `goal${i+1}`);
  const keySuffix = isExpo ? '' : '-title';
  goalCards.forEach((card, index) => {
    if (index < goalKeys.length) {
      const title = card.querySelector("h3");
      const text = card.querySelector("p");
      if (title && translations[lang][goalKeys[index] + keySuffix]) {
        title.textContent = translations[lang][goalKeys[index] + keySuffix];
      }
      if (text && translations[lang][goalKeys[index] + "-text"]) {
        text.textContent = translations[lang][goalKeys[index] + "-text"];
      }
    }
  });

  // Update Programs section
  const programsTitle = document.querySelector("#programs-title");
  const programsSubtitle = document.querySelector("#programs-subtitle");

  if (programsTitle)
    programsTitle.textContent = translations[lang]["programs-title"];
  if (programsSubtitle)
    programsSubtitle.textContent = translations[lang]["programs-subtitle"];

  // Update timeline items
  const timelineItems = document.querySelectorAll(".timeline-content h3");
  const timelineKeys = ["q1-title", "q2-title", "q3-title", "q4-title"];
  timelineItems.forEach((item, index) => {
    if (translations[lang][timelineKeys[index]]) {
      item.textContent = translations[lang][timelineKeys[index]];
    }
  });
  // Update Q1 items
  const q1Title = document.querySelector("#q1-title");
  const q1Item1 = document.querySelector("#q1-item1");
  const q1Item2 = document.querySelector("#q1-item2");
  const q1Item3 = document.querySelector("#q1-item3");
  const q1Item4 = document.querySelector('#q1-item4');

  if (q1Title) q1Title.textContent = translations[lang]["q1-title"];
  if (q1Item1) q1Item1.textContent = translations[lang]["q1-item1"];
  if (q1Item2) q1Item2.textContent = translations[lang]["q1-item2"];
  if (q1Item3) q1Item3.textContent = translations[lang]["q1-item3"];
  if (q1Item4) q1Item4.textContent = translations[lang]["q1-item4"];


  // Update Q2 items
  const q2Title = document.querySelector("#q2-title");
  const q2Item1 = document.querySelector("#q2-item1");
  const q2Item2 = document.querySelector("#q2-item2");
  const q2Item3 = document.querySelector("#q2-item3");

  if (q2Title) q2Title.textContent = translations[lang]["q2-title"];
  if (q2Item1) q2Item1.textContent = translations[lang]["q2-item1"];
  if (q2Item2) q2Item2.textContent = translations[lang]["q2-item2"];
  if (q2Item3) q2Item3.textContent = translations[lang]["q2-item3"];

  // Update Q3 items
  const q3Title = document.querySelector("#q3-title");
  const q3Subtitle = document.querySelector("#q3-subtitle");
  const q3Item1 = document.querySelector("#q3-item1");
  const q3Item2 = document.querySelector("#q3-item2");
  const q3Item3 = document.querySelector("#q3-item3");

  if (q3Title) q3Title.textContent = translations[lang]["q3-title"];
  if (q3Subtitle) q3Subtitle.textContent = translations[lang]["q3-subtitle"];
  if (q3Item1) q3Item1.textContent = translations[lang]["q3-item1"];
  if (q3Item2) q3Item2.textContent = translations[lang]["q3-item2"];
  if (q3Item3) q3Item3.textContent = translations[lang]["q3-item3"];

  // Update Q4 items
  const q4Title = document.querySelector("#q4-title");
  const q4Subtitle = document.querySelector("#q4-subtitle");
  const q4Item1 = document.querySelector("#q4-item1");
  const q4Item2 = document.querySelector("#q4-item2");
  const q4Item3 = document.querySelector("#q4-item3");

  if (q4Title) q4Title.textContent = translations[lang]["q4-title"];
  if (q4Subtitle) q4Subtitle.textContent = translations[lang]["q4-subtitle"];
  if (q4Item1) q4Item1.textContent = translations[lang]["q4-item1"];
  if (q4Item2) q4Item2.textContent = translations[lang]["q4-item2"];

  // Update Q5 items
  const q5Title = document.querySelector("#q5-title");
  const q5Subtitle = document.querySelector("#q5-subtitle");
  const q5Item1 = document.querySelector("#q5-item1");
  const q5Item2 = document.querySelector("#q5-item2");

  if (q5Title) q5Title.textContent = translations[lang]["q5-title"];
  if (q5Subtitle) q5Subtitle.textContent = translations[lang]["q5-subtitle"];
  if (q5Item1) q5Item1.textContent = translations[lang]["q5-item1"];
  if (q5Item2) q5Item2.textContent = translations[lang]["q5-item2"];

  // Update Contact section
const contactUsTitle = document.querySelector("#contact-title");
const contactSubtitle = document.querySelector("#contact-subtitle");
const contactPartnershipTitle = document.querySelector("#contact-partnership-title");
const contactPartnershipText = document.querySelector("#contact-partnership-text");
const contactEmail = document.querySelector("#contact-email");
const contactPhone = document.querySelector("#contact-phone");
const contactAddress = document.querySelector("#contact-address");

if (contactUsTitle) contactUsTitle.textContent = translations[lang]["contact-title"];
if (contactSubtitle) contactSubtitle.textContent = translations[lang]["contact-subtitle"];
if (contactPartnershipTitle) contactPartnershipTitle.textContent = translations[lang]["contact-partnership-title"];
if (contactPartnershipText) contactPartnershipText.textContent = translations[lang]["contact-partnership-text"];
if (contactEmail) contactEmail.textContent = translations[lang]["contact-email"];
if (contactPhone) {
  contactPhone.textContent = translations[lang]["contact-phone"];
  contactPhone.dir = 'ltr';
  contactPhone.style.unicodeBidi = 'bidi-override';
}
if (contactAddress) contactAddress.textContent = translations[lang]["contact-address"];

  // Update Contact Form Fields
  const contactFormNameInput = document.querySelector("#contact-form input[name='from_name']");
  const contactFormEmailInput = document.querySelector("#contact-form input[name='from_email']");
  const contactFormMessageTextarea = document.querySelector("#contact-form textarea[name='message']");
  const contactFormButton = document.querySelector("#contact-form button");

  if (contactFormNameInput) contactFormNameInput.placeholder = translations[lang]["contact-form-name-placeholder"];
  if (contactFormEmailInput) contactFormEmailInput.placeholder = translations[lang]["contact-form-email-placeholder"];
  if (contactFormMessageTextarea) contactFormMessageTextarea.placeholder = translations[lang]["contact-form-message-placeholder"];
  if (contactFormButton) contactFormButton.textContent = translations[lang]["contact-form-send-button"];

  // Update Contact Form Messages if currently displayed
  const contactFormMessage = document.getElementById("contact-form-message");
  if (contactFormMessage && contactFormMessage.classList.contains('show')) {
    if (contactFormMessage.classList.contains('success')) {
      contactFormMessage.textContent = translations[lang]["contact-form-success"];
    } else if (contactFormMessage.classList.contains('error')) {
      contactFormMessage.textContent = translations[lang]["contact-form-error"];
    }
  }

  if (q4Title) q4Title.textContent = translations[lang]["q4-title"];
  if (q4Item1) q4Item1.textContent = translations[lang]["q4-item1"];
  if (q4Item2) q4Item2.textContent = translations[lang]["q4-item2"];
  if (q4Item3) q4Item3.textContent = translations[lang]["q4-item3"];
  // Update App section
  const appTitle = document.querySelector("#app h2");
  const appText = document.querySelector("#app .app-text p");

  if (appTitle) appTitle.textContent = translations[lang]["app-title"];
  if (appText) appText.textContent = translations[lang]["app-text"];

  // Update app features
  const features = document.querySelectorAll(".feature span");
  const featureKeys = ["feature1", "feature2", "feature3", "feature4"];
  features.forEach((feature, index) => {
    if (translations[lang][featureKeys[index]]) {
      feature.textContent = translations[lang][featureKeys[index]];
    }
  });

  // (handled above with IDs)
    // Update Team section (with IDs)
  const teamTitle = document.getElementById('team-title');
  const teamSubtitle = document.getElementById('team-subtitle');
  if (teamTitle) teamTitle.textContent = translations[lang]['team-title'];
  if (teamSubtitle) teamSubtitle.textContent = translations[lang]['team-subtitle'];
  for (let i = 1; i <= 4; i++) {
    const name = document.getElementById(`team-member-${i}-name`);
    const role = document.getElementById(`team-member-${i}-role`);
    const bio = document.getElementById(`team-member-${i}-bio`);
    if (name) name.textContent = translations[lang][`team-member-${i}-name`];
    if (role) role.textContent = translations[lang][`team-member-${i}-role`];
    if (bio) bio.textContent = translations[lang][`team-member-${i}-bio`];
  }
  // Update Social Media section title
  const socialTitle = document.getElementById('social-title');
  if (socialTitle) socialTitle.textContent = translations[lang]['social-title'];
  // Update Footer section
  const footerCopyright = document.querySelector("#footer-copyright");
  const footerPowered = document.querySelector("#footer-powered");
  const footerFollow = document.querySelector("#footer-follow");

  if (footerCopyright) footerCopyright.textContent = translations[lang]["footer-copyright"];
  if (footerPowered) footerPowered.textContent = translations[lang]["footer-powered"];
  if (footerFollow) footerFollow.textContent = translations[lang]["footer-follow"];

    // Update Footer Quick Links
  const footerQuickLinksTitle = document.querySelector('.footer-section:nth-child(2) h4');
  const footerQuickLinks = document.querySelectorAll('.footer-section:nth-child(2) ul li a');
  if (footerQuickLinksTitle) footerQuickLinksTitle.textContent = translations[lang]['footer-quicklinks-title'];
  const quickLinkKeys = ['footer-link-about', 'footer-link-goals', 'footer-link-programs', 'footer-link-app'];
  footerQuickLinks.forEach((link, idx) => {
    if (translations[lang][quickLinkKeys[idx]]) link.textContent = translations[lang][quickLinkKeys[idx]];
  });

  // Update Footer Programs
  const footerProgramsTitle = document.querySelector('.footer-section:nth-child(3) h4');
  const footerPrograms = document.querySelectorAll('.footer-section:nth-child(3) ul li a');
  if (footerProgramsTitle) footerProgramsTitle.textContent = translations[lang]['footer-programs-title'];
  const programKeys = ['footer-program-tree', 'footer-program-recycle', 'footer-program-workshops', 'footer-program-events', 'footer-program-expo'];
  footerPrograms.forEach((link, idx) => {
    if (translations[lang][programKeys[idx]]) link.textContent = translations[lang][programKeys[idx]];
  });

  // Update Footer Download Title
  const footerDownloadTitle = document.querySelector('.footer-section:nth-child(4) h4');
  if (footerDownloadTitle) footerDownloadTitle.textContent = translations[lang]['footer-download-title'];
    // Update Footer Description
  const footerDesc = document.getElementById('footer-desc');
  if (footerDesc) footerDesc.textContent = translations[lang]['footer-desc'];

  // Update Expo Participation Button
  const expoParticipateBtn = document.getElementById('expo-participate-btn');
  if (expoParticipateBtn) {
    expoParticipateBtn.textContent = translations[lang]['expo-participate-btn'];
  }

  // Update Expo footer if on expo page
  if (document.getElementById('expo-title-main')) {
    const expoFooterQuickLinksTitle = document.getElementById('expo-footer-quicklinks-title');
    const expoFooterQuickLinks = document.querySelectorAll('#expo-footer-quicklinks-title + ul li a');
    const expoFooterProgramsTitle = document.getElementById('expo-footer-programs-title');
    const expoFooterDownloadTitle = document.getElementById('expo-footer-download-title');

    if (expoFooterQuickLinksTitle) expoFooterQuickLinksTitle.textContent = translations[lang]['expo-footer-quicklinks-title'];
    const expoQuickLinkKeys = ['expo-footer-link-about', 'expo-footer-link-vision', 'expo-footer-link-message', 'expo-footer-link-goals', 'expo-footer-link-topics'];
    expoFooterQuickLinks.forEach((link, idx) => {
      if (translations[lang][expoQuickLinkKeys[idx]]) link.textContent = translations[lang][expoQuickLinkKeys[idx]];
    });
    if (expoFooterProgramsTitle) expoFooterProgramsTitle.textContent = translations[lang]['expo-footer-programs-title'];
    if (expoFooterDownloadTitle) expoFooterDownloadTitle.textContent = translations[lang]['expo-footer-download-title'];
  }

  // Update Expo page elements
  const expoTitleMain = document.getElementById('expo-title-main');
  const expoTitleArabic = document.getElementById('expo-title-arabic');
  const expoAboutTitle = document.getElementById('expo-about-title');
  const expoVisionTitle = document.getElementById('vision-title');
  const expoTopicsTitle = document.getElementById('expo-topics-title');
  const expoGoalsTitle = document.getElementById('expo-goals-title');
  const expoMessageTitle = document.getElementById('expo-message-title');
  const expoSubtitle = document.getElementById('expo-subtitle');
  const learnMoreExpo = document.getElementById('learn-more-expo');
  const getInvolved = document.getElementById('get-involved');
  const definitionTitle = document.getElementById('definition-title');
  const definitionText = document.getElementById('definition-text');
  const visionInnovation = document.getElementById('vision-innovation');
  const visionInnovationText = document.getElementById('vision-innovation-text');
  const visionIndustries = document.getElementById('vision-industries');
  const visionIndustriesText = document.getElementById('vision-industries-text');
  const messageText = document.getElementById('message-text');
  const topic1Title = document.getElementById('topic1-title');
  const topic1Item1 = document.getElementById('topic1-item1');
  const topic1Item2 = document.getElementById('topic1-item2');
  const topic1Item3 = document.getElementById('topic1-item3');
  const topic1Item4 = document.getElementById('topic1-item4');
  const topic2Title = document.getElementById('topic2-title');
  const topic2Item1 = document.getElementById('topic2-item1');
  const topic2Item2 = document.getElementById('topic2-item2');
  const topic3Title = document.getElementById('topic3-title');
  const topic3Item1 = document.getElementById('topic3-item1');
  const topic3Item2 = document.getElementById('topic3-item2');
  const topic4Title = document.getElementById('topic4-title');
  const topic4Item1 = document.getElementById('topic4-item1');
  const topic4Item2 = document.getElementById('topic4-item2');
  const topic5Title = document.getElementById('topic5-title');
  const topic5Item1 = document.getElementById('topic5-item1');
  const topic5Item2 = document.getElementById('topic5-item2');
  const topic6Title = document.getElementById('topic6-title');
  const topic6Item1 = document.getElementById('topic6-item1');
  const topic6Item2 = document.getElementById('topic6-item2');
  const topic7Title = document.getElementById('topic7-title');
  const topic7Item1 = document.getElementById('topic7-item1');
  const topic7Item2 = document.getElementById('topic7-item2');
  const topic8Title = document.getElementById('topic8-title');
  const topic8Item1 = document.getElementById('topic8-item1');
  const topic8Item2 = document.getElementById('topic8-item2');

  if (expoTitleMain) expoTitleMain.textContent = translations[lang]['expo-title-main'];
  if (expoTitleArabic) expoTitleArabic.textContent = translations[lang]['expo-title-arabic'];
  if (expoGoalsTitle) expoGoalsTitle.textContent = translations[lang]['expo-goals-title'];
  if (expoTopicsTitle) expoTopicsTitle.textContent = translations[lang]['expo-topics-title'];
  if (expoAboutTitle) expoAboutTitle.textContent = translations[lang]['expo-about-title'];
  if (expoMessageTitle) expoMessageTitle.textContent = translations[lang]['expo-message-title'];
  if (expoSubtitle) expoSubtitle.textContent = translations[lang]['expo-subtitle'];
  if (expoVisionTitle) expoVisionTitle.textContent = translations[lang]['expo-vision-title'];
  if (learnMoreExpo) learnMoreExpo.textContent = translations[lang]['learn-more-expo'];
  if (getInvolved) getInvolved.textContent = translations[lang]['get-involved'];
  if (definitionTitle) definitionTitle.textContent = translations[lang]['definition-title'];
  if (definitionText) definitionText.textContent = translations[lang]['definition-text'];
  if (visionInnovation) visionInnovation.textContent = translations[lang]['vision-innovation'];
  if (visionInnovationText) visionInnovationText.textContent = translations[lang]['vision-innovation-text'];
  if (visionIndustries) visionIndustries.textContent = translations[lang]['vision-industries'];
  if (visionIndustriesText) visionIndustriesText.textContent = translations[lang]['vision-industries-text'];
  if (messageText) messageText.textContent = translations[lang]['message-text'];
  if (topic1Title) topic1Title.textContent = translations[lang]['topic1-title'];
  if (topic1Item1) topic1Item1.textContent = translations[lang]['topic1-item1'];
  if (topic1Item2) topic1Item2.textContent = translations[lang]['topic1-item2'];
  if (topic1Item3) topic1Item3.textContent = translations[lang]['topic1-item3'];
  if (topic1Item4) topic1Item4.textContent = translations[lang]['topic1-item4'];
  if (topic2Title) topic2Title.textContent = translations[lang]['topic2-title'];
  if (topic2Item1) topic2Item1.textContent = translations[lang]['topic2-item1'];
  if (topic2Item2) topic2Item2.textContent = translations[lang]['topic2-item2'];
  if (topic3Title) topic3Title.textContent = translations[lang]['topic3-title'];
  if (topic3Item1) topic3Item1.textContent = translations[lang]['topic3-item1'];
  if (topic3Item2) topic3Item2.textContent = translations[lang]['topic3-item2'];
  if (topic4Title) topic4Title.textContent = translations[lang]['topic4-title'];
  if (topic4Item1) topic4Item1.textContent = translations[lang]['topic4-item1'];
  if (topic4Item2) topic4Item2.textContent = translations[lang]['topic4-item2'];
  if (topic5Title) topic5Title.textContent = translations[lang]['topic5-title'];
  if (topic5Item1) topic5Item1.textContent = translations[lang]['topic5-item1'];
  if (topic5Item2) topic5Item2.textContent = translations[lang]['topic5-item2'];
  if (topic6Title) topic6Title.textContent = translations[lang]['topic6-title'];
  if (topic6Item1) topic6Item1.textContent = translations[lang]['topic6-item1'];
  if (topic6Item2) topic6Item2.textContent = translations[lang]['topic6-item2'];
  if (topic7Title) topic7Title.textContent = translations[lang]['topic7-title'];
  if (topic7Item1) topic7Item1.textContent = translations[lang]['topic7-item1'];
  if (topic7Item2) topic7Item2.textContent = translations[lang]['topic7-item2'];
  if (topic8Title) topic8Title.textContent = translations[lang]['topic8-title'];
  if (topic8Item1) topic8Item1.textContent = translations[lang]['topic8-item1'];
  if (topic8Item2) topic8Item2.textContent = translations[lang]['topic8-item2'];

  // Update expo subtitles
  const expoAboutSubtitle = document.getElementById('about-subtitle');
  const visionSubtitle = document.getElementById('vision-subtitle');
  const messageSubtitle = document.getElementById('message-subtitle');
  const expoGoalsSubtitle = document.getElementById('goals-subtitle');
  const topicsSubtitle = document.getElementById('topics-subtitle');
  if (expoAboutSubtitle) expoAboutSubtitle.textContent = translations[lang]['about-subtitle'];
  if (visionSubtitle) visionSubtitle.textContent = translations[lang]['vision-subtitle'];
  if (messageSubtitle) messageSubtitle.textContent = translations[lang]['message-subtitle'];
  if (expoGoalsSubtitle) expoGoalsSubtitle.textContent = translations[lang]['goals-subtitle'];
  if (topicsSubtitle) topicsSubtitle.textContent = translations[lang]['topics-subtitle'];

  // Update Contact section
  const contactTitle = document.querySelector("#contact .section-title");

  if (contactTitle)
    contactTitle.textContent = translations[lang]["contact-title"];

   // Update App Mockup Demo Cards
  const appDemoPlant = document.getElementById('app-demo-plant');
  const appDemoRecycle = document.getElementById('app-demo-recycle');
  const appDemoShare = document.getElementById('app-demo-share');
  if (appDemoPlant) appDemoPlant.textContent = translations[lang]['app-demo-plant'];
  if (appDemoRecycle) appDemoRecycle.textContent = translations[lang]['app-demo-recycle'];
  if (appDemoShare) appDemoShare.textContent = translations[lang]['app-demo-share'];
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
const expoDiv = document.querySelector("#expo-div");
if (expoDiv)
document.querySelector("#expo-div").addEventListener("click", () => {
  window.location.href = "expo.html";
});

// Header Background on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".goal-card, .timeline-item, .stat-item, .about-text, .about-image"
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// Form Submission
const volunteerForm = document.querySelector(".form");
if (volunteerForm) {
  volunteerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(volunteerForm);
    const data = Object.fromEntries(formData);

    // Simple validation
    const requiredFields = volunteerForm.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "#dc3545";
      } else {
        field.style.borderColor = "#ddd";
      }
    });

    if (isValid) {
      // Show success message
      const submitBtn = volunteerForm.querySelector(".btn-primary");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Thank you! We'll be in touch.";
      submitBtn.style.background = "#28a745";

      // Reset form
      setTimeout(() => {
        volunteerForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = "";
      }, 3000);
    } else {
      // Show error message
      alert("Please fill in all required fields.");
    }
  });
}

// Counter Animation for Stats
const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-item h4");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace(/[^\d]/g, ""));
    const suffix = counter.textContent.replace(/[\d]/g, "");
    let current = 0;
    const increment = target / 100;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };

    updateCounter();
  });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector(".stats");
if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statsObserver.observe(statsSection);
}

// App Store Button Click Tracking
const appStoreButtons = document.querySelectorAll(
  ".app-badge, .app-download-btn"
);
appStoreButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Determine which store
    const isAppStore = button.querySelector("img").src.includes("app-store");
    const store = isAppStore ? "App Store" : "Google Play";

    !isAppStore ? 
    alert(
      `The Shamma Initiative app will be available on ${store} soon! Stay tuned for updates.`
    ) :
    
      window.open('https://apps.apple.com/ae/app/eghars/id6754612588', '_blank');
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image img");
});

// Loading Screen (optional)
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Keyboard Navigation Support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navMenu.classList.remove("active");
  }
});

// Touch Support for Mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe up - could trigger some action
      console.log("Swiped up");
    } else {
      // Swipe down - could trigger some action
      console.log("Swiped down");
    }
  }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);
