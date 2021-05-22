export default function getRefs(){
    return {        
        photosContainer: document.querySelector('.js-photos-container'),
        searchForm: document.querySelector('.js-search-form'),
        loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    };
};