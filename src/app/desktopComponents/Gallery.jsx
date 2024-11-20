"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "../../images/galleryDesktop/1.webp";
import img2 from "../../images/galleryDesktop/2.webp";
import img3 from "../../images/galleryDesktop/3.jpg";
import img4 from "../../images/galleryDesktop/4.webp";
import img5 from "../../images/galleryDesktop/5.webp";
import img6 from "../../images/galleryDesktop/6.webp";
import img7 from "../../images/galleryDesktop/13.jpg";
import img8 from "../../images/galleryDesktop/8.webp";
import img9 from "../../images/galleryDesktop/9.webp";
import img10 from "../../images/galleryDesktop/10.webp";
import img11 from "../../images/galleryDesktop/11.webp";
import img77 from "../../images/galleryDesktop/7.webp";
import img12 from "../../images/galleryDesktop/12.webp";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img5, alt: "Gallery Image 5" },
    { src: img6, alt: "Gallery Image 6" },
    { src: img77, alt: "Gallery Image 7" },
    { src: img8, alt: "Gallery Image 8" },
    { src: img9, alt: "Gallery Image 9" },
    { src: img10, alt: "Gallery Image 10" },
    { src: img11, alt: "Gallery Image 11" },
    { src: img12, alt: "Gallery Image 12" },
  ];
  const videoImages = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img5, alt: "Gallery Image 5" },
    { src: img6, alt: "Gallery Image 6" },
    {
      src: img7,
      alt: "Gallery Image 7",
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/wcdGI7rqf4Y",
    },
    { src: img8, alt: "Gallery Image 8" },
    { src: img9, alt: "Gallery Image 9" },
    { src: img10, alt: "Gallery Image 10" },
    { src: img11, alt: "Gallery Image 11" },
    { src: img12, alt: "Gallery Image 12" },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowGallery(true);
    setShowVideoGallery;
  };
  const handleVideoClick = (index) => {
    setSelectedImage(index);
    setShowVideoGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
    setShowVideoGallery(false);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-[1920px] pt-16 mx-auto overflow-hidden text-center">
      <h2 className="mb-10 text-primaryGreen">Gallery</h2>

      <div className="flex gap-4 -ml-[12rem] overflow-x-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 transition-all transform cursor-pointer "
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={579}
              height={300}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4 overflow-x-hidden -ml-[100rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 transition-all transform cursor-pointer "
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={579}
              height={300}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 overflow-x-hidden mt-4 -ml-[200rem]">
        {videoImages.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 transition-all transform cursor-pointer"
            onClick={() => handleVideoClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={579}
              height={300}
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={handleCloseGallery}
            className="absolute p-2 top-4 right-4"
          >
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="37" rx="18" fill="#00061C" />
              <path
                d="M10 27L18 19L26 27M26 11L17.9985 19L10 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="relative flex justify-center w-full px-4">
            <div className="relative max-w-2xl xl:max-w-4xl 2xl:max-w-5xl">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={900}
                height={600}
                className="object-contain w-full h-auto"
              />
            </div>

            <div className="absolute left-0 right-0 flex justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              >
                &#8592;
              </button>
              <button
                onClick={handleNextImage}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}

      {showVideoGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={handleCloseGallery}
            className="absolute p-2 top-4 right-4"
          >
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="37" rx="18" fill="#00061C" />
              <path
                d="M10 27L18 19L26 27M26 11L17.9985 19L10 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="relative flex justify-center w-full px-4">
            <div className="relative w-full max-w-2xl xl:max-w-4xl 2xl:max-w-5xl">
              {videoImages[selectedImage].isVideo ? (
                <div className="relative w-full mx-auto aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`${videoImages[selectedImage].videoUrl}?autoplay=1&rel=0`}
                    title={videoImages[selectedImage].alt}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <Image
                  src={videoImages[selectedImage].src}
                  alt={videoImages[selectedImage].alt}
                  width={900}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              )}
            </div>

            <div className="absolute left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 top-1/2">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              >
                &#8592;
              </button>
              <button
                onClick={handleNextImage}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
