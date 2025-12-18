const teamData = [
  {
    name: "Василь ",
    info: "Хедер + скрипт зміни теми, перевірка, чи рік народження високосний LOS TRALALERITOS DICEN TRALALA",
    photo: "img/vasil.png",
  },
  {
    name: "Кароліна",
    info: "Гра «Камінь-Ножиці-Папір»,",
    photo: "img/chel.png",
  },
  {
    name: "Вероніка",
    info: "Користувач вводить 3 числа → на екран виводиться найбільше, поле з м’ячем",
    photo: "img/chel.png",
  },
  {
    name: "Макс",
    info: "Футер + модальне вікно підписки, Калькулятор: сума, різниця, множення, ділення двох чисел",
    photo: "img/max.png",
  },
  {
    name: "Матвій",
    info: "Гра «Google динозаврик», модальне вікно привітання, гра «Вгадай число»",
    photo: "img/chel.png",
  },
  {
    name: "Єгор",
    info: "Конвертер хвилин у години:хвилини, робота з масивом об’єктів вчених",
    photo: "img/chel.png",
  },
  {
    name: "Miша",
    info: "Слайдер зображень",
    photo: "img/misha.jpg",
  },
];

const photoEl = document.getElementById("photo");
const nameEl = document.getElementById("name");
const infoEl = document.getElementById("info");
const indicatorsContainer = document.getElementById("indicators-container");

let currentIndex = 0;

function updateSlider() {
  const student = teamData[currentIndex];

  photoEl.style.opacity = 0;

  setTimeout(() => {
    photoEl.src = student.photo;
    nameEl.textContent = student.name;
    infoEl.textContent = student.info;
    photoEl.style.opacity = 1;
  }, 200);

  updateIndicators();
}

function createIndicators() {
  indicatorsContainer.innerHTML = "";
  teamData.forEach((_, index) => {
    const dot = document.createElement("div");

    dot.classList.add("indicator");
    if (index === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });

    indicatorsContainer.appendChild(dot);
  });
}

function updateIndicators() {
  const dots = indicatorsContainer.querySelectorAll(".indicator");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= teamData.length) {
    currentIndex = 0;
  }
  updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = teamData.length - 1;
  }
  updateSlider();
});

createIndicators();
updateSlider();
