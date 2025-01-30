import { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/api";
import toast from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getImageData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const img = await fetchImages(query, page);
        setImages((prev) => [...prev, ...img]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImageData();
  }, [query, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleChangeQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={handleChangePage} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
