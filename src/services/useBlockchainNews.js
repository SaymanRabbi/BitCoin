import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useBlockchainNews = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://blockchain-news1.p.rapidapi.com/news/NDTV', {
                    headers: {
                        'X-RapidAPI-Key': '3bf87f6f7cmshf46b0d0da592ac6p123fdajsnedb2f6166bb8',
                        'X-RapidAPI-Host': 'blockchain-news1.p.rapidapi.com'
                    }
                }
            );
   
            setData(result.data);
        }
        fetchData()
    }, [])


    return [data]
};

export default useBlockchainNews;