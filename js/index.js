const tabButtons = document.querySelectorAll('.tab-buttons');
const tabsDescriptionItem = document.querySelectorAll('.tabs-description-item');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('.tab-buttons-current').classList.remove('tab-buttons-current');
    button.classList.add('tab-buttons-current');
    document.querySelector('.tabs-description-item-active').classList.remove('tabs-description-item-active');
    tabsDescriptionItem[index].classList.add('tabs-description-item-active');
  });
});
