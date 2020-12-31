import { useState, useEffect } from "react";

export const useApiData = () => {
    const [appState, setAppState] = useState(
        {
            state: "",
        });

    useEffect(() => {
        setAppState({
            loading: true,
        })
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/JaniecMichal/repos?sort=updated");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const apiData = await response.json();
                setAppState({
                    repositories: apiData,
                    loading: false
                })
            } catch (error) {
                setAppState({
                    error: true,
                })
                console.error("Something bad happened!", error);
            }
        };
        setTimeout(fetchData, 1700);
    }, []);

    return appState;
};
