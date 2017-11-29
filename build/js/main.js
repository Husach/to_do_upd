window.onload = function () {
  
  var btnOpen = document.querySelector("#menu-open"),
      btnClosed = document.querySelector("#menu-closed"),
      menu = document.querySelector("#main-nav"),
      toDo = document.querySelector("#text-to"),
      menuToggle = document.querySelector("#menu-toggle"),
      mainSearch = document.querySelector("#main-search"),
      Magnify = document.querySelector("#page-header__magnify"),
      formOk = document.querySelector("#form__ok"),
      formClosed = document.querySelector("#form__closed"),
      headerSearch = document.querySelector("#header__search");
  

  window.addEventListener("resize", function () {
    if (window.innerWidth < 1440) {
      btnOpen.addEventListener("click", resizeMenu, false);
      btnClosed.addEventListener("click", resizeMenu, false);

      if (window.innerWidth > 1023) {
        btnOpen.addEventListener("click", menuTablet, false);
        btnClosed.addEventListener("click", menuTablet, false);
      }
    }

    if (window.innerWidth < 1024) {
      Magnify.addEventListener("click", mobileSearch, false);
    }
  });

  mainSearch.addEventListener("focus", search, false);
  mainSearch.addEventListener("blur", search, false);

  headerSearch.addEventListener("focus", columnSearch, false);
  headerSearch.addEventListener("blur", columnSearch, false);

  function resizeMenu() {
    menu.classList.toggle("main-nav--hidden");  
    btnOpen.classList.toggle("menu-toggle__img--hidden");
    btnClosed.classList.toggle("menu-toggle__img--hidden");
  } 

  function menuTablet() {
    toDo.classList.toggle("hidden");
    menuToggle.classList.toggle("menu-toggle--big");
  }

  function search() {
    Magnify.classList.toggle("page-header__magnify--hidden");
  }

  function columnSearch() {
    formOk.classList.toggle("form__ok--hidden");
    formClosed.classList.toggle("form__closed--hidden");
  } 

  function mobileSearch() {
    mainSearch.classList.toggle("form__search--header");
    mainSearch.classList.toggle("form__search--visible");
  } 
}

