const actividades = [
  {
    codigo: "MUS001",
    nombre: "Taller de guitarra inicial",
    categoria: "Música",
    precio: 15000,
    cupos: 20
  },
  {
    codigo: "ART002",
    nombre: "Acuarela para principiantes",
    categoria: "Artes visuales",
    precio: 12000,
    cupos: 4
  },
  {
    codigo: "TEA003",
    nombre: "Teatro comunitario",
    categoria: "Teatro",
    precio: 0,
    cupos: 0
  }
];

function crearTarjeta(actividad) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const nombre = document.createElement("h2");
  nombre.textContent = actividad.nombre;

  const categoria = document.createElement("p");
  categoria.textContent = `Categoría: ${actividad.categoria}`;

  const cupos = document.createElement("p");
  cupos.textContent = `Cupos: ${actividad.cupos}`;

  if (actividad.cupos > 0 && actividad.cupos <= 5) {
  cupos.textContent = `¡Últimos ${actividad.cupos} cupos!`;
  cupos.classList.add("aviso-cupos");
  }

  if (actividad.cupos === 0) {
    cupos.textContent = "Actividad completa";
    cupos.classList.add("actividad-completa");
  }


  tarjeta.appendChild(nombre);
  tarjeta.appendChild(categoria);
  tarjeta.appendChild(cupos);
  cartelera.appendChild(tarjeta);
}

function mostrarActividades(lista) {
  cartelera.replaceChildren();

  for (const actividad of lista) {
    crearTarjeta(actividad);
  }
}

mostrarActividades(actividades);

const botonTodas = document.querySelector("#mostrar-todas");
const botonDisponibles = document.querySelector("#mostrar-disponibles");

function mostrarTodas() {
  mostrarActividades(actividades);
}

function mostrarDisponibles() {
  const disponibles = [];

  for (const actividad of actividades) {
    if (actividad.cupos > 0) {
      disponibles.push(actividad);
    }
  }

  mostrarActividades(disponibles);
}

botonTodas.addEventListener("click", mostrarTodas);
botonDisponibles.addEventListener("click", mostrarDisponibles);


