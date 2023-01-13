const listaP = document.querySelector(".select-list");

async function getData() {
  try {
    const config = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    const res = await fetch(
      "https://rickandmortyapi.com/api/character",
      config
    );
    const data = await res.json();

    const listaFiltrada = data.results.map((item) => {
      return {
        name: item.name,
        image: item.image,
      };
    });

    listaFiltrada.map((states) =>{
      const optt = document.createElement("li");
      optt.value = states.name;
      optt.innerHTML = states.name;
      listaP.appendChild(optt);
    });

    console.log(data);
    console.log(listaFiltrada);
  } catch (error) {
    console.log(error);
  }
}
getData();
