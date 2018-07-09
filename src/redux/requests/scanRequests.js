import axios from 'axios';

export function callScan() {
    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    }
    return axios
        .get('/api/scan', config)
        .then(response => response.data)
        .catch(error => {
            throw error.response || error;
        });
}