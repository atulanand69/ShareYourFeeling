const feelings = {
  A: ['Angry', 'Alone', 'Anxious'],
  B: ['Bored', 'Broken'],
  C: ['Calm', 'Confused'],
  D: ['Depressed', 'Determined'],
  E: ['Excited', 'Empty'],
  F: ['Frustrated', 'Fearful'],
  G: ['Grateful', 'Guilty'],
  H: ['Happy', 'Helpless'],
  I: ['Inspired', 'Insecure'],
  J: ['Joyful', 'Jealous'],
  K: ['Kind'],
  L: ['Lonely', 'Loved'],
  M: ['Motivated', 'Moody'],
  N: ['Nervous', 'Numb'],
  O: ['Optimistic', 'Overwhelmed'],
  P: ['Peaceful', 'Panicked'],
  Q: ['Quiet'],
  R: ['Relaxed', 'Restless'],
  S: ['Sad', 'Satisfied'],
  T: ['Tired', 'Thankful'],
  U: ['Upset', 'Uplifted'],
  V: ['Vulnerable'],
  W: ['Worried', 'Weak'],
  X: ['Xhausted'], // creative spelling
  Y: ['Yearning'],
  Z: ['Zoned Out']
};

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
  const phone = "919793381451";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
