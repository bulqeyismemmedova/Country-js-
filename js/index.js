let data;
fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
.then(res => res.json())
.then(item =>{
    data = item
    randomCard()
    show()
   
})


const flag = document.getElementById("flag")

function look() {
    window.scrollBy({ top: 500, behavior: "smooth" });
}

const input = document.getElementById("input");
const inputSearc = document.getElementById("inputSearc");
function btnSrc(){
    inputSearc.style.display ="block"
}
function srcc() {
    let filterName = data.filter(item => item.name.toLowerCase().includes(input.value.toLowerCase()));
    console.log(filterName);
    const random = document.getElementById("random")
    random.innerHTML = ""
    flag.innerHTML = ''
    filterName
    .forEach(item => flag.innerHTML += ` <article  class="w-[292px] countryCards flex flex-col  !bg-white shadow-md rounded-sm overflow-hidden">
    <a  href="#" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.flags.svg}">
    </a>
    <div class="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">${item.region}</a>
        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${item.name},${item.capital}</h3>
        <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
            <span>Population:${item.population}</span>
            <span>Area:${item.area}</span>
        </div>
    </div>
</article>` 
    )  
}

function randomCard() {
    const random = document.getElementById("random");
    const randomIndex = Math.floor(Math.random() * data.length);
    const item = data[randomIndex];
    
    random.innerHTML = `
    <img src="${item.flags.svg}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
    <div class="p-6 space-y-2 lg:col-span-5">
        <a href="detail.htm?id=${item.topLevelDomain}" class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${item.name}</a>
        <span class="text-xs dark:text-gray-600">${item.subregion}</span>
        <p>Capital:${item.capital}</p>
        <p>Area:${item.area}</p>
        <p>Poulation:${item.population}</p>
    </div>`
}


let num = 8
function show(){
    flag.innerHTML = ""
    data
    .slice(0,num)
    .forEach(item => flag.innerHTML += ` <article  class="w-[292px] countryCards flex flex-col  bg-white shadow-md rounded-sm overflow-hidden">
    <a  href="detail.htm?id=${item.topLevelDomain}" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.flags.svg}">
    </a>
    <div class="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="detail.htm" aria-label="Te nulla oportere reprimique his dolorum">${item.region}</a>
        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${item.name},${item.capital}</h3>
        <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
            <span>Population:${item.population}</span>
            <span>Area:${item.area}</span>
        </div>
    </div>
</article>`   
);
}
function add(){
    num += 16
    show()
}
function link(x){
   const demo = document.getElementById("demo")
   const demo2 = document.getElementById("demo2")
   demo2.innerHTML = ''
   const region = data.filter(item => item.region == x.innerHTML)
    demo.innerHTML = ''
    region.forEach(item => demo.innerHTML +=` <article  class="w-[292px] countryCards flex flex-col dark:bg-gray-900 bg-white shadow-md rounded-sm overflow-hidden ">
    <a  href="detail.htm?id=${item.topLevelDomain}" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.flags.svg}">
    </a>
    <div class="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">${item.region}</a>
        <h3  class="flex-1 py-2 text-lg font-semibold leading-snug">${item.name},${item.capital}</h3>
        <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
            <span>Population:${item.population}</span>
            <span>Area:${item.area}</span>
        </div>
    </div>
</article>`)
    
}

// burgeer

function burger(status) {
    const menuBurger = document.getElementById("menuBurger")
    menuBurger.style.right = status ? '0' : '-100%'
}
