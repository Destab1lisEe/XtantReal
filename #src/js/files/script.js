const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text1");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "View more") {
    readMoreBtn.innerText = "View less";
  } else {
    readMoreBtn.innerText = "View more";
  }
});

const readMoreBtn2 = document.querySelector(".read-more-btn2");
const text2 = document.querySelector(".text2");

readMoreBtn2.addEventListener("click", (e) => {
  text2.classList.toggle("show-more2");
  if (readMoreBtn2.innerText === "View more") {
    readMoreBtn2.innerText = "View less";
  } else {
    readMoreBtn2.innerText = "View more";
  }
});

const readMoreBtn3 = document.querySelector(".read-more-btn3");
const text3 = document.querySelector(".text3");

readMoreBtn3.addEventListener("click", (e) => {
  text3.classList.toggle("show-more3");
  if (readMoreBtn3.innerText === "View more") {
    readMoreBtn3.innerText = "View less";
  } else {
    readMoreBtn3.innerText = "View more";
  }
});

const readMoreBtn4 = document.querySelector(".read-more-btn4");
const text4 = document.querySelector(".text4");

readMoreBtn4.addEventListener("click", (e) => {
  text4.classList.toggle("show-more4");
  if (readMoreBtn4.innerText === "View more") {
    readMoreBtn4.innerText = "View less";
  } else {
    readMoreBtn4.innerText = "View more";
  }
});

const readMoreBtn5 = document.querySelector(".read-more-btn5");
const text5 = document.querySelector(".text5");

readMoreBtn5.addEventListener("click", (e) => {
  text5.classList.toggle("show-more5");
  if (readMoreBtn5.innerText === "View more") {
    readMoreBtn5.innerText = "View less";
  } else {
    readMoreBtn5.innerText = "View more";
  }
});

