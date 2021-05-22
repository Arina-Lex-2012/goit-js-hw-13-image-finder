export default function getRefs(){
    return {        
        photosContainer: document.querySelector('.gallery'),
        searchForm: document.querySelector('.js-search-form'),
        loadMoreBtn: document.querySelector('[data-action="load-more"]'),
        scrollContainer: document.querySelector('.scroll'),
    };
};