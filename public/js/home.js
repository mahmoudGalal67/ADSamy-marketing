const item1 = document.querySelector("main .wrapper .item1");
const item2 = document.querySelector("main .wrapper .item2");
const item3 = document.querySelector("main .wrapper .item3");
const item4 = document.querySelector("main .wrapper .item4");
const item5 = document.querySelector("main .wrapper .item5");
const item6 = document.querySelector("main .wrapper .item6");
const allItems = document.querySelectorAll("main .wrapper .item");
const wrapper = document.querySelector("main");

item1.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(../public/images/home/Frame1.png)";
});
item2.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(../public/images/home/Frame2.png)";
});
item3.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(../public/images/home/Frame3.png)";
});
item4.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(../public/images/home/Frame4.png)";
});
item5.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(../public/images/home/Frame5.png)";
});
item6.addEventListener("mouseenter", () => {
  wrapper.style.backgroundImage = "url(../public/images/home/Frame6.png)";
});

Array.from(allItems).map((item) => {
  item.addEventListener("mouseleave", () => {
    wrapper.style.backgroundImage = "url(../public/images/home/mainframe.png)";
  });
});

// help

const helpButton = document.querySelector(".help");
const helpOptions = document.querySelector(".help-options");
const closeOptions = document.querySelector(".help-options .close");

helpButton.addEventListener("click", () => {
  helpOptions.style.right = 0;
});

closeOptions.addEventListener("click", () => {
  helpOptions.style.right = "-300px";
});
