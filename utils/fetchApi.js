import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5ef738dd66msh1957ad2ef55d688p15c5c7jsn20e7bbde357c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}