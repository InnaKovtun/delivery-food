const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function (event){
    modal.classList.add("is-open");
    //console.log("ok")
});


close.addEventListener("click", function (event){
    modal.classList.remove("is-open");
    //console.log("ok")
});

new WOW().init();