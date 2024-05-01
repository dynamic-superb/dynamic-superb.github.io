import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";

export default function TaskProposal() {
    const theme = useTheme();
    const task_submission = useMarkdown("https://raw.githubusercontent.com/dynamic-superb/dynamic-superb/main/docs/task_proposal.md");

    return (
        <Box margin={theme.spacing(8, 0)} textAlign="center">
            <MarkdownBlock mdFile={task_submission} />
        </Box>
    );
}