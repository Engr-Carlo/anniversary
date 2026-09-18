/* All behavior for the anniversary site. Reads content from SITE_DATA (js/data.js). */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- SHARED: photo frame markup with graceful fallback ---------- */
function photoFrameHTML(photo, index){
  const alt = (photo && photo.alt) || 'Photo';
  const src = photo && photo.src;
  const idxAttr = index === undefined ? '' : ` data-index="${index}"`;
  return `
    <div class="photo-frame"${idxAttr}>
      <img src="${src}" alt="${alt}"
           onload="this.parentElement.classList.add('has-image')"
           onerror="this.style.display='none'">
      <div class="photo-label"><span>${alt}</span></div>
      <div class="frame-fallback">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 3c-5 0-9 4.2-9 9.4 0 4.6 3.4 8.5 8 9.4V21"/><path d="M12 3c5 0 9 4.2 9 9.4 0 4.6-3.4 8.5-8 9.4"/><path d="M12 3v18"/></svg>
        <span>Photo: ${alt}</span>
      </div>
    </div>`;
}

/* ---------- RENDER: HERO PHOTO ---------- */
document.getElementById('hero-photo-frame').innerHTML = photoFrameHTML(SITE_DATA.hero.photo);

/* ---------- LOCK SCREEN ---------- */
const lockScreen = document.getElementById('lock-screen');
const lockForm = document.getElementById('lock-form');
const passwordInput = document.getElementById('password-input');
const lockError = document.getElementById('lock-error');
const site = document.getElementById('site');
const lockCard = document.querySelector('.lock-card');

lockForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = passwordInput.value.trim().toLowerCase();
  if(value === SITE_DATA.password.toLowerCase()){
    lockScreen.classList.add('hidden');
    site.hidden = false;
    document.body.style.overflow = 'auto';
    autoPlayMusic();
    setTimeout(runHeroReveal, 300);
  } else {
    lockError.textContent = "Not quite — try again.";
    lockCard.classList.remove('shake');
    void lockCard.offsetWidth;
    lockCard.classList.add('shake');
  }
});

function runHeroReveal(){
  const items = document.querySelectorAll('.reveal-item');
  items.forEach(function(el, i){
    setTimeout(function(){ el.classList.add('reveal-in'); }, i * 160);
  });
}

/* ---------- MOBILE NAV ---------- */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', function(){
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
});

/* ---------- MUSIC PLAYER ---------- */
let autoPlayMusic = function(){};
(function setupMusicPlayer(){
  const audio = document.getElementById('bg-audio');
  const toggle = document.getElementById('music-toggle');
  const title = document.getElementById('music-title');
  if(!audio || !toggle || !title){ return; }

  audio.src = SITE_DATA.music.src;
  title.textContent = SITE_DATA.music.title || 'Music please';

  function syncVisualState(){
    if(audio.paused){
      toggle.classList.remove('playing');
      toggle.setAttribute('aria-label', 'Play music');
    } else {
      toggle.classList.add('playing');
      toggle.setAttribute('aria-label', 'Pause music');
    }
  }

  autoPlayMusic = function(){
    audio.play().then(syncVisualState).catch(syncVisualState);
  };

  toggle.addEventListener('click', function(){
    if(audio.paused){
      audio.play().then(syncVisualState).catch(syncVisualState);
      return;
    }
    audio.pause();
    syncVisualState();
  });

  audio.addEventListener('play', syncVisualState);
  audio.addEventListener('pause', syncVisualState);
  syncVisualState();
})();

/* ---------- COUNT-UP ---------- */
const RELATIONSHIP_START = new Date(SITE_DATA.relationshipStart);

function anniversaryDateFor(year){
  return new Date(
    year,
    RELATIONSHIP_START.getMonth(),
    RELATIONSHIP_START.getDate(),
    RELATIONSHIP_START.getHours(),
    RELATIONSHIP_START.getMinutes(),
    RELATIONSHIP_START.getSeconds(),
    RELATIONSHIP_START.getMilliseconds()
  );
}

