import { useState, useEffect } from "react";
import { SearchBar } from "./searchBar/serchBar";
import { fetchImg } from "./api";
import "./App.css";

import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/errorMessage";
import { Toaster } from "react-hot-toast";
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const searchImg = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImg([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImg(query.split("/")[1], page);

        setImg((prevImg) => [...prevImg, ...fetchedData.results]);

        setIsVisible(fetchedData.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={searchImg} />
      {error && <ErrorMessage />}
      {img.length > 0 && <ImageGallery items={img} />}
      {loading && <Loader />}
      {img.length > 0 && !loading && isVisible && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
