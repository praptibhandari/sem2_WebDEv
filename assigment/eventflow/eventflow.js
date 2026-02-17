const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const logBox = document.querySelector(".event-log p");

function log(message) {
    logBox.innerHTML += message + "<br>";
}

function clearLog() {
    logBox.innerHTML = "";
}


grandparent.addEventListener("click", () => {
    log("Grandparent — Capturing");
}, true);

parent.addEventListener("click", () => {
    log("Parent — Capturing");
}, true);


child.addEventListener("click", (e) => {
    log("Child — Target (stopPropagation)");
    e.stopPropagation(); 
});

parent.addEventListener("click", () => {
    log("Parent — Bubbling");
});

grandparent.addEventListener("click", () => {
    log("Grandparent — Bubbling");
});