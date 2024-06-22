const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
}

const divs = document.querySelectorAll(".container div");

for (let i = 0; i < 16 * 16; i++) {
    divs[i].addEventListener("mouseover", () => {
        divs[i].setAttribute("style", "background-color: black;")
    });
}