function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener ("click", () => {
    const bgColor = getRandomHexColor();    
    document.body.style.backgroundColor = bgColor;
    colorValue.textContent = bgColor; 
})