import React, { useState, useEffect } from "react";
import { getNews } from "./helper";
import "./Homepage.css";

const Homepage = () => {
  const pageSize = 12;
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const res = getNews(page, pageSize);
    res.then((response) => {
      setData([...data, ...response]);
    });

    console.log(data);
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
