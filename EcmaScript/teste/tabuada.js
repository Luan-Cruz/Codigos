const res = document.querySelector("#res");
const num = document.querySelector("#barNum");

function calcular() {
  if (num.value == 0) {
    alert("digite algo");
  } else {
    res.innerHTML = "";
    for (i = 1; i <= 10; i++) {
      let n = Number(num.value);
      res.innerHTML += `${n} x ${i} = ${n * i} <br/>`;
      res.style.padding = "15px";
    }
  }
  num.value = "";
}
