import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImg, { Image, ModalImage } from "../../apiService/img-gallery";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";


export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [query, setQuery] = useState<string>("");
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage>({});

  const handleSearch = (query: string) => {
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
    if (page >= totalPages) {
      setLoadMore(false);
    }
  };
  const openModal = (image: ModalImage): void => {
    setModalIsOpen(true);
    setModalImage({
      src: image.src,
      alt: image.alt,
    });
  };
  const closeModal = (): void => {
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
        src={modalImage.src || ""}
        alt={modalImage.alt || ""}
      />
    </>
  );
}
