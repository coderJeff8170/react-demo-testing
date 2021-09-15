import React, { useState } from "react";
import axios from "axios";

const TestAxios = ({ url }) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data.greeting);
  };

  return (
    <div>
      <button data-testid="fetchButton" onClick={fetchData}>
        Load Data
      </button>
      {data ? (
        <div data-testid="data">{data}</div>
      ) : (
        <h1 data-testid="loading-text">loading...</h1>
      )}
    </div>
  );
};

export default TestAxios;
