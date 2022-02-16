import React from "react";
import Link from "next/link";
import styles from "./ArticleCard.module.scss";

export default function ArcticleCard({ title, description, urlToImage, url }) {
  return (
    <Link href={url}>
      <div className={styles.cardwrapper}>
        <img src={urlToImage} alt="article thumbnail" />
        <div>
          <Link href={url}>
            <h3>{title}</h3>
          </Link>
        </div>
        <div>{description}</div>
      </div>
    </Link>
  );
}
