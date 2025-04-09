import axios from 'axios';

const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para manejar errores
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Error en la llamada a la API:', error);
        return Promise.reject(error);
    }
);

export const getData = async() => {
    try {
        const response = await api.get('/api/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async(data) => {
    try {
        const response = await api.post('/api/data', data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export default api;