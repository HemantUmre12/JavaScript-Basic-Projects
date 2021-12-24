// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// ! global funtions

const $ = (query) => document.querySelector(query);

// ! variables

const personImage = $("#person-img");
const author = $("#author");
const job = $("#job");
const info = $("#info");
const prevButton = $(".prev-btn");
const nextButton = $(".next-btn");
const randomButton = $(".random-btn");

function displayReview(idx) {
  const currReview = reviews[idx];
  personImage.src = currReview.img;
  author.innerText = currReview.name;
  job.innerText = currReview.job;
  info.innerText = currReview.text;
}

let currentReviewIdx = 0;
const numberOfReviews = reviews.length;

window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  displayReview(0);
})

nextButton.addEventListener("click", () => {
  if(currentReviewIdx === numberOfReviews - 1) {
    currentReviewIdx = 0;
  }
  else {
    currentReviewIdx++;
  }
  displayReview(currentReviewIdx);
})

prevButton.addEventListener("click", () => {
  if(currentReviewIdx === 0) {
    currentReviewIdx = numberOfReviews - 1;
  }
  else {
    currentReviewIdx--;
  }
  displayReview(currentReviewIdx);
})

randomButton.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * numberOfReviews);
  displayReview(idx);
})



