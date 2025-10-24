(function () {
  "use strict";

  //Button for show menu
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  //Button for hide menu
  const toggleButtonHidden = document.getElementsByClassName(
    "toggle-button-hidden"
  )[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  //Show menu items
  toggleButton.addEventListener("click", () => {
    //Show the nav links
    navbarLinks.classList.toggle("active");
    //Hide the 'show' button
    toggleButton.classList.toggle("active");
    //Show the 'hide' button
    toggleButtonHidden.classList.toggle("active");
  });

  //Hide menu items
  toggleButtonHidden.addEventListener("click", () => {
    //Hide the 'hide' button
    toggleButtonHidden.classList.toggle("active");
    //Show the 'show' button
    toggleButton.classList.toggle("active");
    //Hide nav links
    navbarLinks.classList.toggle("active");
  });

  //Button to show details
  const toggleContentButton =
    document.getElementsByClassName("content-button")[0];
  //Button to hide details
  const toggleContentButtonHidden = document.getElementsByClassName(
    "content-button-hidden"
  )[0];
  const contentLinks = document.getElementsByClassName("details-div")[0];

  //Show content links
  toggleContentButton.addEventListener("click", () => {
    //Show the 'hide' button
    toggleContentButtonHidden.classList.toggle("active");
    //Hide the 'show' button
    toggleContentButton.classList.toggle("active");
    //Show content
    contentLinks.classList.toggle("active");
  });

  //Hide content links
  toggleContentButtonHidden.addEventListener("click", () => {
    //Hide the 'hide' button
    toggleContentButtonHidden.classList.toggle("active");
    //Show the 'show' button
    toggleContentButton.classList.toggle("active");
    //Hide content
    contentLinks.classList.toggle("active");
  });
})();
