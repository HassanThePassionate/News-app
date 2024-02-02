import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";

const Cards = () => {
  const [Images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const api = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&f&sortBy=publishedAt&apiKey=19ed7a185eac4262b0edfca908e60f4c&page=${currentPage}`
        );
        const data = api.data;
        setTotalPages(Math.ceil(data.totalResults / 9));
        setImages(data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <section className="section-cards">
        <div className="container">
          <h2 className="text-4xl font-bold my-7">Editor Picks</h2>
          {loading ? (
            <p className="text-3xl">Loading...</p>
          ) : (
            <>
              <div className="cards grid grid-cols-3 gap-10">
                {Images.map((ele, i) => (
                  <div key={i} className="card">
                    <img src={ele.urlToImage} alt="Ent" />
                    <div>
                      <h3>{ele.title}</h3>
                      <p>{ele.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <button className="btn ml-1" onClick={() => handlePageChange(currentPage - 1)}>
                  Prev
                </button>
                <span>{currentPage}</span>
                <button className="btn ml-1" onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cards;
