/* Sadiqora shared menu. Edit the lists below to change the menu on every page. */
(function () {
  var CIRCLE_URL = "https://chat.whatsapp.com/FEbFCvx9RINHQA2v5RyRa2";
  var CHAT_URL = "https://wa.me/2348148506614?text=Hello%20Abubakar%2C%20I%20found%20you%20through%20the%20Sadiqora%20website.";
  var MAIN = [
    { label: "Home", href: "index.html" },
    { label: "The Circle", href: "index.html#join", note: "Free" },
    { label: "Videos", href: "videos.html", sub: "Watch and learn" },
    { label: "About Abubakar", href: "index.html#about" }
  ];
  var SCHOOLS = [
    { label: "Exam Prep", sub: "WAEC, NECO, JAMB", href: "exam-prep.html" },
    { label: "Geoscience Hub", sub: "Geology and geophysics", soon: true },
    { label: "Research Desk", sub: "Data, GIS, project help", href: "research-desk.html" },
    { label: "Future Skills", sub: "Power skills, AI and data", href: "future-skills.html" }
  ];
  var page = (location.pathname.split("/").pop() || "index.html");
  if (page === "") page = "index.html";

  var css = "\n" +
    ".sq-btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border:1.5px solid #D5DBE6;border-radius:999px;background:transparent;color:#F7F4EC;font:600 15px Inter,system-ui,sans-serif;cursor:pointer}\n" +
    ".sq-btn:hover{border-color:#E3B34C;color:#E3B34C}\n" +
    ".sq-gold{display:inline-flex;align-items:center;min-height:44px;padding:0 20px;background:#E3B34C;border-radius:999px;color:#020B1C!important;font:600 15px Inter,system-ui,sans-serif;text-decoration:none}\n" +
    ".sq-gold:hover{background:#EDC565;color:#020B1C}\n" +
    ".sq-actions{display:flex;align-items:center;gap:10px}\n" +
    ".sq-scrim{position:fixed;inset:0;background:rgba(2,11,28,.6);opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s;z-index:998}\n" +
    ".sq-panel{position:fixed;top:0;left:0;bottom:0;width:340px;max-width:88vw;background:#020B1C;color:#F7F4EC;z-index:999;transform:translateX(-100%);visibility:hidden;transition:transform .28s ease,visibility .28s;display:flex;flex-direction:column;font-family:Inter,system-ui,sans-serif;overflow-y:auto;box-shadow:8px 0 32px rgba(0,0,0,.35)}\n" +
    ".sq-open .sq-scrim{opacity:1;visibility:visible}\n" +
    ".sq-open .sq-panel{transform:none;visibility:visible}\n" +
    ".sq-top{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #16263F}\n" +
    ".sq-brand{display:flex;align-items:center;gap:10px;color:#F7F4EC;text-decoration:none;font:700 16px 'Space Grotesk',sans-serif;letter-spacing:.04em}\n" +
    ".sq-brand img{width:38px;height:38px}\n" +
    ".sq-close{width:44px;height:44px;border:0;border-radius:50%;background:transparent;color:#F7F4EC;cursor:pointer;display:flex;align-items:center;justify-content:center}\n" +
    ".sq-close:hover{background:#16263F}\n" +
    ".sq-body{padding:14px 12px;flex:1}\n" +
    ".sq-h{margin:18px 12px 6px;color:#E3B34C;font:600 12px Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase}\n" +
    ".sq-link{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:48px;padding:8px 12px;border-radius:12px;color:#F7F4EC;text-decoration:none;font:600 17px Inter,sans-serif}\n" +
    ".sq-link small{display:block;color:#9AA7BD;font:400 13px Inter,sans-serif}\n" +
    ".sq-link:hover{background:#0E1D36;color:#F7F4EC}\n" +
    ".sq-link.sq-active{background:#13264A;box-shadow:inset 3px 0 0 #E3B34C}\n" +
    ".sq-link.sq-soon{color:#9AA7BD;cursor:default}\n" +
    ".sq-link.sq-soon:hover{background:transparent;color:#9AA7BD}\n" +
    ".sq-tag{flex:none;padding:2px 10px;border-radius:999px;font:600 11px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;background:#E3B34C;color:#020B1C}\n" +
    ".sq-tag.sq-s{background:#16263F;color:#9AA7BD}\n" +
    ".sq-foot{padding:16px 20px 22px;border-top:1px solid #16263F;display:flex;flex-direction:column;gap:12px}\n" +
    ".sq-foot .sq-gold{justify-content:center;min-height:50px}\n" +
    ".sq-soc{display:flex;gap:18px;justify-content:center;font:600 14px Inter,sans-serif}\n" +
    ".sq-soc a{color:#D5DBE6;text-decoration:none}.sq-soc a:hover{color:#E3B34C}\n" +
    "body.sq-lock{overflow:hidden}\n" +
    "@media (max-width:560px){header>div:first-child{flex-wrap:nowrap!important;gap:8px!important;padding-left:16px!important;padding-right:16px!important}header img[src*='sadiqora-mark']+div span{display:none}header img[src*='sadiqora-mark']{width:40px!important;height:40px!important}header img[src*='sadiqora-mark']+div{font-size:14px!important}.sq-gold{padding:0 14px;font-size:14px}.sq-btn{padding:0 12px}.sq-btn span{display:none}}\n" +
    "@media (prefers-reduced-motion:reduce){.sq-panel,.sq-scrim{transition:none}}\n";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function esc(s) { return s; }
  function item(it) {
    var active = it.href && it.href.split("#")[0] === page && it.href.indexOf("#") < 0 && !(it.label === "The Circle");
    if (it.soon) return '<span class="sq-link sq-soon"><span>' + it.label + '<small>' + it.sub + '</small></span><span class="sq-tag sq-s">Soon</span></span>';
    return '<a class="sq-link' + (active ? " sq-active" : "") + '" href="' + it.href + '"' + (active ? ' aria-current="page"' : "") + '><span>' + it.label + (it.sub ? '<small>' + it.sub + '</small>' : "") + '</span>' + (it.note ? '<span class="sq-tag">' + it.note + '</span>' : "") + '</a>';
  }
  var html =
    '<div class="sq-scrim" data-sq-close></div>' +
    '<nav class="sq-panel" id="sq-panel" aria-label="Main menu" aria-hidden="true">' +
    '<div class="sq-top"><a class="sq-brand" href="index.html"><img src="images/sadiqora-mark.png" alt=""><span>SADIQORA</span></a>' +
    '<button class="sq-close" type="button" aria-label="Close menu" data-sq-close><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l14 14M18 4L4 18"/></svg></button></div>' +
    '<div class="sq-body">' + MAIN.map(item).join("") +
    '<div class="sq-h">Our schools</div>' + SCHOOLS.map(item).join("") + '</div>' +
    '<div class="sq-foot"><a class="sq-gold" href="' + CHAT_URL + '">Chat on WhatsApp</a>' +
    '<div class="sq-soc"><a href="https://linkedin.com/in/absadiq">LinkedIn</a><a href="https://youtube.com/@sadiqora">YouTube</a><a href="mailto:sadiqorahelpdesk@gmail.com">Email</a></div></div>' +
    '</nav>';
  var wrap = document.createElement("div"); wrap.id = "sq-menu"; wrap.innerHTML = html; document.body.appendChild(wrap);

  var slot = document.querySelector("[data-sq-nav]");
  if (slot) {
    slot.className = "sq-actions";
    slot.innerHTML = '<a class="sq-gold" href="' + CIRCLE_URL + '">Join the Circle</a>' +
      '<button class="sq-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="sq-panel" data-sq-open><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 5h14M3 10h14M3 15h14"/></svg><span>Menu</span></button>';
  }
  var openBtn = document.querySelector("[data-sq-open]"), panel = document.getElementById("sq-panel"), root = document.documentElement;
  function setOpen(o) {
    document.body.classList.toggle("sq-open", o); document.body.classList.toggle("sq-lock", o);
    panel.setAttribute("aria-hidden", o ? "false" : "true");
    if (openBtn) openBtn.setAttribute("aria-expanded", o ? "true" : "false");
    if (o) { var f = panel.querySelector("a,button"); if (f) f.focus(); } else if (openBtn) openBtn.focus();
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-sq-open]")) setOpen(true);
    else if (e.target.closest("[data-sq-close]")) setOpen(false);
    else if (document.body.classList.contains("sq-open") && e.target.closest("#sq-panel a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (!document.body.classList.contains("sq-open")) return;
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Tab") {
      var f = panel.querySelectorAll("a,button"), a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });
})();
