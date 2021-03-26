import { useState, useEffect } from "react";
import { apiRequest } from "./apiRequest";
const apiRequestDelay = 1700;

export const useApiData = () => {
  const [appState, setAppState] = useState({
    repositories: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest();

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const apiData = await response.json();
        setAppState({
          repositories: apiData,
          loading: false,
        });
      } catch (error) {
        setAppState({
          error: true,
        });
        console.error("Something bad happened!", error);
      }
    };
    setTimeout(fetchData, apiRequestDelay);
  }, []);

  return appState;
};
