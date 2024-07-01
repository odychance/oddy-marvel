import axios from "axios";
import { publicKey, hash, ts } from "../../../axios/axiosVariables";

export async function getCharacter({characterName}) {

    const urlCharacter = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&apikey=${publicKey}&hash=${hash}`

    try {
        const responseCharacter = await axios.get(urlCharacter)
        return responseCharacter
    } catch (error) {
            console.log(error)
    }
}
