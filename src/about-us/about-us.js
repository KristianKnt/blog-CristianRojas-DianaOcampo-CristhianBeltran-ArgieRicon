// Data de las tarjetas
const equipo = [
  {
    nombre: "Diana Ocampo",
    rol: "Gestión de Proyecto",
    descripcion:
      'Encargada de la creación de la página "Quiénes somos" y de la organización y gestión del tablero de Trello del proyecto.',
    email: "diana.ocampo@zentramusic.com",
    imagen: "../assets/img/about-us/img-1.jpeg",
  },
  {
    nombre: "Argie Rincón",
    rol: "Diseño & Frontend",
    descripcion:
      "Encargada del diseño visual del blog y del desarrollo de la sección y página de Contáctanos.",
    email: "argie.rincon@zentramusic.com",
    imagen: "../assets/img/about-us/img-2.jpg",
  },
  {
    nombre: "Cristhian Rojas",
    rol: "DevOps & Componentes",
    descripcion:
      "Encargado de la configuración de GitHub, y del diseño del encabezado (Header) y el pie de página (Footer).",
    email: "cristhian.rojas@zentramusic.com",
    imagen: "../assets/img/about-us/img-3.jpg",
  },
  {
    nombre: "Cristian Beltrán",
    rol: "Diseño & Frontend",
    descripcion:
      "Encargado del diseño, estructura y desarrollo de la página de inicio (Home) principal del blog.",
    email: "cristian.beltran@zentramusic.com",
    imagen: "../assets/img/about-us/img-4.jpeg",
  },
];


const crearTexto = ({ nombre, rol, descripcion, email }) => `
  <div class="col-md-7">
    <span class="badge mb-2 team-role-badge">${rol}</span>
    <h3 class="h4 fw-bold mb-2">${nombre}</h3>
    <p class="text-muted small mb-3">${descripcion}</p>
    <div class="d-flex align-items-center justify-content-between text-muted border-top pt-2 team-card-meta">
      <span>${email}</span>
      <span>Equipo Zentra</span>
    </div>
  </div>`;


const crearAvatar = ({ imagen, nombre }) => `
  <div class="col-md-5 text-center">
    <div class="bg-secondary bg-opacity-10 rounded-4 overflow-hidden mx-auto team-avatar">
      <img src="${imagen}" alt="Foto de ${nombre}">
    </div>
  </div>`;


function crearTarjeta(miembro, index) {
  const texto = crearTexto(miembro);
  const avatar = crearAvatar(miembro);
  const esPar = index % 2 === 0;

  const columnaTexto = esPar
    ? texto.replace('class="col-md-7"', 'class="col-md-7 order-2 order-md-1"')
    : texto;

  const columnaAvatar = esPar
    ? avatar.replace(
      'class="col-md-5 text-center"',
      'class="col-md-5 order-1 order-md-2 text-center"'
    )
    : avatar;

  const contenido = esPar ? `${columnaTexto}${columnaAvatar}` : `${columnaAvatar}${columnaTexto}`;

  return `
    <div class="bg-white border rounded shadow-sm overflow-hidden p-3 p-md-4">
      <div class="row align-items-center g-3">${contenido}</div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("team-cards");
  if (!contenedor) return;

  let html = "";
  equipo.forEach((miembro, index) => {
    html += crearTarjeta(miembro, index);
  });

  contenedor.innerHTML = html;
});
