const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const copyButton = document.querySelector("[data-copy-email]");
const email = "mr.palashbharati@gmail.com";

const analyticsConfig = window.PORTFOLIO_CONFIG?.analytics;

if (
  analyticsConfig?.provider === "umami" &&
  analyticsConfig.websiteId?.trim() &&
  analyticsConfig.scriptUrl?.trim()
) {
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = analyticsConfig.scriptUrl.trim();
  analyticsScript.dataset.websiteId = analyticsConfig.websiteId.trim();

  if (analyticsConfig.domains?.length) {
    analyticsScript.dataset.domains = analyticsConfig.domains.join(",");
  }

  document.head.appendChild(analyticsScript);
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeMenu = () => {
  if (!menu || !menuButton) return;

  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menu?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) closeMenu();
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy email";
    }, 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const resumeConfig = window.PORTFOLIO_CONFIG?.resume;
const resumeFileId = resumeConfig?.driveFileId?.trim();

if (resumeFileId) {
  const encodedId = encodeURIComponent(resumeFileId);
  const driveUrl = `https://drive.google.com/file/d/${encodedId}/view`;
  const previewUrl = `https://drive.google.com/file/d/${encodedId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${encodedId}`;

  document.querySelectorAll("[data-resume-drive]").forEach((link) => {
    link.href = driveUrl;
  });

  document.querySelectorAll("[data-resume-download]").forEach((link) => {
    link.href = downloadUrl;
  });

  document.querySelectorAll("[data-resume-preview]").forEach((frame) => {
    frame.src = previewUrl;
  });

  document.querySelectorAll("[data-resume-filename]").forEach((item) => {
    item.textContent = resumeConfig.fileName || "Resume.pdf";
  });
}
