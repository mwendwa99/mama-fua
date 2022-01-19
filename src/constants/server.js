const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
    // ? 'https://polar-reef-90853.herokuapp.com'
    ? 'http://myapidomain.com'
    : 'http://localhost:8080';

export default PAYMENT_SERVER_URL;