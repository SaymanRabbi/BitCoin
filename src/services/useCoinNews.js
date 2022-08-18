// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const cryptoNewsHeaders = {
//     'X-RapidAPI-Key': '3bf87f6f7cmshf46b0d0da592ac6p123fdajsnedb2f6166bb8',
//     'X-RapidAPI-Host': 'bitcoin-news5.p.rapidapi.com'
// }
// const baseUrl = 'https://bitcoin-news5.p.rapidapi.com'
// const createRequest = (url) => ({
//     url,headers: cryptoNewsHeaders
// })
// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl

import { useEffect, useState } from "react"
import axios from 'axios'
//     }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: () => createRequest(`/news`)
//         })
//     })
// })

// export const {
//     useGetCryptosNewsQuery
// } = cryptoNewsApi

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