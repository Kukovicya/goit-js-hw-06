// let number  = 0;
// if ul.classList.contains(cls)
console.log(`Number of categories:${document.querySelectorAll('li.item').length}`);

console.log(`Number of categories:${document.querySelector('li.item').firstElementChild.textContent }`);
console.log(`Number of categories:${document.querySelector('li.item ul').childElementCount}`);

console.log(`Number of categories:${document.querySelectorAll('li.item')[1].firstElementChild.textContent }`);
console.log(`Number of categories:${document.querySelectorAll('li.item ul')[1].childElementCount}`);

console.log(`Number of categories:${document.querySelectorAll('li.item')[2].firstElementChild.textContent }`);
console.log(`Number of categories:${document.querySelectorAll('li.item ul')[2].childElementCount}`);