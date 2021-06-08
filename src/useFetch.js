import { useState, useEffect } from 'react';
const useFetch = (callback, url) => {
  const [loading, SetLoading] = useState(false);
  const fethInitialData = async () => {
    SetLoading(true);
    const response = await fetch(url);
    const InitialData = await response.json();
    callback(InitialData);
    SetLoading(false);
  };
  useEffect(() => {
    fethInitialData();
  }, []);
  return loading;
};

export default useFetch;
