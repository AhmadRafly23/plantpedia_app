import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  useEffect(() => {
    const doSearch = (e) => {
      axios
        .get(
          "https://my-json-server.typicode.com/AhmadRafly23/AhmadRafly23/plant?name=" +
            name
        )
        .then((results) => {
          setData(results.data);
        });
    };
    doSearch();
  }, [name]);
  console.log(data);

  const renderList = () => {
    return (
      <main>
        <input
          className="search-input"
          type="text"
          placeholder="Search Plant by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="item-container1">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={`/DetailSearch/${item.name}`}>
                  <img className="imgsearch" src={item.image} alt="" />
                  <div className="search-name">
                    <p>{item.name}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </main>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div className="search-container">
      {renderError()}
      <h1 className="txt">
        Search <span className="span-search">Plant</span>
      </h1>
      {isLoading ? (
        <div className="search-loading">Loading...</div>
      ) : (
        <div className="search-result">{renderList()}</div>
      )}
    </div>
  );
};

export default Search;
