import { Section } from "../components/Sections";
import { HashLink } from "react-router-hash-link";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight as colorTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Title } from "./Titles";
import { Typography } from "@material-ui/core";

const replacements = {
  "task_list.md": "/tasks",
  "task_submission.md": "/task-submission",
  "review_process.md": "/review-process",
};

export default function MarkdownBlock({ mdFile }) {
  return (
    <Section align="left">
      <ReactMarkdown
        children={mdFile}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                style={colorTheme}
                showLineNumbers={true}
                {...props}
              />
            ) : !inline ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                PreTag="div"
                style={colorTheme}
                {...props}
              />
            ) : (
              <code
                style={{
                  backgroundColor: "#e0e0e0",
                  color: "#000",
                  display: "inline-block",
                  borderRadius: "0.5em",
                  padding: "0 0.25em",
                  fontSize: "90%",
                }}
              >
                {children}
              </code>
            );
          },
          a({ href, children, ...props }) {
            return replacements[href] ? (
              <HashLink to={replacements[href]}>{children}</HashLink>
            ) : /https:/.exec(href || "") ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                {children}
              </a>
            ) : (
              <HashLink to={href}>
                {children}
              </HashLink>
            );
          },
          img({ src, ...props }) {
            return <img src={`docs/${src}`} alt={src} width="100%" />;
          },
          p({ level, children, ...props }) {
            const id = children.toString().replace(/ /g, "-");
            return (
              <Typography
                component="span"
                variant="body1"
                color="textSecondary"
              >
                {children}
              </Typography>
            );
          },
          h1({ level, children, ...props }) {
            const id = children.toString().replace(/ /g, "-");
            return (
              <Title
                id={id}
                titleComponent={"h1"}
                titleVariant={"h4"}
                titleAlign={"center"}
                title={children}
              />
            );
          },
          h2({ level, children, ...props }) {
            const id = children.toString().replace(/ /g, "-");
            return <h2 id={id}>{children}</h2>;
          },
          h3({ level, children, ...props }) {
            const id = children.toString().replace(/ /g, "-");
            return <h3 id={id}>{children}</h3>;
          },
          h4({ level, children, ...props }) {
            const id = children.toString().replace(/ /g, "-");
            return <h4 id={id}>{children}</h4>;
          },
          h5({ level, children, ...props }) {
            const id = children.toString().replace(/ /g, "-");
            return <h5 id={id}>{children}</h5>;
          },
        }}
      />
    </Section>
  );
}
