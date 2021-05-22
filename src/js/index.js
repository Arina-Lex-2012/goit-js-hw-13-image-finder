import '../sass/main.scss';
import photosTpl from '../templates/photos.hbs';
import getRefs from './get-refs.js';
import PhotosApiService from "./photos-service.js";

const refs = getRefs();

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

// функция поиска
function onSearch(event){
    event.preventDefault();

    photosApiService.query = event.currentTarget.elements.query.value;
    photosApiService.resetPage();
    photosApiService.fetchPhotos().then(photos =>{
        clearPhotosContainer();
        appendPhotosMarkup(photos);
    });
};

// функция догрузки фотографий
function onLoadMore(){
    photosApiService.fetchPhotos().then(appendPhotosMarkup);  
};

// разметка для карточки фотографии
function appendPhotosMarkup(photos){
    console.log(photos);
    refs.photosContainer.insertAdjacentHTML('beforeend', photosTpl(photos[0]));
};

// очистка контейнера
function clearPhotosContainer(){
    refs.photosContainer.innerHTML = '';
};









