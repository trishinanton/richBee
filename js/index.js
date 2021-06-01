// const url = 'https://imdb-api.com/en/API/SearchMovie/k_xb7hjknp/Inception2010'
var searchButton = document.getElementById('js_button');
var searchInput = document.getElementById('js_search');

let elem = document.querySelector('.description-film__column');
let parent = document.querySelector('.description-film');
let card = document.querySelector('.card');

let link = document.querySelector('.card__link');



let idFilm;
let urlOptions;
// let slip;


searchButton.addEventListener('click', onButton);


function onButton() {
    let showValue = searchInput.value;
    if (showValue === '') console.log("Enter the name of your favorite movie")
    else {
        let url = `https://imdb-api.com/en/API/SearchMovie/k_xb7hjknp/${showValue}`
        async function getFilm() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                data.results.forEach(function (element, i) {
                    console.log(element);
                    let clone = elem.cloneNode(true);
                    /*  let filmBlock = clone.querySelector('.sketch__name');
                     let filmImg = clone.querySelector('img'); */
                    clone.querySelector('.sketch__name').innerHTML = element.title;
                    clone.querySelector('img').src = element.image;
                    card.appendChild(clone);

                    elem.id = element.id; //на каждой итерации добавляем в id - title
                    
                    /* Запрос ко второй api */
                    idFilm = element.id;
                    async function getOptions() {
                        urlOptions = `https://imdb-api.com/en/API/Title/k_xb7hjknp/${idFilm}/FullActor,FullCast,Posters,Images,Ratings,Wikipedia,`
                        try {
                            const response = await fetch(urlOptions);
                            const data = await response.json();
                            
                            clone.querySelector('.film-value__rating').innerHTML = data.ratings | ImDb8,8; //рейтинг
                            clone.querySelector('.genre__sort').innerHTML = data.type | TVSeries; //тип
                            clone.querySelector('.genre__genreFilm').innerHTML = data.genres | Drama; //жанр
                            clone.querySelector('.genre__year').innerHTML = data.year | 2020;
                            clone.querySelector('.sketch__awards').innerHTML = data.awards | Empty;

                            
                        } catch (error) {

                        }
                    }
                    getOptions();

                })
                            /* Редирект на вторую страницу */
                let slip =document.getElementsByClassName('description-film__column');
                console.log(slip);
                for (let i=0; i< slip.length; i++){
                    slip[i].addEventListener('click',onLink);
                    console.log(slip[i])
                    function onLink(e){
                        let titleFilm = e.currentTarget.id;
                        console.log(titleFilm);
                        window.location.href = `./descripton-film.html?titleFilm=${titleFilm}`;
                    }
                } 
            } catch (error) {
                console.log(error);
            }
        }
        getFilm();

    }

}







// link.addEventListener('click', onCard);



//  var arrayResult = ['ffdfdfd','rhtngnt','newvdrrr'];

/* async function fetchHandler(){
    // let localClone = clone;
    try{
        // const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // arrayResult = data.results
        arrayResult.forEach((el,i) => {
            let localClone = elem.cloneNode(true);
            localClone.id+=`${i}`;
            let name = localClone.querySelector('.sketch__name');
            name.innerHTML=`${el}`;
            parent.appendChild(localClone);
            console.log(name);
        });

    }catch (error){
        console.log(error);
    }
} */

