import axios from "axios";


export async function fetchData(url) {
    const res = await axios.get(url);
    if (res.status === 200) {
        return res.data;
    }
    return null;
}