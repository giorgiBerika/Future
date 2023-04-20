// Open send message section through header nav
document.querySelector("#show-modal").addEventListener("click", function(){
    document.getElementById("send-message").style.display = "inline-block"

});

// Logic of closin modal window
document.getElementById("send-message").addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".close-modal-1") ||
        !event.target.closest(".send-message-inner-container")
      ) {
        closeModalMessage();
      }
    },
    false
  )
;
//  Global function, declaring function closeModal()
  function closeModalMessage() {
    document.querySelector("#send-message").style.display = "none"
  };