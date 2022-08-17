import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Homepage.css";

const Homepage = () => {
  const pageSize = 12;

  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=e59874d817cb4906b3f619547ebccdd8&page=${page}&pageSize=${pageSize}`
        );
        const response = result.data.articles;
        setData([...data, ...response]);
      } catch (error) {
        console.log("Error in homepage", error);
      }
    })();
  }, [page]);

  useEffect(() => {
    const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 1);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="new-wrapper">
      {data?.map((news, idx) => {
        return (
          <div key={idx} className="new-item">
            <h3>{news.title}</h3>
            {/* <img>Hello</img> */}
          </div>
        );
      })}
    </div>
    // <div>
    //     {
    //         dummy &&
    //         dummy.map((news, idx) => (
    //             <div key={idx} >
    //                 <div className="news__component" >
    //                     <span>{idx + 1}</span>
    //                     < h2 style={{ display: 'inline-block' }}> {news.title} < /h2>
    //                         < p onClick={() => { navigate('/category') }}> Read More...</p>
    //                         < /div>
    //                         < /div>

    //                         )

    //                         )

    // }

    //                 </div>
    //                 )
  );
};

export default Homepage;
