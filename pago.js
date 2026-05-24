const params = new URLSearchParams(window.location.search);

const formatCurrency = (value) => {
  const amount = Number.parseFloat(value || "0");
  return `Q${amount.toFixed(2)}`;
};

const defaults = {
  tipo: "producto",
  nombre: "Producto Nectar Chapin",
  descripcion: "Producto artesanal de manzana seleccionado para tu compra.",
  precio: "0",
  imagen: "img/LOGO .jpeg"
};

const checkout = {
  tipo: params.get("tipo") || defaults.tipo,
  nombre: params.get("nombre") || defaults.nombre,
  descripcion: params.get("descripcion") || defaults.descripcion,
  precio: params.get("precio") || defaults.precio,
  imagen: params.get("imagen") || defaults.imagen,
  periodo: params.get("periodo") || ""
};

const isPlan = checkout.tipo === "plan";
const paymentTipo = document.getElementById("paymentTipo");
const paymentNombre = document.getElementById("paymentNombre");
const paymentDescripcion = document.getElementById("paymentDescripcion");
const paymentImagen = document.getElementById("paymentImagen");
const paymentMedia = document.getElementById("paymentMedia");
const paymentFeatures = document.getElementById("paymentFeatures");
const paymentConcepto = document.getElementById("paymentConcepto");
const paymentSubtotal = document.getElementById("paymentSubtotal");
const paymentTotal = document.getElementById("paymentTotal");
const paymentLegal = document.getElementById("paymentLegal");

paymentTipo.textContent = isPlan ? "Plan Premium" : "Producto";
paymentNombre.textContent = checkout.nombre;
paymentDescripcion.textContent = checkout.descripcion;
paymentSubtotal.textContent = formatCurrency(checkout.precio);
paymentTotal.textContent = formatCurrency(checkout.precio);
paymentConcepto.textContent = isPlan
  ? `Suscripción ${checkout.periodo || "Premium"}`
  : "Producto seleccionado";

if (isPlan) {
  paymentMedia.remove();
  paymentFeatures.remove();
  paymentLegal.textContent = `La suscripción ${checkout.periodo || "seleccionada"} se renueva según el plan elegido hasta que canceles. Al completar la compra, aceptas los términos de servicio de Nectar Chapin.`;
} else {
  paymentImagen.src = checkout.imagen;
  paymentImagen.alt = checkout.nombre;
  paymentFeatures.innerHTML = `
    <div><i class="fa-solid fa-apple-whole"></i><span>Elaboración artesanal</span></div>
    <div><i class="fa-solid fa-box-open"></i><span>Producto disponible</span></div>
    <div><i class="fa-solid fa-shield-heart"></i><span>Pago seguro</span></div>
  `;
}

const methodButtons = document.querySelectorAll(".payment_method");
const cardFields = document.getElementById("cardFields");
const paypalFields = document.getElementById("paypalFields");

methodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const method = button.dataset.method;

    methodButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    cardFields.classList.toggle("active", method === "card");
    paypalFields.classList.toggle("active", method === "paypal");
  });
});

document.getElementById("paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert(`Compra lista para procesar: ${checkout.nombre} por ${formatCurrency(checkout.precio)}.`);
});
