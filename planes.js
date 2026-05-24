const planCards = document.querySelectorAll(".streaming_plan_card");
const continueButton = document.getElementById("planContinueBtn");

function buildPaymentUrl(card) {
  const params = new URLSearchParams({
    tipo: "plan",
    nombre: card.dataset.planName,
    descripcion: card.dataset.planDescription,
    precio: card.dataset.planPrice,
    periodo: card.dataset.planPeriod
  });

  return `pago.html?${params.toString()}`;
}

function selectPlan(card) {
  planCards.forEach((item) => item.classList.remove("active"));
  card.classList.add("active");
  continueButton.href = buildPaymentUrl(card);
}

planCards.forEach((card) => {
  card.addEventListener("click", () => selectPlan(card));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectPlan(card);
    }
  });
});
