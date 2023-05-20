import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, deps = []) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if (isMounted) {
                    setData(response.data);
                    setIsLoading(false);
                    console.log("fetch activity list again.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, deps);


    return { data, isLoading };
};

export { useFetch };