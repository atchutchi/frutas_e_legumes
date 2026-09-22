"use client";
import { useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/lib/content";
import { Photo, ArrowUpRight } from "./site";
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={"/produtos/" + product.slug} className="product-card">
      <Photo
        src={product.image}
        alt={product.name}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
      <div className="product-card-body">
        <div>
          <h3>{product.name}</h3>
          <p>{product.short}</p>
        </div>
        <span className="circle-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
export function Catalog() {
  const [filter, setFilter] = useState("Todos");
  const categories = [
    "Todos",
    "Tropicais",
    "Hortícolas",
    "Produtos Processados",
  ];
  const shown =
    filter === "Todos"
      ? products
      : products.filter((p) => p.category === filter);
  return (
    <>
      <div className="filters" aria-label="Filtrar produtos">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={c === filter}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {shown.length} produtos apresentados
      </p>
      <div className="product-grid">
        {shown.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
