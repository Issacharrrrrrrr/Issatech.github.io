// ===========================================================
// IssaTech 3D — scripts.js
// Código refactorizado en clases ES6. Cada clase controla una
// pieza de la interfaz y se inicializa desde App al final del
// archivo. Cárgalo con <script type="module" src="scripts.js">.
// ===========================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===========================================================
   Diccionario de traducciones
   =========================================================== */
const TRANSLATIONS = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.viewer": "Visor 3D",
    "nav.gallery": "Galería",
    "nav.orders": "Pedidos",
    "nav.timeline": "Seguimiento",
    "nav.timelapse": "Timelapse",
    "nav.about": "Nosotros",
    "nav.location": "Ubicación",
    "nav.news": "Novedades",
    "nav.contact": "Contacto",
    "hero.title": "Transformamos ideas en realidad",
    "hero.subtitle": "Impresión 3D · Corte Láser · Bordados personalizados",
    "hero.button": "Haz tu pedido",
    "services.title": "Servicios",
    "services.3d": "Impresión 3D",
    "services.3d_desc": "Prototipos, piezas funcionales y más.",
    "services.laser": "Corte y grabado láser",
    "services.laser_desc": "Personaliza madera, acrílico, cuero y más.",
    "services.embroidery": "Bordados personalizados",
    "services.embroidery_desc": "Uniformes, gorras y prendas exclusivas.",
    "viewer.title": "Visualiza en 3D",
    "viewer.subtitle": "Gira, acerca y explora un modelo de muestra directamente en tu navegador.",
    "viewer.caption": "Modelo de muestra — pronto podrás cargar el tuyo aquí mismo.",
    "viewer.upload_title": "Carga tu propio modelo",
    "viewer.upload_desc": "Arrastra un archivo .STL o .GCODE aquí, o haz clic para seleccionarlo.",
    "viewer.upload_btn": "Seleccionar archivo",
    "viewer.upload_status_dev": "Función en desarrollo: pronto podrás previsualizar tu archivo aquí.",
    "viewer.upload_status_invalid": "Formato no soportado. Usa un archivo .stl o .gcode.",
    "viewer.reset_btn": "Ver modelo de muestra",
    "orders.title": "Panel de Pedidos",
    "orders.description": "Cotiza tu proyecto y llena el formulario para realizar tu pedido:",
    "form.name_placeholder": "Nombre completo",
    "form.email_placeholder": "Correo electrónico",
    "form.phone_placeholder": "Teléfono",
    "form.select_service": "Selecciona un servicio",
    "form.specs_placeholder": "Especificaciones del pedido",
    "form.submit": "Enviar Pedido",
    "form.send": "Enviar",
    "form.message_placeholder": "Mensaje",
    "quote.title": "Cotiza tu proyecto",
    "quote.service_label": "Servicio",
    "quote.material_label": "Material",
    "quote.infill_label": "Densidad de relleno (infill)",
    "quote.basis_label": "Calcular por",
    "quote.basis_weight": "Peso (g)",
    "quote.basis_time": "Tiempo estimado (h)",
    "quote.weight_label": "Peso estimado (gramos)",
    "quote.time_label": "Tiempo estimado (horas)",
    "quote.laser_material_label": "Material",
    "quote.area_label": "Área aproximada (cm²)",
    "quote.garment_label": "Prenda",
    "quote.garment_cap": "Gorra",
    "quote.garment_shirt": "Playera",
    "quote.garment_other": "Otra prenda",
    "quote.pieces_label": "Cantidad de piezas",
    "quote.design_size_label": "Tamaño del diseño",
    "quote.size_small": "Pequeño (hasta 5,000 puntadas)",
    "quote.size_medium": "Mediano (5,000–15,000 puntadas)",
    "quote.size_large": "Grande (más de 15,000 puntadas)",
    "quote.result_label": "Cotización estimada",
    "quote.disclaimer": "Precio aproximado y no vinculante. El costo final se confirma al revisar tu diseño. Ajusta las tarifas en scripts.js para reflejar tus precios reales.",
    "quote.use_btn": "Usar esta cotización en mi pedido",
    "quote.applied": "Cotización aplicada a tu pedido ✓",
    "timeline.title": "Seguimiento de tu Pedido",
    "timeline.subtitle": "Así avanza tu proyecto, paso a paso, desde que lo recibimos hasta que está listo para entregarte.",
    "timeline.step1_title": "Recepción del diseño",
    "timeline.step1_desc": "Revisamos tu archivo o idea y confirmamos los detalles del proyecto.",
    "timeline.step2_title": "Slicing / Preparación",
    "timeline.step2_desc": "Preparamos el archivo, ajustamos parámetros y planificamos la producción.",
    "timeline.step3_title": "Manufactura / Impresión",
    "timeline.step3_desc": "Tu proyecto se fabrica en nuestros equipos de impresión, láser o bordado.",
    "timeline.step4_title": "Post-procesado",
    "timeline.step4_desc": "Lijado, pintura, acabados o remates finales según el proyecto.",
    "timeline.step5_title": "Listo para entrega",
    "timeline.step5_desc": "Tu pedido está terminado y listo para que lo recojas o te lo enviemos.",
    "timeline.demo_label": "Vista de ejemplo — mueve el control para ver cómo se vería el seguimiento de tu pedido:",
    "gallery.title": "Galería",
    "timelapse.title": "Timelapse de Nuestro Trabajo",
    "video.unsupported": "Tu navegador no soporta el video en HTML5.",
    "about.title": "Nosotros",
    "about.description": "En IssaTech 3D nos apasiona transformar tus ideas en objetos reales con la más alta tecnología en impresión 3D, corte láser y bordados personalizados. Contamos con años de experiencia y los mejores equipos para garantizar la más alta calidad en cada proyecto.",
    "location.title": "Nuestra Ubicación",
    "location.address": "Tercera Avenida Nte. Ote. #234, Terán, Tuxtla Gutiérrez, Chiapas, México",
    "social.title": "Novedades en Redes",
    "social.description": "Síguenos para estar al día con nuestros últimos trabajos y promociones",
    "social.instagram": "Síguenos en Instagram",
    "social.instagram_desc": "Mira nuestros últimos proyectos y trabajos personalizados",
    "social.view_instagram": "Ver Instagram",
    "social.facebook": "Síguenos en Facebook",
    "social.facebook_desc": "Entérate de nuestras promociones y eventos especiales",
    "social.view_facebook": "Ver Facebook",
    "contact.title": "Contacto",
    "footer.rights": "Todos los derechos reservados",
    "footer.phone": "Teléfono: +52 961 695 5006",
    "lang.es": "Español",
    "lang.en": "English",
    "chat.title": "Asistente IssaTech",
    "chat.subtitle": "Normalmente responde rápido",
    "chat.welcome": "¡Hola! Soy el asistente virtual de IssaTech 3D. Pregúntame sobre nuestros servicios, tiempos de entrega o cómo cotizar tu proyecto.",
    "chat.placeholder": "Escribe tu mensaje...",
    "chat.fallback": "Gracias por tu mensaje. Un miembro de nuestro equipo revisará tu consulta pronto. Mientras tanto, puedes usar la calculadora de cotizaciones en la sección de Pedidos.",
    "chat.error": "Tuvimos un problema para responder. Intenta de nuevo en un momento."
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.viewer": "3D Viewer",
    "nav.gallery": "Gallery",
    "nav.orders": "Orders",
    "nav.timeline": "Tracking",
    "nav.timelapse": "Timelapse",
    "nav.about": "About Us",
    "nav.location": "Location",
    "nav.news": "News",
    "nav.contact": "Contact",
    "hero.title": "We transform ideas into reality",
    "hero.subtitle": "3D Printing · Laser Cutting · Custom Embroidery",
    "hero.button": "Place your order",
    "services.title": "Services",
    "services.3d": "3D Printing",
    "services.3d_desc": "Prototypes, functional parts and more.",
    "services.laser": "Laser cutting and engraving",
    "services.laser_desc": "Customize wood, acrylic, leather and more.",
    "services.embroidery": "Custom embroidery",
    "services.embroidery_desc": "Uniforms, caps and exclusive garments.",
    "viewer.title": "Explore in 3D",
    "viewer.subtitle": "Rotate, zoom and explore a sample model right in your browser.",
    "viewer.caption": "Sample model — soon you'll be able to upload your own right here.",
    "viewer.upload_title": "Upload your own model",
    "viewer.upload_desc": "Drag an .STL or .GCODE file here, or click to select one.",
    "viewer.upload_btn": "Select file",
    "viewer.upload_status_dev": "Feature in development: a preview of your file will appear here soon.",
    "viewer.upload_status_invalid": "Unsupported format. Use an .stl or .gcode file.",
    "viewer.reset_btn": "View sample model",
    "orders.title": "Order Panel",
    "orders.description": "Get an estimate and fill out the form to place your order:",
    "form.name_placeholder": "Full name",
    "form.email_placeholder": "Email",
    "form.phone_placeholder": "Phone",
    "form.select_service": "Select a service",
    "form.specs_placeholder": "Order specifications",
    "form.submit": "Submit Order",
    "form.send": "Send",
    "form.message_placeholder": "Message",
    "quote.title": "Get an instant quote",
    "quote.service_label": "Service",
    "quote.material_label": "Material",
    "quote.infill_label": "Infill density",
    "quote.basis_label": "Calculate by",
    "quote.basis_weight": "Weight (g)",
    "quote.basis_time": "Estimated time (h)",
    "quote.weight_label": "Estimated weight (grams)",
    "quote.time_label": "Estimated time (hours)",
    "quote.laser_material_label": "Material",
    "quote.area_label": "Approximate area (cm²)",
    "quote.garment_label": "Garment",
    "quote.garment_cap": "Cap",
    "quote.garment_shirt": "T-shirt",
    "quote.garment_other": "Other garment",
    "quote.pieces_label": "Number of pieces",
    "quote.design_size_label": "Design size",
    "quote.size_small": "Small (up to 5,000 stitches)",
    "quote.size_medium": "Medium (5,000–15,000 stitches)",
    "quote.size_large": "Large (over 15,000 stitches)",
    "quote.result_label": "Estimated quote",
    "quote.disclaimer": "Approximate, non-binding price. Final cost is confirmed after reviewing your design. Update the rates in scripts.js to match your real pricing.",
    "quote.use_btn": "Use this quote in my order",
    "quote.applied": "Quote applied to your order ✓",
    "timeline.title": "Track Your Order",
    "timeline.subtitle": "Here's how your project moves forward, step by step, from the moment we receive it until it's ready for you.",
    "timeline.step1_title": "Design received",
    "timeline.step1_desc": "We review your file or idea and confirm the project details.",
    "timeline.step2_title": "Slicing / Prep",
    "timeline.step2_desc": "We prepare the file, tune parameters and plan production.",
    "timeline.step3_title": "Manufacturing",
    "timeline.step3_desc": "Your project is produced on our printing, laser or embroidery equipment.",
    "timeline.step4_title": "Post-processing",
    "timeline.step4_desc": "Sanding, painting, finishing or final touches depending on the project.",
    "timeline.step5_title": "Ready for delivery",
    "timeline.step5_desc": "Your order is finished and ready for pickup or shipping.",
    "timeline.demo_label": "Example view — move the slider to see how your order tracking would look:",
    "gallery.title": "Gallery",
    "timelapse.title": "Timelapse of Our Work",
    "video.unsupported": "Your browser does not support HTML5 video.",
    "about.title": "About Us",
    "about.description": "At IssaTech 3D we are passionate about transforming your ideas into real objects with the latest technology in 3D printing, laser cutting and custom embroidery. We have years of experience and the best equipment to guarantee the highest quality in every project.",
    "location.title": "Our Location",
    "location.address": "Third North East Avenue #234, Terán, Tuxtla Gutiérrez, Chiapas, Mexico",
    "social.title": "Social Media News",
    "social.description": "Follow us to stay up to date with our latest work and promotions",
    "social.instagram": "Follow us on Instagram",
    "social.instagram_desc": "See our latest projects and custom work",
    "social.view_instagram": "View Instagram",
    "social.facebook": "Follow us on Facebook",
    "social.facebook_desc": "Find out about our promotions and special events",
    "social.view_facebook": "View Facebook",
    "contact.title": "Contact",
    "footer.rights": "All rights reserved",
    "footer.phone": "Phone: +52 961 695 5006",
    "lang.es": "Spanish",
    "lang.en": "English",
    "chat.title": "IssaTech Assistant",
    "chat.subtitle": "Usually replies fast",
    "chat.welcome": "Hi! I'm IssaTech 3D's virtual assistant. Ask me about our services, turnaround times, or how to quote your project.",
    "chat.placeholder": "Type your message...",
    "chat.fallback": "Thanks for your message. A team member will review it soon. Meanwhile, you can use the quote calculator in the Orders section.",
    "chat.error": "We had trouble responding. Please try again in a moment."
  }
};

