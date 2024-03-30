import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";

export default function ReviewProcess() {
    const theme = useTheme();
    const review_process = useMarkdown("/review_process.md");

    return (
        <Box margin={theme.spacing(8, 0)} textAlign="center">
            <MarkdownBlock mdFile={review_process} />
        </Box>
    );
}
