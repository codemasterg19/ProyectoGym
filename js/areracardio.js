document.addEventListener("DOMContentLoaded", function () {
    var joinButton = document.getElementById("joinButton");
    var modal = document.getElementById("modal");
    var closeModalButton = document.getElementById("closeModalButton");
    var submitFormButton = document.getElementById("submitFormButton");

    joinButton.addEventListener("click", function () {
        modal.style.display = "block";
        modal.classList.add("fadeIn");
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    submitFormButton.addEventListener("click", function () {
        // Aquí puedes personalizar la acción del formulario para el área de cardio
        alert("¡Gracias por mostrar interés en nuestro área de cardio! Te contactaremos pronto.");
        modal.style.display = "none";
    });
});