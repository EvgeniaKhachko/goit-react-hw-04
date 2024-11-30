import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = "vXW7F-1Dh6Ci3JW9KFWm9aaVclzdtzvcW8oDVXtK7GM";
const IMAGES_PER_PAGE = 12;

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.resetPage;
    }

    async fetchPost() {
        const REQUEST_PARAMS = new URLSearchParams({
            client_id: API_KEY,
            query: this.searchQuery,
            page: this.page,
            per_page: IMAGES_PER_PAGE,
            orientation: 'landscape',
            content_filter: 'high',
        });

        const response = await axios.get(`${API_URL}?${REQUEST_PARAMS.toString()}`);
        this.page += 1;

        return response.data;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    resetPage() {
        this.page = 1;
    }
}