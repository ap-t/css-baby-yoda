const SKIN_COLOR_CSS_PROP = "--skin-color";

const picker = document.querySelector("hex-color-picker");

// Set default color
const defaultColor =
  (
    getComputedStyle(document.body).getPropertyValue(SKIN_COLOR_CSS_PROP) || ""
  ).trim() || "#fff";
picker.setAttribute("color", defaultColor);

picker.addEventListener("color-changed", (event) => {
  // Change skin color
  const newColor = event.detail.value;
  document.documentElement.style.setProperty(SKIN_COLOR_CSS_PROP, newColor);
});
