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

// Language Toggle
const langToggle = document.getElementById("lang-toggle");
let isArabic = false;

const translations = {
    en: {
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
        'footer-download-title': 'Download App',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-goals': 'Goals',
        'nav-programs': 'Programs',
        'nav-team': 'Team',
        'nav-app': 'Mobile App',
        'nav-contact': 'Contact',
        'lang-btn': 'عربي',
        'hero-title-main': 'Shamma Initiative',
        'hero-title-arabic': 'مبادرة الشيخة شما',
        'hero-subtitle': 'Environmental community platform focused on tree planting and recycling culture, targeting youth and children within the framework of UAE Vision 2030 for environmental sustainability.',
        'download-app': 'Download App',
        'learn-more': 'Learn More',
        'about-title': 'About the Initiative',
        'about-subtitle': 'Under the patronage of Sheikha Shamma bint Sultan bin Khalifa Al Nahyan',
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
        'q1-title': 'Launch & Engagement',
        'q2-title': 'Education & Awareness',
        'q3-title': 'Community Expansion',
        'q4-title': 'Recognition & Growth',
        
        'q1-item1': 'Tree Planting Week Challenge',
        'q1-item2': 'Personal meetings with participants',
        'q1-item3': 'Family tree planting challenges',
        'q2-item1': 'School workshops',
        'q2-item2': 'Educational content creation',
        'q2-item3': 'Live broadcasts from planting sites',
        'q3-item1': 'Competitions and challenges',
        'q3-item2': 'Impactful videos with Sheikha Shamma',
        'q3-item3': 'Official social media announcements',
        'q4-item1': 'COP28 related activities',
        'q4-item2': 'Annual project documentation',
        'q4-item3': 'Thank you videos from Sheikha',
        'app-title': 'Download Our Mobile App',
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
        'footer-copyright': '© 2025 Shamma Initiative. All rights reserved.',
        'footer-powered': 'Powered by SMBKC Culture',
        'footer-follow': 'Follow us:',
    },
    ar: {
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
        'footer-download-title': 'تحميل التطبيق',
        'nav-home': 'الرئيسية',
        'nav-about': 'حول المبادرة',
        'nav-goals': 'الأهداف',
        'nav-programs': 'البرامج',
        'nav-team': 'الفريق',
        'nav-app': 'التطبيق',
        'nav-contact': 'تواصل معنا',
        'lang-btn': 'English',
        'hero-title-main': 'مبادرة الشيخة شما',
        'hero-title-arabic': 'Shamma Initiative',
        'hero-subtitle': 'منصة مجتمعية بيئية تهدف إلى نشر ثقافة التشجير وإعادة التدوير بين أفراد المجتمع، خاصة فئة الشباب والأطفال، في إطار رؤية الإمارات 2030 للاستدامة البيئية.',
        'download-app': 'تحميل التطبيق',
        'learn-more': 'اعرف المزيد',
        'about-title': 'حول المبادرة',
        'about-subtitle': 'تحت رعاية الشيخة شما بنت سلطان بن خليفة آل نهيان',
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
        'q1-title': 'الإطلاق والمشاركة',
        'q2-title': 'التعليم والتوعية',
        'q3-title': 'التوسع المجتمعي',
        'q4-title': 'التقدير والنمو',
        
        'q1-item1': 'تحدي أسبوع زراعة الأشجار',
        'q1-item2': 'لقاءات شخصية مع المشاركين',
        'q1-item3': 'تحديات زراعة الأشجار العائلية',
        'q2-item1': 'ورش عمل مدرسية',
        'q2-item2': 'إنشاء محتوى تعليمي',
        'q2-item3': 'بث مباشر من مواقع الزراعة',
        'q3-item1': 'مسابقات وتحديات',
        'q3-item2': 'فيديوهات مؤثرة مع الشيخة شما',
        'q3-item3': 'إعلانات رسمية على وسائل التواصل الاجتماعي',
        'q4-item1': 'أنشطة متعلقة بمؤتمر COP28',
        'q4-item2': 'توثيق المشروع السنوي',
        'q4-item3': 'فيديوهات شكر من الشيخة',
        'app-title': 'حمل تطبيقنا المحمول',
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
        // ...existing code...
        'contact-address': 'العين، أبوظبي، الإمارات العربية المتحدة',
        // Footer translations
        'footer-copyright': '© 2025 مبادرة الشيخة شما. جميع الحقوق محفوظة.',
        'footer-powered': 'بدعم من مركز الثقافة SMBKC',
        'footer-follow': 'تابعنا:',
    }
};

