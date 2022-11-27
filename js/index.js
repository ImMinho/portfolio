'use strict'

const modal = $.modal();

let sendMessage = document.querySelector('.send-message');
let inputText = document.querySelector('.text');
const sendBtn = document.querySelector('.send-btn')
const footer__wrap = document.querySelector(".footer__wrap");
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
const renderFooter = () => {
  let Year = new Date();
  let currentYear = Year.getFullYear();

  const renderStr = `
    <p class="footer__text">${currentYear} | MINHO | All rights reserved</p>`;

  footer__wrap.insertAdjacentHTML("beforeend", renderStr);
  console.log(currentYear)
};

renderFooter();




