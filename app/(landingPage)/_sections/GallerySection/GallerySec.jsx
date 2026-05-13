"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";

import crowd1 from "@/public/images/home/gallery/pic1.jpg";
import crowd2 from "@/public/images/home/gallery/pic2.jpg";
import crowd3 from "@/public/images/home/gallery/pic3.jpg";
import crowd4 from "@/public/images/home/gallery/pic4.jpg";
import crowd5 from "@/public/images/home/gallery/pic5.jpg";
import crowd6 from "@/public/images/home/gallery/pic6.jpg";
import crowd7 from "@/public/images/home/gallery/pic7.jpg";
import crowd8 from "@/public/images/home/gallery/pic8.jpg";
import crowd9 from "@/public/images/home/gallery/pic9.jpg";
import crowd10 from "@/public/images/home/gallery/pic10.jpg";
import crowd11 from "@/public/images/home/gallery/pic11.jpg";
import crowd12 from "@/public/images/home/gallery/pic12.jpg";
import crowd13 from "@/public/images/home/gallery/pic13.jpg";
import crowd14 from "@/public/images/home/gallery/pic14.jpg";
import crowd15 from "@/public/images/home/gallery/pic15.jpg";

import specLightLogo from "@/public/images/home/numbers/spec_logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const galleryTags = [
  "All",
  "Facilities",
  "On - Field",
  "Community",
  "Technology",
];

/* =========================
   GALLERY IMAGES
========================= */

const galleryImages = [
  {
    id: 1,
    image: crowd1,
    category: "On - Field",
  },

  {
    id: 2,
    image: crowd2,
    category: "Technology",
  },

  {
    id: 3,
    image: crowd3,
    category: "Facilities",
  },

  {
    id: 4,
    image: crowd4,
    category: "Community",
  },

  {
    id: 5,
    image: crowd5,
    category: "Facilities",
  },

  {
    id: 6,
    image: crowd6,
    category: "Technology",
  },

  {
    id: 7,
    image: crowd7,
    category: "On - Field",
  },

  {
    id: 8,
    image: crowd8,
    category: "Community",
  },

  {
    id: 9,
    image: crowd9,
    category: "Facilities",
  },

  {
    id: 10,
    image: crowd10,
    category: "Technology",
  },

  {
    id: 11,
    image: crowd11,
    category: "Technology",
  },

  {
    id: 12,
    image: crowd12,
    category: "Technology",
  },

  {
    id: 13,
    image: crowd13,
    category: "Facilities",
  },

  {
    id: 14,
    image: crowd14,
    category: "Facilities",
  },

  {
    id: 15,
    image: crowd15,
    category: "Facilities",
  },

  {
    id: 16,
    image: crowd1,
    category: "Technology",
  },

  {
    id: 17,
    image: crowd2,
    category: "On - Field",
  },

  {
    id: 18,
    image: crowd3,
    category: "On - Field",
  },

  {
    id: 19,
    image: crowd4,
    category: "On - Field",
  },

  {
    id: 20,
    image: crowd5,
    category: "On - Field",
  },

  {
    id: 21,
    image: crowd9,
    category: "Community",
  },

  {
    id: 22,
    image: crowd10,
    category: "Community",
  },

  {
    id: 23,
    image: crowd11,
    category: "Community",
  },

  {
    id: 24,
    image: crowd12,
    category: "Community",
  },
];

/* =========================
   FIXED GRID SLOTS
========================= */

const gridSlots = [
  // LARGE
  "col-start-1 col-span-4 row-start-1 row-span-4",

  // WIDE_2
  "col-start-5 col-span-5 row-start-1 row-span-3",

  // SMALL
  "col-start-10 col-span-3 row-start-1 row-span-3",

  // WIDE_1
  "col-start-1 col-span-4 row-start-5 row-span-2",

  // WIDE_3
  "col-start-5 col-span-4 row-start-4 row-span-3",

  // WIDE_3
  "col-start-9 col-span-4 row-start-4 row-span-3",
];

const GallerySec = () => {

  const galleryGridRef = useRef(null);
  const [activeTag, setActiveTag] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);

useGSAP(() => {
  gsap.fromTo(
    ".galleryItem",
    {
      opacity: 0,
      scale: 0.95,
    },
    {
      opacity: 1,
      scale: 1,
      // duration: 1.5,
      stagger: 0.1,
      ease: "power2.out",
    },
  );
}, [activeTag]);


  /* =========================
     FILTERED IMAGES
  ========================= */

  // Full filtered list (for the modal swiper - all images in active tag)
  const allFilteredImages =
    activeTag === "All"
      ? galleryImages
      : galleryImages.filter(item => item.category === activeTag);

  // Grid display: show only 6 images
  const filteredImages = activeTag === "All"
    ? galleryImages.slice(0, 6)
    : allFilteredImages.slice(0, 6);

  // Modal handlers
  const openModal = useCallback((clickedItem) => {
    // Find the index of the clicked image in the full filtered list
    const indexInFull = allFilteredImages.findIndex(img => img.id === clickedItem.id);
    setModalInitialIndex(indexInFull >= 0 ? indexInFull : 0);
    setIsModalOpen(true);
  }, [allFilteredImages]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleModalTagChange = useCallback((tag) => {
    setActiveTag(tag);
    setModalInitialIndex(0);
  }, []);

  return (
    <section id="gallerySec" className="gallerySec relative w-full min-h-screen overflow-hidden bg-linear-to-r from-primary-green to-secondary-green">
      {/* Background Logo */}
      <div className="absolute bottom-0 left-0 w-100 h-100 -translate-x-1/2 opacity-20">
        <Image
          src={specLightLogo}
          alt="Spectrum Logo"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto flex flex-col gap-6 px-8 py-10">
        {/* =========================
            HEADING
        ========================= */}

        <header className="flex justify-between items-end gap-6">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-7xl font-bold heading leading-none">
              Our Vision In Action
            </h2>

            <p className="text-xl font-extralight lightText mt-2">
              Pioneering sustainable agriculture through technology and
              community empowerment.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            {galleryTags.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTag(item)}
                className={`
                  px-5 py-1.5 rounded-full text-sm
                  transition-all duration-300
                  shadow-lg shadow-primary-green

                  ${
                    activeTag === item
                      ? "bg-white text-primary-green"
                      : "bg-[#29653F] text-white"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </header>

        {/* =========================
            GALLERY GRID
        ========================= */}

        <div
          className="ml-auto grid w-300 h-[70vh] grid-cols-12 grid-rows-6 gap-4"
          ref={galleryGridRef}
        >
          {filteredImages
            .map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className={`galleryItem 
                ${gridSlots[index]}
                overflow-hidden rounded-xl
                shadow-xl shadow-primary-green/30
                cursor-pointer
                transition-transform duration-300 hover:scale-[1.02]
              `}
              >
                <Image
                  src={item.image}
                  alt="Gallery Image"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))
            .splice(0, 6)}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={allFilteredImages}
        initialIndex={modalInitialIndex}
        activeTag={activeTag}
        galleryTags={galleryTags}
        onTagChange={handleModalTagChange}
      />
    </section>
  );
};

export default GallerySec;
