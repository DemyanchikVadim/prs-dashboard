import axios from 'axios';

export const deleteLink = (id) => axios.delete(`/api/reports/${id}`).then(data => id);

export const fetchReports = () => axios.get('/api/reports').then(res => res.data);
