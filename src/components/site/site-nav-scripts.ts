export function initSiteNav() {
  if (typeof window === "undefined") return;

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const isExpanded = !mobileMenu.classList.contains("hidden");
      mobileMenuButton.setAttribute("aria-expanded", String(isExpanded));
    });
  }

  const floatingNavbar = document.getElementById("floating-navbar");
  const searchBarTop = document.getElementById("search-bar-top");
  const searchBarFloating = document.getElementById("search-bar-floating");
  const regularNavTop = document.getElementById("regular-nav-top");
  const regularNavFloating = document.getElementById("regular-nav-floating");
  const searchButtonTop = document.getElementById("search-button-top");
  const searchButtonFloating = document.getElementById("search-button-floating");
  const searchCloseTop = document.getElementById("search-close-top");
  const searchCloseFloating = document.getElementById("search-close-floating");
  const searchInputTop = document.getElementById("search-input-top") as HTMLInputElement | null;
  const searchInputFloating = document.getElementById("search-input-floating") as HTMLInputElement | null;

  let scrollTimeout: ReturnType<typeof setTimeout>;
  let isScrolling = false;

  function hideSearchBar(type: "top" | "floating") {
    if (type === "top" && searchBarTop && regularNavTop) {
      searchBarTop.classList.remove("opacity-100", "visible", "translate-y-0");
      searchBarTop.classList.add("opacity-0", "invisible", "-translate-y-3");
      regularNavTop.classList.remove("opacity-0", "invisible", "translate-y-3");
      regularNavTop.classList.add("opacity-100", "visible", "translate-y-0");
      if (searchInputTop) searchInputTop.value = "";
    } else if (type === "floating" && searchBarFloating && regularNavFloating) {
      searchBarFloating.classList.remove("opacity-100", "visible", "translate-y-0");
      searchBarFloating.classList.add("opacity-0", "invisible", "-translate-y-3");
      regularNavFloating.classList.remove("opacity-0", "invisible", "translate-y-3");
      regularNavFloating.classList.add("opacity-100", "visible", "translate-y-0");
      if (searchInputFloating) searchInputFloating.value = "";
    }
  }

  function showSearchBar(type: "top" | "floating") {
    if (isScrolling) return;
    if (type === "top" && searchBarTop && regularNavTop) {
      searchBarTop.classList.remove("opacity-0", "invisible", "-translate-y-3");
      searchBarTop.classList.add("opacity-100", "visible", "translate-y-0");
      regularNavTop.classList.remove("opacity-100", "visible", "translate-y-0");
      regularNavTop.classList.add("opacity-0", "invisible", "translate-y-3");
      setTimeout(() => searchInputTop?.focus(), 100);
    } else if (type === "floating" && searchBarFloating && regularNavFloating) {
      searchBarFloating.classList.remove("opacity-0", "invisible", "-translate-y-3");
      searchBarFloating.classList.add("opacity-100", "visible", "translate-y-0");
      regularNavFloating.classList.remove("opacity-100", "visible", "translate-y-0");
      regularNavFloating.classList.add("opacity-0", "invisible", "translate-y-3");
      setTimeout(() => searchInputFloating?.focus(), 100);
    }
  }

  function handleScroll() {
    const scrollPosition = window.scrollY;
    isScrolling = true;
    clearTimeout(scrollTimeout);

    if (searchBarTop?.classList.contains("opacity-100")) hideSearchBar("top");
    if (searchBarFloating?.classList.contains("opacity-100")) hideSearchBar("floating");

    if (floatingNavbar) {
      if (scrollPosition > 300) {
        floatingNavbar.classList.remove("-translate-y-full", "opacity-0");
        floatingNavbar.classList.add("translate-y-0", "opacity-100");
      } else {
        floatingNavbar.classList.remove("translate-y-0", "opacity-100");
        floatingNavbar.classList.add("-translate-y-full", "opacity-0");
      }
    }

    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 150);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  searchButtonTop?.addEventListener("click", () => showSearchBar("top"));
  searchButtonFloating?.addEventListener("click", () => showSearchBar("floating"));
  searchCloseTop?.addEventListener("click", () => hideSearchBar("top"));
  searchCloseFloating?.addEventListener("click", () => hideSearchBar("floating"));

  searchBarTop?.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    hideSearchBar("top");
  });
  searchBarFloating?.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    hideSearchBar("floating");
  });
}
