document.addEventListener("DOMContentLoaded", () => {
    console.log("GrottarossaLib page loaded!");
  
    // Validazione del modulo di login
    const loginForm = document.querySelector(".login-form form");
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        if (!email || !password) {
          event.preventDefault();
          alert("Per favore, compila tutti i campi!");
        }
      });
    }
  
    // Barra di ricerca nel catalogo
    const searchInput = document.getElementById("search");
    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        const books = document.querySelectorAll(".book-card");
  
        books.forEach((book) => {
          const title = book.querySelector("h3").textContent.toLowerCase();
          const author = book.querySelector("p").textContent.toLowerCase();
  
          if (title.includes(query) || author.includes(query)) {
            book.style.display = "block";
          } else {
            book.style.display = "none";
          }
        });
      });
    }
  
    // Notifica prestito libro
    const loanButtons = document.querySelectorAll(".book-card .btn");
    loanButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Richiesta di prestito inviata con successo!");
      });
    });
  });
  