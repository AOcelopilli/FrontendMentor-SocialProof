const d = document,
  $stats = d.getElementsByClassName("stat"),
  $buyerCards = d.getElementsByClassName("buyer-card");

d.addEventListener("DOMContentLoaded", (e) => {
  for (let i = 0; i < $stats.length; i++) {
    const stat = $stats[i];
    stat.style.marginLeft = `${i * 50}px`;
  }

  for (let i = 0; i < $buyerCards.length; i++) {
    const card = $buyerCards[i];
    card.style.marginTop = `${i * 20}px`;
  }
});
