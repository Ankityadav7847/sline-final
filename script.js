const products = [
    {
      name: "sTread Pro",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadPro.png",
      link: "https://www.sportstech.de/laufband/stread-profi-neu",
      popupTitle: "sTread Pro",
      popupDesc: "Das sTread Pro bringt dich mit bis zu 20 km/h und 15 % Steigung an deine Grenzen – angetrieben von einem 7 PS starken Motor.<br>Dank cleverer Klappfunktion sparst du Platz, ohne auf Performance zu verzichten.",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/stread-pro red.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadPro.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadPro_ProduktBild_Desktop.jpg", // background for first part
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadPro_ProduktBild_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg" // background for second part
    },
    {
      name: "sRow",
      img: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sRow.png",
      link: "https://www.sportstech.de/rudergeraete/srow",
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
      link: "https://www.sportstech.de/speedbike/sbike",
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
      link: "https://www.sportstech.de/vibrationsplatte/svibe-vibrationsplatte",
      popupTitle: "sVibe",
      popupDesc: "Das sVibe bringt dein Training auf das nächste Level – mit einer Anti-Rutsch-Oberfläche, zwei ultra-leisen Motoren und 7-farbiger LED-Beleuchtung. Dein Shortcut zu mehr Fitness!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/stread-pro-blue.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sVibe.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sVibe_ProduktBild_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sVibe_ProduktBild_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    }
  ];

  const slidesr = document.getElementById("slidesr");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  let currentIndex = 0; // Start at first product

  function renderslidess() {
    slidesr.innerHTML = "";

    // Add empty slides at the start
    const emptyStart = document.createElement("div");
    emptyStart.className = "slides empty-slides";
    slidesr.appendChild(emptyStart);

    // Add product slidess
    products.forEach((product, idx) => {
      const slides = document.createElement("div");
      slides.className = "slides";
      slides.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <p>${product.name}</p>
      `;
      // Make slides clickable to become active
      slides.addEventListener('click', function() {
        currentIndex = idx;
        updateslidesr();
      });
      slidesr.appendChild(slides);
    });

    // Add empty slides at the end
    const emptyEnd = document.createElement("div");
    emptyEnd.className = "slides empty-slides";
    slidesr.appendChild(emptyEnd);

    updateslidesr();
  }

  function updateslidesr() {
    const slidess = slidesr.querySelectorAll(".slides");
    if (slidess.length === 0) return;
    const slidesWidth = slidess[1].offsetWidth + 20; // skip the first empty slides for width
    const visibleCount = 3;
    const centerOffset = Math.floor(visibleCount / 2);

    // Offset by +1 because of the empty slides at the start
    let realIndex = currentIndex + 1;

    // --- MOBILE VIEW LOGIC ---
    if (window.innerWidth <= 600) {
      slidess.forEach((slides, idx) => {
        slides.classList.remove("active", "prev", "next");
        if (idx === realIndex) {
          slides.classList.add("active");
        } else if (idx === realIndex - 1) {
          slides.classList.add("prev");
        } else if (idx === realIndex + 1) {
          slides.classList.add("next");
        }
      });
      slidesr.style.transform = "none";
      return;
    }
    // --- DESKTOP LOGIC (unchanged) ---
    let offset = slidesWidth * (realIndex - centerOffset);
    slidesr.style.transform = `translateX(-${offset}px)`;
    slidess.forEach(slides => slides.classList.remove("active"));
    if (slidess[realIndex]) {
      slidess[realIndex].classList.add("active");
    }
  }

  function moveNext() {
    if (currentIndex < products.length - 1) {
      currentIndex++;
      updateslidesr();
    }
  }

  function movePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateslidesr();
    }
  }

  leftArrow.addEventListener("click", movePrev);
  rightArrow.addEventListener("click", moveNext);

  window.addEventListener("resize", updateslidesr);
  window.addEventListener("load", () => {
    renderslidess();
    updateslidesr();
  });

    // Popup logic
    const openPopupLink = document.querySelector('.open-popup');
    const fullscreenPopup = document.getElementById('fullscreenPopup');
    const closePopupBtns = document.querySelectorAll('.closePopupBtn');
    
    
    openPopupLink.addEventListener('click', function(e) {
      e.preventDefault();
      updatePopupContent(products[currentIndex]); // Make sure this function is defined!
      fullscreenPopup.classList.add('active');
      fullscreenPopup.scrollTop = 0; // <-- Reset scroll position
      document.body.style.overflow = 'hidden'; // Hide main page scroll
    });
    closePopupBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fullscreenPopup.classList.remove('active');
        document.body.style.overflow = '';
      });   
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
      link: "https://www.sportstech.de/speedbike/sbike-lite",
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
      link: "https://www.sportstech.de/laufband/stread-lite",
      popupTitle: "sTread Lite",
      popupDesc: "Das sTread Lite bringt dich mit bis zu 20 km/h und automatischer Steigung auf Touren. Dank cleverer Klappfunktion ist es perfekt für dein Zuhause!",
      modelSrc: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/videos/stread-lite.glb",
      modelPoster: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sLinePage_sTreadLite.png",
      popupBg1: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadLite_Desktop.jpg",
      popupBg1Mobile: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/sTreadLite_Mobile.jpg",
      popupBg2: "https://d30t8982v9j4z0.cloudfront.net/shopware/sline/images/popup-back.jpg"
    }
  ];

  const slidesr_s = document.getElementById("slidesr-s");
  const leftArrow_s = document.querySelector(".arrow-s.left-s");
  const rightArrow_s = document.querySelector(".arrow-s.right-s");
  let currentIndex_s = 0;

  function renderslidess_s() {
    slidesr_s.innerHTML = "";
    const emptyStart_s = document.createElement("div");
    emptyStart_s.className = "slides-s empty-slides-s";
    slidesr_s.appendChild(emptyStart_s);
    products_s.forEach((product_s, idx_s) => {
      const slides_s = document.createElement("div");
      slides_s.className = "slides-s";
      slides_s.innerHTML = `
        <img src="${product_s.img}" alt="${product_s.name}" />
        <p>${product_s.name}</p>
      `;
      slides_s.addEventListener('click', function() {
        currentIndex_s = idx_s;
        updateslidesr_s();
      });
      slidesr_s.appendChild(slides_s);
    });
    const emptyEnd_s = document.createElement("div");
    emptyEnd_s.className = "slides-s empty-slides-s";
    slidesr_s.appendChild(emptyEnd_s);
    updateslidesr_s();
  }

  function updateslidesr_s() {
    const slidess_s = slidesr_s.querySelectorAll(".slides-s");
    if (slidess_s.length === 0) return;
    const slidesWidth_s = slidess_s[1].offsetWidth + 20;
    const visibleCount_s = 3;
    const centerOffset_s = Math.floor(visibleCount_s / 2);
    let realIndex_s = currentIndex_s + 1;
    if (window.innerWidth <= 600) {
      slidess_s.forEach((slides_s, idx_s) => {
        slides_s.classList.remove("active-s", "prev-s", "next-s");
        if (idx_s === realIndex_s) {
          slides_s.classList.add("active-s");
        } else if (idx_s === realIndex_s - 1) {
          slides_s.classList.add("prev-s");
        } else if (idx_s === realIndex_s + 1) {
          slides_s.classList.add("next-s");
        }
      });
      slidesr_s.style.transform = "none";
      return;
    }
    let offset_s = slidesWidth_s * (realIndex_s - centerOffset_s);
    slidesr_s.style.transform = `translateX(-${offset_s}px)`;
    slidess_s.forEach(slides_s => slides_s.classList.remove("active-s"));
    if (slidess_s[realIndex_s]) {
      slidess_s[realIndex_s].classList.add("active-s");
    }
  }

  function moveNext_s() {
    if (currentIndex_s < products_s.length - 1) {
      currentIndex_s++;
      updateslidesr_s();
    }
  }

  function movePrev_s() {
    if (currentIndex_s > 0) {
      currentIndex_s--;
      updateslidesr_s();
    }
  }

  leftArrow_s.addEventListener("click", movePrev_s);
  rightArrow_s.addEventListener("click", moveNext_s);

  window.addEventListener("resize", updateslidesr_s);
  window.addEventListener("load", () => {
    renderslidess_s();
    updateslidesr_s();
  });



  const openPopupLink_s = document.querySelector('.open-popup-s');
const fullscreenPopup_s = document.getElementById('fullscreenPopup-s');
const closePopupBtns_s = document.querySelectorAll('.closePopupBtn-s');

openPopupLink_s.addEventListener('click', function(e) {
  e.preventDefault();
  updatePopupContent_s(products_s[currentIndex_s]); // Make sure this function is defined!
  fullscreenPopup_s.classList.add('active-s');
  fullscreenPopup_s.scrollTop = 0; // <-- Reset scroll position
  document.body.style.overflow = 'hidden';
});

// Add event to all close buttons
closePopupBtns_s.forEach(btn => {
  btn.addEventListener('click', () => {
    fullscreenPopup_s.classList.remove('active-s');
    document.body.style.overflow = '';
  });
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
      const slidess = Array.from(track.querySelectorAll('.carousel-slides-sline'));
      const prevBtn = document.getElementById(prevId);
      const nextBtn = document.getElementById(nextId);
      const dotsContainer = document.getElementById(dotsId);
      let currentIndex = 0;

      function scrollToslides(idx) {
        const slides = slidess[idx];
        if (slides) {
          // Calculate the left position of the slides relative to the track
          const slidesLeft = slides.offsetLeft;
          track.scrollTo({ left: slidesLeft, behavior: 'smooth' });
        }
      }

      function updateActiveDot() {
        let minDiff = Infinity;
        let activeIdx = 0;
        const trackRect = track.getBoundingClientRect();
        slidess.forEach((slides, idx) => {
          const rect = slides.getBoundingClientRect();
          // Calculate how much of the slides is visible in the viewport
          const visibleWidth = Math.min(rect.right, trackRect.right) - Math.max(rect.left, trackRect.left);
          if (visibleWidth > 0 && visibleWidth < rect.width) {
            // Partially visible, prefer the one with the largest visible width
            if (rect.width - visibleWidth < minDiff) {
              minDiff = rect.width - visibleWidth;
              activeIdx = idx;
            }
          } else if (visibleWidth >= rect.width) {
            // Fully visible
            minDiff = 0;
            activeIdx = idx;
          }
        });
        dotsContainer.querySelectorAll('.carousel-dot-sline').forEach((dot, idx) => {
          dot.classList.toggle('active-sline', idx === activeIdx);
        });
        currentIndex = activeIdx;
        prevBtn.style.opacity = currentIndex === 0 ? 0.5 : 1;
        nextBtn.style.opacity = currentIndex === slidess.length - 1 ? 0.5 : 1;
      }

      prevBtn.addEventListener('click', () => {
        scrollToslides(Math.max(0, currentIndex - 1));
      });
      nextBtn.addEventListener('click', () => {
        scrollToslides(Math.min(slidess.length - 1, currentIndex + 1));
      });

      dotsContainer.innerHTML = '';
      slidess.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot-sline' + (idx === 0 ? ' active-sline' : '');
        dot.addEventListener('click', () => scrollToslides(idx));
        dotsContainer.appendChild(dot);
      });

      track.addEventListener('scroll', () => {
        // Debounce for performance
        window.requestAnimationFrame(updateActiveDot);
      });
      window.addEventListener('resize', updateActiveDot);
      // Initial update
      setTimeout(updateActiveDot, 100);
    }

    setupCarousel('carousel-track-sline-1', 'carousel-prev-sline-1', 'carousel-next-sline-1', 'carousel-dots-sline-1');
    setupCarousel('carousel-track-sline-2', 'carousel-prev-sline-2', 'carousel-next-sline-2', 'carousel-dots-sline-2');
    setupCarousel('carousel-track-sline-3', 'carousel-prev-sline-3', 'carousel-next-sline-3', 'carousel-dots-sline-3');

// Horizontal scroll for main slider
let isScrollingMain = false;
const slidesrContainer = document.querySelector('.slidesr-container');
if (slidesrContainer) {
  slidesrContainer.addEventListener('wheel', function(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      // Only trigger if the scroll is significant (e.g., more than 30px)
      if (Math.abs(event.deltaX) > 30) {
        event.preventDefault();
        if (!isScrollingMain) {
          isScrollingMain = true;
          if (event.deltaX > 0) {
            moveNext();
          } else if (event.deltaX < 0) {
            movePrev();
          }
          setTimeout(() => { isScrollingMain = false; }, 600); // Increased debounce
        }
      }
    }
  }, { passive: false });
}

// Horizontal scroll for secondary slider
let isScrollingSecondary = false;
const slidesrContainerS = document.querySelector('.slidesr-container-s');
if (slidesrContainerS) {
  slidesrContainerS.addEventListener('wheel', function(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      if (Math.abs(event.deltaX) > 30) {
        event.preventDefault();
        if (!isScrollingSecondary) {
          isScrollingSecondary = true;
          if (event.deltaX > 0) {
            moveNext_s();
          } else if (event.deltaX < 0) {
            movePrev_s();
          }
          setTimeout(() => { isScrollingSecondary = false; }, 600); // Increased debounce
        }
      }
    }
  }, { passive: false });
}

// --- Touch swipe for main slider ---
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // Minimum px to consider as swipe

if (slidesrContainer) {
  slidesrContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  slidesrContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff < 0) {
        moveNext();
      } else {
        movePrev();
      }
    }
  });
}

// --- Touch swipe for secondary slider ---
let touchStartX_s = 0;
let touchEndX_s = 0;

if (slidesrContainerS) {
  slidesrContainerS.addEventListener('touchstart', function(e) {
    touchStartX_s = e.changedTouches[0].screenX;
  });
  slidesrContainerS.addEventListener('touchend', function(e) {
    touchEndX_s = e.changedTouches[0].screenX;
    const diff = touchEndX_s - touchStartX_s;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff < 0) {
        moveNext_s();
      } else {
        movePrev_s();
      }
    }
  });
}
