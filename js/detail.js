import { getDataById } from "./service.js"

const params = location.search
const id = new URLSearchParams(params).get("id")



const detail = document.getElementById("detail")
 async function getElement(){
    const flag = await getDataById(id)
    showFlag(flag);
    function showFlag(flag) {
        // Border
       const bordersHtml = flag.borders
            ? flag.borders.map(item =>
                `<button onclick="border('${item}')" type="button" class="px-2 py-2 my-3 mx-3 font-semibold border rounded border-gray-800 text-gray-800">${item}</button>`
            ).join(' ')
            : "Bu ada ölkəsidir";

        // Flag
        const detail = document.getElementById("detail")
        detail.innerHTML = `<img src="${flag.flags.svg}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                                <div class="p-6 space-y-2 lg:col-span-5">
                                    <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${flag.name}</h3>
                                    <span class="text-xs dark:text-gray-600">${flag.subregion}</span>
                                    <p>Capital:${flag.capital}</p>
                                    <p>Area:${flag.area}</p>
                                    <p>Poulation:${flag.population}</p>
                                    <p>Ölkənin qonşuları: <br />
                                    ${bordersHtml}
                                </p>
                                </div>`
    }
    // function border(code) {
    //     const country = data.find(item => item.alpha3Code === code);
    //     showFlag(country)
    //     }
    //     function link(x){
    //         const demo = document.getElementById("demo")
    //         const detail = document.getElementById("detail")
    //         detail.innerHTML = ''
    //         const region = data.filter(item => item.region == x.innerHTML)
    //          demo.innerHTML = ''
    //          region.forEach(item => demo.innerHTML +=` <article  class="w-[292px] countryCards flex flex-col dark:bg-gray-900 bg-white shadow-md rounded-sm overflow-hidden ">
    //          <a onclick="showCard('${item.topLevelDomain}')" href="#" aria-label="Te nulla oportere reprimique his dolorum">
    //              <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.flags.svg}">
    //          </a>
    //          <div class="flex flex-col flex-1 p-6">
    //              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">${item.region}</a>
    //              <h3  class="flex-1 py-2 text-lg font-semibold leading-snug">${item.name},${item.capital}</h3>
    //              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
    //                  <span>Population:${item.population}</span>
    //                  <span>Area:${item.area}</span>
    //              </div>
    //          </div>
    //      </article>`)
             
    //      }   
    
}

getElement()