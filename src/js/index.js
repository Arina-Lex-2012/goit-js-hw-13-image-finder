import '../sass/main.scss';
import photosTpl from '../templates/photos.hbs';
import getRefs from './get-refs.js';
import PhotosApiService from "./apiService.js";

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
    setTimeout(() =>{
        refs.loadMoreBtn.removeAttribute('hidden');
    }, 1000);
};

// функция догрузки фотографий
function onLoadMore(){
    photosApiService.fetchPhotos().then(appendPhotosMarkup);
    console.log(refs.photosContainer);
    
    setTimeout(() =>{
        // refs.photosContainer.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'end',
        //   });
        window.scrollBy(0, 300);
    }, 500);
};

// разметка для карточки фотографии
function appendPhotosMarkup(photos){
    refs.photosContainer.insertAdjacentHTML('beforeend', photosTpl(photos));
};

// очистка контейнера
function clearPhotosContainer(){
    refs.photosContainer.innerHTML = '';
};

