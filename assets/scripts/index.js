function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
  }

  function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = ``;
  }


function addEventListnersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements); 

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        
      }
    }


document.addEventListener("DOMContentLoaded", addEventListnersToCards, false);

function selectCarousselItem(selectedButtomElement) {
  const selectedItem = selectedButtomElement.id;
  const carousel = document.querySelector('.s-cards-caroussel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;  

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtomElement.classList.add('s-controller__button--active');
}