/* ===========================================================
   ThemeManager — modo claro / oscuro
   =========================================================== */
class ThemeManager {
  constructor() {
    this.toggleBtn = document.getElementById('theme-toggle');
    this.icon = this.toggleBtn?.querySelector('i');
  }

  init() {
    if (!this.toggleBtn) return;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') this.enableDark();
    this.toggleBtn.addEventListener('click', () => this.toggle());
  }

  enableDark() {
    document.body.classList.add('dark-mode');
    this.icon?.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }

  enableLight() {
    document.body.classList.remove('dark-mode');
    this.icon?.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }

  toggle() {
    document.body.classList.contains('dark-mode') ? this.enableLight() : this.enableDark();
  }
}

/* ===========================================================
   LanguageManager — selector de idioma ES/EN
   =========================================================== */
class LanguageManager {
  constructor() {
    this.toggleBtn = document.getElementById('language-toggle');
    this.dropdown = document.getElementById('language-dropdown');
    this.options = document.querySelectorAll('.language-option');
    this.currentLang = localStorage.getItem('language') || 'es';
  }

  init() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.dropdown.classList.toggle('show');
      });
    }

    document.addEventListener('click', () => this.dropdown?.classList.remove('show'));
    this.dropdown?.addEventListener('click', (e) => e.stopPropagation());

    this.options.forEach((option) => {
      option.addEventListener('click', () => {
        this.apply(option.getAttribute('data-lang'));
        this.dropdown.classList.remove('show');
      });
    });

    this.apply(this.currentLang);
  }

  apply(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll('[data-key]').forEach((element) => {
      const key = element.getAttribute('data-key');
      if (!dict[key]) return;

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', dict[key]);
      } else {
        element.textContent = dict[key];
      }
    });

    document.documentElement.lang = lang;
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.dispatchEvent(new CustomEvent('language:changed', { detail: { lang } }));
  }

  t(key) {
    return TRANSLATIONS[this.currentLang]?.[key] || TRANSLATIONS.es[key] || key;
  }
}

