document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "left",
    hoverEnabled: false,
  });

  // Add event listener to detect when the toolbar is opened
  instances[0].el.addEventListener("click", function () {
    var ul = document.querySelector(".fixed-action-btn ul");
    // Toggle the visibility of the ul
    ul.classList.toggle("open");

    // Check if the toolbar is open
    if (instances[0].isOpen) {
      // Change the icon to menu_open
      document.querySelector(".fixed-action-btn i.material-icons").textContent =
        "menu_open";
    } else {
      // Change the icon back to menu
      document.querySelector(".fixed-action-btn i.material-icons").textContent =
        "menu";
    }
  });
});