function updateCounter(){
  const now = new Date();
  if(now < RELATIONSHIP_START){
    document.getElementById('c-years').textContent = '00';
    document.getElementById('c-months').textContent = '00';
    document.getElementById('c-days').textContent = '00';
    document.getElementById('c-hours').textContent = '00';
    document.getElementById('c-mins').textContent = '00';
    const secEl = document.getElementById('c-secs');
    secEl.textContent = '00';
    return;
  }

  let years = now.getFullYear() - RELATIONSHIP_START.getFullYear();
  let months = now.getMonth() - RELATIONSHIP_START.getMonth();
  let days = now.getDate() - RELATIONSHIP_START.getDate();
  let hours = now.getHours() - RELATIONSHIP_START.getHours();
  let minutes = now.getMinutes() - RELATIONSHIP_START.getMinutes();
  let seconds = now.getSeconds() - RELATIONSHIP_START.getSeconds();

  if(seconds < 0){
    seconds += 60;
    minutes -= 1;
  }
  if(minutes < 0){
    minutes += 60;
    hours -= 1;
  }
  if(hours < 0){
    hours += 24;
    days -= 1;
  }
  if(days < 0){
    months -= 1;
    const daysInPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += daysInPreviousMonth;
  }
  if(months < 0){
    years -= 1;
    months += 12;
  }

  document.getElementById('c-years').textContent = String(years).padStart(2,'0');
  document.getElementById('c-months').textContent = String(months).padStart(2,'0');
  document.getElementById('c-days').textContent = String(days).padStart(2,'0');
  document.getElementById('c-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('c-mins').textContent = String(minutes).padStart(2,'0');
  const secEl = document.getElementById('c-secs');
  secEl.textContent = String(seconds).padStart(2,'0');
  if(!prefersReducedMotion){
    secEl.classList.remove('pulse');
    void secEl.offsetWidth;
    secEl.classList.add('pulse');
  }
}
updateCounter();
setInterval(updateCounter, 1000);

/* ---------- RENDER: MOMENTS ---------- */
(function renderMoments(){
  const el = document.getElementById('moments-grid');
  const items = SITE_DATA.moments || [];
  if(!el || !items.length){ return; }
  el.innerHTML = items.map(function(item){
    return `
      <article class="moment-card reveal-on-scroll">
        <h3 class="moment-title">${item.title}</h3>
        <p class="moment-text">${item.text}</p>
      </article>`;
  }).join('');
})();

/* ---------- RENDER: I LOVE YOU AROUND THE WORLD ---------- */
(function renderLoveLanguages(){
  const card = document.getElementById('love-language-showcase');
  const phraseEl = document.getElementById('love-language-phrase');
  const nameEl = document.getElementById('love-language-name');
  const meaningEl = document.getElementById('love-language-meaning');
  const sidePhotoLeftEl = document.getElementById('love-language-side-photo-left');
  const sidePhotoRightEl = document.getElementById('love-language-side-photo-right');
  const gallery = Array.isArray(SITE_DATA.gallery) ? SITE_DATA.gallery : [];
  const entries = SITE_DATA.loveLanguages || [];
  if(!card || !phraseEl || !nameEl || !meaningEl || !entries.length){ return; }

  let lastLeftPhotoIndex = -1;
  let lastRightPhotoIndex = -1;

  function swapSidePhoto(imgEl, photo){
    if(!imgEl || !photo || !photo.src){ return; }

    const nextImage = new Image();
    nextImage.src = photo.src;

    const commit = function(){
      imgEl.classList.add('is-fading');
      setTimeout(function(){
        imgEl.src = photo.src;
        imgEl.alt = photo.alt || 'Carlo and Armie memory';
        imgEl.classList.remove('is-fading');
      }, 170);
    };

    if(nextImage.complete){
      commit();
      return;
    }
    nextImage.onload = commit;
    nextImage.onerror = commit;
  }

  function updateSidePhotos(){
    if(!sidePhotoLeftEl || !sidePhotoRightEl || !gallery.length){ return; }

    const leftFigure = sidePhotoLeftEl.closest('.love-language-side.left');
    const rightFigure = sidePhotoRightEl.closest('.love-language-side.right');

    let firstIndex = Math.floor(Math.random() * gallery.length);
    if(gallery.length > 1){
      while(firstIndex === lastLeftPhotoIndex){
        firstIndex = Math.floor(Math.random() * gallery.length);
      }
    }

    let secondIndex = firstIndex;
    if(gallery.length > 1){
      while(secondIndex === firstIndex || (gallery.length > 2 && secondIndex === lastRightPhotoIndex)){
        secondIndex = Math.floor(Math.random() * gallery.length);
      }
    }

    lastLeftPhotoIndex = firstIndex;
    lastRightPhotoIndex = secondIndex;

    const leftPhoto = gallery[firstIndex];
    const rightPhoto = gallery[secondIndex];

    swapSidePhoto(sidePhotoLeftEl, leftPhoto);
    swapSidePhoto(sidePhotoRightEl, rightPhoto);

    if(leftFigure){
      const leftTilt = -2 - (Math.random() * 6);
      leftFigure.style.setProperty('--love-side-rotate-left', leftTilt.toFixed(2) + 'deg');
    }
    if(rightFigure){
      const rightTilt = 2 + (Math.random() * 6);
      rightFigure.style.setProperty('--love-side-rotate-right', rightTilt.toFixed(2) + 'deg');
    }
  }

  const scriptToClass = {
    tagalog: 'script-tagalog',
    french: 'script-french',
    spanish: 'script-spanish',
    italian: 'script-italian',
    german: 'script-german',
    japanese: 'script-japanese',
    korean: 'script-korean',
    mandarin: 'script-mandarin',
    portuguese: 'script-portuguese',
    russian: 'script-russian',
    hindi: 'script-hindi',
    arabic: 'script-arabic',
    dutch: 'script-dutch',
    swedish: 'script-swedish',
    czech: 'script-czech',
    greek: 'script-greek',
    polish: 'script-polish',
    swahili: 'script-swahili',
    turkish: 'script-turkish',
    vietnamese: 'script-vietnamese'
  };

  const basePhraseClass = 'love-language-phrase';
  let current = Math.floor(Math.random() * entries.length);

  function setEntry(index){
    const item = entries[index];
    updateSidePhotos();
    const scriptClass = scriptToClass[(item.language || '').toLowerCase()] || 'script-latin';
    phraseEl.className = basePhraseClass + ' ' + scriptClass;
    phraseEl.textContent = item.phrase;
    phraseEl.dir = scriptClass === 'script-arabic' ? 'rtl' : 'ltr';
    nameEl.textContent = item.language;
    meaningEl.textContent = item.meaning;

    phraseEl.style.opacity = '0';
    phraseEl.style.transform = 'translateY(6px)';
    requestAnimationFrame(function(){
      phraseEl.style.opacity = '1';
      phraseEl.style.transform = 'translateY(0)';
    });
  }

  function nextRandomEntry(){
    if(entries.length < 2){
      setEntry(0);
      return;
    }
    let next = current;
    while(next === current){
      next = Math.floor(Math.random() * entries.length);
    }
    current = next;
    setEntry(current);
  }

  card.addEventListener('click', nextRandomEntry);
  card.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      nextRandomEntry();
    }
  });

  setEntry(current);
  setInterval(nextRandomEntry, 2600);
})();

