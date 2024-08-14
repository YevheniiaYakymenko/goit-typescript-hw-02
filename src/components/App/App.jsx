import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImg from "../../apiService/img-gallery";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [query, setQuery] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const handleSearch = (query) => {
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    if (page >= totalPages) {
      setLoadMore(false);
    }
  };
  const openModal = (image) => {
    setModalIsOpen(true);
    setModalImage({
      src: image.src,
      alt: image.alt,
    });
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage({});
  };

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImg(query, page);
        setTotalPages(data.total_pages);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setLoadMore(page < data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={"Sorry! Something get wrong!"} />}
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && loadMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    </>
  );
}