/* ===========================================================
   NavbarController — menú móvil, estado activo y sticky scroll
   =========================================================== */
class NavbarController {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.navbar nav');
    this.navLinks = document.querySelectorAll('.navbar nav a');
  }

  init() {
    this.navToggle?.addEventListener('click', () => this.navMenu.classList.toggle('active'));

    document.addEventListener('click', (e) => {
      if (this.navMenu?.classList.contains('active') &&
          !e.target.closest('.navbar nav') &&
          !e.target.closest('.nav-toggle')) {
        this.navMenu.classList.remove('active');
      }
    });

    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    this.navbar.classList.toggle('scrolled', window.scrollY > 50);

    this.navLinks.forEach((link) => {
      const section = document.getElementById(link.getAttribute('href').substring(1));
      if (!section) return;
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      link.classList.toggle('active', window.scrollY >= top && window.scrollY < bottom);
    });
  }

  closeMobileMenu() {
    this.navMenu?.classList.remove('active');
  }
}

/* ===========================================================
   SmoothScroller — scroll animado a cualquier sección
   =========================================================== */
class SmoothScroller {
  static scrollTo(targetId, duration = 800) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    if (prefersReducedMotion) {
      targetSection.scrollIntoView({ block: 'start' });
      return;
    }

    const startPosition = window.pageYOffset;
    const targetPosition = targetSection.offsetTop - 70;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t -= 1;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      window.scrollTo(0, ease(elapsed, startPosition, distance, duration));
      if (elapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

/* ===========================================================
   ProgressBar — barra superior de progreso de scroll
   =========================================================== */
class ProgressBar {
  constructor() {
    this.bar = document.getElementById('progressBar');
  }

  init() {
    if (!this.bar) return;
    window.addEventListener('scroll', () => this.update());
    this.update();
  }

  update() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
    this.bar.style.width = `${scrolled}%`;
  }
}

/* ===========================================================
   ScrollReveal — animaciones de aparición con IntersectionObserver
   =========================================================== */
class ScrollReveal {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }

