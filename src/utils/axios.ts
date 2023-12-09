import { ApiUrl } from '@/config/constant';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: ApiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const GETWINE = (params: any) => {
    if (params) {
        const queryString = Object.keys(params)
            .filter(key => params[key] !== null && params[key] !== undefined)
            .map(key => `${key}=${encodeURIComponent(params[key])}`)
            .join('&');

        const url = `/index.php?${queryString}`;
        console.log(url); // Affiche la chaîne de requête complète pour test

        return axiosInstance.get(url).catch(() => {
            return;
        });
    } else {
        return axiosInstance.get('/index.php').catch(() => {
            return;
        });
    }

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


export const GETCEPAGESZOOMIN = (id: any) => {
    return axiosInstance.get(`/get_zoomin_cepages.php?id=${id}`).catch(() => {
        return;
    });
};

export const GETALIMENTZOOMIN = (id: any) => {
    return axiosInstance.get(`/get_zoomin_aliments.php?id=${id}`).catch(() => {
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
