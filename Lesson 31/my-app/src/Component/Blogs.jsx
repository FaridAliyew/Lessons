import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
  const [data, setData] = useState([]);
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const getData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="blogs-container">
      {data.map((value) => (
        <div key={value.id} className="blog-card">
          <h6 className="blog-title">{value.title}</h6>
          <p className="blog-body">{value.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
