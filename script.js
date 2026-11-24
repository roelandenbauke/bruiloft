// ==========================================
// HERO FOTOSLIDESHOW (EINDELOZE LOOP)
// ==========================================
const slides = Array.from(document.querySelectorAll('.hero-stage .slide'));
const SLIDE_INTERVAL_MS = 3500; // Tijd per foto in milliseconden (3,5 sec)

if (slides.length > 1) {
    let activeIndex = 0;

    setInterval(() => {
        slides[activeIndex].classList.remove('is-active');
        activeIndex = (activeIndex + 1) % slides.length;
        slides[activeIndex].classList.add('is-active');
    }, SLIDE_INTERVAL_MS);
}

// ==========================================
// 1. CARROUSEL
// ==========================================
const viewport = document.querySelector('.carousel-viewport');
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.btn.prev');
const carouselNextBtn = document.querySelector('.btn.next');

let currentOffset = 0;

function getStepSize() {
    const card = track?.querySelector('.card');
    if (!card || !track) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return card.getBoundingClientRect().width + gap;
}

function getMaxOffset() {
    if (!track || !viewport) return 0;
    const maxScroll = track.scrollWidth - viewport.clientWidth;
    return Math.max(0, maxScroll);
}

function updateButtons() {
    if (!prevBtn || !carouselNextBtn) return;
    const maxOffset = getMaxOffset();
    prevBtn.disabled = currentOffset <= 0;
    carouselNextBtn.disabled = currentOffset >= maxOffset - 1;
}

function moveBy(direction) {
    if (!track) return;
    const step = getStepSize();
    const maxOffset = getMaxOffset();

    currentOffset += direction * step;
    currentOffset = Math.max(0, Math.min(currentOffset, maxOffset));

    track.style.transform = `translateX(-${currentOffset}px)`;
    updateButtons();
}

if (prevBtn && carouselNextBtn) {
    prevBtn.addEventListener('click', () => moveBy(-1));
    carouselNextBtn.addEventListener('click', () => moveBy(1));
    updateButtons();
}

window.addEventListener('resize', () => {
    if (!track) return;
    currentOffset = Math.min(currentOffset, getMaxOffset());
    track.style.transform = `translateX(-${currentOffset}px)`;
    updateButtons();
});

document.querySelectorAll('*').forEach(el => {
    if (el.getBoundingClientRect().right > window.innerWidth) {
        console.log('Steekt rechts uit:', el, el.getBoundingClientRect());
    }
});

// ==========================================
// 2. VIDEO + MUTE KNOP
// ==========================================
const video = document.getElementById('bgVideo');
const muteBtn = document.getElementById('muteToggle');

if (video && muteBtn) {
    muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;

        const isUnmuted = !video.muted;
        muteBtn.setAttribute('aria-pressed', String(isUnmuted));
        muteBtn.setAttribute('aria-label', isUnmuted ? 'Geluid uitzetten' : 'Geluid aanzetten');
        muteBtn.textContent = isUnmuted ? '🔊 Geluid uit' : '🔇 Geluid aan';

        if (isUnmuted && video.paused) {
            video.play();
        }
    });
}

// ==========================================
// 3. RSVP FORMULIER
// ==========================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbymhzee1YEidu00_63GFlKRtblAwNENA9GHSFW_YSDtUW7YXc13WUlfEYxbAfPLtaGC/exec';

const form = document.getElementById('rsvpForm');
const stepOne = document.getElementById('stepOne');
const stepTwo = document.getElementById('stepTwo');
const rsvpNextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

const aantalInput = document.getElementById('aantalPersonen');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const submitBtn = document.getElementById('rsvpSubmit');
const statusEl = document.getElementById('rsvpStatus');

const naamErrorEl = document.getElementById('naamError');
const aanwezigErrorEl = document.getElementById('aanwezigError');

const MIN_PERSONEN_JA = 1;
const MAX_PERSONEN = 20;

function clearFieldErrors() {
    if (naamErrorEl) naamErrorEl.textContent = '';
    if (aanwezigErrorEl) aanwezigErrorEl.textContent = '';
    form?.naam?.classList.remove('input-invalid');
}

function getKeuzeAanwezig() {
    if (!form) return '';
    const checked = form.querySelector('input[name="aanwezig"]:checked');
    return checked ? checked.value : '';
}

