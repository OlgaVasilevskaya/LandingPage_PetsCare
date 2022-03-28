function onClick(element) {
  const id = element.id;
  const clickedElement = document.getElementById(id);
  const currentActiveElement = document.getElementsByClassName("active-tab");

  if (currentActiveElement.length) {
    currentActiveElement[0].classList.remove("active-tab");
  }

  clickedElement.classList.add("active-tab");
};