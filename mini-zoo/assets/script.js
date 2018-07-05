var dropMenu =  document.getElementById("drop-menu");

dropMenu.addEventListener("change", cliqueEfeito);

var pegaFoto = document.querySelectorAll(".thumbs-item");

function cliqueEfeito() {
    pegaFoto.forEach(foto => {
        var efeito = dropMenu.value;
        if (efeito === "sepia") {
            foto.classList = "thumbs-item";
            foto.classList.add("sepia");
        }
        if (efeito === "grayscale") {
            foto.classList = "thumbs-item";
            foto.classList.add("grayscale");
        }
        if (efeito === "invert") {
            foto.classList = "thumbs-item";
            foto.classList.add("invert");
        }
        if (efeito === "") {
            foto.classList("thumbs-item");
        }
    });
}

