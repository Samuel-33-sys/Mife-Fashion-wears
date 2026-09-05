"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Dresses",
    image: "/images/character-4.jpeg",
    description: "Elegant silhouettes designed to make every moment unforgettable.",
  },
  {
    name: "Tops",
    image: "/images/character-3.jpeg",
    description: "Refined essentials and statement pieces for effortless style.",
  },
  {
    name: "Outerwear",
    image: "/images/character-2.jpeg",
    description: "Layer your look with timeless, sophisticated outerwear.",
  },
  {
    name: "Bottoms",
    image: "/images/character-1.jpeg",
    description: "Modern cuts designed to complete your signature look.",
  },
  {
    name: "Bags",
    image: "/images/character-2.jpeg",
    description: "Luxury-inspired accessories made to elevate every outfit.",
  },
  {
    name: "Accessories",
    image: "/images/character-3.jpeg",
    description: "The finishing touches that make your style uniquely yours.",
  },
];

export default function CategoryShowcase() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) =>
      current === 0 ? categories.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % categories.length);
  };

  const getPosition = (index) => {
    const total = categories.length;
    let position = index - active;

    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;

    return position;
  };

  return (
    <section className="categoryShowcase" id="shop">
      <div className="categoryHeading">
        <p className="eyebrow">EXPLORE YOUR STYLE</p>
        <h2>
          SHOP BY <em>CATEGORY</em>
        </h2>
        <p className="categoryIntro">
          Discover carefully selected pieces designed to express your
          individuality.
        </p>
      </div>

      <div className="categoryCarousel">

        <button
          className="categoryArrow categoryArrowLeft"
          onClick={previous}
          aria-label="Previous category"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="categoryStage">
          {categories.map((category, index) => {
            const position = getPosition(index);

            return (
              <button
                key={category.name}
                className={`categoryCard ${
                  position === 0 ? "active" : ""
                }`}
                style={{
                  "--position": position,
                }}
                onClick={() => setActive(index)}
                aria-label={`View ${category.name}`}
              >
                <div className="categoryImage">
                  <img
                    src={category.image}
                    alt={category.name}
                  />

                  <div className="categoryOverlay">
                    <span>EXPLORE</span>
                    <ArrowRight size={17} />
                  </div>
                </div>

                <div className="categoryCardInfo">
                  <span className="categoryNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{category.name}</h3>

                    {position === 0 && (
                      <p>{category.description}</p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <button
          className="categoryArrow categoryArrowRight"
          onClick={next}
          aria-label="Next category"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="categoryBottom">
        <div className="categoryDots">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Select ${category.name}`}
            />
          ))}
        </div>

        <a href="#new" className="categoryShopLink">
          SHOP ALL COLLECTIONS
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}