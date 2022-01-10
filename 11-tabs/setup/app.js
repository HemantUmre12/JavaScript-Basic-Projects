const buttons = [...document.querySelectorAll(".tab-btn")];
const article = [...document.querySelectorAll(".content")];

buttons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        // console.log(id);
        buttons.forEach((b) => {
            b.classList.remove("active");
        });
        btn.classList.add("active");
        article.forEach((a) => {
            a.classList.remove("active");
        });
        const activeArticle = document.getElementById(id);
        activeArticle.classList.add("active");
    });
});