  init() {
    if (prefersReducedMotion) {
      this.elements.forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

    this.elements.forEach((el) => {
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }
}

/* ===========================================================
   TimelapseCarousel — carrusel de videos
   =========================================================== */
class TimelapseCarousel {
  constructor() {
    this.slider = document.getElementById('timelapseSlider');
    this.slides = document.querySelectorAll('.timelapse-slide');
    this.prevBtn = document.getElementById('timelapsePrev');
    this.nextBtn = document.getElementById('timelapseNext');
    this.dotsContainer = document.getElementById('timelapseDots');
    this.current = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.autoplayTimer = null;
  }

  init() {
    if (!this.slider || this.slides.length === 0) return;

    this.slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('timelapse-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => this.goTo(i));
      this.dotsContainer.appendChild(dot);
    });

    this.prevBtn?.addEventListener('click', () => this.goTo(this.current - 1));
    this.nextBtn?.addEventListener('click', () => this.goTo(this.current + 1));

    this.slider.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    });

    this.slider.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    if (!prefersReducedMotion) {
      this.autoplayTimer = setInterval(() => this.goTo(this.current + 1), 10000);
    }
  }

  goTo(index) {
    const count = this.slides.length;
    this.current = (index + count) % count;
    this.slider.style.transform = `translateX(-${this.current * 100}%)`;
    this.dotsContainer.querySelectorAll('.timelapse-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.current);
    });
  }

  handleSwipe() {
    if (this.touchEndX < this.touchStartX - 30) this.goTo(this.current + 1);
    if (this.touchEndX > this.touchStartX + 30) this.goTo(this.current - 1);
  }
}

/* ===========================================================
   Model3DViewer — visor WebGL (<model-viewer>) + carga de archivos
   ===========================================================
   El modelo de muestra es solo una demo. El input de archivo ya
   está cableado a handleFileSelect(file), que es el punto de
   extensión para implementar después la carga real de .stl/.gcode
   (por ejemplo, con THREE.STLLoader o un parser de G-code).
   =========================================================== */
class Model3DViewer {
  constructor() {
    this.viewer = document.getElementById('sample-model-viewer');
    this.dropzone = document.getElementById('model-upload-zone');
    this.fileInput = document.getElementById('model-file-input');
    this.selectBtn = document.getElementById('model-upload-btn');
    this.statusEl = document.getElementById('model-upload-status');
    this.canvasContainer = document.getElementById('stl-preview-canvas');
    this.resetBtn = document.getElementById('viewer-reset-btn');
    this.captionEl = document.getElementById('viewer-stage-caption');
    this.three = null; // estado del visor de Three.js mientras hay un STL cargado
  }

