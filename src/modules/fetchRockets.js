import axios from 'axios';

const fetchRockets = () => axios('https://api.spacexdata.com/v3/rockets');
export default fetchRockets;
