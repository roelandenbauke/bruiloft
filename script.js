// ==========================================
// 0. GASTENCONFIGURATIE (?gast=CODE)
// ==========================================
// Vul hier per unieke code de gegevens in (gebruik kleine letters).
// type: 'dag' of 'avond'
// maxPersonen: het maximale aantal gasten voor deze uitnodiging
// begroeting: optioneel; als je dit leeg laat wordt "Hoi [naam]!" gebruikt.
// namen: optioneel; bijv. ['Rob', 'Henriët'] als je een lijst met losse namen wilt opgeven.
const GASTEN_LIJST = {
    ‘bruidspaar’: {
        naam: ‘Roeland & Bauke’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ‘Hey Bauk, mooie website vind je niet?’
    },
    'fredrike': {
        naam: ‘Fred & Rike’,
        type: ‘dag’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘joskarel’: {
        naam: ‘José & Carlan’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘maaikruub’: {
        naam: ‘Maaike & Ruben’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘rietje’: {
        naam: ‘Rianne’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘anneakkie’: {
        naam: ‘Anne & Akkie’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘riarens’: {
        naam: ‘Ria & Rens’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘leo’: {
        naam: ‘Leo’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘lisa’: {
        naam: ‘Lisa’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘thea’: {
        naam: ‘Thea’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘mickynino’: {
        naam: ‘Micky & Nino’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘josanke’: {
        naam: ‘Jos & Anke’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘baswilma’: {
        naam: ‘Bas & Wilma,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘gerritrennie’: {
        naam: ‘Gerrit & Rennie’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘roosmaurits’: {
        naam: ‘Roos & Maurits’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘robin’: {
        naam: ‘Robin,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘nanne’: {
        naam: ‘Nanne’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘kayjaydae’: {
        naam: ‘Kaylee, Jay & Dae’,
        type: 'dag',
        maxPersonen: 3,
        begroeting: ''
    },
    ‘cornelis’: {
        naam: ‘Cees,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘isabelle’: {
        naam: ‘Isabelle’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘pascalemaarten’: {
        naam: ‘Pascale & Maarten’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘babs’: {
        naam: ‘Babs’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘femsjoerd’: {
        naam: ‘Fem & Sjoerd’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘tiff’: {
        naam: ‘Tiffani’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘nohemi’: {
        naam: ‘Nohemi’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘leoannette’: {
        naam: ‘Leo & Annette’,
        type: 'dag',
        maxPersonen: 2,
        begroeting: ''
    },
    ‘sjaan’: {
        naam: ‘Sjaan’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },
    ‘lealenoir’: {
        naam: ‘Lea’,
        type: 'dag',
        maxPersonen: 1,
        begroeting: ''
    },

    ‘femdik’: {
        naam: ‘Femke & Dik’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘luca’: {
        naam: ‘Luca’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘guillio’: {
        naam: ‘Guillio’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘robhenriet89a’: {
        naam: ‘Rob & Henriët’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘janjoke39’: {
        naam: ‘Jan & Joke’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘familieklijnstra’: {
        naam: ‘Elise, Erik, Julia & Noah’,
        type: ‘avond’,
        maxPersonen: 4,
        begroeting: ''
    },
    ‘martijnmarloes’: {
        naam: ‘Martijn & Marloes’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘renesharon’: {
        naam: ‘René en Sharon’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘simonenick’: {
        naam: ‘Simone & Nick’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘familienoordzij’: {
        naam: ‘Dennis, Simone, Annelot, Teije & Dianne’,
        type: ‘avond’,
        maxPersonen: 5,
        begroeting: ''
    },
    ‘remco’: {
        naam: ‘Remco’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘maurice’: {
        naam: ‘Maurice’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘elis’: {
        naam: ‘Elis’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘tijmen’: {
        naam: ‘Tijmen’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘veerle’: {
        naam: ‘Veerle’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘ditte’: {
        naam: ‘Ditte’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘victoria’: {
        naam: ‘Victoria’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘bente’: {
        naam: ‘Bente’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘anne’: {
        naam: ‘Anne’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘nienke’: {
        naam: ‘Nienke’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘reneeniek’: {
        naam: ‘Renee & Niek’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘carlijn’: {
        naam: ‘Carlijn & ?’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘luuk’: {
        naam: ‘Luuk’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘jelmer’: {
        naam: ‘Jelmer’,
        type: ‘avond’,
        maxPersonen: 1,
        begroeting: ''
    },
    ‘arjenlaura’: {
        naam: ‘Arjen & Laura’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    },
    ‘annabeljob’: {
        naam: ‘Annabel & Job’,
        type: ‘avond’,
        maxPersonen: 2,
        begroeting: ''
    }
};

// Standaardinstellingen als iemand de link zonder ?gast=... of met een onbekende code opent
const STANDAARD_GAST = {
    naam: '',
    type: 'dag',
    maxPersonen: 1,
    begroeting: ''
};

function leesGastUitUrl() {
    const params = new URLSearchParams(window.location.search);
    const ruweCode = (params.get('gast') || '').trim();
    const codeKey = ruweCode.toLowerCase();

    if (codeKey && GASTEN_LIJST[codeKey]) {
        return {
            gast: GASTEN_LIJST[codeKey],
            code: codeKey,
            geldig: true
        };
    }

    return {
        gast: STANDAARD_GAST,
        code: '',
        geldig: false
    };
}

const sessieGast = leesGastUitUrl();
const actieveGast = sessieGast.gast;

// Code-scherm tonen als er geen geldige ?gast= code in de URL staat
const codeGateEl = document.getElementById('codeGate');
const codeGateForm = document.getElementById('codeGateForm');
const codeInput = document.getElementById('codeInput');
const codeErrorEl = document.getElementById('codeError');

const hoofdHeader = document.querySelector('header');
const hoofdMain = document.querySelector('main');
const hoofdFooter = document.querySelector('footer');

function zetPaginaZichtbaar(zichtbaar) {
    if (hoofdHeader) hoofdHeader.hidden = !zichtbaar;
    if (hoofdMain) hoofdMain.hidden = !zichtbaar;
    if (hoofdFooter) hoofdFooter.hidden = !zichtbaar;
}

if (!sessieGast.geldig && codeGateEl) {
    zetPaginaZichtbaar(false);
    codeGateEl.hidden = false;
} else if (codeGateEl) {
    codeGateEl.hidden = true;
    zetPaginaZichtbaar(true);
}

if (codeGateForm && codeInput) {
    codeInput.addEventListener('input', () => {
        codeInput.value = codeInput.value.toLowerCase();
        if (codeErrorEl) codeErrorEl.textContent = '';
    });

    codeGateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const ingevuldeCode = codeInput.value.trim().toLowerCase();
        codeInput.value = ingevuldeCode;

        if (!ingevuldeCode || !GASTEN_LIJST[ingevuldeCode]) {
            if (codeErrorEl) {
                codeErrorEl.textContent = 'Deze code klopt niet helemaal. Controleer je uitnodiging en probeer het opnieuw.';
            }
            codeInput.focus();
            return;
        }

        const nieuweUrl = new URL(window.location.href);
        nieuweUrl.searchParams.set('gast', ingevuldeCode);
        window.location.href = nieuweUrl.toString();
    });
}

// ==========================================
// HERO FOTOSLIDESHOW (EINDELOZE LOOP)
// ==========================================
const slides = Array.from(document.querySelectorAll('.hero-stage .slide'));
const SLIDE_INTERVAL_MS = 3500;

if (slides.length > 1) {
    let activeIndex = 0;

    setInterval(() => {
        slides[activeIndex].classList.remove('is-active');
        activeIndex = (activeIndex + 1) % slides.length;
        slides[activeIndex].classList.add('is-active');
    }, SLIDE_INTERVAL_MS);
}

// ==========================================
// 1. PERSOONLIJKE BEGROETING, PLANNING & LOCATIES
// ==========================================
const begroetingEl = document.getElementById('persoonlijkeBegroeting');
if (begroetingEl) {
    const tekst = actieveGast.begroeting || (actieveGast.naam ? `Hoi ${actieveGast.naam}!` : '');
    if (tekst) {
        begroetingEl.textContent = tekst;
        begroetingEl.hidden = false;
    } else {
        begroetingEl.hidden = true;
    }
}

// Daggasten: verberg kaarten met data-groep="alleen-avond"
// Avondgasten: toon alleen kaarten met data-groep="avond" en data-groep="alleen-avond"
const planningCards = Array.from(document.querySelectorAll('.carousel-track .card'));
planningCards.forEach((card) => {
    const groep = card.getAttribute('data-groep');
    if (actieveGast.type === 'avond') {
        card.hidden = (groep !== 'avond' && groep !== 'alleen-avond');
    } else {
        card.hidden = (groep === 'alleen-avond');
    }
});

// Bij avondgasten alleen de locatie met data-locatie="avond" tonen
const locatieItems = Array.from(document.querySelectorAll('.locatie-items .locatie-item'));
if (actieveGast.type === 'avond') {
    locatieItems.forEach((item) => {
        const locatieType = item.getAttribute('data-locatie');
        item.hidden = (locatieType !== 'avond');
    });
}

// Carrousel
const viewport = document.querySelector('.carousel-viewport');
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.btn.prev');
const carouselNextBtn = document.querySelector('.btn.next');

let currentOffset = 0;

function getStepSize() {
    const zichtbareCard = track?.querySelector('.card:not([hidden])');
    if (!zichtbareCard || !track) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return zichtbareCard.getBoundingClientRect().width + gap;
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

// ==========================================
// 2. VIDEO + MUTE KNOP (OPTIONEEL)
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
// 3. RSVP FORMULIER (MET GASTGEGEVENS)
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
const MAX_PERSONEN = actieveGast.maxPersonen || 20;

function getLosseNamen() {
    if (Array.isArray(actieveGast.namen) && actieveGast.namen.length > 0) {
        return actieveGast.namen.map((n) => n.trim()).filter(Boolean);
    }

    const ruweNaam = (form?.naam?.value || actieveGast.naam || '').trim();
    if (!ruweNaam) return [];

    return ruweNaam
        .split(/\s*(?:&|,|\ben\b)\s*/i)
        .map((n) => n.trim())
        .filter(Boolean);
}

function getDieetPrefix() {
    const namen = getLosseNamen();
    if (namen.length === 0) return '';
    return namen.map((losseNaam) => `${losseNaam} - allergieën: `).join('\n');
}

function pasGastVeldenToe() {
    if (!form) return;

    if (actieveGast.naam && form.naam) {
        form.naam.value = actieveGast.naam;
    }

    if (aantalInput) {
        aantalInput.max = String(MAX_PERSONEN);
        aantalInput.value = String(MAX_PERSONEN);
    }

    if (form.dieetOpmerkingen) {
        const prefix = getDieetPrefix();
        if (prefix && !form.dieetOpmerkingen.value.trim()) {
            form.dieetOpmerkingen.value = prefix;
        }
    }
}

pasGastVeldenToe();

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
        pasGastVeldenToe();
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

            if (aantalInput) {
                aantalInput.max = String(MAX_PERSONEN);
                aantalInput.value = String(MAX_PERSONEN);
            }
            if (form.dieetOpmerkingen && !form.dieetOpmerkingen.value.trim()) {
                form.dieetOpmerkingen.value = getDieetPrefix();
            }
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
            const huidige = parseInt(aantalInput.value, 10) || MAX_PERSONEN;
            if (huidige > MIN_PERSONEN_JA) {
                aantalInput.value = String(huidige - 1);
            }
        });
    }

    if (plusBtn && aantalInput) {
        plusBtn.addEventListener('click', () => {
            const huidige = parseInt(aantalInput.value, 10) || MAX_PERSONEN;
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

        const aantalPersonen = aantalInput ? (parseInt(aantalInput.value, 10) || MAX_PERSONEN) : MAX_PERSONEN;
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
