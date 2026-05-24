const productosNectarChapin = [
  {
    id: "jugo-355",
    nombre: "Jugo de manzana 355ml",
    descripcion: "Presentación de 12 oz, práctica para refacciones, almuerzos y consumo diario.",
    precio: "15",
    imagen: "img/jugo-355.jpeg",
    categoria: "jugo",
    etiqueta: "12 oz",
    beneficios: ["355ml", "Sabor refrescante", "Listo para llevar"]
  },
  {
    id: "jugo-475",
    nombre: "Jugo de manzana 475ml",
    descripcion: "Botella de 16 oz con más contenido para disfrutar el sabor natural de la manzana.",
    precio: "17",
    imagen: "img/jugo-475.jpeg",
    categoria: "jugo",
    etiqueta: "16 oz",
    beneficios: ["475ml", "Más contenido", "Ideal para el día"]
  },
  {
    id: "jugo-1l",
    nombre: "Jugo de manzana 1L",
    descripcion: "Formato familiar de 1 litro para compartir en casa, reuniones o comidas especiales.",
    precio: "25",
    imagen: "img/jugo-1l.jpeg",
    categoria: "jugo",
    etiqueta: "1L",
    beneficios: ["1 litro", "Formato familiar", "Sabor frutal"]
  },
  {
    id: "mermelada-250",
    nombre: "Mermelada de manzana 250g",
    descripcion: "Frasco pequeño con dulzura artesanal para panes, postres y desayunos.",
    precio: "18",
    imagen: "img/mermelada-250.jpeg",
    categoria: "mermelada",
    etiqueta: "250g",
    beneficios: ["250g", "Textura artesanal", "Dulce natural"]
  },
  {
    id: "mermelada-500",
    nombre: "Mermelada de manzana 500g",
    descripcion: "Presentación grande para familias, mesas compartidas o recetas dulces.",
    precio: "25",
    imagen: "img/mermelada-hero.jpeg",
    categoria: "mermelada",
    etiqueta: "500g",
    beneficios: ["500g", "Rinde más", "Perfecta para compartir"]
  },
  {
    id: "vino-350",
    nombre: "Vino de manzana 350ml",
    descripcion: "Botella elegante de 350ml para brindar, regalar o acompañar ocasiones especiales.",
    precio: "65",
    imagen: "img/vino-350.jpeg",
    categoria: "vino",
    etiqueta: "350ml",
    beneficios: ["350ml", "Presentación premium", "Ideal para celebrar"]
  }
];

const contenedorProductos = document.getElementById("catalogoProductos");
const botonesFiltro = document.querySelectorAll(".catalogo_filter");
const catalogoTitulo = document.getElementById("catalogoTitulo");
const catalogoContador = document.getElementById("catalogoContador");
const toTopButton = document.getElementById("to-top");

const titulosCategoria = {
  todos: "Todos los productos",
  jugo: "Jugos de manzana",
  mermelada: "Mermeladas de manzana",
  vino: "Vinos de manzana"
};

function cargarProductos(categoria = "todos") {
  const productosFiltrados = categoria === "todos"
    ? productosNectarChapin
    : productosNectarChapin.filter(producto => producto.categoria === categoria);

  catalogoTitulo.textContent = titulosCategoria[categoria];
  catalogoContador.textContent = `${productosFiltrados.length} productos disponibles`;

  contenedorProductos.innerHTML = productosFiltrados.map(producto => `
    <article class="producto">
      <div class="producto_img_box">
        <span>${producto.etiqueta}</span>
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>

      <div class="producto_info">
        <h3>${producto.nombre}</h3>
        <strong class="producto_estado">Disponible</strong>
        <p>${producto.descripcion}</p>

        <ul class="beneficios">
          ${producto.beneficios.map(beneficio => `<li><i class="fa-solid fa-check"></i>${beneficio}</li>`).join("")}
        </ul>

        <div class="producto_footer">
          <h2 class="precio">Q${producto.precio}</h2>
          <a class="comprarBtn" href="pago.html?tipo=producto&id=${encodeURIComponent(producto.id)}&nombre=${encodeURIComponent(producto.nombre)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}"
            data-producto="${producto.nombre}"
            data-precio="${producto.precio}"
            data-imagen="${producto.imagen}">
            Comprar
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach(item => item.classList.remove("active"));
    boton.classList.add("active");
    cargarProductos(boton.dataset.categoria);
  });
});

if (toTopButton) {
  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", () => {
    toTopButton.classList.toggle("show", window.scrollY > 120);
  });
}

cargarProductos();
