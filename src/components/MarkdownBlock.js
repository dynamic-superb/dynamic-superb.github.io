import { Section } from "../components/Sections";
import { HashLink } from "react-router-hash-link";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight as colorTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Title } from "./Titles";
import { Typography } from "@material-ui/core";

export default function MarkdownBlock({ mdFile })
{
    return (
        <Section align="left">
            <ReactMarkdown
                children={mdFile}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                PreTag="div"
                                style={colorTheme}
                                showLineNumbers={true}
                                {...props}
                            />
                        ) : (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                PreTag="div"
                                style={colorTheme}
                                {...props}
                            />
                        )
                    },
                    a({ href, children, ...props }) {
                        const match = /https:/.exec(href || '')
                        return match ? (
                            <a href={href} {...props}>
                                {children}
                            </a>
                        ) : (
                            <a href={"https://github.com/dynamic-superb/dynamic-superb/blob/main/docs/" + href} {...props}>
                                {children}
                            </a>
                        )
                    },
                    p({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <Typography component="span" variant="body1" color="textSecondary">{children}</Typography>
                    },
                    h1({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <Title id={id} titleComponent={"h1"} titleVariant={"h4"} titleAlign={"left"} title={children}/>
                    },
                    h2({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h2 id={id}>{children}</h2>
                    },
                    h3({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h3 id={id}>{children}</h3>
                    },
                    h4({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h4 id={id}>{children}</h4>
                    },
                    h5({ level, children, ...props }) {
                        const id = children.toString().replace(/ /g, '-')
                        return <h5 id={id}>{children}</h5>
                    }

                }}
            />
        </Section>
    )
}