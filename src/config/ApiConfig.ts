import Axios from 'axios';
import { configure } from 'axios-hooks';

const axios = Axios.create({
  baseURL: 'https://vpic.nhtsa.dot.gov/api',
});

configure({ axios });
