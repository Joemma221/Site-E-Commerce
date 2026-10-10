const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const produit = produits[id];

    if (produit) {
        document.getElementById("produit-image").src = produit.image;
        document.getElementById("produit-image").alt = produit.nom;
        document.getElementById("produit-nom").textContent = produit.nom;
        document.getElementById("produit-description").textContent = produit.description;
        document.getElementById("produit-prix").textContent = "Prix : " + produit.prix;

        document.getElementById("confirmer-achat").addEventListener("click", () => {
            const message = `Bonjour, je souhaite acheter : ${produit.nom} (${produit.prix})`;
            window.open("https://wa.me/221775997983?text=" + encodeURIComponent(message), "_blank");
        });
    } else {
        document.getElementById("buy-container").innerHTML = "<p class='text-center'>Produit introuvable.</p>";
    }

    let btndarkMode = document.getElementById("dark-mode-toggle");
let btnlightMode = document.getElementById("light-mode-toggle");
let darkModeIcon = document.getElementById("dark-mode-icon");
let lightModeIcon = document.getElementById("light-mode-icon");
let theme = document.documentElement.getAttribute('data-bs-theme');

if (theme === "dark") {
    btnlightMode.style.display = "block";
    btndarkMode.style.display = "none";
} else {
    btndarkMode.style.display = "block";
    btnlightMode.style.display = "none";
}

btndarkMode.addEventListener("click", 
    () => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem("theme", "dark");
    btnlightMode.style.display = "block";
    btndarkMode.style.display = "none";
});

btnlightMode.addEventListener("click",
    () => {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem("theme", "light");
    btndarkMode.style.display = "block";
    btnlightMode.style.display = "none";
});