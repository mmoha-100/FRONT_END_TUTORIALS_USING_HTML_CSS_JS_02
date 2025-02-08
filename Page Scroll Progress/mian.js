/*
    scrollHeight: Entire Content + Padding => Whatever The Visibility
    clientHeight: Visible Content + Padding
*/

let scroller = document.querySelector(".scroller");
let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

/* 
    height=> You Already Taken Some Of The Height As User; So You'll Not Include It
    In Your Equation And You'll Treat Taken Height As Nothing By Subtracting It
*/

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`; // To Calculate The Ratio
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        backToTopBtn.style.opacity = "1";
    } else {
        backToTopBtn.style.opacity = "0";
    }
};

// When the user clicks the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
