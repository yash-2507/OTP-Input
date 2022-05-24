import { useState } from "react";

interface dataType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<dataType[]>([]);
    const [error, setError] = useState(false);

    const getData = async (url: string) => {
        const res = await fetch(url);
        const myData = await res.json();
        setData(myData);
        setLoading(false);
    };
    getData(url);

    return { loading, data, error };
};
