"use strick";
const reviews = [
  {
    id: 1,
    img: "/Our-Review/images/image-jonathan.jpg",
    name: "Jonathan Morgan",
    job: "Web Developer",
    text: "Verified Graduate I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth. “ I was an EMT for many years before I joined the bootcamp.",
  },
  {
    id: 2,
    img: "/Our-Review/images/image-tanya.jpg",
    name: "Tiana Tanya",
    job: "Software Developer",
    text: "I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.",
  },
  {
    id: 3,
    img: "/Our-Review/images/image-kira.jpg",
    name: "Kira Jopan",
    job: "Intern",
    text: "The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers,  Jonathan Walters Verified Graduate The team was very supportive and kept me motivated ",
  },
  {
    id: 4,
    img: "/Our-Review/images/image-victor.jpg",
    name: "Victor Morgan",
    job: "Project Manager",
    text: "I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program.",
  },
  {
    id: 5,
    img: "/Our-Review/images/image-jeanette.jpg",
    name: "Jeanette Duke",
    job: "Product Manager",
    text: "The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.developent experience.  ",
  },
];

//Selection of project
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//Button selection
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.getElementById("random-btn");

let currentItem = 0;

// document.addEventListener("DOMContentLoaded", () => {
//   showMode(currentItem);
// });

function showMode(person) {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showMode(currentItem);
});

nextBtn.addEventListener("click", () => {
  showMode(currentItem);
  currentItem = (currentItem + 1) % reviews.length;
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.trunc(Math.random() * reviews.length - 1);
  showMode(currentItem);
});
