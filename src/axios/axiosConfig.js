import React, { useState, useEffect } from 'react'
import { urlCharacters, urlComics, urlSeries } from './axiosVariables'
import axios from 'axios'

const AxiosConfig = ({ setInfoMarvel, setError}) => {

    

    useEffect(() => {
        const fetchData = async () => {
            try {

                const responseCharacters = await axios.get(urlCharacters)
                
                const responseComics = await axios.get(urlComics)

                const responseSeries = await axios.get(urlSeries)

                setInfoMarvel(["Characters:", responseCharacters.data.data.results, "Comics:", responseComics.data.data.results, "Secies:", responseSeries.data.data.results])
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])
}

export default AxiosConfig