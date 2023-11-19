// Add your custom JavaScript logic here
function showDetails(character) {
    // Example: Redirect to a character details page
    window.location.href = character + ".html";
}// Fungsi untuk menampilkan informasi lebih lanjut ketika tombol "Learn More" diklik
function showDetails(character) {
    // Example: Redirect to a character details page
    window.location.href = character + ".html";
}

// Fungsi untuk efek hover pada kartu karakter
function addHoverEffect(card) {
    card.classList.add("hovered");
}

function removeHoverEffect(card) {
    card.classList.remove("hovered");
}

// Event listener untuk menangani efek hover pada kartu karakter
document.addEventListener("DOMContentLoaded", function () {
    const characterCards = document.querySelectorAll(".card");

    characterCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            addHoverEffect(card);
        });

        card.addEventListener("mouseleave", function () {
            removeHoverEffect(card);
        });
    });
});



