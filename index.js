// Write your code here!
// const element = document.createElement("div")
// document.body.append(element)
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }

// element.append(ul);

// const main = document.getElementById("main");
// main.innerHTML =
//     "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"
//     element.style.height = "300px";
// element.style.backgroundColor = "#27647B";
// element.textContent = "You've changed what's on the screen!";
const body = document.querySelector("body");
const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory")
newHeader.textContent="YOUR-NAME is the champion"
body.append(newHeader)