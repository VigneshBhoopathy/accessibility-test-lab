document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");
  const statusMessage = document.getElementById("statusMessage");
  const submitForm = document.getElementById("submitForm");
  const formMessage = document.getElementById("formMessage");
  const accessibleButton = document.getElementById("accessibleButton");
  const keyboardMessage = document.getElementById("keyboardMessage");

  testButton.addEventListener("click", () => {
    statusMessage.textContent = "Demo action completed successfully.";
  });

  submitForm.addEventListener("click", (event) => {
    event.preventDefault();
    formMessage.textContent = "Demo form submitted. No data was sent.";
  });

  accessibleButton.addEventListener("click", () => {
    keyboardMessage.textContent = "Accessible button activated.";
  });
});

function fakeButtonAction() {
  const message = document.getElementById("keyboardMessage");
  message.textContent = "The fake button was clicked with a mouse.";
}
