const button = document.getElementById('impossible-btn');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnRect = button.getBoundingClientRect();

  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  const distance = Math.hypot(mouseX - btnX, mouseY - btnY);

  if (distance < 100) {
    moveButton();
  }
});

function moveButton() {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
