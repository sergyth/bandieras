const schiacciami = document.querySelector('#schiacciami');
const bandiera = document.querySelector('.bandiera');
const bandieraName = document.querySelector('.bandiera-name');


let entries = [];
let randomCode = '';

schiacciami.addEventListener('click', () => {
    schiacciami.classList.toggle('schiacciamiClick')
    fetch('https://flagcdn.com/it/codes.json')
    .then(res => res.json())
    .then((data) => {
        entries = Object.entries(data);
        randomCode = Math.floor(Math.random() * entries.length);

        let addFlags = 
        `<img
        src="https://flagcdn.com/${entries[randomCode][0] }.svg"
        width="200"
        alt="">`;

        let addFlagsName = `
        <span>${entries[randomCode][1]}</span>`
            
        bandiera.innerHTML = '';
        bandiera.innerHTML = addFlags;  
        bandieraName.innerHTML = '';  
        bandieraName.innerHTML = addFlagsName;
        bandieraName.classList.add('black');     
    }) 
})

bandieraName.addEventListener('click', () => {
    bandieraName.classList.toggle('black');
})


 
  
    








