window.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.icon-item');
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add('fade-in');
    }, index * 300); // элемент бүр 0.3 секундээр хоорондоо хойшлоно
  });
});
