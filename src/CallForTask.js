import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";

export default function CallForTask() {
    const theme = useTheme();
    const call_for_task = useMarkdown("/docs/call_for_tasks.md");

    return (
        <Box margin={theme.spacing(8, 0)} textAlign="center">
            <MarkdownBlock mdFile={call_for_task} />
        </Box>
    );
}
