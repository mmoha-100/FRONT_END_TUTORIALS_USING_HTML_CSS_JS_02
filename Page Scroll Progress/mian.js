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
