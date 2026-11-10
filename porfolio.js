const boton = document.getElementById("theme-toggle");

// Modo claro y oscuro

boton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        boton.textContent = "☀️";
    } else {
        boton.textContent = "🌙";
    }

});

// Animación al hacer scroll

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {
    observer.observe(card);
});