'use strict'

const modal = $.modal();

let sendMessage = document.querySelector('.send-message');
let inputText = document.querySelector('.text');
const sendBtn = document.querySelector('.send-btn')

sendMessage.addEventListener('click',modal.open);


// --------------------------scroll-----------------------
const start = document.querySelector(".start-btn")
const sectionSocialMedia = document.querySelector("#section__social__media")

const scrollTo = (element) => {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
        
    })
}
start.addEventListener("click", () =>{
    scrollTo(sectionSocialMedia);
})
// --------------------------scroll-----------------------





