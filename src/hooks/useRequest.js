import axios from 'axios';
import { useEffect, useState } from 'react';

const useRequest = () => {
    const [exchanges, setExchanges] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://blockchain.info/ticker',
          );
     
          setExchanges([result?.data]);
        };
     
        fetchData();
    }, []);
    return [exchanges];
};

export default useRequest;