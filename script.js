//your JS code here. If required.
function removeColor() {
      const select = document.getElementById("colorSelect");
      // निवडलेला index शोधतो
      const selectedIndex = select.selectedIndex;

      if (selectedIndex !== -1) {
        // निवडलेला option remove करतो
        select.remove(selectedIndex);
      } else {
        alert("Please select a color to remove!");
      }
    }