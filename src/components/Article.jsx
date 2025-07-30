
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderMinutesToRead = () => {
    if (!minutes) return null;
    
    let emojis = "";
    
    if (minutes < 30) {
      // For less than 30 minutes, use coffee cups (every 5 minutes, rounded up)
      const coffeeCups = Math.ceil(minutes / 5);
      emojis = "☕️".repeat(coffeeCups);
    } else {
      // For 30+ minutes, use bento boxes (every 10 minutes, rounded up)
      const bentoBoxes = Math.ceil(minutes / 10);
      emojis = "🍱".repeat(bentoBoxes);
    }
    
    return <small>{emojis} {minutes} min read</small>;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {renderMinutesToRead()}
      <p>{preview}</p>
    </article>
  );
}

export default Article;