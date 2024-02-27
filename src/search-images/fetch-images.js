import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42576768-44104cf6122517d9bfa05b2c6';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
});

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async getImage() {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&${searchParams}&page=${this.page}`
    );
    this.page += 1;

    return response.data;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}