/* ---------- RENDER: GALLERY ---------- */
const GALLERY_SHAPES = ['shape-rounded', 'shape-arch', 'shape-blob', 'shape-circle'];
function galleryCardHTML(photo, index){
  const shape = GALLERY_SHAPES[index % GALLERY_SHAPES.length];
  const alt = photo.alt || 'Photo';
  const caption = photo.caption || '';
  return `
    <div class="g-item ${shape} reveal-on-scroll" data-index="${index}">
      ${photoFrameHTML(photo)}
      <div class="g-caption">
        <span class="g-caption-title">${alt}</span>
        <span class="g-caption-text">${caption}</span>
      </div>
    </div>`;
}
(function renderGallery(){
  const el = document.getElementById('gallery-grid');
  el.innerHTML = SITE_DATA.gallery.map(function(photo, i){
    return galleryCardHTML(photo, i);
  }).join('');
  el.addEventListener('click', function(e){
    const item = e.target.closest('.g-item');
    if(item){ openLightbox(Number(item.dataset.index)); }
  });
  const countEl = document.getElementById('gallery-count');
  if(countEl){ countEl.textContent = SITE_DATA.gallery.length + ' photos, and still counting.'; }
})();

/* ---------- RENDER: REASONS ---------- */
(function renderReasons(){
  const el = document.getElementById('reason-list');
  el.innerHTML = SITE_DATA.reasons.map(function(reason, i){
    return `
      <div class="reason-row reveal-on-scroll">
        <span class="reason-num">${String(i + 1).padStart(2,'0')}</span>
        <span class="reason-text">${reason.text}</span>
        <span class="reason-plus"><svg class="icon" style="width:18px;height:18px;" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span>
        <div class="reason-detail">${reason.detail}</div>
      </div>`;
  }).join('');
  el.addEventListener('click', function(e){
    const row = e.target.closest('.reason-row');
    if(row){ row.classList.toggle('open'); }
  });
})();

