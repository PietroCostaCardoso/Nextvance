/**
 * NEXTVANCE - Digital Strategy & Creation Agency
 * @author: Pietro Costa Cardoso
 * @link: https://github.com/PietroCostaCardoso
 * Copyright (c) 2026.
 * Protegido sob a Licença MIT.
 */

console.log(
  "%c Nextvance - Desenvolvido por Pietro Costa Cardoso %c https://github.com/PietroCostaCardoso",
  "color: white; background: #007bff; padding: 5px 10px; border-radius: 5px; font-weight: bold;",
  "color: #007bff; font-weight: bold;"
);

(function(){
    const $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
        
    // --- Lógica de Tradução ---
    const translations = {
        "nav_home": "Home",
        "nav_diff": "Differentials",
        "nav_about": "About Us",
        "nav_services": "Services",
        "nav_testimonials": "Testimonials",
        "nav_contact": "Contact",
        "hero_title": "Transforming ideas into memorable digital experiences",
        "hero_text": "Creative solutions and cutting-edge technology for companies that want to stand out.",
        "hero_btn": "Start your journey",
        "card1_title": "Innovation that transforms",
        "card1_text": "We use creativity and technology to create digital solutions that make your brand stand out.",
        "card2_title": "Experience that builds trust",
        "card2_text": "Our team has helped companies from different sectors to grow and reinvent themselves.",
        "card3_title": "You at the center of everything",
        "card3_text": "Each project is designed to meet the unique needs of those who trust us.",
        "card4_title": "Results that matter",
        "card4_text": "More than aesthetics, we deliver performance, growth, and real impact for your business.",
        "about_title": "Who We Are",
        "about_text": "Nextvance is a company focused on digital innovation. We create solutions that help businesses stand out in the connected world, combining modern design and cutting-edge technology.",
        "about_btn_more": "Learn more",
        "about_btn_contact": "Contact",
        "impact_title": "Experience and Impact",
        "impact_intro": "Our services include",
        "impact_li1": "web development",
        "impact_li2": "responsive design",
        "impact_li3": "UX/UI consulting.",
        "impact_text": "We work to transform ideas into memorable digital experiences, always focusing on quality and impact",
        "impact_highlight": "Here your idea gains a voice, here it becomes reality",
        "services_title": "What we do",
        "gallery1_title": "Digital Planning",
        "gallery1_text": "We define clear paths to transform ideas into real solutions.",
        "gallery2_title": "User Experience",
        "gallery2_text": "We create intuitive journeys that put the user at the center of everything.",
        "gallery3_title": "Tailored Solutions",
        "gallery3_text": "Functional and scalable applications for different types of businesses.",
        "gallery4_title": "Results that matter",
        "gallery4_text": "We optimize every detail to deliver speed, efficiency, and impact.",
        "gallery5_title": "Deep Understanding",
        "gallery5_text": "We analyze behavior and data for smarter decisions.",
        "gallery6_title": "Strategic Support",
        "gallery6_text": "We help companies evolve with technology and future vision.",
        "quote1_text": "Nextvance helped us transform our idea into a modern and efficient digital solution",
        "quote1_author": "Pedro Gomes da Silva, Innovation Director (illustrative example)",
        "quote2_text": "The design created by Nextvance elevated our brand and positioned us better in the connected market",
        "quote2_author": "Ana Ribeiro, Digital Marketing Manager (illustrative example)",
        "footer_brand": "Nextvance",
        "footer_text": "Transforming ideas into digital solutions.",
        "footer_links": "Useful Links",
        "footer_email": "Email: contact@nextvance.com",
        "footer_phone": "Phone: (11) 99999-9999",
        "footer_copy": "© 2026 Nextvance."
    };

    function applyTranslation() {
        const elements = document.querySelectorAll('[data-i18n]');
        Array.prototype.forEach.call(elements, function(el) {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.textContent = translations[key];
            }
        });
        
        const searchInput = document.querySelector('.header__searchInput');
        if(searchInput) searchInput.placeholder = 'Search...';
        
        if(typeof $noResults !== 'undefined') {
             $noResults.textContent = 'Item not found';
        }
    }

    const langModal = document.getElementById('language-modal');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    if(langModal) langModal.classList.add('active');

    if(btnNo) {
        btnNo.addEventListener('click', function() {
            localStorage.setItem('site_lang', 'pt');
            if(langModal) langModal.classList.remove('active');
        });
    }

    if(btnYes) {
        btnYes.addEventListener('click', function() {
            localStorage.setItem('site_lang', 'en');
            applyTranslation();
            if(langModal) langModal.classList.remove('active');
        });
    }
    // --- Fim Lógica de Tradução ---

    const menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024 
    })
    
    const carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
    const carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    const $btnDark = document.querySelector('.header__btnDark');
    
    if($btnDark) {
        const $iconDark = $btnDark.querySelector('i');
        
        $btnDark.addEventListener('click', function(){
            $body.classList.toggle('dark-mode');
            
            if($body.classList.contains('dark-mode')){
                $iconDark.classList.remove('fa-moon');
                $iconDark.classList.add('fa-sun');
            } else {
                $iconDark.classList.add('fa-moon');
                $iconDark.classList.remove('fa-sun');
            }
        })
    }

    // barra de pesquisa do header :)
    const $header = document.querySelector('.header');
    if($header){
        const $searchContainer = document.createElement('div');
        $searchContainer.classList.add('header__search');
        
        const $searchInput = document.createElement('input');
        $searchInput.type = 'text';
        $searchInput.classList.add('header__searchInput');
        $searchInput.placeholder = 'Buscar...';
        
        const $searchBtn = document.createElement('button');
        $searchBtn.classList.add('header__btnSearch');
        $searchBtn.innerHTML = '<i class="fa fa-search"></i>';
        
        $searchContainer.appendChild($searchInput);
        $searchContainer.appendChild($searchBtn);
        
        if($btnDark){
            $header.insertBefore($searchContainer, $btnDark);
        } else {
            $header.appendChild($searchContainer);
        }
        
        //  atalhos para seções
        const sectionKeywords = {
            'galeria': '.gallery',
            'fotos': '.gallery',
            'cards': '.people-cards',
            'pessoas': '.people-cards',
            'depoimentos': '.quote-slideshow',
            'slides': '.laptop-slider',
            'contato': '.footer',
            'topo': '.hero'
        };

        function performSearchAction() {
            const searchTerm = $searchInput.value.toLowerCase().trim();
            
            // Verifica se é uma palavra-chave de seção para efetuar a pesquisa
            if (sectionKeywords[searchTerm]) {
                const $section = document.querySelector(sectionKeywords[searchTerm]);
                if ($section) {
                    const $hiddenElements = document.querySelectorAll('.people-cards__card, .gallery__item');
                    Array.prototype.forEach.call($hiddenElements, function($el){
                        $el.style.display = '';
                    });
                    $noResults.style.display = 'none';
                    $section.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }

            const $visibleItem = document.querySelector('.people-cards__card:not([style*="display: none"]), .gallery__item:not([style*="display: none"])');
            if ($visibleItem) {
                $visibleItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        $searchBtn.addEventListener('click', function(){
            if($searchContainer.classList.contains('active') && $searchInput.value.trim() !== ''){
                performSearchAction();
            } else {
                $searchContainer.classList.toggle('active');
                if($searchContainer.classList.contains('active')){
                    $searchInput.focus();
                }
            }
        });

       
        const $noResults = document.createElement('div');
        $noResults.textContent = 'Item pesquisado não encontrado';
        $noResults.style.cssText = 'position: fixed; top: 100px; left: 50%; transform: translateX(-50%); background: #fff; padding: 15px 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); z-index: 100; display: none; color: #333; font-weight: 600;';
        $body.appendChild($noResults);

       
        $searchInput.addEventListener('input', function(){
            const searchTerm = this.value.toLowerCase();
            const $searchableElements = document.querySelectorAll('.people-cards__card, .gallery__item');
            let hasResults = false;
            
            Array.prototype.forEach.call($searchableElements, function($el){
                const text = $el.textContent.toLowerCase();
                if(text.indexOf(searchTerm) !== -1){
                    $el.style.display = ''; 
                    hasResults = true;
                } else {
                    $el.style.display = 'none'; 
                }
            });

            if(!hasResults && searchTerm !== ''){
                $noResults.style.display = 'block';
            } else {
                $noResults.style.display = 'none';
            }
        });

        
        $searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                performSearchAction();
            }
        });
    }

    // Animação 
    const $targetElements = document.querySelectorAll('.hero__title, .hero__text, .hero__btn, .people-cards__card, .content h3, .content p, .content li, .laptop-slider, .quote-container, .article-title, .gallery__item');
    
    if(window.IntersectionObserver){
        const observer = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            })
        }, {
            threshold: 0.1
        });
        
        Array.prototype.forEach.call($targetElements, function($el){
            $el.classList.add('animate-on-scroll');
            observer.observe($el);
        });
    } else {
        Array.prototype.forEach.call($targetElements, function($el){
            $el.classList.add('visible');
        });
    }

    const $hero = document.querySelector('.hero');
    if($hero) {
        const arrow = document.createElement('i');
        arrow.className = 'fa fa-angle-down hero__arrow';
        $hero.appendChild(arrow);
        
        arrow.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight - 50, 
                behavior: 'smooth'
            });
        });
    }

})()
