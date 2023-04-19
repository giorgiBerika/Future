// Open send message section through header nav
document.querySelector(".show-modal").addEventListener("click", function(){
    document.getElementById("send-message").style.display = "inline-block"

});

// Logic of closin modal window
document.getElementById("send-message").addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".close-modal") ||
        !event.target.closest(".send-message-inner-container")
      ) {
        closeModal()
      }
    },
    false
  )
;
//  Global function, declaring function closeModal()
  function closeModal() {
    document.querySelector(".send-message-section").style.display = "none"
  };