import CryptoJS from 'crypto-js'

export const publicKey = '3aa8d052f95f1df02bea9ee029cd2f78'
export const privateKey = 'd9769b27a473d3b4d8fa661ca8f7c9484d37c620'
export const ts = Date.now().toString()
export const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()

export const allCredentials = `ts=${ts}&apikey=${publicKey}&hash=${hash}`

export const urlCharacters = `https://gateway.marvel.com/v1/public/characters?limit=20&ts=${ts}&apikey=${publicKey}&hash=${hash}`
export const urlComics = `https://gateway.marvel.com/v1/public/comics?orderBy=modified&limit=8&ts=${ts}&apikey=${publicKey}&hash=${hash}`
export const urlSeries = `https://gateway.marvel.com/v1/public/series?orderBy=modified&limit=8&ts=${ts}&apikey=${publicKey}&hash=${hash}`
