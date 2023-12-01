import { ApiUrl } from '@/config/constant';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: ApiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const GETWINE = () => {
    return axiosInstance.get(`/index.php`).catch(() => {
        return;
    });
};

export const GETFILTRE = () => {
    return axiosInstance.get(`/getfiltre.php`).catch(() => {
        return;
    });
};

export const GETWINEZOOMIN = (id: any) => {
    return axiosInstance.get(`/zoomin.php?id=${id}`).catch(() => {
        return;
    });
};

export const GETWINE__ = async () => {
    try {
        const response = await axiosInstance.get(`/index.php`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Vous pouvez choisir de gérer l'erreur ici ou la propager
    }
};

