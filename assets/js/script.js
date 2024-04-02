// --------- Floating action button navbar --------- //
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
// --------------------------------------------------- //

// --------- Logic to check for current page --------- //
// Get the current page URL
var currentPageURL = window.location.href;

// Extract the page name from the URL
var pageName = currentPageURL.substring(currentPageURL.lastIndexOf("/") + 1);

// Remove the .html extension
pageName = pageName.replace(".html", "");

// Capitalize the first letter of the page name
pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

// Set the page title dynamically
document.getElementById("page-title-lines").innerText = pageName;
// --------------------------------------------------- //

// --------- Logic for Day.js --------- //
// Function to get the current date and time
async function getCurrentDateTime() {
  try {
    // Make a GET request to a service that provides the current date and time
    const response = await axios.get("https://worldtimeapi.org/api/ip");

    // Extract the date and time from the response
    const { datetime } = response.data;

    // Format the date and time using Day.js
    const formattedDateTime = dayjs(datetime).format("MMMM DD, YYYY hh:mm:ss");

    return formattedDateTime;
  } catch (error) {
    console.error("Error getting current date and time:", error);
    return null;
  }
}

// Function to update the current date and time every second
async function updateCurrentDateTime() {
  const currentDateTimeElement = document.getElementById("current-date-time");
  setInterval(async () => {
    const dateTime = await getCurrentDateTime();
    if (dateTime) {
      currentDateTimeElement.innerText = dateTime;
    } else {
      currentDateTimeElement.innerText = "Failed to get current date and time";
    }
  }, 1000); // Update every second
}

// Call the function to start updating the current date and time
updateCurrentDateTime();
