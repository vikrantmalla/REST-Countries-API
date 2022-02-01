import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [serverError, setServerError] = useState("");

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data) setData(data);
            } catch (error) {
                setServerError(error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url]);

    return { data, isLoading, serverError };
}