  init() {
    if (this.viewer && prefersReducedMotion) {
      this.viewer.removeAttribute('auto-rotate');
    }

    if (!this.dropzone || !this.fileInput) return;

    this.selectBtn?.addEventListener('click', () => this.fileInput.click());
    this.dropzone.addEventListener('click', (e) => {
      if (e.target === this.selectBtn) return;
      this.fileInput.click();
    });
    this.dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.fileInput.click();
      }
    });

    this.fileInput.addEventListener('change', () => {
      if (this.fileInput.files[0]) this.handleFileSelect(this.fileInput.files[0]);
    });

    ['dragenter', 'dragover'].forEach((evt) => {
      this.dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        this.dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach((evt) => {
      this.dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        this.dropzone.classList.remove('dragover');
      });
    });

    this.dropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file) this.handleFileSelect(file);
    });

    this.resetBtn?.addEventListener('click', () => this.showSampleModel());
  }

  lang() {
    return document.documentElement.lang === 'en' ? 'en' : 'es';
  }

  async handleFileSelect(file) {
    const lang = this.lang();
    const isSTL = /\.stl$/i.test(file.name);
    const isGcode = /\.gcode$/i.test(file.name);

    if (!isSTL && !isGcode) {
      this.statusEl.textContent = TRANSLATIONS[lang]['viewer.upload_status_invalid'];
      return;
    }

    // .gcode: la previsualización real requiere un parser de trayectorias
    // (no una malla 3D), que es un visualizador distinto al de STL/GLB.
    // Queda como punto de extensión a futuro.
    if (isGcode) {
      this.statusEl.textContent = `"${file.name}" — ${TRANSLATIONS[lang]['viewer.upload_status_dev']}`;
      document.dispatchEvent(new CustomEvent('model3d:fileSelected', { detail: { file } }));
      return;
    }

    this.statusEl.textContent = `${lang === 'en' ? 'Loading' : 'Cargando'} "${file.name}"…`;

    try {
      await this.previewSTL(file);
      this.statusEl.textContent = `"${file.name}" ${lang === 'en' ? 'loaded ✓' : 'cargado ✓'}`;
      document.dispatchEvent(new CustomEvent('model3d:fileSelected', { detail: { file } }));
    } catch (err) {
      console.error('STL preview error:', err);
      this.statusEl.textContent = lang === 'en'
        ? 'Could not read this STL file. Try another one.'
        : 'No se pudo leer este archivo STL. Intenta con otro.';
    }
  }

  /**
   * Renderiza el STL del cliente con Three.js (carga perezosa vía
   * import() + import map, ver index.html). Sustituye visualmente al
   * <model-viewer> de muestra mientras el archivo esté activo.
   */
  async previewSTL(file) {
    const [THREE, { STLLoader }, { OrbitControls }] = await Promise.all([
      import('three'),
      import('three/addons/loaders/STLLoader.js'),
      import('three/addons/controls/OrbitControls.js')
    ]);

    const buffer = await file.arrayBuffer();
    const geometry = new STLLoader().parse(buffer);
    geometry.center();
    geometry.computeBoundingSphere();

    this.viewer.hidden = true;
    this.canvasContainer.hidden = false;
    if (this.resetBtn) this.resetBtn.hidden = false;
    if (this.captionEl) this.captionEl.textContent = file.name;

    if (!this.three) {
      this.three = this.createThreeScene(THREE, OrbitControls);
    }

    this.replaceMesh(THREE, geometry);
    this.fitCameraToObject();
  }

  createThreeScene(THREE, OrbitControls) {
    const container = this.canvasContainer;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(1, 1.2, 1.5);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-1.5, -0.6, -1);
    scene.add(fillLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = !prefersReducedMotion;
    controls.autoRotateSpeed = 1.2;

    const state = { scene, camera, renderer, controls, mesh: null, frameId: null, resizeObserver: null };

    state.resizeObserver = new ResizeObserver(() => {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    state.resizeObserver.observe(container);

    const renderLoop = () => {
      controls.update();
      renderer.render(scene, camera);
      state.frameId = requestAnimationFrame(renderLoop);
    };
    state.frameId = requestAnimationFrame(renderLoop);

    return state;
  }

  replaceMesh(THREE, geometry) {
    const { scene } = this.three;

    if (this.three.mesh) {
      scene.remove(this.three.mesh);
      this.three.mesh.geometry.dispose();
      this.three.mesh.material.dispose();
    }

    const material = new THREE.MeshStandardMaterial({ color: 0x0099ff, metalness: 0.15, roughness: 0.55 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    this.three.mesh = mesh;
  }

  fitCameraToObject() {
    const { mesh, camera, controls } = this.three;
    const radius = mesh.geometry.boundingSphere ? mesh.geometry.boundingSphere.radius : 50;
    const distance = radius * 2.8 || 100;

    camera.position.set(distance, distance * 0.7, distance);
    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.update();
  }

  showSampleModel() {
    this.viewer.hidden = false;
    this.canvasContainer.hidden = true;
    if (this.resetBtn) this.resetBtn.hidden = true;
    this.statusEl.textContent = '';
    this.fileInput.value = '';

    if (this.captionEl) {
      this.captionEl.textContent = TRANSLATIONS[this.lang()]['viewer.caption'];
    }

    if (this.three) {
      cancelAnimationFrame(this.three.frameId);
      this.three.resizeObserver.disconnect();
      this.three.controls.dispose();
      this.three.renderer.dispose();
      this.three.renderer.domElement.remove();
      if (this.three.mesh) {
        this.three.mesh.geometry.dispose();
        this.three.mesh.material.dispose();
      }
      this.three = null;
    }
  }
}

/* ===========================================================
   QuoteCalculator — calculadora de cotización en tiempo real
   ===========================================================
   ⚠️ AJUSTA ESTAS TARIFAS A TUS PRECIOS REALES.
   Todos los montos están en MXN y son solo valores de ejemplo.
   =========================================================== */
class QuoteCalculator {
  static RATES = {
    print3d: {
      setupFee: 30,
      materials: {
        PLA: { perGram: 0.9, perHour: 25 },
        PETG: { perGram: 1.1, perHour: 28 },
        TPU: { perGram: 1.6, perHour: 32 }
      }
    },
    laser: {
      setupFee: 20,
      materials: {
        mdf3: { perCm2: 0.18, label: 'MDF 3mm' },
        acrilico3: { perCm2: 0.35, label: 'Acrílico 3mm' },
        acrilico5: { perCm2: 0.55, label: 'Acrílico 5mm' },
        carton: { perCm2: 0.08, label: 'Cartón' }
      }
    },
    embroidery: {
      pequeno: 60,
      mediano: 110,
      grande: 180,
      garmentFee: { gorra: 0, playera: 15, otra: 25 }
    }
  };

  constructor() {
    this.form = document.getElementById('quote-calculator');
    this.serviceSelect = document.getElementById('quote-service');
    this.fieldGroups = document.querySelectorAll('.quote-fields');
    this.resultEl = document.getElementById('quote-result-value');
    this.useBtn = document.getElementById('quote-use-btn');

    this.infillInput = document.getElementById('quote-infill');
    this.infillValueEl = document.getElementById('quote-infill-value');
    this.basisRadios = document.querySelectorAll('input[name="quote-basis"]');
    this.weightWrapper = document.getElementById('quote-weight-wrapper');
    this.timeWrapper = document.getElementById('quote-time-wrapper');
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('input', () => this.update());
    this.serviceSelect.addEventListener('change', () => this.toggleFields());
    this.basisRadios.forEach((radio) => radio.addEventListener('change', () => this.toggleBasis()));
    this.useBtn?.addEventListener('click', () => this.applyToOrderForm());

    this.toggleFields();
    this.toggleBasis();
    this.update();
  }

  toggleFields() {
    const service = this.serviceSelect.value;
    this.fieldGroups.forEach((group) => {
      group.hidden = group.dataset.service !== service;
    });
    this.update();
  }

  toggleBasis() {
    const basis = document.querySelector('input[name="quote-basis"]:checked')?.value || 'weight';
    this.weightWrapper.hidden = basis !== 'weight';
    this.timeWrapper.hidden = basis !== 'time';
    this.update();
  }

  update() {
    const service = this.serviceSelect.value;
    let total = 0;

    if (this.infillInput) this.infillValueEl.textContent = `${this.infillInput.value}%`;

    if (service === 'print3d') {
      total = this.calculatePrint3D();
    } else if (service === 'laser') {
      total = this.calculateLaser();
    } else if (service === 'embroidery') {
      total = this.calculateEmbroidery();
    }

    this.lastTotal = Math.max(0, Math.round(total));
    this.resultEl.textContent = `$${this.lastTotal.toLocaleString('es-MX')} MXN`;
  }

  calculatePrint3D() {
    const { setupFee, materials } = QuoteCalculator.RATES.print3d;
    const materialKey = document.getElementById('quote-material-3d').value;
    const rate = materials[materialKey];
    const infill = Number(this.infillInput.value);
    const infillFactor = 0.7 + (infill / 100) * 0.6;
    const basis = document.querySelector('input[name="quote-basis"]:checked')?.value || 'weight';

    if (basis === 'weight') {
      const grams = Number(document.getElementById('quote-weight').value) || 0;
      return setupFee + grams * rate.perGram * infillFactor;
    }

    const hours = Number(document.getElementById('quote-time').value) || 0;
    return setupFee + hours * rate.perHour * infillFactor;
  }

  calculateLaser() {
    const { setupFee, materials } = QuoteCalculator.RATES.laser;
    const materialKey = document.getElementById('quote-material-laser').value;
    const rate = materials[materialKey];
    const area = Number(document.getElementById('quote-area').value) || 0;
    return setupFee + area * rate.perCm2;
  }

  calculateEmbroidery() {
    const { garmentFee, ...sizes } = QuoteCalculator.RATES.embroidery;
    const garment = document.getElementById('quote-garment').value;
    const pieces = Number(document.getElementById('quote-pieces').value) || 0;
    const size = document.getElementById('quote-design-size').value;
    const unitPrice = sizes[size] + (garmentFee[garment] || 0);

    let discount = 1;
    if (pieces >= 50) discount = 0.82;
    else if (pieces >= 12) discount = 0.9;

    return pieces * unitPrice * discount;
  }

  applyToOrderForm() {
    const service = this.serviceSelect.value;
    const serviceLabels = {
      print3d: 'Impresión 3D',
      laser: 'Corte y grabado láser',
      embroidery: 'Bordados personalizados'
    };

    const specs = document.getElementById('order-specifications');
    const serviceSelectForm = document.getElementById('order-service');
    if (serviceSelectForm) serviceSelectForm.value = serviceLabels[service];

    let summary = `Cotización estimada: $${this.lastTotal.toLocaleString('es-MX')} MXN — Servicio: ${serviceLabels[service]}`;
    if (service === 'print3d') {
      const material = document.getElementById('quote-material-3d').value;
      summary += `, Material: ${material}, Infill: ${this.infillInput.value}%`;
    } else if (service === 'laser') {
      const materialKey = document.getElementById('quote-material-laser').value;
      const area = document.getElementById('quote-area').value;
      summary += `, Material: ${QuoteCalculator.RATES.laser.materials[materialKey].label}, Área: ${area}cm²`;
    } else if (service === 'embroidery') {
      const pieces = document.getElementById('quote-pieces').value;
      summary += `, Piezas: ${pieces}`;
    }

    if (specs) {
      specs.value = specs.value ? `${specs.value}\n\n${summary}` : summary;
    }

    SmoothScroller.scrollTo('dashboard');
    this.useBtn.textContent = window.app?.languageManager.t('quote.applied') || 'Cotización aplicada ✓';
    setTimeout(() => {
      this.useBtn.textContent = window.app?.languageManager.t('quote.use_btn') || 'Usar esta cotización en mi pedido';
    }, 2500);
  }
}

/* ===========================================================
   OrderTimeline — seguimiento visual del pedido (demo)
   =========================================================== */
class OrderTimeline {
  constructor() {
    this.steps = document.querySelectorAll('.timeline-step');
    this.slider = document.getElementById('timeline-demo-select');
  }

  init() {
    if (!this.slider || this.steps.length === 0) return;
    this.slider.addEventListener('input', () => this.render());
    this.render();
  }

  render() {
    const activeStep = Number(this.slider.value);
    this.steps.forEach((step) => {
      const stepNumber = Number(step.dataset.step);
      step.classList.remove('active', 'completed');
      if (stepNumber < activeStep) step.classList.add('completed');
      if (stepNumber === activeStep) step.classList.add('active');
    });
  }
}

/* ===========================================================
   OrderFormHandler — envío del formulario de pedidos (EmailJS)
   =========================================================== */
class OrderFormHandler {
  constructor() {
    this.form = document.getElementById('order-form');
    this.submitButton = document.getElementById('submit-order');
    this.messageEl = document.getElementById('form-message');
  }

  init() {
    if (!this.form || typeof emailjs === 'undefined') return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitButton.disabled = true;
    this.submitButton.textContent = 'Enviando...';

    const formData = {
      name: this.form.name.value,
      email: this.form.email.value,
      phone: this.form.phone.value,
      service: this.form.service.value,
      specifications: this.form.specifications.value,
      date: new Date().toLocaleString('es-MX')
    };

    emailjs.send('service_6kom8gf', 'template_w7ye4ao', formData)
      .then(() => {
        this.showMessage('¡Pedido enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
        this.form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        this.showMessage('Error al enviar el pedido. Por favor, intenta nuevamente.', 'error');
      })
      .finally(() => {
        this.submitButton.disabled = false;
        this.submitButton.textContent = window.app?.languageManager.t('form.submit') || 'Enviar Pedido';
        setTimeout(() => {
          this.messageEl.className = 'form-message';
          this.messageEl.textContent = '';
        }, 5000);
      });
  }

  showMessage(text, type) {
    this.messageEl.textContent = text;
    this.messageEl.className = `form-message ${type}`;
  }
}

/* ===========================================================
   ContactFormHandler — formulario de contacto (Formspree)
   =========================================================== */
class ContactFormHandler {
  constructor() {
    this.form = document.querySelector('.contact form');
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
      this.form.reset();
    });
  }
}

/* ===========================================================
   ChatWidget — asistente virtual flotante
   ===========================================================
   La función fetchResponse() es el punto de integración. Hoy
   simula respuestas con reglas simples para que el widget se
   sienta funcional sin backend. Sustitúyela por una llamada real
   a tu servidor de inferencia local o a una API externa de IA.
   =========================================================== */
class ChatWidget {
  constructor() {
    this.widget = document.getElementById('chat-widget');
    this.toggleBtn = document.getElementById('chat-toggle-btn');
    this.window = document.getElementById('chat-window');
    this.closeBtn = document.getElementById('chat-close-btn');
    this.messagesEl = document.getElementById('chat-messages');
    this.form = document.getElementById('chat-form');
    this.input = document.getElementById('chat-input');
    this.history = [];
  }

  init() {
    if (!this.widget) return;
    this.toggleIcon = this.toggleBtn.querySelector('i');
    this.toggleBtn.addEventListener('click', () => this.toggle());
    this.closeBtn.addEventListener('click', () => this.close());
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Cerrar con la tecla Escape mientras el chat está abierto
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.window.hidden) this.close();
    });
  }

  toggle() {
    this.window.hidden ? this.open() : this.close();
  }

  open() {
    this.window.hidden = false;
    this.toggleBtn.setAttribute('aria-expanded', 'true');
    this.toggleBtn.setAttribute('aria-label', 'Minimizar chat');
    this.toggleIcon?.classList.replace('fa-comment-dots', 'fa-chevron-down');
    this.input.focus();
  }

  close() {
    this.window.hidden = true;
    this.toggleBtn.setAttribute('aria-expanded', 'false');
    this.toggleBtn.setAttribute('aria-label', 'Abrir chat de ayuda');
    this.toggleIcon?.classList.replace('fa-chevron-down', 'fa-comment-dots');
  }

  async handleSubmit(e) {
    e.preventDefault();
    const text = this.input.value.trim();
    if (!text) return;

    this.addMessage(text, 'user');
    this.history.push({ role: 'user', text });
    this.input.value = '';

    const typingBubble = this.showTyping();

    try {
      const reply = await this.fetchResponse(text);
      typingBubble.remove();
      this.addMessage(reply, 'bot');
      this.history.push({ role: 'bot', text: reply });
    } catch (error) {
      console.error('Chat error:', error);
      typingBubble.remove();
      this.addMessage(window.app?.languageManager.t('chat.error') || 'Tuvimos un problema para responder.', 'bot');
    }
  }

  /**
   * Punto de integración futura. Ejemplo para conectar tu propio
   * servidor de inferencia local o una API externa:
   *
   *   const res = await fetch('https://tu-servidor-ia.local/api/chat', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify({ message: userText, history: this.history })
   *   });
   *   const data = await res.json();
   *   return data.reply;
   */
  async fetchResponse(userText) {
    return this.simulateLocalResponse(userText);
  }

  simulateLocalResponse(userText) {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    const text = userText.toLowerCase();

    const rules = [
      { keywords: ['precio', 'cotiza', 'costo', 'price', 'quote'], es: 'Puedes obtener un precio aproximado al instante con la calculadora de cotizaciones en la sección "Pedidos". ¿Quieres que te lleve ahí?', en: 'You can get an instant estimate with the quote calculator in the "Orders" section. Want me to take you there?' },
      { keywords: ['tiempo', 'entrega', 'cuanto tarda', 'time', 'delivery'], es: 'Los tiempos varían según el proyecto, pero la mayoría de pedidos de impresión 3D y láser se entregan en 2 a 5 días hábiles.', en: 'Turnaround varies by project, but most 3D printing and laser orders ship in 2 to 5 business days.' },
      { keywords: ['material', 'pla', 'petg', 'tpu'], es: 'Trabajamos con PLA, PETG y TPU para impresión 3D, además de madera, acrílico y cuero para corte láser.', en: 'We work with PLA, PETG and TPU for 3D printing, plus wood, acrylic and leather for laser cutting.' },
      { keywords: ['ubicacion', 'direccion', 'donde', 'location', 'address'], es: 'Estamos en Tercera Avenida Nte. Ote. #234, Terán, Tuxtla Gutiérrez, Chiapas. Puedes ver el mapa en la sección "Ubicación".', en: "We're at Tercera Avenida Nte. Ote. #234, Terán, Tuxtla Gutiérrez, Chiapas. Check the map in the \"Location\" section." },
      { keywords: ['bordado', 'gorra', 'playera', 'embroidery'], es: 'Hacemos bordados personalizados en gorras, playeras y uniformes. El precio depende del tamaño del diseño y la cantidad de piezas.', en: 'We do custom embroidery on caps, t-shirts and uniforms. Price depends on design size and quantity.' }
    ];

    const match = rules.find((rule) => rule.keywords.some((k) => text.includes(k)));
    if (match) return Promise.resolve(match[lang]);

    return Promise.resolve(TRANSLATIONS[lang]['chat.fallback']);
  }

  showTyping() {
    const bubble = document.createElement('div');
    bubble.className = 'chat-message bot typing';
    bubble.innerHTML = '<span></span><span></span><span></span>';
    this.messagesEl.appendChild(bubble);
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    return bubble;
  }

  addMessage(text, role) {
    const bubble = document.createElement('div');
    bubble.className = `chat-message ${role}`;
    const p = document.createElement('p');
    p.textContent = text;
    bubble.appendChild(p);
    this.messagesEl.appendChild(bubble);
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }
}

