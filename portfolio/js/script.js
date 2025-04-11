document.addEventListener("DOMContentLoaded", function () {
  // Translation dictionary
  const translations = {
    en: {
      // Navigation
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",

      // Hero section
      hero_title: "Hi, We're {span}Mith & Tolex{/span}",
      hero_subtitle: "Frontend Developer",
      hero_text:
        "We create beautiful, responsive websites with modern technologies",
      view_work: "View Our Work",
      contact_us: "Contact Us",

      // About section
      about_title: "About Us",
      about_text1:
        "We're a passionate frontend developer with 5 years of experience creating modern web applications. We specialize in responsive design, performance optimization, and creating intuitive user experiences.",
      about_text2:
        "When We're not coding, you can find us hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.",
      name_label: "Name:",
      email_label: "Email:",
      from_label: "From:",
      download_cv: "Download CV",

      // Skills section
      skills_title: "Our Skills",
      html_skill: "Semantic markup, accessibility, SEO optimization",
      css_skill: "Flexbox, Grid, animations, responsive design",
      js_skill: "ES6+, DOM manipulation, async programming",
      react_skill: "Components, hooks, context API",
      responsive_title: "Responsive Design",
      responsive_skill: "Mobile-first approach, media queries",
      performance_title: "Performance",
      performance_skill: "Optimization, lazy loading, caching",

      // Projects section
      projects_title: "Our Projects",
      filter_all: "All",
      filter_web: "Web",
      filter_app: "App",
      filter_design: "Design",
      project1_title: "E-commerce Website",
      project1_tech: "React, Node.js, MongoDB",
      project2_title: "Task Management App",
      project2_tech: "React Native, Firebase",
      project3_title: "UI/UX Design",
      project3_tech: "Figma, Adobe XD",
      project4_title: "Portfolio Website",
      project4_tech: "HTML, CSS, JavaScript",
      project5_title: "Weather App",
      project5_tech: "React, Weather API",
      project6_title: "Blog Platform",
      project6_tech: "WordPress, PHP",
      view_project: "View Project",

      // Contact section
      contact_title: "Get In Touch",
      contact_email: "Email",
      contact_phone: "Phone",
      contact_location: "Location",
      form_name: "Your Name",
      form_email: "Your Email",
      form_subject: "Subject",
      form_message: "Your Message",
      send_message: "Send Message",

      // Footer
      footer_about:
        "Frontend Developer creating modern, responsive websites with a focus on user experience.",
      footer_links: "Quick Links",
      footer_social: "Connect With Us",
      footer_rights: "All rights reserved.",
    },
    vn: {
      // Navigation
      nav_home: "Trang chủ",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",

      // Hero section
      hero_title: "Xin chào, Chúng tôi là {span}Mith & Tolex{/span}",
      hero_subtitle: "Lập trình viên Frontend",
      hero_text:
        "Mình tạo ra những website đẹp mắt, responsive với công nghệ hiện đại",
      view_work: "Xem dự án",
      contact_me: "Liên hệ",

      // About section
      about_title: "Về Mình",
      about_text1:
        "Mìnhm là lập trình viên frontend với 5 năm kinh nghiệm phát triển ứng dụng web hiện đại. Mình chuyên về thiết kế responsive, tối ưu hiệu năng và tạo trải nghiệm người dùng thân thiện.",
      about_text2:
        "Khi không lập trình, bạn có thể thấy mình đi bộ đường dài, đọc tiểu thuyết khoa học viễn tưởng hoặc thử nghiệm công thức nấu ăn mới.",
      name_label: "Tên:",
      email_label: "Email:",
      from_label: "Đến từ:",
      download_cv: "Tải CV",

      // Skills section
      skills_title: "Kỹ năng",
      html_skill: "Đánh dấu ngữ nghĩa, tiếp cận, tối ưu SEO",
      css_skill: "Flexbox, Grid, hiệu ứng, thiết kế responsive",
      js_skill: "ES6+, Thao tác DOM, lập trình bất đồng bộ",
      react_skill: "Components, hooks, context API",
      responsive_title: "Thiết kế Responsive",
      responsive_skill: "Tiếp cận mobile-first, media queries",
      performance_title: "Hiệu năng",
      performance_skill: "Tối ưu, lazy loading, caching",

      // Projects section
      projects_title: "Dự án",
      filter_all: "Tất cả",
      filter_web: "Web",
      filter_app: "Ứng dụng",
      filter_design: "Thiết kế",
      project1_title: "Website thương mại điện tử",
      project1_tech: "React, Node.js, MongoDB",
      project2_title: "Ứng dụng quản lý công việc",
      project2_tech: "React Native, Firebase",
      project3_title: "Thiết kế UI/UX",
      project3_tech: "Figma, Adobe XD",
      project4_title: "Website portfolio",
      project4_tech: "HTML, CSS, JavaScript",
      project5_title: "Ứng dụng thời tiết",
      project5_tech: "React, Weather API",
      project6_title: "Nền tảng blog",
      project6_tech: "WordPress, PHP",
      view_project: "Xem dự án",

      // Contact section
      contact_title: "Liên hệ",
      contact_email: "Email",
      contact_phone: "Điện thoại",
      contact_location: "Địa chỉ",
      form_name: "Tên của bạn",
      form_email: "Email của bạn",
      form_subject: "Tiêu đề",
      form_message: "Lời nhắn",
      send_message: "Gửi tin nhắn",

      // Footer
      footer_about:
        "Lập trình viên Frontend tạo ra các website hiện đại, responsive với trọng tâm là trải nghiệm người dùng.",
      footer_links: "Liên kết nhanh",
      footer_social: "Kết nối với mình",
      footer_rights: "Đã đăng ký bản quyền.",
    },
  };

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile navigation toggle
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navList.classList.toggle("active");
  });

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navList.classList.contains("active")) {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      }

      // Set active link
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Sticky header on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 100);
  });

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    backToTopBtn.classList.toggle("active", window.scrollY > 300);
  });

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Project filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active filter button
      filterBtns.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter projects
      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Form submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, subject, message });

    // Show success message
    alert(
      currentLang === "en"
        ? "Thank you for your message! We will get back to you soon."
        : "Cảm ơn bạn đã gửi tin nhắn! Mình sẽ liên hệ lại với bạn sớm.",
    );

    // Reset form
    this.reset();
  });

  // Language switching functionality
  const langButtons = document.querySelectorAll(".lang-btn");
  let currentLang = localStorage.getItem("lang") || "en";

  function setActiveLanguage(lang) {
    // Update UI
    langButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.lang === lang) {
        btn.classList.add("active");
      }
    });

    // Special handling for hero title with span
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      const spanContent = heroTitle.querySelector("span").outerHTML;
      const translatedTitle = translations[lang]["hero_title"]
        .replace("{span}", "<span>")
        .replace("{/span}", "</span>");
      heroTitle.innerHTML = translatedTitle;
    }

    // Update all other translatable elements
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      // Skip hero title since we handled it separately
      if (element.classList.contains("hero-title")) return;

      const key = element.getAttribute("data-translate");
      if (translations[lang][key]) {
        if (element.placeholder) {
          // Handle input placeholders
          element.placeholder = translations[lang][key];
        } else if (element.hasAttribute("value")) {
          // Handle input values
          element.value = translations[lang][key];
        } else {
          // Regular text content
          element.textContent = translations[lang][key];
        }
      }
    });

    // Save preference
    localStorage.setItem("lang", lang);
    currentLang = lang;
  }

  // Initialize language
  setActiveLanguage(currentLang);

  // Handle language switch
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      setActiveLanguage(lang);
    });
  });

  // Section scroll spy
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    let scrollPosition = window.scrollY + 80; // Offset for header height

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const id = section.getAttribute("id");
        const correspondingLink = document.querySelector(
          `.nav-link[href="#${id}"]`,
        );

        navLinks.forEach((link) => link.classList.remove("active"));
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  }

  // Initial check
  updateActiveNav();

  // Update on scroll
  window.addEventListener("scroll", updateActiveNav);

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  document
    .querySelectorAll(".section, .skill-card, .project-card, .contact-item")
    .forEach((el) => {
      observer.observe(el);
    });
});
