import React from "react";
import Article from "./Article";

export default function App() {
  const articleData = {
    title: "Основи React для початківців",
    author: "Іван Іванов",
    text: "React — це JavaScript-бібліотека для створення інтерфейсів користувача. Вона дозволяє розбивати складні UI на маленькі ізольовані шматочки коду, які називаються компонентами.",
    date: "16.05.2024",
    imageUrl: "https://picsum.photos/400/250",
  };

  const articleSettings = {
    imagePosition: "right",
  };

  return (
    <div>
      <Article data={articleData} settings={articleSettings} />

      <Article
        data={{ ...articleData, title: "Друга стаття (центрована)" }}
        settings={{
          ...articleSettings,
          imagePosition: "left",
          backgroundColor: "#e3f2fd",
        }}
      />
    </div>
  );
}
