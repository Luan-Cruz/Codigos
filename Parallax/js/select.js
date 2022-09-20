const list = document.querySelector("ul.select-list");
const value = document.querySelector(".select-input p");

document.querySelector("div.select-input").addEventListener("click", () => {
  list.classList.toggle("hide");
});

document.querySelector(".select-list li").addEventListener("click", (e) => {
  console.log(e);
});
