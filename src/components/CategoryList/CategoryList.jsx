import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  try {
    // Changing localhost to 127.0.0.1 often fixes internal connection timeouts
    const res = await fetch("http://127.0.0.1:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API Response Error:", res.status);
      return []; // Return empty array to prevent mapping errors
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
};
const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {/* Check if data exists AND is an array before mapping */}
        {Array.isArray(data) ? (
          data.map((item) => (
            <Link
              href={`/blog?cat=${item.slug}`}
              className={`${styles.category} ${styles[item.slug]}`}
              key={item.id}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </Link>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};
export default CategoryList;