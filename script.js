
  const products = [
    {
      name: "sTread Pro",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadPro.png",
      link: "https://www.sportstech.de/stread-pro",
      popupTitle: "sTread Pro",
      popupDesc: "Das sTread Pro bringt dich mit bis zu 20 km/h und 15 % Steigung an deine Grenzen – angetrieben von einem 7 PS starken Motor.<br>Dank cleverer Klappfunktion sparst du Platz, ohne auf Performance zu verzichten.",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/stread-pro red.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadPro.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadPro_ProduktBild_Desktop.jpg", // background for first part
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sBike_ProduktBild_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg" // background for second part
    },
    {
      name: "sRow",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sRow.png",
      link: "https://www.sportstech.de/srow",
      popupTitle: "sRow",
      popupDesc: "Das sRow überzeugt mit 21,5' Touchscreen, 7-farbiger LED-Rail und wartungsfreiem Magnetbremssystem. Kompakt, klappbar und leicht zu verstauen – für ein Rudererlebnis der Extraklasse!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/srow.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sRow.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sRow_ProduktBild_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sRow_ProduktBild_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    },
    {
      name: "sBike",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sBike.png",
      link: "https://www.sportstech.de/sbike",
      popupTitle: "sBike",
      popupDesc: "Das sBike kombiniert einen ergonomischen Sportsattel mit smarten Kombipedalen für ein optimales Fahrerlebnis. Das 21,5' Touchdisplay ist 360° drehbar und bietet dir volle Kontrolle über dein Training!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/sbike2022.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sBike.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sBike_ProduktBild_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sBike_ProduktBild_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    },
    {
      name: "sVibe",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sVibe.png",
      link: "https://www.sportstech.de/svibe",
      popupTitle: "sVibe",
      popupDesc: "Das sVibe bringt dein Training auf das nächste Level – mit einer Anti-Rutsch-Oberfläche, zwei ultra-leisen Motoren und 7-farbiger LED-Beleuchtung. Dein Shortcut zu mehr Fitness!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/stread-pro-blue.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sVibe.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sVibe_ProduktBild_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sVibe_ProduktBild_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    }
  ];

  const slider = document.getElementById("slider");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  let currentIndex = 0; // Start at first product

  function renderSlides() {
    slider.innerHTML = "";

    // Add empty slide at the start
    const emptyStart = document.createElement("div");
    emptyStart.className = "slide empty-slide";
    slider.appendChild(emptyStart);

    // Add product slides
    products.forEach((product, idx) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <p>${product.name}</p>
      `;
      // Make slide clickable to become active
      slide.addEventListener('click', function() {
        currentIndex = idx;
        updateSlider();
      });
      slider.appendChild(slide);
    });

    // Add empty slide at the end
    const emptyEnd = document.createElement("div");
    emptyEnd.className = "slide empty-slide";
    slider.appendChild(emptyEnd);

    updateSlider();
  }

  function updateSlider() {
    const slides = slider.querySelectorAll(".slide");
    if (slides.length === 0) return;
    const slideWidth = slides[1].offsetWidth + 20; // skip the first empty slide for width
    const visibleCount = 3;
    const centerOffset = Math.floor(visibleCount / 2);

    // Offset by +1 because of the empty slide at the start
    let realIndex = currentIndex + 1;

    // --- MOBILE VIEW LOGIC ---
    if (window.innerWidth <= 600) {
      slides.forEach((slide, idx) => {
        slide.classList.remove("active", "prev", "next");
        if (idx === realIndex) {
          slide.classList.add("active");
        } else if (idx === realIndex - 1) {
          slide.classList.add("prev");
        } else if (idx === realIndex + 1) {
          slide.classList.add("next");
        }
      });
      slider.style.transform = "none";
      return;
    }
    // --- DESKTOP LOGIC (unchanged) ---
    let offset = slideWidth * (realIndex - centerOffset);
    slider.style.transform = `translateX(-${offset}px)`;
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[realIndex]) {
      slides[realIndex].classList.add("active");
    }
  }

  function moveNext() {
    if (currentIndex < products.length - 1) {
      currentIndex++;
      updateSlider();
    }
  }

  function movePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  leftArrow.addEventListener("click", movePrev);
  rightArrow.addEventListener("click", moveNext);

  window.addEventListener("resize", updateSlider);
  window.addEventListener("load", () => {
    renderSlides();
    updateSlider();
  });

    // Popup logic
    const openPopupLink = document.querySelector('.open-popup');
    const fullscreenPopup = document.getElementById('fullscreenPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    openPopupLink.addEventListener('click', function(e) {
      e.preventDefault();
      updatePopupContent(products[currentIndex]);
      fullscreenPopup.classList.add('active');
      document.body.style.overflow = 'hidden'; // Hide main page scroll
    });
    closePopupBtn.addEventListener('click', () => {
      fullscreenPopup.classList.remove('active');
      document.body.style.overflow = '';
    });
    fullscreenPopup.addEventListener('click', (e) => {
      if (e.target === fullscreenPopup) {
        fullscreenPopup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

  function updatePopupContent(product) {
    // First section
    document.querySelectorAll('.popup-title-left')[0].innerHTML = product.popupTitle;
    document.querySelectorAll('.popup-text-left')[0].innerHTML = product.popupDesc;
    // Second section
    document.querySelectorAll('.popup-title-left')[1].innerHTML = product.popupTitle;
    document.querySelectorAll('.popup-text-left')[1].innerHTML = product.popupDesc;
    // Model-viewer
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.setAttribute('src', product.modelSrc);
    modelViewer.setAttribute('poster', product.modelPoster);
    modelViewer.setAttribute('alt', product.popupTitle + ' 3D Model');
    // Set background images for both popup sections dynamically
    var isMobile = window.innerWidth <= 600;
    var bg1 = isMobile && product.popupBg1Mobile ? product.popupBg1Mobile : product.popupBg1;
    document.querySelector('.popup-bg').style.backgroundImage = `url('${bg1}')`;
    document.querySelector('.popup-bg-dark').style.backgroundImage = `url('${product.popupBg2}')`;
}

// Add event listener for popup-action-left button to redirect to product link in the same tab
const popupActionBtns = document.querySelectorAll('.popup-action-left');
popupActionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    window.location.href = products[currentIndex].link;
  });
});














const products_s = [
    {
      name: "sBike Lite",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sBikeLite.png",
      link: "https://www.sportstech.de/sbike",
      popupTitle: "sBike Lite",
      popupDesc: "Das sBike Lite pusht deine Fitness mit smarten Kombipedalen und dem 7-Zonen-LED-System für mitreißende Club-Atmosphäre. Dein Next Level Ride beginnt jetzt!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/sbike2022.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sBikeLite.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sBikeLite_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sBikeLite_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    },
    {
      name: "sTread Lite",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadLite.png",
      link: "https://www.sportstech.de/stread-lite",
      popupTitle: "sTread Lite",
      popupDesc: "Das sTread Lite bringt dich mit bis zu 20 km/h und automatischer Steigung auf Touren. Dank cleverer Klappfunktion ist es perfekt für dein Zuhause!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/stread-lite.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadLite.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadLite_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadLite_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    }
  ];

  const slider_s = document.getElementById("slider-s");
  const leftArrow_s = document.querySelector(".arrow-s.left-s");
  const rightArrow_s = document.querySelector(".arrow-s.right-s");
  let currentIndex_s = 0;

  function renderSlides_s() {
    slider_s.innerHTML = "";
    const emptyStart_s = document.createElement("div");
    emptyStart_s.className = "slide-s empty-slide-s";
    slider_s.appendChild(emptyStart_s);
    products_s.forEach((product_s, idx_s) => {
      const slide_s = document.createElement("div");
      slide_s.className = "slide-s";
      slide_s.innerHTML = `
        <img src="${product_s.img}" alt="${product_s.name}" />
        <p>${product_s.name}</p>
      `;
      slide_s.addEventListener('click', function() {
        currentIndex_s = idx_s;
        updateSlider_s();
      });
      slider_s.appendChild(slide_s);
    });
    const emptyEnd_s = document.createElement("div");
    emptyEnd_s.className = "slide-s empty-slide-s";
    slider_s.appendChild(emptyEnd_s);
    updateSlider_s();
  }

  function updateSlider_s() {
    const slides_s = slider_s.querySelectorAll(".slide-s");
    if (slides_s.length === 0) return;
    const slideWidth_s = slides_s[1].offsetWidth + 20;
    const visibleCount_s = 3;
    const centerOffset_s = Math.floor(visibleCount_s / 2);
    let realIndex_s = currentIndex_s + 1;
    if (window.innerWidth <= 600) {
      slides_s.forEach((slide_s, idx_s) => {
        slide_s.classList.remove("active-s", "prev-s", "next-s");
        if (idx_s === realIndex_s) {
          slide_s.classList.add("active-s");
        } else if (idx_s === realIndex_s - 1) {
          slide_s.classList.add("prev-s");
        } else if (idx_s === realIndex_s + 1) {
          slide_s.classList.add("next-s");
        }
      });
      slider_s.style.transform = "none";
      return;
    }
    let offset_s = slideWidth_s * (realIndex_s - centerOffset_s);
    slider_s.style.transform = `translateX(-${offset_s}px)`;
    slides_s.forEach(slide_s => slide_s.classList.remove("active-s"));
    if (slides_s[realIndex_s]) {
      slides_s[realIndex_s].classList.add("active-s");
    }
  }

  function moveNext_s() {
    if (currentIndex_s < products_s.length - 1) {
      currentIndex_s++;
      updateSlider_s();
    }
  }

  function movePrev_s() {
    if (currentIndex_s > 0) {
      currentIndex_s--;
      updateSlider_s();
    }
  }

  leftArrow_s.addEventListener("click", movePrev_s);
  rightArrow_s.addEventListener("click", moveNext_s);

  window.addEventListener("resize", updateSlider_s);
  window.addEventListener("load", () => {
    renderSlides_s();
    updateSlider_s();
  });

  const openPopupLink_s = document.querySelector('.open-popup-s');
  const fullscreenPopup_s = document.getElementById('fullscreenPopup-s');
  const closePopupBtn_s = document.getElementById('closePopupBtn-s');
  openPopupLink_s.addEventListener('click', function(e) {
    e.preventDefault();
    updatePopupContent_s(products_s[currentIndex_s]);
    fullscreenPopup_s.classList.add('active-s');
    document.body.style.overflow = 'hidden';
  });
  closePopupBtn_s.addEventListener('click', () => {
    fullscreenPopup_s.classList.remove('active-s');
    document.body.style.overflow = '';
  });
  fullscreenPopup_s.addEventListener('click', (e) => {
    if (e.target === fullscreenPopup_s) {
      fullscreenPopup_s.classList.remove('active-s');
      document.body.style.overflow = '';
    }
  });

  function updatePopupContent_s(product_s) {
    document.querySelectorAll('.popup-title-left-s')[0].innerHTML = product_s.popupTitle;
    document.querySelectorAll('.popup-text-left-s')[0].innerHTML = product_s.popupDesc;
    document.querySelectorAll('.popup-title-left-s')[1].innerHTML = product_s.popupTitle;
    document.querySelectorAll('.popup-text-left-s')[1].innerHTML = product_s.popupDesc;
    const modelViewer_s = document.querySelector('.popup-model-3d-s');
    modelViewer_s.setAttribute('src', product_s.modelSrc);
    modelViewer_s.setAttribute('poster', product_s.modelPoster);
    modelViewer_s.setAttribute('alt', product_s.popupTitle + ' 3D Model');
    var isMobile_s = window.innerWidth <= 600;
    var bg1_s = isMobile_s && product_s.popupBg1Mobile ? product_s.popupBg1Mobile : product_s.popupBg1;
    document.querySelector('.popup-bg-s').style.backgroundImage = `url('${bg1_s}')`;
    document.querySelector('.popup-bg-dark-s').style.backgroundImage = `url('${product_s.popupBg2}')`;
  }

  const popupActionBtns_s = document.querySelectorAll('.popup-action-left-s');
  popupActionBtns_s.forEach(btn_s => {
    btn_s.addEventListener('click', function() {
      window.location.href = products_s[currentIndex_s].link;
    });
  });























// Mobile crousal


   function setupCarousel(trackId, prevId, nextId, dotsId) {
      const track = document.getElementById(trackId);
      const slides = Array.from(track.querySelectorAll('.carousel-slide-sline'));
      const prevBtn = document.getElementById(prevId);
      const nextBtn = document.getElementById(nextId);
      const dotsContainer = document.getElementById(dotsId);
      let currentIndex = 0;

      function getSlideWidth() {
        const slide = slides[0];
        const style = window.getComputedStyle(slide);
        const width = slide.offsetWidth;
        const marginRight = parseInt(style.marginRight) || 0;
        const marginLeft = parseInt(style.marginLeft) || 0;
        const gap = parseInt(style.gap) || 0;
        return width + marginRight + marginLeft + gap;
      }

      function updateCarousel() {
        const slideWidth = getSlideWidth();
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        dotsContainer.querySelectorAll('.carousel-dot-sline').forEach((dot, idx) => {
          dot.classList.toggle('active-sline', idx === currentIndex);
        });
        prevBtn.style.opacity = currentIndex === 0 ? 0.5 : 1;
        nextBtn.style.opacity = currentIndex === slides.length - 1 ? 0.5 : 1;
      }

      function goToSlide(idx) {
        currentIndex = Math.max(0, Math.min(idx, slides.length - 1));
        updateCarousel();
      }

      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot-sline' + (idx === 0 ? ' active-sline' : '');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });

      window.addEventListener('resize', updateCarousel);
      updateCarousel();
    }

    setupCarousel('carousel-track-sline-1', 'carousel-prev-sline-1', 'carousel-next-sline-1', 'carousel-dots-sline-1');
    setupCarousel('carousel-track-sline-2', 'carousel-prev-sline-2', 'carousel-next-sline-2', 'carousel-dots-sline-2');
    setupCarousel('carousel-track-sline-3', 'carousel-prev-sline-3', 'carousel-next-sline-3', 'carousel-dots-sline-3');
 