/* ---------- RENDER: LETTER ---------- */
(function renderLetter(){
  const el = document.getElementById('letter-text');
  el.innerHTML = SITE_DATA.letter.paragraphs.map(function(p){ return `<p>${p}</p>`; }).join('')
    + `<p class="letter-sign">${SITE_DATA.letter.sign}</p>`;
})();

const sealBtn = document.getElementById('seal-btn');
const letterBody = document.getElementById('letter-body');
const letterPrompt = document.getElementById('letter-prompt');
sealBtn.addEventListener('click', function(){
  const isOpen = letterBody.classList.toggle('open');
  letterPrompt.textContent = isOpen ? "Click to close" : "Open the letter";
});

/* ---------- RENDER: PROMISES ---------- */
(function renderPromises(){
  const el = document.getElementById('promise-list');
  el.innerHTML = SITE_DATA.promises.map(function(text){
    return `<div class="promise-row reveal-on-scroll"><p>${text}</p></div>`;
  }).join('');
})();

/* ---------- SCRATCH CARD ---------- */
document.getElementById('scratch-message').textContent = SITE_DATA.scratchMessage;

const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
let scratching = false;
let scratchRevealed = false;

function sizeCanvas(){
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  scratchRevealed = false;
  paintFoil();
}

function paintFoil(){
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, '#8FA9C6');
  grad.addColorStop(1, '#E3AEBB');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = '14px "Work Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Scratch here', canvas.width/2, canvas.height/2);
}

function scratchAt(x, y){
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(x, y, 22, 0, Math.PI * 2);
  ctx.fill();
  checkScratchProgress();
}

function checkScratchProgress(){
  if(scratchRevealed) return;
  const w = canvas.width, h = canvas.height;
  if(!w || !h) return;
  const sampleStep = 6;
  const data = ctx.getImageData(0, 0, w, h).data;
  let cleared = 0, total = 0;
  for(let y = 0; y < h; y += sampleStep){
    for(let x = 0; x < w; x += sampleStep){
      total++;
      const alpha = data[(y * w + x) * 4 + 3];
      if(alpha < 40) cleared++;
    }
  }
  if(total && cleared / total > 0.55){
    scratchRevealed = true;
    fireConfetti();
  }
}

function getPos(e){
  const rect = canvas.getBoundingClientRect();
  const point = e.touches ? e.touches[0] : e;
  return { x: point.clientX - rect.left, y: point.clientY - rect.top };
}

canvas.addEventListener('mousedown', function(e){ scratching = true; const p = getPos(e); scratchAt(p.x, p.y); });
canvas.addEventListener('mousemove', function(e){ if(scratching){ const p = getPos(e); scratchAt(p.x, p.y); } });
window.addEventListener('mouseup', function(){ scratching = false; });

