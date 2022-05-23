const example =document.querySelector('.examle__cat-bg');
const btnWas = document.querySelector('.examle__cat-btn--was');
const btnBecome = document.querySelector('.examle__cat-btn--become');

btnBecome.addEventListener('click', function () {
  if (example.classList.contains('examle__cat-bg--fat')) {
    example.classList.remove('examle__cat-bg--fat');
    example.classList.remove('examle__cat-bg');
    example.classList.add('examle__cat-bg--skinny');
  }
})

btnWas.addEventListener('click', function () {
  if (example.classList.contains('examle__cat-bg--skinny')) {
    example.classList.add('examle__cat-bg--fat');
    example.classList.remove('examle__cat-bg');
    example.classList.remove('examle__cat-bg--skinny');
  }
})
