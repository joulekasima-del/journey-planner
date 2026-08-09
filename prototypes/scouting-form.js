(function() {
  const EXPERIENCE_TYPES = [
    "Homestay", "Workshop", "Guided Walk", "Restaurant", "Farm",
    "Waterfall / Natural Site", "Temple / Cultural Site", "Garden", "Other"
  ];
  const PRIMARY_TYPES = ["Place", "Activity", "Service", "Event", "Person", "Natural Feature"];
  const DURATIONS = ["Under 1 hour", "1\u20133 hours", "Half day", "Full day", "Multi-day", "Ongoing / no fixed duration"];
  const ACCESS_OPTIONS = ["Walk-in", "Book ahead", "Seasonal \u2014 check before visiting", "By arrangement with host"];
  const DONATION_OPTIONS = ["Not observed / none", "Donation box on-site", "QR code on-site", "Ask host directly", "Bank transfer \u2014 details on-site", "Other (see notes)"];

  const STORAGE_PREFIX = 'jp-scouting:';
  const storage = {
    async set(key, value) {
      try {
        localStorage.setItem(STORAGE_PREFIX + key, value);
        return true;
      } catch (e) {
        return false;
      }
    },
    async get(key) {
      return { value: localStorage.getItem(STORAGE_PREFIX + key) };
    },
    async list(prefix) {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX + prefix)) {
          keys.push(k.slice(STORAGE_PREFIX.length));
        }
      }
      return { keys };
    },
    async delete(key) {
      localStorage.removeItem(STORAGE_PREFIX + key);
      return true;
    }
  };

  const CULTURE_OPTIONS = ["Historic tradition", "Religious or spiritual significance", "Family or generational knowledge", "Local festival or event", "Agricultural heritage", "Craft or artisan tradition", "Other"];

  const CATEGORY_QUESTIONS = {
    "Homestay": [
      { key: "room_type", label: "Room type", options: ["Private room", "Shared room", "Entire house"] },
      { key: "meals", label: "Meals available", options: ["Breakfast", "Lunch", "Dinner", "Self-catering"] },
      { key: "style", label: "Style", options: ["Traditional wood house", "Modern", "Farmstead", "Riverside"] }
    ],
    "Workshop": [
      { key: "skill", label: "Skill taught", options: ["Weaving", "Cooking", "Pottery", "Farming", "Herbal medicine", "Music", "Other"] },
      { key: "level", label: "Best for", options: ["Beginners", "Intermediate", "Advanced"] },
      { key: "format", label: "Format", options: ["Group sessions", "Private sessions"] }
    ],
    "Guided Walk": [
      { key: "difficulty", label: "Difficulty", options: ["Easy", "Moderate", "Challenging"] },
      { key: "terrain", label: "Terrain", options: ["Forest trail", "Rice paddy", "Riverside", "Village path", "Mountain"] },
      { key: "sights", label: "What you'll see", options: ["Wildlife", "Waterfalls", "Local farms", "Village life", "Temples", "Viewpoints"] }
    ],
    "Restaurant": [
      { key: "cuisine", label: "Cuisine style", options: ["Northern Thai / Lanna", "Central Thai", "Vegetarian-friendly", "Family recipes"] },
      { key: "dietary", label: "Dietary options", options: ["Vegetarian", "Vegan", "Halal", "Gluten-free possible"] },
      { key: "setting", label: "Setting", options: ["Riverside", "Garden", "Family home", "Farm-to-table"] }
    ],
    "Farm": [
      { key: "products", label: "Products", options: ["Rice", "Coffee", "Fruit orchard", "Vegetables", "Livestock", "Fish"] },
      { key: "activities", label: "Visitor activities", options: ["Harvest participation", "Feeding animals", "Farm tour", "Tasting"] }
    ],
    "Waterfall / Natural Site": [
      { key: "season", label: "Best season", options: ["Rainy", "Cool", "Hot", "Year-round"] },
      { key: "access", label: "Access", options: ["Easy walk", "Moderate hike", "Swimming possible", "Viewpoint only"] }
    ],
    "Temple / Cultural Site": [
      { key: "significance", label: "Significance", options: ["Historic", "Active worship site", "Festival site", "Notable architecture"] },
      { key: "etiquette", label: "Visitor etiquette", options: ["Modest dress required", "Remove shoes", "Quiet, respectful behavior", "Photography restricted in some areas"] }
    ],
    "Garden": [
      { key: "type", label: "Type", options: ["Flower garden", "Botanical / educational", "Organic farm garden", "Landscaped park"] },
      { key: "activities", label: "Activities", options: ["Walking", "Photography", "Picnic", "Guided tour"] }
    ],
    "Other": []
  };

  const root = document.getElementById('scout-root');

  function esc(s) {
    return (s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  const LIST_STATE_MESSAGES = {
    loading: 'Loading...',
    error: 'Could not load saved entries.',
    empty: 'Nothing scouted yet. Your first entry will appear here.'
  };
  function renderListState(kind) {
    document.getElementById('sc-list').innerHTML = `<div class="sc-empty">${LIST_STATE_MESSAGES[kind]}</div>`;
  }

  function render() {
    root.innerHTML = `
      <div class="sc-header">
        <p class="sc-eyebrow">Journey Planner &middot; Phase II, Scout Workspace</p>
        <h1 class="sc-title">Scouting Form</h1>
        <p class="sc-sub">Record an Experience while you're there. This feeds the real Experience database \u2014 nothing here is a placeholder.</p>
      </div>
      <div class="sc-body">
        <div class="sc-count-strip" id="sc-counts"></div>

        <p class="sc-section-label">New Experience</p>
        <div class="sc-card">
          <div class="sc-field">
            <label>Canonical name</label>
            <input class="sc-input" id="f-name" placeholder="e.g. Baan Rim Nam Homestay" />
          </div>
          <div class="sc-row2">
            <div class="sc-field">
              <label>Primary type <span class="sc-hint">pick one</span></label>
              <select class="sc-select" id="f-primary">
                ${PRIMARY_TYPES.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}
              </select>
            </div>
            <div class="sc-field">
              <label>Category</label>
              <select class="sc-select" id="f-type">
                ${EXPERIENCE_TYPES.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="sc-field">
            <label>Description <span class="sc-hint">what it is, why it matters</span></label>
            <textarea class="sc-textarea" id="f-desc" placeholder="Short, plain description a traveller would actually read"></textarea>
          </div>

          <p class="sc-group-label">Location</p>
          <div class="sc-row2">
            <div class="sc-field">
              <label>Village / Moo</label>
              <input class="sc-input" id="f-moo" placeholder="e.g. Moo 7" />
            </div>
            <div class="sc-field">
              <label>Subdistrict / area</label>
              <input class="sc-input" id="f-area" placeholder="e.g. Onnuea, San Kamphaeng" value="Onnuea, San Kamphaeng, Chiang Mai" />
            </div>
          </div>
          <div class="sc-field">
            <label>Landscape & geographic story <span class="sc-hint">what it looks like, and why it looks that way</span></label>
            <textarea class="sc-textarea" id="f-landscape" placeholder="e.g. Sits in a narrow valley along the stream; elevation keeps it cooler, which is why the orchards here grow differently than lower down near the city"></textarea>
          </div>
          <div class="sc-field">
            <label>Google Maps link <span class="sc-hint">paste the share link \u2014 we'll try to pull the coordinates</span></label>
            <input class="sc-input" id="f-maps-link" placeholder="https://www.google.com/maps/@18.7883,99.1420,17z" />
          </div>
          <div class="sc-row2">
            <div class="sc-field">
              <label>GPS latitude <span class="sc-hint">auto-fills if link parses, or enter manually</span></label>
              <input class="sc-input" id="f-lat" placeholder="e.g. 18.7883" />
            </div>
            <div class="sc-field">
              <label>GPS longitude <span class="sc-hint">optional</span></label>
              <input class="sc-input" id="f-lng" placeholder="e.g. 99.1420" />
            </div>
          </div>
          <div class="sc-field">
            <label>Part of / related to <span class="sc-hint">optional \u2014 link to an already-scouted place</span></label>
            <select class="sc-select" id="f-related">
              <option value="">\u2014 None \u2014</option>
            </select>
          </div>

          <p class="sc-group-label">Practical details</p>
          <div class="sc-row2">
            <div class="sc-field">
              <label>Duration</label>
              <select class="sc-select" id="f-duration">
                ${DURATIONS.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}
              </select>
            </div>
            <div class="sc-field">
              <label>Access <span class="sc-hint">how a visitor gets in</span></label>
              <select class="sc-select" id="f-access">
                ${ACCESS_OPTIONS.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="sc-field">
            <label>Tags <span class="sc-hint">comma separated, e.g. family-friendly, rainy-season</span></label>
            <input class="sc-input" id="f-tags" placeholder="family-friendly, morning-only, hands-on" />
          </div>
          <div id="sc-category-block"></div>

          <p class="sc-group-label">Culture & people</p>
          <div class="sc-field">
            <label>Cultural or local significance <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-culture-checks"></div>
          </div>
          <div class="sc-row2">
            <div class="sc-field">
              <label>Host name <span class="sc-hint">optional</span></label>
              <input class="sc-input" id="f-host-name" placeholder="e.g. Khun Somsak" />
            </div>
            <div class="sc-field">
              <label>Host contact <span class="sc-hint">optional</span></label>
              <input class="sc-input" id="f-host-contact" placeholder="phone / LINE" />
            </div>
          </div>

          <p class="sc-group-label">Community support</p>
          <div class="sc-field">
            <label>Donation option on-site? <span class="sc-hint">what the Scout actually saw</span></label>
            <select class="sc-select" id="f-donation">
              ${DONATION_OPTIONS.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}
            </select>
          </div>
          <div class="sc-field" id="f-donation-detail-wrap">
            <label>What it looks like <span class="sc-hint">so Explorers know what to look for</span></label>
            <textarea class="sc-textarea" id="f-donation-detail" placeholder="e.g. Wooden donation box near the entrance, for temple upkeep. No QR code seen on-site."></textarea>
          </div>

          <p class="sc-group-label">Scout record</p>
          <div class="sc-field">
            <label>Scout notes <span class="sc-hint">private \u2014 things to check later</span></label>
            <textarea class="sc-textarea" id="f-notes" placeholder="e.g. Owner speaks basic English, best visited mornings, need photos of the workshop room"></textarea>
          </div>
          <div class="sc-row2">
            <div class="sc-field">
              <label>Photos collected?</label>
              <div class="sc-toggle-group">
                <div class="sc-toggle" id="f-photos-no">Not yet</div>
                <div class="sc-toggle" id="f-photos-yes">Yes</div>
              </div>
            </div>
            <div class="sc-field">
              <label>Date scouted</label>
              <input class="sc-input" id="f-date" type="date" />
            </div>
          </div>
          <div class="sc-field">
            <label>Status</label>
            <div class="sc-toggle-group">
              <div class="sc-toggle" id="f-status-draft">Draft</div>
              <div class="sc-toggle" id="f-status-verified">Verified</div>
            </div>
          </div>
          <button class="sc-submit" id="f-submit">Save Experience</button>
          <div class="sc-msg" id="f-msg"></div>
        </div>

        <p class="sc-section-label" id="sc-list-label">Scouted so far</p>
        <div id="sc-list"></div>

        <p class="sc-footnote">Saved on this device, under your account. Fields match what's actually locked so far (JP-007, the real Domain Model) \u2014 no pricing or availability fields yet, since that's a later phase.</p>
      </div>
    `;

    document.getElementById('f-date').value = new Date().toISOString().slice(0,10);

    let status = 'draft';
    const draftBtn = document.getElementById('f-status-draft');
    const verifiedBtn = document.getElementById('f-status-verified');
    function setStatus(s) {
      status = s;
      draftBtn.className = 'sc-toggle' + (s === 'draft' ? ' active-draft' : '');
      verifiedBtn.className = 'sc-toggle' + (s === 'verified' ? ' active-verified' : '');
    }
    setStatus('draft');
    draftBtn.onclick = () => setStatus('draft');
    verifiedBtn.onclick = () => setStatus('verified');

    let photosCollected = false;
    const photosNoBtn = document.getElementById('f-photos-no');
    const photosYesBtn = document.getElementById('f-photos-yes');
    function setPhotos(v) {
      photosCollected = v;
      photosNoBtn.className = 'sc-toggle' + (!v ? ' active-draft' : '');
      photosYesBtn.className = 'sc-toggle' + (v ? ' active-verified' : '');
    }
    setPhotos(false);
    photosNoBtn.onclick = () => setPhotos(false);
    photosYesBtn.onclick = () => setPhotos(true);

    document.getElementById('f-maps-link').addEventListener('input', (ev) => {
      const latEl = document.getElementById('f-lat');
      const lngEl = document.getElementById('f-lng');
      if (latEl.value.trim() !== '' || lngEl.value.trim() !== '') return;
      const val = ev.target.value;
      const patterns = [
        /@(-?\d+\.\d+),(-?\d+\.\d+)/,
        /[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/,
        /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/
      ];
      for (const p of patterns) {
        const m = val.match(p);
        if (m) {
          latEl.value = m[1];
          lngEl.value = m[2];
          break;
        }
      }
    });

    let culturePicks = new Set();
    const cultureGrid = document.getElementById('f-culture-checks');
    cultureGrid.innerHTML = CULTURE_OPTIONS.map(o => `<div class="sc-check" data-val="${esc(o)}">${esc(o)}</div>`).join('');
    cultureGrid.querySelectorAll('.sc-check').forEach(chip => {
      chip.onclick = () => {
        const v = chip.getAttribute('data-val');
        if (culturePicks.has(v)) { culturePicks.delete(v); chip.classList.remove('on'); }
        else { culturePicks.add(v); chip.classList.add('on'); }
      };
    });

    let categoryPicks = {};
    const catBlock = document.getElementById('sc-category-block');
    function renderCategoryQuestions() {
      const cat = document.getElementById('f-type').value;
      const questions = CATEGORY_QUESTIONS[cat] || [];
      categoryPicks = {};
      if (questions.length === 0) {
        catBlock.innerHTML = '';
        return;
      }
      catBlock.innerHTML = questions.map(q => `
        <div class="sc-cat-question">
          <label>${esc(q.label)}</label>
          <div class="sc-check-grid" data-qkey="${esc(q.key)}">
            ${q.options.map(o => `<div class="sc-check" data-val="${esc(o)}">${esc(o)}</div>`).join('')}
          </div>
        </div>
      `).join('');
      questions.forEach(q => { categoryPicks[q.key] = new Set(); });
      catBlock.querySelectorAll('.sc-check-grid').forEach(grid => {
        const qkey = grid.getAttribute('data-qkey');
        grid.querySelectorAll('.sc-check').forEach(chip => {
          chip.onclick = () => {
            const v = chip.getAttribute('data-val');
            if (categoryPicks[qkey].has(v)) { categoryPicks[qkey].delete(v); chip.classList.remove('on'); }
            else { categoryPicks[qkey].add(v); chip.classList.add('on'); }
          };
        });
      });
    }
    renderCategoryQuestions();
    document.getElementById('f-type').addEventListener('change', renderCategoryQuestions);

    const donationSelect = document.getElementById('f-donation');
    const donationWrap = document.getElementById('f-donation-detail-wrap');
    function syncDonationDetail() {
      const hidden = donationSelect.value === 'Not observed / none';
      donationWrap.style.display = hidden ? 'none' : 'block';
      if (hidden) {
        document.getElementById('f-donation-detail').value = '';
      }
    }
    syncDonationDetail();
    donationSelect.onchange = syncDonationDetail;

    document.getElementById('f-submit').onclick = async () => {
      const name = document.getElementById('f-name').value.trim();
      const msg = document.getElementById('f-msg');
      if (!name) {
        msg.textContent = 'Name is required \u2014 everything else can be filled in later.';
        msg.className = 'sc-msg error';
        return;
      }
      const entry = {
        id: 'exp_' + Date.now(),
        name,
        primaryType: document.getElementById('f-primary').value,
        type: document.getElementById('f-type').value,
        moo: document.getElementById('f-moo').value.trim(),
        area: document.getElementById('f-area').value.trim(),
        landscape: document.getElementById('f-landscape').value.trim(),
        lat: document.getElementById('f-lat').value.trim(),
        lng: document.getElementById('f-lng').value.trim(),
        related: document.getElementById('f-related').value,
        duration: document.getElementById('f-duration').value,
        access: document.getElementById('f-access').value,
        tags: document.getElementById('f-tags').value.trim(),
        categoryAttributes: Object.fromEntries(Object.entries(categoryPicks).map(([k, v]) => [k, [...v]])),
        culture: [...culturePicks],
        hostName: document.getElementById('f-host-name').value.trim(),
        hostContact: document.getElementById('f-host-contact').value.trim(),
        donation: document.getElementById('f-donation').value,
        donationDetail: document.getElementById('f-donation-detail').value.trim(),
        description: document.getElementById('f-desc').value.trim(),
        notes: document.getElementById('f-notes').value.trim(),
        photosCollected,
        date: document.getElementById('f-date').value,
        status
      };
      const submitBtn = document.getElementById('f-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';
      try {
        const result = await storage.set(entry.id, JSON.stringify(entry));
        if (!result) throw new Error('no result');
        msg.textContent = 'Saved.';
        msg.className = 'sc-msg';
        render();
        loadEntries();
      } catch (e) {
        msg.textContent = 'Could not save \u2014 please try again.';
        msg.className = 'sc-msg error';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save Experience';
      }
    };

    renderListState('loading');
    loadEntries();
  }

  async function loadEntries() {
    const listEl = document.getElementById('sc-list');
    const countsEl = document.getElementById('sc-counts');
    const labelEl = document.getElementById('sc-list-label');
    let entries = [];
    try {
      const keysResult = await storage.list('exp_');
      const keys = (keysResult && keysResult.keys) || [];
      for (const k of keys) {
        try {
          const r = await storage.get(k);
          if (r && r.value) entries.push(JSON.parse(r.value));
        } catch (e) { /* skip unreadable entry */ }
      }
    } catch (e) {
      renderListState('error');
      countsEl.innerHTML = '';
      return;
    }

    entries.sort((a, b) => (b.date || '').localeCompare(a.date || '') || b.id.localeCompare(a.id));

    const relatedSelect = document.getElementById('f-related');
    if (relatedSelect) {
      const currentVal = relatedSelect.value;
      relatedSelect.innerHTML = '<option value="">\u2014 None \u2014</option>' +
        entries.map(e => `<option value="${esc(e.id)}">${esc(e.name)}</option>`).join('');
      relatedSelect.value = currentVal;
    }

    const verifiedCount = entries.filter(e => e.status === 'verified').length;
    countsEl.innerHTML = `
      <div class="sc-count-card"><div class="sc-count-num">${entries.length}</div><div class="sc-count-label">Total scouted</div></div>
      <div class="sc-count-card"><div class="sc-count-num">${verifiedCount}</div><div class="sc-count-label">Verified</div></div>
      <div class="sc-count-card"><div class="sc-count-num">${entries.length - verifiedCount}</div><div class="sc-count-label">Draft</div></div>
    `;
    labelEl.textContent = `Scouted so far (${entries.length})`;

    if (entries.length === 0) {
      renderListState('empty');
      return;
    }

    const nameById = Object.fromEntries(entries.map(e => [e.id, e.name]));
    listEl.innerHTML = entries.map(e => `
      <div class="sc-entry">
        <div class="sc-entry-top">
          <div>
            <div class="sc-entry-name">${esc(e.name)}</div>
            <div class="sc-entry-type">${esc(e.primaryType || '')}${e.primaryType && e.type ? ' \u00b7 ' : ''}${esc(e.type || '')}</div>
          </div>
          <div class="sc-badge ${e.status === 'verified' ? 'verified' : 'draft'}">${e.status === 'verified' ? 'Verified' : 'Draft'}</div>
        </div>
        ${(e.moo || e.area) ? `<div class="sc-entry-loc">${esc([e.moo, e.area].filter(Boolean).join(', '))}${e.lat && e.lng ? ` &middot; ${esc(e.lat)}, ${esc(e.lng)}` : ''}</div>` : ''}
        ${e.related ? `<div class="sc-entry-loc">Part of: ${esc(nameById[e.related] || e.related)}</div>` : ''}
        ${e.landscape ? `<div class="sc-entry-desc"><em>Landscape:</em> ${esc(e.landscape)}</div>` : ''}
        ${e.description ? `<div class="sc-entry-desc">${esc(e.description)}</div>` : ''}
        ${e.culture && e.culture.length ? `<div class="sc-entry-desc"><em>Cultural:</em> ${esc(e.culture.join(', '))}</div>` : ''}
        ${e.categoryAttributes && Object.values(e.categoryAttributes).some(v => v.length) ? `<div class="sc-entry-desc">${Object.entries(e.categoryAttributes).filter(([k,v]) => v.length).map(([k,v]) => `<em>${esc(k)}:</em> ${esc(v.join(', '))}`).join(' &middot; ')}</div>` : ''}
        ${(e.hostName || e.hostContact) ? `<div class="sc-entry-loc">Host: ${esc([e.hostName, e.hostContact].filter(Boolean).join(' \u00b7 '))}</div>` : ''}
        ${e.donation && e.donation !== 'Not observed / none' ? `<div class="sc-entry-loc">Donation: ${esc(e.donation)}${e.donationDetail ? ` \u2014 ${esc(e.donationDetail)}` : ''}</div>` : ''}
        ${e.tags ? `<div class="sc-entry-loc">Tags: ${esc(e.tags)}</div>` : ''}
        <div class="sc-entry-meta">
          <span>${esc(e.date || '')}</span>
          <span>${e.photosCollected ? 'Photos: yes' : 'No photos yet'}</span>
          ${e.duration ? `<span>${esc(e.duration)}</span>` : ''}
          ${e.access ? `<span>${esc(e.access)}</span>` : ''}
        </div>
        <div class="sc-entry-actions">
          ${e.status !== 'verified' ? `<button class="sc-mini-btn" data-verify="${esc(e.id)}">Mark verified</button>` : ''}
          <button class="sc-mini-btn danger" data-delete="${esc(e.id)}">Delete</button>
        </div>
      </div>
    `).join('');

    listEl.querySelectorAll('[data-verify]').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.getAttribute('data-verify');
        const r = await storage.get(id);
        if (r && r.value) {
          const entry = JSON.parse(r.value);
          entry.status = 'verified';
          await storage.set(id, JSON.stringify(entry));
          loadEntries();
        }
      };
    });
    listEl.querySelectorAll('[data-delete]').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.getAttribute('data-delete');
        await storage.delete(id);
        loadEntries();
      };
    });
  }

  render();
})();