async function verstuurNaarSheet(payload) {
    if (submitBtn) submitBtn.disabled = true;
    if (rsvpNextBtn) rsvpNextBtn.disabled = true;
    if (statusEl) statusEl.textContent = 'Even geduld, wordt verstuurd...';

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        form?.reset();
        clearFieldErrors();
        if (aantalInput) aantalInput.value = String(MIN_PERSONEN_JA);
        if (stepTwo) stepTwo.hidden = true;
        if (stepOne) stepOne.hidden = false;
        if (rsvpNextBtn) rsvpNextBtn.textContent = 'volgende';
        if (statusEl) statusEl.textContent = 'Bedankt! We hebben je reactie opgeslagen.';
    } catch (error) {
        if (statusEl) statusEl.textContent = 'Er ging iets mis bij het versturen. Probeer het nog eens.';
    } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (rsvpNextBtn) rsvpNextBtn.disabled = false;
    }
}

if (form) {
    form.naam?.addEventListener('input', () => {
        if (form.naam.value.trim()) {
            if (naamErrorEl) naamErrorEl.textContent = '';
            form.naam.classList.remove('input-invalid');
        }
    });

    form.querySelectorAll('input[name="aanwezig"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            if (aanwezigErrorEl) aanwezigErrorEl.textContent = '';
            if (statusEl) statusEl.textContent = '';
            if (rsvpNextBtn) {
                rsvpNextBtn.textContent = radio.value === 'nee' ? 'verstuur' : 'volgende';
            }
        });
    });

    if (rsvpNextBtn) {
        rsvpNextBtn.addEventListener('click', async () => {
            clearFieldErrors();
            if (statusEl) statusEl.textContent = '';

            const naam = form.naam?.value.trim() || '';
            const keuze = getKeuzeAanwezig();
            let heeftFout = false;

            if (!naam) {
                if (naamErrorEl) naamErrorEl.textContent = 'Vul eerst je naam in.';
                form.naam?.classList.add('input-invalid');
                form.naam?.focus();
                heeftFout = true;
            }

            if (!keuze) {
                if (aanwezigErrorEl) aanwezigErrorEl.textContent = 'Kies eerst of je erbij bent.';
                heeftFout = true;
            }

            if (heeftFout) return;

            if (keuze === 'nee') {
                await verstuurNaarSheet({
                    naam,
                    aantalPersonen: 0,
                    dieetOpmerkingen: '',
                    nummer: ''
                });
                return;
            }

            if (aantalInput) aantalInput.value = String(MIN_PERSONEN_JA);
            if (stepOne) stepOne.hidden = true;
            if (stepTwo) stepTwo.hidden = false;
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            clearFieldErrors();
            if (statusEl) statusEl.textContent = '';
            if (stepTwo) stepTwo.hidden = true;
            if (stepOne) stepOne.hidden = false;
        });
    }

    if (minusBtn && aantalInput) {
        minusBtn.addEventListener('click', () => {
            const huidige = parseInt(aantalInput.value, 10) || MIN_PERSONEN_JA;
            if (huidige > MIN_PERSONEN_JA) {
                aantalInput.value = String(huidige - 1);
            }
        });
    }

    if (plusBtn && aantalInput) {
        plusBtn.addEventListener('click', () => {
            const huidige = parseInt(aantalInput.value, 10) || MIN_PERSONEN_JA;
            if (huidige < MAX_PERSONEN) {
                aantalInput.value = String(huidige + 1);
            }
        });
    }

    if (aantalInput) {
        aantalInput.addEventListener('change', () => {
            let waarde = parseInt(aantalInput.value, 10);
            if (Number.isNaN(waarde) || waarde < MIN_PERSONEN_JA) {
                waarde = MIN_PERSONEN_JA;
            } else if (waarde > MAX_PERSONEN) {
                waarde = MAX_PERSONEN;
            }
            aantalInput.value = String(waarde);
        });
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearFieldErrors();

        const naam = form.naam?.value.trim() || '';
        if (!naam) {
            if (stepTwo) stepTwo.hidden = true;
            if (stepOne) stepOne.hidden = false;
            if (naamErrorEl) naamErrorEl.textContent = 'Vul eerst je naam in.';
            form.naam?.classList.add('input-invalid');
            form.naam?.focus();
            return;
        }

        const aantalPersonen = aantalInput ? (parseInt(aantalInput.value, 10) || MIN_PERSONEN_JA) : MIN_PERSONEN_JA;
        const dieetOpmerkingen = form.dieetOpmerkingen?.value.trim() || '';
        const nummer = form.dansNummer?.value.trim() || '';
        const artiest = form.dansArtiest?.value.trim() || '';

        let nummerSamengevoegd = '';
        if (nummer && artiest) {
            nummerSamengevoegd = `${nummer} - ${artiest}`;
        } else {
            nummerSamengevoegd = nummer || artiest;
        }

        await verstuurNaarSheet({
            naam,
            aantalPersonen,
            dieetOpmerkingen,
            nummer: nummerSamengevoegd
        });
    });
}