import { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
  let { name } = useParams();
  const theme = useTheme();
  const { markdownText, fetchMarkdownText } = useMarkdown(
    `https://raw.githubusercontent.com/dynamic-superb/dynamic-superb/main/dynamic_superb/benchmark_tasks/${name}/README.md`
  );

  useEffect(() => {
    fetchMarkdownText(
      `https://raw.githubusercontent.com/dynamic-superb/dynamic-superb/main/dynamic_superb/benchmark_tasks/${name}/README.md`
    );
  }, [name]);

  return markdownText ? (
    <Box margin={theme.spacing(8, 0)} textAlign="center">
      <MarkdownBlock mdFile={markdownText} />
    </Box>
  ) : (
    <></>
  );
}
