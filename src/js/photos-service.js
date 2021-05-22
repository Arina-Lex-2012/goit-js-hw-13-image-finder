export default class PhotosApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    fetchPhotos(){
        // const options = {
        //     headers: {
        //         key: '21731016-f00a62a1d829b8e9d99c92f14',
        //     },
        // };
        
        const url= `https://pixabay.com/api/?key=21731016-f00a62a1d829b8e9d99c92f14&image_type=photo&page=${this.page}&per_page=12&q=${this.searchQuery}`;

        return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.incrementPage();
            // console.log(data.hits);            
            return data.hits;
        }); 
    }

    incrementPage(){
        this.page += 1;
    }

    resetPage(){
        this.page = 1;
    }

    get query(){
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery = newQuery;
    }
};