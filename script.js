const featuresDesktop = document.querySelector(".header__nav-link_features");
const featuresArrowDown = document.querySelector(".header__nav-link_features > .header__dropdown-icon-down");
const featuresArrowUp = document.querySelector(".header__nav-link_features > .header__dropdown-icon-up");
const featuresDesktopWrapper = document.getElementById("dropdownFeatures");
const companyDesktop = document.querySelector(".header__nav-link_company");
const companyArrowDown = document.querySelector(".header__nav-link_company > .header__dropdown-icon-down");
const companyArrowUp = document.querySelector(".header__nav-link_company > .header__dropdown-icon-up");
const companyDesktopWrapper = document.getElementById("dropdownCompany");
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector(".header__sidebar-button");
const sidebarCloseBtn = document.querySelector(".sidebar__close-button");
const sidebarBg = document.querySelector(".sidebar__bg");
const sidebarNavigation = document.querySelector(".sidebar__navigation");
const sidebarFeatures = document.querySelector(".sidebar__nav-link_features");
const sidebarFeaturesDown = document.querySelector(".sidebar__nav-link_features > .sidebar__dropdown-icon-down");
const sidebarFeaturesUp = document.querySelector(".sidebar__nav-link_features > .sidebar__dropdown-icon-up");
const sidebarFeaturesDropdown = document.querySelector(".sidebar__dropdown-cont_features");
const sidebarCompany = document.querySelector(".sidebar__nav-link_company");
const sidebarCompanyDown = document.querySelector(".sidebar__nav-link_company > .sidebar__dropdown-icon-down");
const sidebarCompanyUp = document.querySelector(".sidebar__nav-link_company > .sidebar__dropdown-icon-up");
const sidebarCompanyDropdown = document.querySelector(".sidebar__dropdown-cont_company");
const sidebarDropdownList = document.querySelectorAll(".sidebar__dropdown-list");

window.addEventListener("click", (e) => clickOutside(e));
featuresDesktop.addEventListener("click", (e) => featuresDesktopDropdown(e));
companyDesktop.addEventListener("click", (e) => companyDesktopDropdown(e));
sidebarOpenBtn.addEventListener("click", (e) => sidebarOpen(e));
sidebarCloseBtn.addEventListener("click", (e) => sidebarClose(e));
sidebarBg.addEventListener("click", (e) => sidebarClose(e));
sidebarFeatures.addEventListener("click", (e) => sidebarFeaturesDropdownFunc(e));
sidebarCompany.addEventListener("click", (e) => sidebarCompanyDropdownFunc(e));

function clickOutside(e) {
  if (e.target !== featuresDesktopWrapper && e.target !== featuresDesktop) {
    featuresDesktopWrapper.classList.remove("open");
    changeArrow();
  }

  if (e.target !== companyDesktopWrapper && e.target !== companyDesktop) {
    companyDesktopWrapper.classList.remove("open");
    changeArrow();
  }
}

function changeArrow() {
  if (featuresDesktopWrapper.className.includes("open")) {
    featuresArrowDown.style.display = "none";
    featuresArrowUp.style.display = "inline-block";
  } else {
    featuresArrowDown.style.display = "inline-block";
    featuresArrowUp.style.display = "none";
  }

  if (companyDesktopWrapper.className.includes("open")) {
    companyArrowDown.style.display = "none";
    companyArrowUp.style.display = "inline-block";
  } else {
    companyArrowDown.style.display = "inline-block";
    companyArrowUp.style.display = "none";
  }
}

function featuresDesktopDropdown(e) {
  e.preventDefault();

  featuresDesktopWrapper.classList.toggle("open");

  changeArrow();
}

function companyDesktopDropdown(e) {
  e.preventDefault();

  companyDesktopWrapper.classList.toggle("open");

  changeArrow();
}

function sidebarOpen(e) {
  e.preventDefault();

  sidebarBg.style.animation = "sidebarBg 1s";
  sidebarNavigation.style.animation = "sidebarSlide 1s";
  document.body.style.overflow = "hidden";

  sidebar.classList.add("open");
}

function sidebarClose(e) {
  e.preventDefault();

  sidebarBg.style.animation = "sidebarBgClose 1s";
  sidebarNavigation.style.animation = "sidebarSlideClose 1s";
  document.body.style.overflow = "initial";

  setTimeout(() => {
    sidebar.classList.remove("open");
  }, 800);
}

function sidebarFeaturesDropdownFunc(e) {
  e.preventDefault();

  if (!sidebarFeaturesDropdown.className.includes("open")) {
    sidebarFeaturesDropdown.style.animation = "dropdownAnimation 1s";
    sidebarFeaturesDown.style.display = "none";
    sidebarFeaturesUp.style.display = "inline-block";

    for (let list of sidebarDropdownList) {
      list.style.animation = "dropdownListAnimation 1s";
    }

    sidebarFeaturesDropdown.classList.add("open");
  } else {
    sidebarFeaturesDropdown.style.animation = "dropdownAnimationClose 1s";
    sidebarFeaturesDown.style.display = "inline-block";
    sidebarFeaturesUp.style.display = "none";

    for (let list of sidebarDropdownList) {
      list.style.animation = "dropdownListAnimationClose 1s";
    }

    setTimeout(() => {
      sidebarFeaturesDropdown.classList.remove("open");
    }, 800);
  }
}

function sidebarCompanyDropdownFunc(e) {
  e.preventDefault();

  if (!sidebarCompanyDropdown.className.includes("open")) {
    sidebarCompanyDropdown.style.animation = "dropdownAnimationCompany 1s";
    sidebarCompanyDown.style.display = "none";
    sidebarCompanyUp.style.display = "inline-block";

    for (let list of sidebarDropdownList) {
      list.style.animation = "dropdownListAnimation 1s";
    }

    sidebarCompanyDropdown.classList.add("open");
  } else {
    sidebarCompanyDropdown.style.animation = "dropdownAnimationCompanyClose 1s";
    sidebarCompanyDown.style.display = "inline-block";
    sidebarCompanyUp.style.display = "none";

    for (let list of sidebarDropdownList) {
      list.style.animation = "dropdownListAnimationClose 1s";
    }

    setTimeout(() => {
      sidebarCompanyDropdown.classList.remove("open");
    }, 800);
  }
}
