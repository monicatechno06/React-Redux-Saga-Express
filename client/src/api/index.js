import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

const getPizzaCoupons = () => {
  try {
    return api.get('pizza/coupons');
  } catch (error) {
    console.log('api getPizzaCoupons error>>', error)
  }
};

export  {
  getPizzaCoupons
}