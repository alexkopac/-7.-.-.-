import React from "react";

export default function Article({ data, settings }) {
  const { title, author, text, date, imageUrl } = data;

  const {
    fontFamily = "sans-serif",
    titleColor = "#000",
    titleFontSize = "24px",
    titleAlignment = "center",
    textColor = "#333",
    textFontSize = "16px",
    backgroundColor = "#fff",
    imagePosition = "left",
  } = settings;

  const containerStyle = {
    backgroundColor: backgroundColor,
    fontFamily: fontFamily,
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: imagePosition === "right" ? "row-reverse" : "row",
    gap: "20px",
    alignItems: "start",
    border: "1px solid #ddd",
  };

  return (
    <article style={containerStyle}>
      {imageUrl && (
        <div style={{ flex: "1" }}>
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100%", borderRadius: "4px" }}
          />
        </div>
      )}

      <div style={{ flex: "2" }}>
        <h1
          style={{
            color: titleColor,
            fontSize: titleFontSize,
            textAlign: titleAlignment,
          }}
        >
          {title}
        </h1>

        <div style={{ color: "#666" }}>
          <span>Автор: {author}</span> | <span>Дата: {date}</span>
        </div>

        <p
          style={{
            color: textColor,
            fontSize: textFontSize,
            lineHeight: "1.5",
          }}
        >
          {text}
        </p>
      </div>
    </article>
  );
}
