"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../_data/blogs";
import { GoArrowRight } from "react-icons/go";
import pic1 from "@/public/images/home/gallery/pic1.jpg";
import "./BlogPage.css";

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState("All");

  // Extract unique tags from blogData
  const allTags = useMemo(() => {
    const tags = blogData.map((blog) => blog.tag);
    return ["All", ...new Set(tags)];
  }, []);

  // Filter blogs by active tag
  const filteredBlogs = useMemo(() => {
    if (activeTag === "All") return blogData;
    return blogData.filter((blog) => blog.tag === activeTag);
  }, [activeTag]);

  return (
    <section className="blogPage w-full min-h-screen bg-linear-to-r from-primary-green to-secondary-green">
      <div className="container mx-auto flex flex-col gap-10 px-8 py-16">
        {/* ========================= 
            HERO HEADER
        ========================= */}
        <header className="blogPage__header flex flex-col gap-4 items-center text-center pt-10">
          <span className="blogPage__badge">Our Blog</span>
          <h1 className="font-bold heading text-white text-7xl leading-tight">
            Insights & Stories
          </h1>
          <p className="lightText text-white/70 max-w-2xl">
            Expert analysis on supply chain innovation, sustainable farming, and
            the evolving landscape of Indian agriculture.
          </p>
        </header>

        {/* ========================= 
            TAG FILTERS
        ========================= */}
        <div className="blogPage__tags flex flex-wrap justify-center gap-3">
          {allTags.map((tag, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`blogPage__tagBtn ${
                activeTag === tag ? "blogPage__tagBtn--active" : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ========================= 
            BLOG COUNT
        ========================= */}
        <div className="flex justify-between items-center">
          <p className="font-secondary text-white/50 text-sm">
            Showing {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"}
            {activeTag !== "All" && (
              <>
                {" "}
                in <span className="text-white/80 font-medium">{activeTag}</span>
              </>
            )}
          </p>
        </div>

        {/* ========================= 
            BLOG GRID — Editorial 2-Column Layout
        ========================= */}
        <div className="blogPage__grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBlogs.map((blog) => (
            <article key={blog.id} className="blogPage__card group">
              {/* Large Image */}
              <div className="blogPage__cardImage">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="blogPage__cardContent">
                {/* Tag • Date */}
                <div className="blogPage__cardMeta">
                  <span className="blogPage__cardMetaTag">{blog.tag}</span>
                  <span className="blogPage__cardMetaDot">•</span>
                  <span className="blogPage__cardMetaDate">{blog.publishDate}</span>
                </div>

                {/* Title */}
                <h3 className="blogPage__cardTitle">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="blogPage__cardDesc">
                  {blog.desc}
                </p>

                {/* Footer: Reading Time + CTA */}
                <div className="blogPage__cardFooter">
                  <span className="blogPage__cardReadTime">
                    {blog.readingTime}
                  </span>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="blogPage__cardCTA group/cta"
                  >
                    Read More
                    <GoArrowRight className="text-base transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========================= 
            EMPTY STATE
        ========================= */}
        {filteredBlogs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <p className="font-secondary text-white/60 text-lg">
              No articles found in this category.
            </p>
            <button
              onClick={() => setActiveTag("All")}
              className="blogPage__tagBtn blogPage__tagBtn--active"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;