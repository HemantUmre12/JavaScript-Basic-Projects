const questionBtn = [...document.querySelectorAll(".question-btn")];
const questions = [...document.querySelectorAll(".question")];

// TODO using selectors inside the element

questions.forEach( (question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        questions.forEach(( item ) => {
            if(item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

// TODO traversing the dom


// questionBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const parentQuestion = e.currentTarget.parentElement.parentElement;
//         // removing class from other questions
//         questions.forEach( (question) => {
//             if(question !== parentQuestion) {
//                 question.classList.remove("show-text");
//             }
//         })
//         // console.log(parentQuestion);
//         parentQuestion.classList.toggle("show-text");
//     })
// });