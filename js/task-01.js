// let number  = 0;
// if ul.classList.contains(cls)
// console.log(
//   `Number of categories:${document.querySelectorAll("li.item").length}`
// );

// console.log(
//   `Number of categories:${
//     document.querySelector("li.item").firstElementChild.textContent
//   }`
// );
// console.log(
//   `Number of categories:${
//     document.querySelector("li.item ul").childElementCount
//   }`
// );

// console.log(
//   `Number of categories:${
//     document.querySelectorAll("li.item")[1].firstElementChild.textContent
//   }`
// );
// console.log(
//   `Number of categories:${
//     document.querySelectorAll("li.item ul")[1].childElementCount
//   }`
// );

// console.log(
//   `Number of categories:${
//     document.querySelectorAll("li.item")[2].firstElementChild.textContent
//   }`
// );
// console.log(
//   `Number of categories:${
//     document.querySelectorAll("li.item ul")[2].childElementCount
//   }`
// );
const list = document.querySelectorAll("li.item");

console.log(` Number of categories:${list.length} `);

const ul = document.querySelectorAll("#categories>li");
ul.forEach((el) => {
  console.log(
    `Category:${el.firstElementChild.textContent}
Elements:${el.lastElementChild.children.length}`
  );
});
