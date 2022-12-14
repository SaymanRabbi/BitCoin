import { useEffect, useState } from "react"
import axios from 'axios'
const useBitCoinNews = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://bitcoin-news5.p.rapidapi.com/news', {
                    headers: {
                        'X-RapidAPI-Key': '3bf87f6f7cmshf46b0d0da592ac6p123fdajsnedb2f6166bb8',
                        'X-RapidAPI-Host': 'bitcoin-news5.p.rapidapi.com'
                    }
                }
            );
   
            setData(result.data);
        }
        fetchData()
    }, [])
    return [data]
}
export default useBitCoinNews;