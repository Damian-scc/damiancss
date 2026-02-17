(() => {
  const pageEls = Array.from(document.querySelectorAll(".page[data-page]"));
  const navEls = Array.from(document.querySelectorAll("button[data-page], a[data-page]"));
  const navItems = Array.from(document.querySelectorAll(".nav__item[data-page]"));
  const badgeEl = document.querySelector("[data-badge]");

  const knownPages = new Set(pageEls.map((el) => el.dataset.page));

  function normalizePage(page) {
    const p = String(page || "").replace(/^#/, "").trim().toLowerCase();
    return knownPages.has(p) ? p : "home";
  }

  function setActivePage(page, opts = { updateHash: true }) {
    const next = normalizePage(page);

    for (const el of pageEls) {
      el.classList.toggle("is-active", el.dataset.page === next);
    }

    for (const btn of navItems) {
      btn.classList.toggle("is-active", btn.dataset.page === next);
    }

    const label = next.charAt(0).toUpperCase() + next.slice(1);
    document.title = `FakeBook - ${label}`;

    if (opts.updateHash) {
      // Keep URLs shareable without reloading.
      history.replaceState(null, "", `#${next}`);
    }

    // Small "demo realism": visiting notifications clears the badge.
    if (next === "notifications" && badgeEl) {
      badgeEl.textContent = "0";
      badgeEl.style.display = "none";
    }
  }

  function onNavActivate(ev) {
    const target = ev.target.closest("button[data-page], a[data-page]");
    if (!target) return;

    const page = target.dataset.page;
    if (!knownPages.has(page)) return;

    // Prevent <a href="#..."> default jump (we handle via history).
    if (target.tagName === "A") ev.preventDefault();

    setActivePage(page, { updateHash: true });
  }

  for (const el of navEls) {
    el.addEventListener("click", onNavActivate);
  }

  // Like / join / accept interactions
  document.addEventListener("click", (ev) => {
    const likeBtn = ev.target.closest(".js-like");
    if (likeBtn) {
      const pressed = likeBtn.getAttribute("aria-pressed") === "true";
      const count = Number(likeBtn.dataset.count || "0");
      const nextCount = pressed ? Math.max(0, count - 1) : count + 1;

      likeBtn.setAttribute("aria-pressed", pressed ? "false" : "true");
      likeBtn.dataset.count = String(nextCount);

      const countEl = likeBtn.querySelector(".action__count");
      if (countEl) countEl.textContent = String(nextCount);
      return;
    }

    const joinBtn = ev.target.closest(".js-join");
    if (joinBtn) {
      joinBtn.textContent = "Joined";
      joinBtn.disabled = true;
      joinBtn.style.opacity = "0.7";
      return;
    }

    const acceptBtn = ev.target.closest(".js-accept");
    if (acceptBtn) {
      acceptBtn.textContent = "Confirmed";
      acceptBtn.disabled = true;
      acceptBtn.style.opacity = "0.7";
    }
  });

  // Initial route from URL hash
  const initial = normalizePage(location.hash);
  setActivePage(initial, { updateHash: false });

  window.addEventListener("hashchange", () => {
    setActivePage(location.hash, { updateHash: false });
  });
})();
