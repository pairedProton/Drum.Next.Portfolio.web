"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoClose } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./GalleryModal.css";

const GalleryModal = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  activeTag,
  galleryTags,
  onTagChange,
}) => {
  const swiperRef = useRef(null);
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset swiper to initial index when modal opens or tag changes
  useEffect(() => {
    if (isOpen && swiperRef.current) {
      swiperRef.current.slideTo(initialIndex, 0);
    }
  }, [isOpen, initialIndex, activeTag]);

  // Close when clicking backdrop
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === modalRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="galleryModal__overlay "
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        className="galleryModal__closeBtn bg-primary-green"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <IoClose size={28} />
      </button>

      {/* Tag Buttons */}
      <div className="galleryModal__tags bg-primary-green ">
        {galleryTags.map((tag, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onTagChange(tag)}
            className={`galleryModal__tagBtn ${
              activeTag === tag ? "galleryModal__tagBtn--active" : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Swiper Container */}
      <div className="galleryModal__swiperWrap">
        {/* Custom Navigation - Prev */}
        <button
          className="galleryModal__navBtn galleryModal__navBtn--prev"
          aria-label="Previous image"
        >
          <IoChevronBack size={24} />
        </button>

        <Swiper
          modules={[Navigation, Keyboard]}
          spaceBetween={20}
          slidesPerView={1}
          initialSlide={initialIndex}
          keyboard={{ enabled: true }}
          navigation={{
            prevEl: ".galleryModal__navBtn--prev",
            nextEl: ".galleryModal__navBtn--next",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="galleryModal__swiper"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id} className="galleryModal__slide">
              <div className="galleryModal__imageContainer">
                <Image
                  src={item.image}
                  alt="Gallery Image"
                  width={1920}
                  height={1080}
                  className="galleryModal__image"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation - Next */}
        <button
          className="galleryModal__navBtn galleryModal__navBtn--next"
          aria-label="Next image"
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      {/* Image Counter */}
      <div className="galleryModal__counter">
        {images.length > 0 && (
          <span className="galleryModal__counterText">
            {images.length} {images.length === 1 ? "photo" : "photos"} in &ldquo;{activeTag}&rdquo;
          </span>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;
