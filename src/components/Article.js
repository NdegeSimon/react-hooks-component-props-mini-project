import React from "react";


function Article({ date = "January 1, 1970", title, preview }) {
  return (
    <article>  {/* Should be <article> not <Article> */}
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;