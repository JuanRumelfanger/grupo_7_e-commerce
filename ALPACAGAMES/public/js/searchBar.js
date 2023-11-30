let searchBar = document.querySelector('#search');
let button = document.querySelector('button');
console.log(button);

button.addEventListener('click', (e)=>{
    e.preventDefault();
    let searchValue = searchBar.value;
    console.log(searchValue);
})