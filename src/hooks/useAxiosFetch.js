import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosHook = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const fetcData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          console.log("oho");
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetcData(dataUrl);

    const cleanup = () => {
      console.log("mounted!");
      isMounted = false;
      source.cancel();
    };

    return cleanup;
  }, [dataUrl]);

  return { data, isLoading, fetchError };
};

export default useAxiosHook;
