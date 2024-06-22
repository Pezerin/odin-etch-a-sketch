const container = document.querySelector(".container");
const button = document.querySelector(".size");

function createGrid(size) {
    let height = 960.0 / size;
    let width = 960.0 / size;

    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const newdiv = document.createElement("div");
        newdiv.setAttribute("style", `height: ${height}px; width: ${width}px; border: 1px solid black; box-sizing: border-box;`);
        container.appendChild(newdiv);
    }

    const divs = container.querySelectorAll("div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = `#${randomColor}`;
        });
    });
}

createGrid(16);

button.addEventListener("click", () => {
    const size = prompt("Size of board (1-100):");
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});
