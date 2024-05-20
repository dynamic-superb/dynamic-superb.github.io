import { useState, useCallback, useEffect } from "react";

export const useMarkdown = (url) => {
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.text())
        .then((text) => setMarkdownText(text));
    }
  }, []);

  const fetchMarkdownText = (newUrl) => {
    if (newUrl) {
      fetch(newUrl)
        .then((res) => res.text())
        .then((text) => setMarkdownText(text));
    }
  };

  return { markdownText, fetchMarkdownText };
};
