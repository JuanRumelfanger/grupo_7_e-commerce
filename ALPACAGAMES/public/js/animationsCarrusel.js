let button = document.querySelectorAll(".carrusel-arrow");
let carruselImg = document.querySelector(".carousel-container img");
let src = carruselImg.getAttribute("src");

let srcImages = [
  "https://www.esportmaniacos.com/wp-content/uploads/2021/10/ffvii-min.jpg",
  "https://www.esportmaniacos.com/wp-content/uploads/2021/10/halo-min.jpg",
  "https://www.esportmaniacos.com/wp-content/uploads/2021/10/sm64-min.jpg",
  "https://www.esportmaniacos.com/wp-content/uploads/2021/10/gta-min.jpg",
  "https://www.esportmaniacos.com/wp-content/uploads/2021/10/rdr2-min.jpg",
];

let imgPosition = 4;

console.log(imgPosition);

button[0].addEventListener("click", (e) => {
  imgPosition = imgPosition - 1;
  if (imgPosition < 0) {
    imgPosition = 0;
    e.preventDefault();
  } else {
    src = srcImages[imgPosition];
    carruselImg.setAttribute("src", src);
  }
});

button[1].addEventListener("click", (e) => {
  imgPosition = imgPosition + 1;
  console.log(imgPosition);
  console.log(srcImages.length);
  if (imgPosition >= srcImages.length) {
    imgPosition = 4;
    e.preventDefault();
  } else {
    src = srcImages[imgPosition];
    carruselImg.setAttribute("src", src);
  }
});
