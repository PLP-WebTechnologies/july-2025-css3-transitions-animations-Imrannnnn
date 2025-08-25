/*reusable code by Imran*/

function addAnimationOnce(element, className) {
  element.classList.add(className);
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  }, { once: true });
}


// Animate Box
function triggerBoxAnimation() {
  const box = document.getElementById("animate-box");
  addAnimationOnce(box, "bounce");
}

// Flip Card
function flipCard() {
  const card = document.getElementById("flip-card");
  card.classList.toggle("flip");
}

// Loader Start/Stop
function toggleLoader() {
  const loader = document.getElementById("loader");
  loader.classList.toggle("spin");
}

// Modal Popup
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
