import axios from 'axios';

export default axios.create({
  baseURL: 'https://nabard.io/api/v1',
  timeout: 600,
  headers: { 'Content-Type': 'application/json' },
});
