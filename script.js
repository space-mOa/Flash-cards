const root = document.getElementById("wrapper");
const card = document.createElement("div");
card.className = "Card";
card.index = 0;
card.sbirka = [
  {
    front: "<h1>Předek</h1>",
    back: "<h1>Zadek</h1>"
  },
  { 
    front: "<h1>Front</h1>",
    back: "<h1>Back</h1>" 
  }
];
card.innerHTML = card.sbirka[0].front;
card.isFront = true;
card.addEventListener("click", play);
root.appendChild(card);

function next() {
  const card = document.querySelector(".Card");
  if (card.index < card.sbirka.length - 1) {
    card.index = card.index + 1;
  }
  card.innerHTML = card.sbirka[card.index].front;
  card.isFront = true;
}

function previous() {
  const card = document.querySelector(".Card");
  if (card.index > 0) {
    card.index = card.index - 1;
  }
  card.innerHTML = card.sbirka[card.index].front;
  card.isFront = true;
}

/*
  explanation of why you need to do double requestAnimationFrame:
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips
  requestAnimationFrame:
  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  viz. Note: Your callback routine must itself call requestAnimationFrame() if you want to animate another frame at the next repaint.
  nebo použij setInterval()
  licence: https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses
*/
function play() {
  document.querySelector(".Card").className = "Card"
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.querySelector(".Card").className = "Card Animate";
    });
  });
  if (this.isFront) {
    this.isFront = false;
    this.innerHTML = card.sbirka[card.index].back;
  } else {
    this.isFront = true;
    this.innerHTML = card.sbirka[card.index].front;
  }
}
