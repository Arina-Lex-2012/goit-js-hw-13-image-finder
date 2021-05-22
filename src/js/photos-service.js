export default class PhotosApiService{
    constructor(){
        this.searchQuery = '';
    }

    fetchPhotos(searchQuery){
        // const options = {
        //     headers: {
        //         key: '21731016-f00a62a1d829b8e9d99c92f14',
        //     },
        // };
        
        const url= `https://pixabay.com/api/?key=21731016-f00a62a1d829b8e9d99c92f14&image_type=photo&page=1&per_page=12&q=${this.searchQuery}`;

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(photo => {
            console.log(photo);
            // const markup = photoCardTpl(photo);
            // console.log(markup);
        }); 
    }

    get query(){
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery = newQuery;
    }
};