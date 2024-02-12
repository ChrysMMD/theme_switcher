
//DROPDOWN 
document.querySelector(".theme").addEventListener("change", selectChange);

function selectChange(evt) {
  console.log("change", evt.target.value);
  bodyElement.setAttribute(`data-theme`, evt.target.value);
}


//DATASET
const bodyElement = document.body;
const bodyTheme = bodyElement.dataset.theme;
console.log("Theme:", bodyTheme)