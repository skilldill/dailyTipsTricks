const svg = document.querySelector('#trailSVG');
const circles = [];
const RADIUS = 20;

document.addEventListener("mousemove", (event) => {
    svg.setAttribute('data-attr', 20);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", event.clientX);
    circle.setAttribute("cy", event.clientY);
    circle.setAttribute("r", RADIUS);
    circle.setAttribute("fill", "pink");
    circle.setAttribute("opacity", 1);
    svg.appendChild(circle);
    circles.push(circle);

    setTimeout(() => {
        fadeOut(circle);
    }, 50);
});

let count = 0;

function fadeOut(element) {
    let opacity = 1;
    let radius = RADIUS;
    let fill = [255, 192, 203];

    function step() {
        if (count % 2 === 0) {
            opacity -= 0.02;
            radius -= 0.5;
            fill[0] += 0;
            fill[1] += 1;
            fill[2] += 15;

            if (opacity <= 0 || radius <= 0) {
                svg.removeChild(element);
                return;
            }
            element.setAttribute("opacity", opacity);
            element.setAttribute("r", radius);
            element.setAttribute("fill", `rgb(${fill[0]}, ${fill[1]}, ${fill[2]})`);
        }
        count += 1;
        requestAnimationFrame(step);
    }
    step();
}