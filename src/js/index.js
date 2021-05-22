import '../sass/main.scss';
// import photoCardTpl from '../templates/photo-card.hbs';
import getRefs from './get-refs.js';
import PhotosApiService from "./photos-service.js";

const refs = getRefs();

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event){
    event.preventDefault();

    photosApiService.query = event.currentTarget.elements.query.value;
    photosApiService.fetchPhotos();
};

function onLoadMore(event){
    photosApiService.fetchPhotos();  
};






