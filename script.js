var exitButton = document.querySelector('.exit');
var popUpModal = document.querySelector('.pop-up-modal');
var modalOverlay = document.querySelector('.modal-overlay');
exitButton.addEventListener('click', function () {
    popUpModal.style = "display: none;";
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style = "z-index: -10";
})

var openButton = document.querySelector('.open-modal');
openButton.addEventListener('click', function () {
    modalOverlay.style = "z-index: 0";
    modalOverlay.style.visibility = "visible";
    popUpModal.style = "display: flex;";

})

