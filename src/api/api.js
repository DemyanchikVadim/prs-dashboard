import axios from 'axios';

export const fetchReports = () => axios.get('/api/reports').then(res => res.data);
