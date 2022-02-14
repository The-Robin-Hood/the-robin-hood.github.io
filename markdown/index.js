var converter = new showdown.Converter();
const textArea = document.getElementById("text-area");
const previewArea = document.getElementById("preview-area");
textArea.addEventListener("input", () => {
  const txt = textArea.value;
  previewArea.innerHTML = converter.makeHtml(txt);
});
