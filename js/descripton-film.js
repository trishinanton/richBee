
let paramsString = document.location.search; //?titleFilm=${titleFilm}
let searchParamsString = new URLSearchParams(paramsString);
let h1 = document.querySelector('.main__title');
let background = document.querySelector('.wrapper');
let searchInput = document.querySelector ('.header-input__search');
let searchBtn = document.querySelector ('.header-input__button');

// let getId = searchParamsString.get('titleFilm');
let getId = 'tt1375666';
 let api = 'k_pu5c71j7';
    
searchInput.addEventListener('input', onBtn);

function onBtn(){
    let searchIn = searchInput.value;
    let url = `https://imdb-api.com/en/API/SearchMovie/${api}/${searchIn}`
    async function getId(){
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            data.results.forEach(function(element,i){
                let clone = document.querySelector('.offer__name').cloneNode(true);
                clone.innerHTML = element.title;
                document.querySelector('.offer').appendChild(clone);
                document.querySelector('.offer__name').id = element.id;
            })
        }catch(error){
            console.log(error);
        }
    }
    getId();
}





    // let urlFilm = `https://imdb-api.com/en/API/Title/${api}/${getId}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
    // async function getData() {
    //     try {
    //         const response = await fetch(urlFilm);
    //         const dataFilm = await response.json();
    //         console.log(dataFilm);
    //         /* Description Film */
    //         document.querySelector('.main__title').innerHTML = dataFilm.title;
    //         document.querySelector('.main-description__score').innerHTML = `IMDb ${dataFilm.ratings.imDb}` ;
    //         document.querySelector('.main-description__genre').innerHTML = dataFilm.genres.split(',')[0];
    //         document.querySelector('.main-description__name').innerHTML = dataFilm.type;
    //         document.querySelector('.main-description__year').innerHTML = dataFilm.year;
    //         document.querySelector('.wrapper-main').style.background = 'url(https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6791_AL_.jpg) no-repeat'
    //         document.querySelector('.wrapper-main').style.backgroundSize = 'cover';
    //         document.querySelector('.main__specification').innerHTML = dataFilm.awards;

    //         /* Show similars films */
    //         dataFilm.similars.forEach(function(element,index){
        
    //             let clone = document.querySelector('.similar-desc').cloneNode(true);
                
    //             clone.style.display = 'block';
    //             clone.querySelector('.desc-hover__name').innerHTML = element.title;
    //             clone.querySelector('.desc-hover__genre').innerHTML = element.genres;
    //             clone.querySelector('.hover-type__year').innerHTML = element.year;
    //             clone.querySelector('.desc-hover__short').innerHTML = element.plot;
    //             clone.querySelector('.desc-hover__value').innerHTML = `IMDb ${element.imDbRating}`;
    //             clone.querySelector('.similar-desc__img').src = element.image;
    //             // document.querySelector('.similar-desc').style.display = 'none';
    //             document.querySelector('.similar-card').appendChild(clone);
                
                
                
    //                 /* Animation for cards of films */
    //                 clone.addEventListener('mouseover', over);
    //                 clone.addEventListener('mouseout', out);

    //             function over(){
    //                 clone.querySelector('.similar-desc__hover').style.visibility = 'visible';
    //                 clone.querySelector('.desc-hover__name').style.animation = 'transform_name 1.5s';
    //                 clone.querySelector('.desc-hover__short').style.animation = 'transform_short 1s';
    //                 clone.querySelector('.desc-hover__value').style.animation = 'transform_value 2s';
    //             }
    //             function out(){
    //                 clone.querySelector('.similar-desc__hover').style.visibility = 'hidden';
    //                 clone.querySelector('.desc-hover__name').style.animation = 'none';
    //                 clone.querySelector('.desc-hover__short').style.animation = 'none';
    //                 clone.querySelector('.desc-hover__value').style.animation = 'none';
                    
    //             }
                
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // getData();







