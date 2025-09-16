import { useState, useEffect } from "react";
import api from "../utils/api";

const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get(url, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const postData = async (postUrl, postData) => {
    try {
      setLoading(true);
      const response = await api.post(postUrl || url, postData, options);
      setData(response.data);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Terjadi kesalahan");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url && options.autoFetch !== false) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error, refetch: fetchData, postData };
};

export default useApi;
