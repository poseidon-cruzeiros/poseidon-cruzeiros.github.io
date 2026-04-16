(function () {
  function getRootPrefix() {
    const path = window.location.pathname.replace(/\\/g, "/");
    const segments = path.split("/").filter(Boolean);
    const endsWithFile = segments.length > 0 && /\.[a-z0-9]+$/i.test(segments[segments.length - 1]);
    const depth = Math.max(0, segments.length - (endsWithFile ? 1 : 0));

    if (depth === 0) {
      return ".";
    }

    return new Array(depth).fill("..").join("/");
  }

  function normalizePath(pathname) {
    return pathname.replace(/index\.html$/i, "").replace(/\/+$/, "");
  }

  function setRootLinks(container, rootPrefix) {
    container.querySelectorAll("[data-root-href]").forEach((link) => {
      const target = link.getAttribute("data-root-href") || "";
      link.setAttribute("href", target ? rootPrefix + "/" + target : rootPrefix + "/");
    });

    container.querySelectorAll("[data-home-section]").forEach((link) => {
      const sectionId = link.getAttribute("data-home-section");
      link.setAttribute("href", rootPrefix + "/#" + sectionId);
    });
  }

  function setActiveCompany(container) {
    const currentPath = normalizePath(window.location.pathname);

    container.querySelectorAll("[data-company-id]").forEach((link) => {
      const companyId = link.getAttribute("data-company-id");
      if (currentPath.indexOf("/companhias/" + companyId) !== -1) {
        link.classList.add("is-active");
      }
    });
  }

  function initDropdowns(container) {
    const items = Array.from(container.querySelectorAll(".site-header__item"));
    const overlay = container.querySelector("#siteHeaderOverlay");

    function closeAll() {
      items.forEach((item) => {
        item.classList.remove("is-open");
        const button = item.querySelector(".site-header__button");
        if (button) {
          button.setAttribute("aria-expanded", "false");
        }
      });

      if (overlay) {
        overlay.classList.remove("is-active");
      }
    }

    items.forEach((item) => {
      const button = item.querySelector(".site-header__button");
      if (!button) {
        return;
      }

      button.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = item.classList.contains("is-open");
        closeAll();

        if (!isOpen) {
          item.classList.add("is-open");
          button.setAttribute("aria-expanded", "true");
          if (overlay) {
            overlay.classList.add("is-active");
          }
        }
      });
    });

    if (overlay) {
      overlay.addEventListener("click", closeAll);
    }

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".site-header")) {
        closeAll();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAll();
      }
    });
  }

  function initMobileMenu(container) {
    const hamburger = container.querySelector("#siteHeaderHamburger");
    const mobileMenu = container.querySelector("#siteHeaderMobileMenu");

    if (!hamburger || !mobileMenu) {
      return;
    }

    function setOpenState(isOpen) {
      mobileMenu.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.innerHTML = isOpen ? "&times;" : "&#9776;";
    }

    hamburger.addEventListener("click", function () {
      setOpenState(!mobileMenu.classList.contains("is-open"));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        setOpenState(false);
      });
    });
  }

  async function loadHeader() {
    const host = document.getElementById("site-header");
    if (!host) {
      return;
    }

    const rootPrefix = getRootPrefix();
    const response = await fetch(rootPrefix + "/shared/header.html");
    if (!response.ok) {
      throw new Error("Falha ao carregar o header compartilhado.");
    }

    host.innerHTML = await response.text();
    setRootLinks(host, rootPrefix);
    setActiveCompany(host);
    initDropdowns(host);
    initMobileMenu(host);
    window.dispatchEvent(new CustomEvent("site-header-ready"));
  }

  loadHeader().catch(function (error) {
    console.error(error);
  });
})();
