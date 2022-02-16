import ArcticleCard from "../components/ArticleCard/ArticleCard";
import styles from "./index.module.scss";
export default function Home({ articleData }) {
  return (
    <div className={styles.pagewrap}>
      {(articleData?.articles || []).map((article) => (
        <ArcticleCard
          key={new Date(article.publishedAt).toTimeString()}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=178f36876baf49f9acd953de29a3b9a5"
  );
  const articleData = await data.json();
  return { props: { articleData } };
}
