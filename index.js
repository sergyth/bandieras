const schiacciami = document.querySelector('#schiacciami');
const bandiera = document.querySelector('.bandiera');
const bandieraName = document.querySelector('.bandiera-name');


let entries = new Set();
let codes = new Set();
let countries = new Set();
let randomCode = '';

schiacciami.addEventListener('click', () => {
    schiacciami.classList.toggle('schiacciamiClick')
    fetch('https://flagcdn.com/it/codes.json')
    .then(res => res.json())
    .then((data) => {
        entries = Object.entries(data);
        entries.map((entry) => {
          codes.add(entry[0])
        })

        entries.map((entry) => {
            countries.add(entry[1]) 
        })
            randomCode = Math.floor(Math.random() * codes.size);
            let addFlags = 
            `<img
            src="https://flagcdn.com/${[...codes][randomCode] }.svg"
            width="200"
            alt="">`;
            let addFlagsName = `
            <span>${[...countries][randomCode]}`
              
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


 
  
    








