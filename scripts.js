const downloadButtons = document.querySelectorAll("[data-download]");
const downloadFunction = (a) => {
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

downloadButtons.forEach((button) => {
  const a = document.createElement("a");
  a.style.display = "none";

  const id = button.getAttribute("data-download")

  const img = document.querySelector(`#${id}`);

  a.href = img.src;
  a.download = img.src;

  button.addEventListener("click", () => downloadFunction(a));
});