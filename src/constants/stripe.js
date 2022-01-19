let STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_live_6XqQZqXqQXqQXqQXqQXqQXqQ'
    : process.env.REACT_APP_PUBLISHABLE_KEY;
let STRIPE_SECRET = process.env.REACT_APP_STRIPE_SECRET_KEY;

export { STRIPE_PUBLISHABLE, STRIPE_SECRET };