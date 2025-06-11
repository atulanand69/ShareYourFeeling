const lettersDiv = document.getElementById("letters");
const feelingListDiv = document.getElementById("feeling-list");

for (let letter in feelings) {
  const btn = document.createElement("button");
  btn.textContent = letter;
  btn.setAttribute("aria-label", `Show feelings starting with ${letter}`);
  btn.onclick = () => showFeelings(letter);
  lettersDiv.appendChild(btn);
}

function showFeelings(letter) {
  feelingListDiv.innerHTML = "";
  feelings[letter].forEach(feel => {
    const span = document.createElement("span");
    span.className = "feeling";
    span.textContent = feel;
    feelingListDiv.appendChild(span);
  });
}

function sendFeeling() {
  const text = document.getElementById("feeling-text").value.trim();
  if (!text) {
    alert("Please enter a feeling before sending.");
    return;
  }

  const message = encodeURIComponent(`Hello, I would like to talk about: \"${text}\"`);
  const phone = "919793381459";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
