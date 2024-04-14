import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
    let { name } = useParams();
    const theme = useTheme();
    const task_submission = useMarkdown(`/benchmark_tasks/${name}/README.md`);

    return (
        <Box margin={theme.spacing(8, 0)} textAlign="center">
            <MarkdownBlock mdFile={task_submission} />
        </Box>
    );
}