const container = document.getElementById("container");
const SQUARES = 225; // 15x15 grid

const setColor = (square) => {
  const randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
  square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
};

const removeColor = (square) => {
  square.style.backgroundColor = "#fff";
  square.style.boxShadow = "0 0 2px #000";
};

const handleHover = (square) => {
  setColor(square);
};

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => handleHover(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
