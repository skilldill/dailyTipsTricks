
let color = 'pink';

const btnColors = document.querySelectorAll('[color]');

btnColors.forEach((btnColor) => {
  const penColor = btnColor.getAttribute('color');
  btnColor.style.background = `linear-gradient(45deg, #e0e0e033, ${penColor})`
  btnColor.addEventListener('click', () => {
    color = btnColor.getAttribute('color');
  });
});

const svg = document.querySelector(".canvas");

// Текущий путь
let currentPath = null;

// Флаг, отслеживающий, рисует ли пользователь
let isDrawing = false;

// Начинаем рисовать
document.addEventListener("mousedown", (event) => {
  isDrawing = true;

  // Создаем новый путь
  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("fill", "none");
  currentPath.setAttribute("stroke", color);
  currentPath.setAttribute("stroke-width", "5.0");
  currentPath.setAttribute("stroke-linecap", "round");
  currentPath.setAttribute("stroke-linejoin", "round");
  currentPath.setAttribute("vector-effect", "non-scaling-stroke");

  // Устанавливаем начальную точку
  const { clientX, clientY } = event;
  const initialPoint = `M ${clientX} ${clientY}`;
  currentPath.setAttribute("d", initialPoint);

  // Добавляем путь в SVG
  svg.appendChild(currentPath);
});

// Рисуем при движении мыши
document.addEventListener("mousemove", (event) => {
  if (!isDrawing || !currentPath) return;

  const { clientX, clientY } = event;

  // Добавляем линию к текущему пути
  let d = currentPath.getAttribute("d");
  d += ` L ${clientX} ${clientY}`;
  currentPath.setAttribute("d", d);
});

// Завершаем рисование
document.addEventListener("mouseup", () => {
  isDrawing = false;
  currentPath = null;
});

// Завершаем рисование при уходе курсора
document.addEventListener("mouseleave", () => {
  isDrawing = false;
  currentPath = null;
});