const actionsSheetBtn = document.querySelector('button');
const actionsSheetLayer = document.querySelector('.actionsLayer');
const actionCancel = document.querySelector('.actionCancel');

actionsSheetBtn.addEventListener('click', () => {
    actionsSheetLayer.classList.add('actionsShown');
});

actionCancel.addEventListener('click', () => {
    actionsSheetLayer.classList.remove('actionsShown');
});
