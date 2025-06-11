

// Create A-Z buttons
const lettersDiv = document.getElementById("letters");
const feelingListDiv = document.getElementById("feeling-list");

for (let letter in feelings) {
  const btn = document.createElement("button");
  btn.textContent = letter;
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
    alert("Please enter a feeling.");
    return;
  }

  const message = encodeURIComponent("I want to share: " + text);
  const phone = "919931231959";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
