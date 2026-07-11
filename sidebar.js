/* ============================================================
   ManuscriptZero — Shared Sidebar Drawer
   Include on any page with: <script src="sidebar.js" defer></script>
   Requires a trigger element with class "nav-logo" already in the DOM
   (e.g. the "V." mark in top-nav). This script:
     1. Injects the drawer markup + styles
     2. Rewires .nav-logo to open the drawer instead of navigating
     3. Leaves the device/browser back button untouched
   ============================================================ */
(function () {
  if (document.getElementById('mz-sidebar')) return;

  var css = `
    .mz-sidebar-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);z-index:299;opacity:0;pointer-events:none;transition:opacity .3s ease}
    .mz-sidebar-overlay.mz-open{opacity:1;pointer-events:all}
    .mz-sidebar{position:fixed;top:0;left:0;bottom:0;width:min(78vw,290px);background:#0f0f10;border-right:1px solid rgba(212,175,55,.15);z-index:300;transform:translateX(-100%);transition:transform .35s cubic-bezier(.22,.61,.36,1);display:flex;flex-direction:column}
    .mz-sidebar.mz-open{transform:translateX(0)}
    body.light .mz-sidebar{background:#f5f0e8;border-right-color:rgba(184,150,74,.25)}
    .mz-sidebar-header{display:flex;align-items:center;justify-content:space-between;padding:1.4rem 1.5rem;border-bottom:1px solid rgba(255,255,255,.06)}
    body.light .mz-sidebar-header{border-bottom-color:rgba(0,0,0,.08)}
    .mz-sidebar-mark{font-family:'Playfair Display',serif;font-size:1.6rem;color:#d4af37}
    .mz-sidebar-close{background:none;border:none;color:#666;font-size:22px;line-height:1;cursor:pointer;min-width:44px;min-height:44px;-webkit-tap-highlight-color:transparent;transition:color .2s}
    .mz-sidebar-close:hover{color:#d4af37}
    .mz-sidebar-nav{display:flex;flex-direction:column;padding:.5rem 0;flex:1}
    .mz-sidebar-nav a{display:flex;align-items:center;padding:1.05rem 1.5rem;font-family:'Montserrat',sans-serif;font-weight:300;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#888;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.04);position:relative;transition:color .2s,background .2s;-webkit-tap-highlight-color:transparent}
    body.light .mz-sidebar-nav a{color:#666;border-bottom-color:rgba(0,0,0,.06)}
    .mz-sidebar-nav a:hover{color:#d4af37;background:rgba(212,175,55,.04)}
    .mz-sidebar-nav a.mz-active{color:#d4af37}
    .mz-sidebar-nav a.mz-active::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:#d4af37}
    .mz-sidebar-footer{padding:1.25rem 1.5rem;font-family:'Montserrat',sans-serif;font-weight:300;font-size:8px;letter-spacing:.3em;text-transform:uppercase;color:#333}
    body.light .mz-sidebar-footer{color:#bbb}
    .nav-logo{cursor:pointer}
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var wrap = document.createElement('div');
  wrap.innerHTML =
    '<div id="mz-sidebar-overlay" class="mz-sidebar-overlay"></div>' +
    '<aside id="mz-sidebar" class="mz-sidebar" aria-hidden="true">' +
      '<div class="mz-sidebar-header">' +
        '<span class="mz-sidebar-mark">V.</span>' +
        '<button class="mz-sidebar-close" aria-label="Close menu">&times;</button>' +
      '</div>' +
      '<nav class="mz-sidebar-nav">' +
        '<a href="my-reading.html" data-page="my-reading.html">My Reading</a>' +
        '<a href="gallery.html" data-page="gallery.html">The Archive</a>' +
        '<a href="settings.html" data-page="settings.html">Settings</a>' +
        '<a href="colophon.html" data-page="colophon.html">Colophon</a>' +
        '<a href="terms.html" data-page="terms.html">Terms &amp; Conditions</a>' +
        '<a href="copyright.html" data-page="copyright.html">Copyright</a>' +
      '</nav>' +
      '<div class="mz-sidebar-footer">Manuscript Zero</div>' +
    '</aside>';
  while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

  var overlay = document.getElementById('mz-sidebar-overlay');
  var sidebar = document.getElementById('mz-sidebar');
  var closeBtn = sidebar.querySelector('.mz-sidebar-close');

  function openSidebar() {
    overlay.classList.add('mz-open');
    sidebar.classList.add('mz-open');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    overlay.classList.remove('mz-open');
    sidebar.classList.remove('mz-open');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  window.mzOpenSidebar = openSidebar;
  window.mzCloseSidebar = closeSidebar;

  overlay.addEventListener('click', closeSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  var here = location.pathname.split('/').pop() || 'gallery.html';
  Array.prototype.forEach.call(sidebar.querySelectorAll('a'), function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('mz-active');
  });

  Array.prototype.forEach.call(document.querySelectorAll('.nav-logo'), function (btn) {
    btn.removeAttribute('onclick');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openSidebar();
    });
  });
})();

