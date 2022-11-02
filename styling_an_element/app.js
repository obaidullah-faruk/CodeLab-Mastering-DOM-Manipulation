const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);

const listItems = document.querySelectorAll('.list-items');
// listItems.style.fontSize = '2rem';

console.log(listItems)

for( i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}


