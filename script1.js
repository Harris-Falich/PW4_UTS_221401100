// Add your custom JavaScript logic here
function showDetails(character) {
    // Example: Redirect to a character details page
    window.location.href = character + ".html";
}

function addHoverEffect(card) {
    card.classList.add("hovered");
}

function removeHoverEffect(card) {
    card.classList.remove("hovered");
}

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
