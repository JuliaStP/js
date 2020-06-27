const openBtn = document.querySelector('#openBtn');
const wrapper = document.querySelector('.wrapper');

openBtn.addEventListener('click', e => {
  const overlayWindow = document.createElement('div');
  overlayWindow.classList.add('overlay');

  overlayWindow.addEventListener('click', e => {
    if (e.target === overlayWindow) {
      closeBtn.click();
    }
  });


  const overlayContainer = document.createElement('div');
  overlayContainer.classList.add('overlay__container');

  const overlayText = document.createElement('span');
  overlayText.classList.add('overlay__text');

  overlayText.innerHTML = 'Close me now!'

  const closeBtn = document.createElement('a');
  closeBtn.classList.add('overlay__btn');
  closeBtn.href = '#';
  closeBtn.textContent = 'x';

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    wrapper.removeChild(overlayWindow);
  });


  overlayContainer.appendChild(closeBtn);
  overlayContainer.appendChild(overlayText);
  overlayWindow.appendChild(overlayContainer);
  wrapper.appendChild(overlayWindow);
})