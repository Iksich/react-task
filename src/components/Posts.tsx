import React from "react";
import styles from "./posts.module.scss";

interface PostProps {
  image: string;
  link: string;
  title: string;
  authorLink: string;
  author: string;
  date: string;
  topic?: string;
  category?: string;
}

export const Posts: React.FC<PostProps> = ({
  image,
  link,
  title,
  authorLink,
  author,
  date,
  topic,
  category,
}) => {
  const publishedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="col-4">
      <div className="p-card shadowed">
        <div className="p-card__content">
          <p className={styles.heading}>{topic}</p>
          <hr className={styles.dotted} />
          <img src={image} alt="" className="p-card__image" />
          <h4 className={styles.expandable_head}>
            <a href={link}>{title}</a>
          </h4>
          <p className="p-heading--6">
            By <a href={authorLink}>{author}</a> on {publishedDate}
          </p>
          <hr className={styles.dotted} />
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};
