import { useState, useCallback, useEffect } from "react";

export const useMarkdown = (url) => {
    const [markdownText, setMarkdownText] = useState("");

    useEffect(() => {
        fetch(url).then((res) => res.text()).then((text) => setMarkdownText(text));
    }, []);

    return markdownText;
}