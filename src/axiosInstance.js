import axios from 'axios';

const instance = axios.create({
    baseURL: '', // Set your base URL
    timeout: 10000, // Set timeout (in milliseconds)
    headers: {
        'Content-Type': 'application/json',
        // You can add any default headers here
    },
});

// Optionally, you can add request/response interceptors
// instance.interceptors.request.use(config => {
//   // Do something before request is sent
//   return config;
// }, error => {
//   // Do something with request error
//   return Promise.reject(error);
// });

// instance.interceptors.response.use(response => {
//   // Do something with successful response
//   return response;
// }, error => {
//   // Do something with response error
//   return Promise.reject(error);
// });

export default instance;