canvas.addEventListener('touchstart', function(e){ scratching = true; const p = getPos(e); scratchAt(p.x, p.y); });
canvas.addEventListener('touchmove', function(e){ e.preventDefault(); if(scratching){ const p = getPos(e); scratchAt(p.x, p.y); } }, { passive:false });
canvas.addEventListener('touchend', function(){ scratching = false; });

window.addEventListener('resize', sizeCanvas);
window.addEventListener('load', sizeCanvas);
setTimeout(sizeCanvas, 50);

const scratchResetBtn = document.getElementById('scratch-reset-btn');
if(scratchResetBtn){
  scratchResetBtn.addEventListener('click', function(){
    sizeCanvas();
  });
}

/* ---------- FUTURE LETTER (time capsule) ---------- */
(function setupFutureLetter(){
  document.getElementById('future-teaser').textContent = SITE_DATA.futureLetter.teaser;

  const lockEl = document.getElementById('future-lock');
  const bodyEl = document.getElementById('future-letter-body');
  const textEl = document.getElementById('future-letter-text');
  const unlockBtn = document.getElementById('future-unlock-btn');
  let hasUnlocked = false;

  function unlock(){
    if(hasUnlocked) return;
    hasUnlocked = true;
    lockEl.style.display = 'none';
    textEl.innerHTML = SITE_DATA.futureLetter.paragraphs.map(function(p){ return `<p>${p}</p>`; }).join('')
      + `<p class="letter-sign">${SITE_DATA.futureLetter.sign}</p>`;
    bodyEl.classList.add('open');
  }

  if(unlockBtn){
    unlockBtn.addEventListener('click', function(){
      unlock();
    });
  }
})();

/* ---------- CONFETTI ---------- */
let confettiFired = false;
function fireConfetti(){
  if(typeof confetti !== 'function') return;
  confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 } });
}
const footerEl = document.querySelector('footer');
if(footerEl){
  const footerObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting && !confettiFired){
        confettiFired = true;
        fireConfetti();
      }
    });
  }, { threshold: 0.4 });
  footerObserver.observe(footerEl);
}

/* ---------- LIGHTBOX ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxFrame = document.getElementById('lightbox-frame');
const lightboxCaption = document.getElementById('lightbox-caption');
let lightboxIndex = 0;

function renderLightbox(){
  const photo = SITE_DATA.gallery[lightboxIndex];
  lightboxFrame.innerHTML = photoFrameHTML(photo);
  lightboxCaption.textContent = photo.caption || '';
}
function openLightbox(index){
  lightboxIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
}
function closeLightbox(){ lightbox.classList.remove('open'); }
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', function(){
  lightboxIndex = (lightboxIndex - 1 + SITE_DATA.gallery.length) % SITE_DATA.gallery.length;
  renderLightbox();
});
document.getElementById('lightbox-next').addEventListener('click', function(){
  lightboxIndex = (lightboxIndex + 1) % SITE_DATA.gallery.length;
  renderLightbox();
});
lightbox.addEventListener('click', function(e){ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', function(e){
  if(!lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
  if(e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
});

/* ---------- SCROLL REVEAL (sections rendered after page load) ---------- */
function initScrollReveal(){
  const targets = document.querySelectorAll('.reveal-on-scroll');
  if(prefersReducedMotion || typeof IntersectionObserver === 'undefined'){
    targets.forEach(function(el){ el.classList.add('reveal-in'); });
    return;
  }
  const observer = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('reveal-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(function(el){
    el.classList.add('reveal-item');
    observer.observe(el);
  });
}
initScrollReveal();

/* ---------- HERO PARALLAX ---------- */
if(!prefersReducedMotion){
  const sun = document.querySelector('.hero-sun');
  const hills = document.querySelector('.hero-hills');
  window.addEventListener('mousemove', function(e){
    const x = (e.clientX / window.innerWidth - 0.5) * 16;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    if(sun) sun.style.transform = `translate(${x}px, ${y}px)`;
  });
  window.addEventListener('scroll', function(){
    const offset = Math.min(window.scrollY * 0.15, 60);
    if(hills) hills.style.transform = `translateY(${offset * 0.3}px)`;
  }, { passive:true });
}
