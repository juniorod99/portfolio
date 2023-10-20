var backToTopButton = document.getElementById("back-to-top");

// Adiciona um ouvinte de evento para rolar suavemente para o topo quando o botão é clicado
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Adiciona um ouvinte de evento para mostrar/ocultar o botão com base na posição da página
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // Mostra o botão quando o usuário rola além de 100 pixels
    backToTopButton.style.display = "block";
  } else {
    // Oculta o botão quando o usuário está no topo
    backToTopButton.style.display = "none";
  }
});
