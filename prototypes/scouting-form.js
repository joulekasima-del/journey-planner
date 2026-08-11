(function() {
  const SUPABASE_URL = 'https://dkmipsgtzmztqivvszwm.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_xIYK_qFkI7ZaCa6k8JP2Rg_R7rqB9f0';
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const LEGACY_STORAGE_PREFIX = 'jp-scouting:';

  const EXPERIENCE_TYPES = [
    "Homestay", "Workshop", "Guided Walk", "Restaurant", "Farm",
    "Waterfall / Natural Site", "Temple / Cultural Site", "Garden", "Other"
  ];
  const PRIMARY_TYPES = ["Place", "Activity", "Service", "Event", "Person", "Natural Feature"];
  const DURATIONS = ["Under 1 hour", "1\u20133 hours", "Half day", "Full day", "Multi-day", "Ongoing / no fixed duration"];
  const ACCESS_OPTIONS = ["Walk-in", "Book ahead", "Seasonal \u2014 check before visiting", "By arrangement with host"];
  const DONATION_OPTIONS = ["Not observed / none", "Donation box on-site", "QR code on-site", "Ask host directly", "Bank transfer \u2014 details on-site", "Other (see notes)"];

  const CULTURE_OPTIONS = [
    "Historic tradition", "Religious or spiritual significance", "Family or generational knowledge",
    "Local festival or event", "Agricultural heritage", "Craft or artisan tradition",
    "Culinary heritage", "Traditional ecological / farming knowledge", "Music or performing arts",
    "Traditional medicine / herbal knowledge", "Endangered or dying tradition", "Community or cooperative-run",
    "Fusion of tradition and modern art/design",
    "Other"
  ];

  const TAG_OPTIONS = [
    "Family-friendly", "English-friendly", "Rainy-season OK", "Morning-only", "Afternoon-only",
    "Evening-only", "Hands-on", "Sit-and-watch", "Wheelchair-accessible", "Photography-friendly",
    "Quiet / peaceful", "Popular / busy", "Off-the-beaten-path", "Budget-friendly", "Needs advance notice"
  ];

  const LANGUAGE_OPTIONS = ["Thai", "English", "Mandarin Chinese", "Japanese", "Korean", "German", "French", "Other"];

  const BEST_VISIT_OPTIONS = [
    "Early morning (quieter, cooler)", "Late afternoon / golden hour", "Weekdays (less crowded)",
    "Rainy season (lush, fewer visitors)", "Cool season (Nov-Feb)", "Avoid hot season if possible",
    "During a local festival or event", "Anytime - no strong preference"
  ];

  const LANDSCAPE_SETTING_OPTIONS = [
    "Valley", "Riverside / streamside", "Mountain slope", "Ridge / highland", "Rice paddy plain",
    "Forest interior", "Highland plateau", "Lakeside", "Near hot spring", "Village center / urban", "Other"
  ];
  const LANDSCAPE_CLIMATE_OPTIONS = [
    "Noticeably cooler (elevation)", "Misty / high humidity mornings", "Warm lowland climate",
    "Strong seasonal temperature swing", "Other"
  ];
  const LANDSCAPE_WATER_VEGETATION_OPTIONS = [
    "Near a river or stream", "Near a waterfall", "Irrigation canals nearby", "No significant water feature",
    "Forested surroundings", "Farmland / orchards nearby", "Open grassland", "Bamboo groves",
    "Terraced fields", "Other"
  ];

  const HOST_NOTICE = "Remember to tell the host what's being recorded and why.";

  const CATEGORY_QUESTIONS = {
    "Homestay": [
      { key: "room_type", label: "Room type", options: ["Private room", "Shared room", "Entire house"] },
      { key: "meals", label: "Meals available", options: ["Breakfast", "Lunch", "Dinner", "Self-catering"] },
      { key: "style", label: "Style", options: ["Traditional wood house", "Modern", "Farmstead", "Riverside", "Fusion (traditional + modern)"] }
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
      { key: "cuisine", label: "Cuisine style", options: ["Northern Thai / Lanna", "Central Thai", "Vegetarian-friendly", "Family recipes", "Fusion / modern Thai"] },
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

  function isOfflineError(e) {
    if (!e) return false;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return true;
    const msg = (e.message || String(e) || '').toLowerCase();
    return msg.includes('failed to fetch') || msg.includes('network') || msg.includes('load failed') || e instanceof TypeError;
  }

  // ---------- Shared chip-picker + "Other" reveal mechanism, used everywhere a chip group appears ----------

  // Renders a chip grid from `options` into #gridId and returns the grid element.
  function renderChipGroup(gridId, options) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = options.map(o => `<div class="sc-check" data-val="${esc(o)}">${esc(o)}</div>`).join('');
    return grid;
  }

  // Wires click-to-toggle behavior on a chip grid against a Set. Calls onToggle after every click.
  function wireChipToggle(grid, picks, onToggle) {
    grid.querySelectorAll('.sc-check').forEach(chip => {
      chip.onclick = () => {
        const v = chip.getAttribute('data-val');
        if (picks.has(v)) { picks.delete(v); chip.classList.remove('on'); }
        else { picks.add(v); chip.classList.add('on'); }
        if (onToggle) onToggle();
      };
    });
  }

  // Binds a free-text "Other, please specify" input to one Set (or an array of Sets, for a
  // detail field shared across multiple chip groups). Shows the input only when "Other" is
  // picked anywhere in the given Set(s); hides and clears it otherwise. Returns a sync()
  // function to call after any toggle on the bound Set(s) -- safe to call unconditionally,
  // including for chip groups that have no "Other" option and no detail element at all.
  function bindOtherDetail(picksOrArray, detailEl) {
    if (!detailEl) return () => {};
    const sets = Array.isArray(picksOrArray) ? picksOrArray : [picksOrArray];
    function sync() {
      const showing = sets.some(p => p.has('Other'));
      detailEl.style.display = showing ? 'block' : 'none';
      if (!showing) detailEl.value = '';
    }
    sync();
    return sync;
  }

  // ---------- Data mapping: Supabase rows <-> the flat entry shape the UI already expects ----------

  function rowToEntry(row) {
    const attrs = {};
    (row.experience_attribute || []).forEach(a => {
      if (!attrs[a.key]) attrs[a.key] = [];
      attrs[a.key].push(a.value);
    });
    return {
      id: row.id,
      name: row.name,
      primaryType: row.primary_type || '',
      type: row.category || '',
      moo: (row.place && row.place.moo) || '',
      area: (row.place && row.place.area) || '',
      landscape: (row.place && row.place.landscape) || '',
      landscapeSetting: (row.place && row.place.landscape_setting) || [],
      landscapeClimate: (row.place && row.place.landscape_climate) || [],
      landscapeWaterVegetation: (row.place && row.place.landscape_water_vegetation) || [],
      lat: (row.place && row.place.lat) || '',
      lng: (row.place && row.place.lng) || '',
      related: row.related_to_id || '',
      duration: row.duration || '',
      access: row.access || '',
      tags: row.tags || '',
      categoryAttributes: attrs,
      culture: row.culture || [],
      cultureOtherDetail: row.culture_other_detail || '',
      languages: row.languages || [],
      languagesOtherDetail: row.languages_other_detail || '',
      bestVisit: row.best_visit || [],
      hostName: (row.host && row.host.name) || '',
      hostContact: (row.host && row.host.contact) || '',
      donation: row.donation || '',
      donationDetail: row.donation_detail || '',
      description: row.description || '',
      notes: row.notes || '',
      photosCollected: !!row.photos_collected,
      date: row.date_scouted || '',
      timeScouted: row.time_scouted || '',
      status: row.status
    };
  }

  // Inserts place/host/experience/experience_attribute rows for one entry-shaped object.
  // Used both by the live submit handler and by the one-time localStorage migration.
  async function saveEntryToSupabase(entry, userId) {
    let placeId = null;
    const hasLandscapePicks = (entry.landscapeSetting && entry.landscapeSetting.length) ||
      (entry.landscapeClimate && entry.landscapeClimate.length) ||
      (entry.landscapeWaterVegetation && entry.landscapeWaterVegetation.length);
    if (entry.moo || entry.area || entry.landscape || entry.lat || entry.lng || hasLandscapePicks) {
      const { data, error } = await sb.from('place').insert({
        moo: entry.moo || null,
        area: entry.area || null,
        landscape: entry.landscape || null,
        landscape_setting: entry.landscapeSetting || [],
        landscape_climate: entry.landscapeClimate || [],
        landscape_water_vegetation: entry.landscapeWaterVegetation || [],
        lat: entry.lat || null,
        lng: entry.lng || null
      }).select('id').single();
      if (error) throw error;
      placeId = data.id;
    }

    let hostId = null;
    if (entry.hostName || entry.hostContact) {
      const { data, error } = await sb.from('host').insert({
        name: entry.hostName || null,
        contact: entry.hostContact || null
      }).select('id').single();
      if (error) throw error;
      hostId = data.id;
    }

    const { data: expRow, error: expErr } = await sb.from('experience').insert({
      name: entry.name,
      primary_type: entry.primaryType || null,
      category: entry.type || null,
      description: entry.description || null,
      place_id: placeId,
      host_id: hostId,
      related_to_id: entry.related || null,
      duration: entry.duration || null,
      access: entry.access || null,
      tags: entry.tags || null,
      culture: entry.culture || [],
      culture_other_detail: entry.cultureOtherDetail || null,
      languages: entry.languages || [],
      languages_other_detail: entry.languagesOtherDetail || null,
      best_visit: entry.bestVisit || [],
      donation: entry.donation || null,
      donation_detail: entry.donationDetail || null,
      notes: entry.notes || null,
      photos_collected: !!entry.photosCollected,
      date_scouted: entry.date || null,
      time_scouted: entry.timeScouted || null,
      status: entry.status || 'draft',
      created_by: userId || null
    }).select('id').single();
    if (expErr) throw expErr;

    const attrRows = [];
    Object.entries(entry.categoryAttributes || {}).forEach(([key, values]) => {
      (values || []).forEach(value => attrRows.push({ experience_id: expRow.id, key, value }));
    });
    Object.entries(entry.categoryOtherDetails || {}).forEach(([qkey, detail]) => {
      if (detail) attrRows.push({ experience_id: expRow.id, key: `${qkey}_other_detail`, value: detail });
    });
    if (attrRows.length) {
      const { error: attrErr } = await sb.from('experience_attribute').insert(attrRows);
      if (attrErr) throw attrErr;
    }

    return expRow.id;
  }

  const LIST_STATE_MESSAGES = {
    loading: 'Loading...',
    error: 'Could not load saved entries.',
    offline: 'Offline \u2014 can\u2019t load entries right now. Check your connection and try again.',
    empty: 'Nothing scouted yet. Your first entry will appear here.'
  };
  function renderListState(kind) {
    document.getElementById('sc-list').innerHTML = `<div class="sc-empty">${LIST_STATE_MESSAGES[kind]}</div>`;
  }

  // ---------- Auth gate ----------

  function renderLogin(message) {
    root.innerHTML = `
      <div class="sc-header">
        <p class="sc-eyebrow">Journey Planner &middot; Phase II, Scout Workspace</p>
        <h1 class="sc-title">Scouting Form</h1>
        <p class="sc-sub">Sign in to continue. This tool is for Scouts only.</p>
      </div>
      <div class="sc-body">
        <div class="sc-card">
          <div class="sc-field">
            <label>Email</label>
            <input class="sc-input" id="login-email" type="email" autocomplete="username" />
          </div>
          <div class="sc-field">
            <label>Password</label>
            <input class="sc-input" id="login-password" type="password" autocomplete="current-password" />
          </div>
          <button class="sc-submit" id="login-submit">Sign in</button>
          <div class="sc-msg${message ? ' error' : ''}" id="login-msg">${message ? esc(message) : ''}</div>
        </div>
      </div>
    `;

    const emailEl = document.getElementById('login-email');
    const passwordEl = document.getElementById('login-password');
    const msgEl = document.getElementById('login-msg');
    const btn = document.getElementById('login-submit');

    async function attemptLogin() {
      const email = emailEl.value.trim();
      const password = passwordEl.value;
      if (!email || !password) {
        msgEl.textContent = 'Enter both email and password.';
        msgEl.className = 'sc-msg error';
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Signing in...';
      msgEl.textContent = '';
      msgEl.className = 'sc-msg';
      try {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
        // onAuthStateChange listener below takes over from here.
      } catch (e) {
        btn.disabled = false;
        btn.textContent = 'Sign in';
        msgEl.textContent = isOfflineError(e) ? 'Offline \u2014 can\u2019t sign in right now.' : 'Sign-in failed \u2014 check your email and password.';
        msgEl.className = 'sc-msg error';
      }
    }
    btn.onclick = attemptLogin;
    passwordEl.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') attemptLogin(); });
  }

  // ---------- Main app (Supabase-backed) ----------

  function render(session) {
    root.innerHTML = `
      <div class="sc-header">
        <p class="sc-eyebrow">Journey Planner &middot; Phase II, Scout Workspace</p>
        <h1 class="sc-title">Scouting Form</h1>
        <p class="sc-sub">Record an Experience while you're there. This feeds the real Experience database \u2014 nothing here is a placeholder.</p>
      </div>
      <div class="sc-body">
        <div class="sc-account-bar">
          <span>Signed in as ${esc(session.user.email)}</span>
          <button class="sc-mini-btn" id="logout-btn">Log out</button>
        </div>
        <div id="sc-migrate-banner"></div>
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
            <label>Setting <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-landscape-setting-checks"></div>
          </div>
          <div class="sc-field">
            <label>Elevation & climate feel <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-landscape-climate-checks"></div>
          </div>
          <div class="sc-field">
            <label>Water & vegetation <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-landscape-water-checks"></div>
            <input class="sc-input sc-other-detail" id="f-landscape-other-detail" placeholder="Describe the &quot;Other&quot; pick(s) above" style="display:none;margin-top:8px;" />
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
            <label>Best visit <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-bestvisit-checks"></div>
          </div>
          <div class="sc-field">
            <label>Tags <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-tags-checks"></div>
          </div>
          <div id="sc-category-block"></div>

          <p class="sc-group-label">Culture & people</p>
          <div class="sc-field">
            <label>Cultural or local significance <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-culture-checks"></div>
            <input class="sc-input sc-other-detail" id="f-culture-other-detail" placeholder="Please specify" style="display:none;margin-top:8px;" />
          </div>
          <div class="sc-field" id="f-language-block">
            <label>Languages the host can use <span class="sc-hint">select all that apply</span></label>
            <div class="sc-check-grid" id="f-language-checks"></div>
            <input class="sc-input sc-other-detail" id="f-language-other-detail" placeholder="Please specify" style="display:none;margin-top:8px;" />
          </div>
          <div class="sc-notice">${esc(HOST_NOTICE)}</div>
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
          <div class="sc-field">
            <label>Photos collected?</label>
            <div class="sc-toggle-group">
              <div class="sc-toggle" id="f-photos-no">Not yet</div>
              <div class="sc-toggle" id="f-photos-yes">Yes</div>
            </div>
          </div>
          <div class="sc-row2">
            <div class="sc-field">
              <label>Date scouted</label>
              <input class="sc-input" id="f-date" type="date" />
            </div>
            <div class="sc-field">
              <label>Time scouted</label>
              <input class="sc-input" id="f-time" type="time" />
            </div>
          </div>
          <div class="sc-field">
            <label>Status</label>
            <div class="sc-toggle-group">
              <div class="sc-toggle" id="f-status-draft">Draft</div>
              <div class="sc-toggle" id="f-status-verified">Verified</div>
            </div>
          </div>

          <p class="sc-group-label">Description</p>
          <div class="sc-field">
            <label>Description <span class="sc-hint">starting draft only \u2014 always read and edit before saving</span></label>
            <button class="sc-mini-btn" type="button" id="f-generate-draft">Generate draft text</button>
            <p class="sc-hint" style="display:block;margin:6px 0 0;">Not AI \u2014 just assembles what you've already entered above into plain sentences.</p>
            <textarea class="sc-textarea" id="f-desc" placeholder="Short, plain description a traveller would actually read" style="margin-top:8px;"></textarea>
          </div>

          <button class="sc-submit" id="f-submit">Save Experience</button>
          <div class="sc-msg" id="f-msg"></div>
        </div>

        <p class="sc-section-label" id="sc-list-label">Scouted so far</p>
        <div id="sc-list"></div>

        <p class="sc-footnote">Shared Scout workspace, backed by Supabase. Fields match what's actually locked so far (JP-007, the real Domain Model) \u2014 no pricing or availability fields yet, since that's a later phase.</p>
      </div>
    `;

    document.getElementById('logout-btn').onclick = async () => {
      await sb.auth.signOut();
    };

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
    const cultureGrid = renderChipGroup('f-culture-checks', CULTURE_OPTIONS);
    const syncCultureOther = bindOtherDetail(culturePicks, document.getElementById('f-culture-other-detail'));
    wireChipToggle(cultureGrid, culturePicks, syncCultureOther);

    let tagPicks = new Set();
    const tagsGrid = renderChipGroup('f-tags-checks', TAG_OPTIONS);
    wireChipToggle(tagsGrid, tagPicks);

    let bestVisitPicks = new Set();
    const bestVisitGrid = renderChipGroup('f-bestvisit-checks', BEST_VISIT_OPTIONS);
    wireChipToggle(bestVisitGrid, bestVisitPicks);

    let landscapeSettingPicks = new Set();
    let landscapeClimatePicks = new Set();
    let landscapeWaterPicks = new Set();
    const landscapeOtherDetailEl = document.getElementById('f-landscape-other-detail');
    const syncLandscapeOther = bindOtherDetail(
      [landscapeSettingPicks, landscapeClimatePicks, landscapeWaterPicks],
      landscapeOtherDetailEl
    );
    const landscapeSettingGrid = renderChipGroup('f-landscape-setting-checks', LANDSCAPE_SETTING_OPTIONS);
    wireChipToggle(landscapeSettingGrid, landscapeSettingPicks, syncLandscapeOther);
    const landscapeClimateGrid = renderChipGroup('f-landscape-climate-checks', LANDSCAPE_CLIMATE_OPTIONS);
    wireChipToggle(landscapeClimateGrid, landscapeClimatePicks, syncLandscapeOther);
    const landscapeWaterGrid = renderChipGroup('f-landscape-water-checks', LANDSCAPE_WATER_VEGETATION_OPTIONS);
    wireChipToggle(landscapeWaterGrid, landscapeWaterPicks, syncLandscapeOther);

    let languagePicks = new Set();
    const languageBlock = document.getElementById('f-language-block');
    const languageGrid = renderChipGroup('f-language-checks', LANGUAGE_OPTIONS);
    const syncLanguageOther = bindOtherDetail(languagePicks, document.getElementById('f-language-other-detail'));
    wireChipToggle(languageGrid, languagePicks, syncLanguageOther);
    function syncLanguageVisibility() {
      const shouldShow = document.getElementById('f-primary').value === 'Person' || document.getElementById('f-type').value === 'Workshop';
      languageBlock.style.display = shouldShow ? 'block' : 'none';
      if (!shouldShow && languagePicks.size) {
        languagePicks.clear();
        languageGrid.querySelectorAll('.sc-check.on').forEach(chip => chip.classList.remove('on'));
        syncLanguageOther();
      }
    }
    syncLanguageVisibility();
    document.getElementById('f-primary').addEventListener('change', syncLanguageVisibility);

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
          ${q.options.includes('Other') ? `<input class="sc-input sc-other-detail" data-other-detail-for="${esc(q.key)}" placeholder="Please specify" style="display:none;margin-top:8px;" />` : ''}
        </div>
      `).join('');
      questions.forEach(q => { categoryPicks[q.key] = new Set(); });
      catBlock.querySelectorAll('.sc-check-grid').forEach(grid => {
        const qkey = grid.getAttribute('data-qkey');
        const picks = categoryPicks[qkey];
        const detailEl = catBlock.querySelector(`[data-other-detail-for="${qkey}"]`);
        const syncOther = bindOtherDetail(picks, detailEl);
        wireChipToggle(grid, picks, syncOther);
      });
    }
    renderCategoryQuestions();
    document.getElementById('f-type').addEventListener('change', () => {
      renderCategoryQuestions();
      syncLanguageVisibility();
    });

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

    document.getElementById('f-generate-draft').onclick = () => {
      const name = document.getElementById('f-name').value.trim();
      const category = document.getElementById('f-type').value;
      const moo = document.getElementById('f-moo').value.trim();
      const area = document.getElementById('f-area').value.trim();
      const duration = document.getElementById('f-duration').value;
      const access = document.getElementById('f-access').value;

      const sentences = [];
      const locationBits = [moo, area].filter(Boolean).join(', ');
      let s1 = (name || 'This experience') + ` is a ${category}`;
      if (locationBits) s1 += ` in ${locationBits}`;
      s1 += '.';
      sentences.push(s1);

      const landscapeBits = [...landscapeSettingPicks, ...landscapeClimatePicks, ...landscapeWaterPicks].filter(v => v !== 'Other');
      if (landscapeBits.length) sentences.push(`Landscape: ${landscapeBits.join(', ')}.`);
      const landscapeOtherVal = landscapeOtherDetailEl.value.trim();
      if (landscapeOtherVal) sentences.push(/[.!?]\s*$/.test(landscapeOtherVal) ? landscapeOtherVal : landscapeOtherVal + '.');

      if (culturePicks.size) sentences.push(`Cultural significance: ${[...culturePicks].join(', ')}.`);

      if (languagePicks.size) sentences.push(`The host can communicate in ${[...languagePicks].join(', ')}.`);

      if (duration) sentences.push(`Typically takes ${duration}.`);
      if (access) sentences.push(`Access: ${access}.`);

      if (bestVisitPicks.size) sentences.push(`Best visited: ${[...bestVisitPicks].join('; ')}.`);

      if (tagPicks.size) sentences.push(`Tags: ${[...tagPicks].join(', ')}.`);

      document.getElementById('f-desc').value = sentences.join(' ');
    };

    document.getElementById('f-submit').onclick = async () => {
      const name = document.getElementById('f-name').value.trim();
      const msg = document.getElementById('f-msg');
      if (!name) {
        msg.textContent = 'Name is required \u2014 everything else can be filled in later.';
        msg.className = 'sc-msg error';
        return;
      }
      const categoryOtherDetails = {};
      catBlock.querySelectorAll('[data-other-detail-for]').forEach(inp => {
        const qkey = inp.getAttribute('data-other-detail-for');
        const val = inp.value.trim();
        if (val) categoryOtherDetails[qkey] = val;
      });
      const entry = {
        name,
        primaryType: document.getElementById('f-primary').value,
        type: document.getElementById('f-type').value,
        moo: document.getElementById('f-moo').value.trim(),
        area: document.getElementById('f-area').value.trim(),
        landscape: landscapeOtherDetailEl.value.trim(),
        landscapeSetting: [...landscapeSettingPicks],
        landscapeClimate: [...landscapeClimatePicks],
        landscapeWaterVegetation: [...landscapeWaterPicks],
        lat: document.getElementById('f-lat').value.trim(),
        lng: document.getElementById('f-lng').value.trim(),
        related: document.getElementById('f-related').value,
        duration: document.getElementById('f-duration').value,
        access: document.getElementById('f-access').value,
        tags: [...tagPicks].join(', '),
        categoryAttributes: Object.fromEntries(Object.entries(categoryPicks).map(([k, v]) => [k, [...v]])),
        categoryOtherDetails,
        culture: [...culturePicks],
        cultureOtherDetail: document.getElementById('f-culture-other-detail').value.trim(),
        languages: [...languagePicks],
        languagesOtherDetail: document.getElementById('f-language-other-detail').value.trim(),
        bestVisit: [...bestVisitPicks],
        hostName: document.getElementById('f-host-name').value.trim(),
        hostContact: document.getElementById('f-host-contact').value.trim(),
        donation: document.getElementById('f-donation').value,
        donationDetail: document.getElementById('f-donation-detail').value.trim(),
        description: document.getElementById('f-desc').value.trim(),
        notes: document.getElementById('f-notes').value.trim(),
        photosCollected,
        date: document.getElementById('f-date').value,
        timeScouted: document.getElementById('f-time').value,
        status
      };
      const submitBtn = document.getElementById('f-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';
      try {
        await saveEntryToSupabase(entry, session.user.id);
        msg.textContent = 'Saved.';
        msg.className = 'sc-msg';
        render(session);
        loadEntries();
      } catch (e) {
        msg.textContent = isOfflineError(e)
          ? 'Offline \u2014 can\u2019t save right now. Your entry was not recorded; try again once you\u2019re back online.'
          : 'Could not save \u2014 please try again.';
        msg.className = 'sc-msg error';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save Experience';
      }
    };

    renderListState('loading');
    renderMigrationBanner();
    loadEntries();
  }

  // ---------- One-time migration from the old localStorage prototype ----------

  function findLegacyLocalEntries() {
    const found = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(LEGACY_STORAGE_PREFIX + 'exp_')) {
        try {
          const parsed = JSON.parse(localStorage.getItem(k));
          found.push({ key: k, entry: parsed });
        } catch (e) { /* skip unreadable legacy entry */ }
      }
    }
    return found;
  }

  function renderMigrationBanner() {
    const el = document.getElementById('sc-migrate-banner');
    if (!el) return;
    const legacy = findLegacyLocalEntries();
    if (legacy.length === 0) { el.innerHTML = ''; return; }
    el.innerHTML = `
      <div class="sc-notice sc-notice-action">
        Found ${legacy.length} entr${legacy.length === 1 ? 'y' : 'ies'} saved on this device from before the shared database existed.
        <button class="sc-mini-btn" id="migrate-btn">Migrate to shared database</button>
      </div>
    `;
    document.getElementById('migrate-btn').onclick = async () => {
      const btn = document.getElementById('migrate-btn');
      btn.disabled = true;
      btn.textContent = 'Migrating...';
      let ok = 0, failed = 0;
      for (const { key, entry } of legacy) {
        try {
          await saveEntryToSupabase(entry, null);
          localStorage.removeItem(key);
          ok++;
        } catch (e) {
          failed++;
        }
      }
      el.innerHTML = `<div class="sc-notice">Migrated ${ok} entr${ok === 1 ? 'y' : 'ies'}.${failed ? ` ${failed} could not be migrated \u2014 left on this device, try again later.` : ''}</div>`;
      loadEntries();
    };
  }

  // ---------- Load + render the shared list ----------

  async function loadEntries() {
    const listEl = document.getElementById('sc-list');
    const countsEl = document.getElementById('sc-counts');
    const labelEl = document.getElementById('sc-list-label');
    let entries = [];
    try {
      const { data, error } = await sb
        .from('experience')
        .select('*, place(*), host(*), experience_attribute(*)')
        .order('date_scouted', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false });
      if (error) throw error;
      entries = (data || []).map(rowToEntry);
    } catch (e) {
      renderListState(isOfflineError(e) ? 'offline' : 'error');
      countsEl.innerHTML = '';
      return;
    }

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
        ${e.landscapeSetting && e.landscapeSetting.length ? `<div class="sc-entry-desc"><em>Setting:</em> ${esc(e.landscapeSetting.join(', '))}</div>` : ''}
        ${e.landscapeClimate && e.landscapeClimate.length ? `<div class="sc-entry-desc"><em>Elevation &amp; climate:</em> ${esc(e.landscapeClimate.join(', '))}</div>` : ''}
        ${e.landscapeWaterVegetation && e.landscapeWaterVegetation.length ? `<div class="sc-entry-desc"><em>Water &amp; vegetation:</em> ${esc(e.landscapeWaterVegetation.join(', '))}</div>` : ''}
        ${e.landscape ? `<div class="sc-entry-desc"><em>Landscape (other detail):</em> ${esc(e.landscape)}</div>` : ''}
        ${e.description ? `<div class="sc-entry-desc">${esc(e.description)}</div>` : ''}
        ${e.culture && e.culture.length ? `<div class="sc-entry-desc"><em>Cultural:</em> ${esc(e.culture.join(', '))}${e.cultureOtherDetail ? ` (${esc(e.cultureOtherDetail)})` : ''}</div>` : ''}
        ${e.languages && e.languages.length ? `<div class="sc-entry-desc"><em>Languages:</em> ${esc(e.languages.join(', '))}${e.languagesOtherDetail ? ` (${esc(e.languagesOtherDetail)})` : ''}</div>` : ''}
        ${e.categoryAttributes && Object.values(e.categoryAttributes).some(v => v.length) ? `<div class="sc-entry-desc">${Object.entries(e.categoryAttributes).filter(([k,v]) => v.length).map(([k,v]) => `<em>${esc(k)}:</em> ${esc(v.join(', '))}`).join(' &middot; ')}</div>` : ''}
        ${(e.hostName || e.hostContact) ? `<div class="sc-entry-loc">Host: ${esc([e.hostName, e.hostContact].filter(Boolean).join(' \u00b7 '))}</div>` : ''}
        ${e.donation && e.donation !== 'Not observed / none' ? `<div class="sc-entry-loc">Donation: ${esc(e.donation)}${e.donationDetail ? ` \u2014 ${esc(e.donationDetail)}` : ''}</div>` : ''}
        ${e.bestVisit && e.bestVisit.length ? `<div class="sc-entry-loc">Best visit: ${esc(e.bestVisit.join(', '))}</div>` : ''}
        ${e.tags ? `<div class="sc-entry-loc">Tags: ${esc(e.tags)}</div>` : ''}
        <div class="sc-entry-meta">
          <span>${esc(e.date || '')}${e.timeScouted ? ' ' + esc(e.timeScouted) : ''}</span>
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
        btn.disabled = true;
        try {
          const { error } = await sb.from('experience').update({ status: 'verified' }).eq('id', id);
          if (error) throw error;
          loadEntries();
        } catch (e) {
          btn.disabled = false;
        }
      };
    });
    listEl.querySelectorAll('[data-delete]').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.getAttribute('data-delete');
        btn.disabled = true;
        try {
          const { error } = await sb.from('experience').delete().eq('id', id);
          if (error) throw error;
          loadEntries();
        } catch (e) {
          btn.disabled = false;
        }
      };
    });
  }

  // ---------- Boot: decide login vs. app before rendering or fetching anything ----------

  let currentlyRendered = null; // 'login' | 'app' | null

  async function boot() {
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      currentlyRendered = 'app';
      render(session);
    } else {
      currentlyRendered = 'login';
      renderLogin();
    }
  }

  sb.auth.onAuthStateChange((event, session) => {
    if (session && currentlyRendered !== 'app') {
      currentlyRendered = 'app';
      render(session);
    } else if (!session && currentlyRendered !== 'login') {
      currentlyRendered = 'login';
      renderLogin();
    }
  });

  boot();
})();
