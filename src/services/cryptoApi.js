import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '3bf87f6f7cmshf46b0d0da592ac6p123fdajsnedb2f6166bb8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const createRequest = (url) => ({
    url,headers: cryptoApiHeaders
})
const baseUrl = 'https://coinranking1.p.rapidapi.com'
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl

    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})
export const {
    useGetCryptosQuery
} = cryptoApi