const display = document.getElementById("display");
const container = document.getElementById("button-container");
const modeSelect = document.getElementById("mode-select");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function renderButtons(mode) {
  let buttons = [];

  const basic = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", ".", "=", "/",
    "C"
  ];

  const scientific = [
    "sin(", "cos(", "tan(", "log(",
    "(", ")", "^", "sqrt(",
    "pi", "e", "!", "%"
  ];

  const vlsi = ["A&B", "A|B", "A^B", "~A"];
  const finance = ["EMI", "SI", "CI", "PV"];
  const electrical = ["V=IR", "P=VI", "E=Pt", "Ohm"];

  if (mode === "basic") buttons = basic;
  else if (mode === "scientific") buttons = basic.concat(scientific);
  else if (mode === "vlsi") buttons = basic.concat(vlsi);
  else if (mode === "finance") buttons = basic.concat(finance);
  else if (mode === "electrical") buttons = basic.concat(electrical);

  container.innerHTML = "";

  buttons.forEach(btn => {
    const button = document.createElement("button");
    button.innerText = btn;
    button.onclick = () => {
      if (btn === "=") calculate();
      else if (btn === "C") clearDisplay();
      else append(btn);
    };
    container.appendChild(button);
  });
}

modeSelect.addEventListener("change", (e) => {
  renderButtons(e.target.value);
});

renderButtons("basic");
