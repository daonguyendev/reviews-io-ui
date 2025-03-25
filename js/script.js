let isOpen = false;

function openOrCloseMenu() {
  let mbMenuItems = document.getElementsByClassName("mb-menu-item");
  console.log(mbMenuItems);
  console.log("isOpen 1: " + isOpen);

  if (isOpen == true) {
    for (let i = 0; i < mbMenuItems.length; i++) {
      mbMenuItems[i].style.display = "none";
    }
    isOpen = false;
  } else {
    for (let i = 0; i < mbMenuItems.length; i++) {
      mbMenuItems[i].style.display = "block";
    }
    isOpen = true;
  }
  
}
