
let paramsString = document.location.search; //?titleFilm=${titleFilm}
let searchParamsString = new URLSearchParams(paramsString);
let h1 = document.querySelector('.main__title');

// let getId = searchParamsString.get('titleFilm');
let getId = 'tt1375666'
    
    let urlFilm = `https://imdb-api.com/en/API/Title/k_xb7hjknp/${getId}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
    async function getData() {
        try {
            const response = await fetch(urlFilm);
            const dataFilm = await response.json();
            console.log(dataFilm);
            document.querySelector('.main__title').innerHTML = dataFilm.title;
            document.querySelector('.main-description__score').innerHTML = `IMDb ${dataFilm.ratings.imDb}` ;
            document.querySelector('.main-description__genre').innerHTML = dataFilm.genres.split(',')[0];
            document.querySelector('.main-description__name').innerHTML = dataFilm.type;
            document.querySelector('.main-description__year').innerHTML = dataFilm.year;

        } catch (error) {
            console.log(error);
        }
    }
    getData();
 