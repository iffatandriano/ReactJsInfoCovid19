import React from 'react';
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/countries/indonesia';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate, };
    } catch (error) {

    }
}