langToggle.addEventListener("click", () => {
  const lang = isArabic ? "ar" : "en";

  // Update text direction
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Update navigation links
  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach((item, index) => {
    const keys = [
      "nav-home",
      "nav-about",
      "nav-goals",
      "nav-programs",
      "nav-team",
      "nav-app",
      "nav-contact",
    ];
    if (translations[lang][keys[index]]) {
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
  const goalCards = document.querySelectorAll(".goal-card");
  const goalKeys = ["goal1", "goal2", "goal3", "goal4", "goal5", "goal6"];
  goalCards.forEach((card, index) => {
    const title = card.querySelector("h3");
    const text = card.querySelector("p");
    if (title && translations[lang][goalKeys[index] + "-title"]) {
      title.textContent = translations[lang][goalKeys[index] + "-title"];
    }
    if (text && translations[lang][goalKeys[index] + "-text"]) {
      text.textContent = translations[lang][goalKeys[index] + "-text"];
    }
  });

  // Update Programs section
  const programsTitle = document.querySelector("#programs .section-title");
  const programsSubtitle = document.querySelector(
    "#programs .section-subtitle"
  );

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

  if (q1Title) q1Title.textContent = translations[lang]["q1-title"];
  if (q1Item1) q1Item1.textContent = translations[lang]["q1-item1"];
  if (q1Item2) q1Item2.textContent = translations[lang]["q1-item2"];
  if (q1Item3) q1Item3.textContent = translations[lang]["q1-item3"];

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
  const q3Item1 = document.querySelector("#q3-item1");
  const q3Item2 = document.querySelector("#q3-item2");
  const q3Item3 = document.querySelector("#q3-item3");

  if (q3Title) q3Title.textContent = translations[lang]["q3-title"];
  if (q3Item1) q3Item1.textContent = translations[lang]["q3-item1"];
  if (q3Item2) q3Item2.textContent = translations[lang]["q3-item2"];
  if (q3Item3) q3Item3.textContent = translations[lang]["q3-item3"];

  // Update Q4 items
  const q4Title = document.querySelector("#q4-title");
  const q4Item1 = document.querySelector("#q4-item1");
  const q4Item2 = document.querySelector("#q4-item2");
  const q4Item3 = document.querySelector("#q4-item3");

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
  const programKeys = ['footer-program-tree', 'footer-program-recycle', 'footer-program-workshops', 'footer-program-events'];
  footerPrograms.forEach((link, idx) => {
    if (translations[lang][programKeys[idx]]) link.textContent = translations[lang][programKeys[idx]];
  });

  // Update Footer Download Title
  const footerDownloadTitle = document.querySelector('.footer-section:nth-child(4) h4');
  if (footerDownloadTitle) footerDownloadTitle.textContent = translations[lang]['footer-download-title'];
    // Update Footer Description
  const footerDesc = document.getElementById('footer-desc');
  if (footerDesc) footerDesc.textContent = translations[lang]['footer-desc'];
  // Update Contact section
  const contactTitle = document.querySelector("#contact .section-title");

  if (contactTitle)
    contactTitle.textContent = translations[lang]["contact-title"];
isArabic = !isArabic;
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

    // Show coming soon message
    alert(
      `The Shamma Initiative app will be available on ${store} soon! Stay tuned for updates.`
    );

    // In a real implementation, you would redirect to the actual app store links
    // window.open(isAppStore ? 'https://apps.apple.com/...' : 'https://play.google.com/...', '_blank');
  });
});

// Social Media Link Tracking
const socialLinks = document.querySelectorAll(".social-link, .footer-social a");
socialLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Get social platform from classes or icon
    const platform = link.className.includes("instagram")
      ? "Instagram"
      : link.className.includes("twitter")
      ? "Twitter"
      : link.className.includes("facebook")
      ? "Facebook"
      : link.className.includes("tiktok")
      ? "TikTok"
      : link.className.includes("youtube")
      ? "YouTube"
      : link.className.includes("linkedin")
      ? "LinkedIn"
      : "Social Media";

    // Show message about following
    alert(`Follow @shmma_initiative on ${platform} for the latest updates!`);

    // In a real implementation, you would redirect to actual social media pages
    // window.open('https://instagram.com/shmma_initiative', '_blank');
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image img");

  if (heroImage) {
    const rate = scrolled * -0.5;
    heroImage.style.transform = `translateY(${rate}px)`;
  }
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
