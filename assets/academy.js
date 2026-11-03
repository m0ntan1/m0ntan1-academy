// MØNTAN1 Academy :: shared behavior
// Progress lives in localStorage under "m1a-progress" as an array of section ids.
// The certificate is self-issued on the honor system: no server, no tracking.
// "m1a-completed" keeps the date the twelfth section was first marked, so a
// reprinted certificate keeps its original date; "m1a-cert-name" remembers
// the name for reprints.

(function () {
  const KEY = 'm1a-progress', DONE_KEY = 'm1a-completed', NAME_KEY = 'm1a-cert-name';
  const SECTIONS = Array.from({ length: 12 }, (_, i) => 'section-' + String(i + 1).padStart(2, '0'));

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode: progress just won't persist */ } }
  function load() {
    try { const v = JSON.parse(get(KEY)); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  function save(list) { set(KEY, JSON.stringify(list)); }
  function today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  window.M1A = {
    done(id) { return load().includes(id); },
    complete(id) {
      const list = load();
      if (!list.includes(id)) { list.push(id); save(list); }
      M1A.stampCompletion();
    },
    count() { const l = load(); return SECTIONS.filter(id => l.includes(id)).length; },
    finished() { return M1A.count() >= 12; },
    stampCompletion() { if (M1A.finished() && !get(DONE_KEY)) set(DONE_KEY, today()); },
    completedOn() { return get(DONE_KEY) || today(); },
  };
  M1A.stampCompletion();   // learners who finished before the date was recorded

  // Mark-complete button on lesson pages: <button data-complete="section-01">
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-complete]');
    if (btn) {
      const id = btn.getAttribute('data-complete');
      const doneState = () => {
        btn.classList.add('done');
        btn.textContent = 'Section complete';
      };
      if (M1A.done(id)) doneState();
      btn.addEventListener('click', () => { M1A.complete(id); doneState(); refreshClaim(); });
    }

    // Index rows: <a class="section-row" data-section="section-01"> get a DONE stamp
    document.querySelectorAll('[data-section]').forEach(row => {
      if (M1A.done(row.getAttribute('data-section'))) {
        const st = row.querySelector('.st');
        if (st) { st.textContent = 'Complete'; st.classList.add('done'); }
      }
    });

    // Index progress readout: <span id="m1a-count">
    const count = document.getElementById('m1a-count');
    if (count) count.textContent = M1A.count() + ' / 12';

    // Certificate (section 12): unlocks at 12/12, live, then issues on the spot.
    const claim = document.getElementById('claim');
    function refreshClaim() {
      if (!claim) return;
      const n = M1A.count(), open = n >= 12;
      claim.classList.toggle('unlocked', open);
      document.getElementById('claim-btn').disabled = !open;
      document.getElementById('claim-status').textContent =
        open ? '' : n + ' / 12 sections complete :: unlocks at 12';
    }
    if (claim) {
      const form = document.getElementById('claim-form');
      const nameIn = document.getElementById('claim-name');
      nameIn.value = get(NAME_KEY) || '';
      refreshClaim();
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!M1A.finished()) return;
        const name = nameIn.value.trim().replace(/\s+/g, ' ');
        if (!name) return;
        set(NAME_KEY, name);
        const q = new URLSearchParams({ name, date: M1A.completedOn() });
        window.location.href = form.getAttribute('data-cert') + '?' + q.toString();
      });
    }

    // Scroll reveals
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  });
})();
