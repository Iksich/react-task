import React, { useState, useEffect } from "react";
import { Posts } from "./components/Posts";
import "./style.scss";

interface Post {
  id: number;
  title: { rendered: string };
  featured_media: string;
  _embedded: {
    author: { name: string; link: string }[];
    "wp:term": { name: string }[][];
  };
  date: string;
  link: string;
}

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <main>
      <div className="row u-sv3">
        <h1>Canonical Task</h1>
      </div>
      <div className="row u-equal-height u-clearfix">
        {posts.map((post) => (
          <Posts
            key={post.id}
            title={post.title.rendered}
            image={post.featured_media}
            author={post._embedded.author[0].name}
            date={post.date}
            link={post.link}
            authorLink={post._embedded.author[0].link}
            topic={post._embedded["wp:term"][1]?.[0]?.name}
            category={post._embedded["wp:term"][0]?.[0]?.name}
          />
        ))}
      </div>
    </main>
  );
};
