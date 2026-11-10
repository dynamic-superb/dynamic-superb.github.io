import { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";
import { useParams } from "react-router-dom";

export default function Docs() {
  let { title } = useParams();
  const theme = useTheme();
  const docsList = [
    "ablation-studies",
    "call-for-tasks",
    "keywords",
    "leaderboard",
    "leaderboard-gpt-evaluation",
    "metric-guidelines",
    "review-process",
    "score-submission",
    "task-list",
    "task-proposal",
    "task-submission",
  ];

  const { markdownText, fetchMarkdownText } = useMarkdown(
    docsList.includes(title)
      ? `https://raw.githubusercontent.com/dynamic-superb/dynamic-superb/main/docs/${title.replace(
          /-/g,
          "_"
        )}.md`
      : null
  );

  useEffect(() => {
    fetchMarkdownText(
      docsList.includes(title)
        ? `https://raw.githubusercontent.com/dynamic-superb/dynamic-superb/main/docs/${title.replace(
            /-/g,
            "_"
          )}.md`
        : null
    );
  }, [title]);

  return markdownText ? (
    <Box margin={theme.spacing(8, 0)} textAlign="center">
      <MarkdownBlock mdFile={markdownText} />
    </Box>
  ) : (
    <></>
  );
}