/* ===========================================================
   App — punto de entrada, conecta todos los módulos
   =========================================================== */
class App {
  init() {
    this.themeManager = new ThemeManager();
    this.languageManager = new LanguageManager();
    this.navbar = new NavbarController();
    this.progressBar = new ProgressBar();
    this.timelapse = new TimelapseCarousel();
    this.modelViewer = new Model3DViewer();
    this.quoteCalculator = new QuoteCalculator();
    this.orderTimeline = new OrderTimeline();
    this.orderForm = new OrderFormHandler();
    this.contactForm = new ContactFormHandler();
    this.chatWidget = new ChatWidget();
    this.scrollReveal = new ScrollReveal('.card, .dashboard, .gallery-item, .about, .contact, footer, .map-container, .social-news, .timelapse, .viewer-stage, .viewer-upload, .order-timeline');

    this.themeManager.init();
    this.languageManager.init();
    this.navbar.init();
    this.progressBar.init();
    this.timelapse.init();
    this.modelViewer.init();
    this.quoteCalculator.init();
    this.orderTimeline.init();
    this.orderForm.init();
    this.contactForm.init();
    this.chatWidget.init();
    this.scrollReveal.init();

    this.bindNavLinks();
    this.setFooterYear();
  }

  bindNavLinks() {
    document.querySelectorAll('.navbar nav a').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navbar.closeMobileMenu();
        SmoothScroller.scrollTo(link.getAttribute('href').substring(1), 1000);
      });
    });

    document.querySelector('.hero .btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      SmoothScroller.scrollTo('dashboard', 1000);
    });

    const homeLink = document.querySelector('.navbar nav a[href="#home"]');
    homeLink?.classList.add('active');
  }

  setFooterYear() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  window.app.init();
});
