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
const sidebarDropdownListFeatures = document.querySelectorAll(".sidebar__dropdown-list_features");
const sidebarDropdownListCompany = document.querySelectorAll(".sidebar__dropdown-list_company");

window.addEventListener("click", (e) => clickOutside(e));
featuresDesktop.addEventListener("click", (e) => desktopDropdown(e, featuresDesktopWrapper));
companyDesktop.addEventListener("click", (e) => desktopDropdown(e, companyDesktopWrapper));
sidebarOpenBtn.addEventListener("click", (e) => sidebarOpen(e));
sidebarCloseBtn.addEventListener("click", (e) => sidebarClose(e));
sidebarBg.addEventListener("click", (e) => sidebarClose(e));
sidebarFeatures.addEventListener("click", (e) => sidebarDropdownFunc(e, sidebarFeaturesDropdown, sidebarFeaturesUp, sidebarFeaturesDown, sidebarDropdownListFeatures, "Features"));
sidebarCompany.addEventListener("click", (e) => sidebarDropdownFunc(e, sidebarCompanyDropdown, sidebarCompanyUp, sidebarCompanyDown, sidebarDropdownListCompany, "Company"));

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

function desktopDropdown(e, wrapper) {
  e.preventDefault();

  wrapper.classList.toggle("open");

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

function sidebarDropdownFunc(e, dropdownCont, arrowUp, arrowDown, dropdownList, type) {
  e.preventDefault();

  if (!dropdownCont.className.includes("open")) {
    dropdownCont.style.animation = `dropdownAnimation${type} 1s`;
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline-block";

    for (let list of dropdownList) {
      list.style.animation = "dropdownListAnimation 1s";
    }

    dropdownCont.classList.add("open");
  } else {
    dropdownCont.style.animation = `dropdownAnimation${type}Close 1s`;
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";

    for (let list of dropdownList) {
      list.style.animation = "dropdownListAnimationClose 1s";
    }

    setTimeout(() => {
      dropdownCont.classList.remove("open");
    }, 800);
  }
}
