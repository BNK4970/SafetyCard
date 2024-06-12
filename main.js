function handleModal(buttonId, modalId) {
    const buttonElement = document.getElementById(buttonId);
    const modalElement = document.getElementById(modalId);
    const overlayElement = document.getElementById('overlay');

    if (buttonElement && modalElement) {
        buttonElement.addEventListener('click', function () {
            modalElement.classList.remove('hidden');
            overlayElement.style.display = 'flex';
        });

        const closeButton = modalElement.querySelector('.closeBtn');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                modalElement.classList.add('hidden');
                overlayElement.style.display = 'flex';
                overlayElement.style.display = 'none';
            });
        }

        overlayElement.addEventListener('click', function () {
            modalElement.classList.add('hidden');
            overlayElement.style.display = 'none';
        });
    } else {
        console.error(`Element not found: buttonId=${buttonId}, modalId=${modalId}`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    handleModal('openModal1', 'modalV1');
    handleModal('openModal2', 'modalV2');
    handleModal('openModal3', 'modalV3');
    handleModal('openModal4', 'modalV4');
    document.getElementById('btnAvis1').addEventListener('click', function() {
        seeMore(1);
    })
    document.getElementById('btnAvis2').addEventListener('click', function() {
        seeMore(2);
    })
    function seeMore(index) {
        const cardElement = document.getElementById(`cardpop${index}`)
        const card = document.getElementById(`cardAvis${index}`);
        if (card.style.webkitLineClamp === '10') {
            card.style.webkitLineClamp = '3';
            cardElement.style.height = 'min-content';
            card.style.maxHeight = 'calc(1.5em * 3)';
        } else {
            card.style.webkitLineClamp = '10';
            cardElement.style.height = '100%';
            card.style.maxHeight = 'calc(1.5em * 10)';
        }
    }
});
