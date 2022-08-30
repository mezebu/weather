import axios from "axios";
import { useState, useEffect } from "react";

const useOpenWeather = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cleanUp = false;

    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(url);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    return () => {
      cleanUp = true;
    };
  }, [url]);
  return { data, loading, error };
};

export default useOpenWeather;
