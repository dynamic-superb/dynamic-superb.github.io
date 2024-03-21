import React, { useRef, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography, Link, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Section, SubSection, SubSubSection } from "./components/Sections";
import { DescriptionButton } from "./components/Buttons";
import { Strong } from "./components/Utilies";
import { subscribe_link } from "./Data";
import YouTube from 'react-youtube';
import { Title } from "./components/Titles";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";
import { HashLink } from "react-router-hash-link";

export default function CallForTask(props) {
    const theme = useTheme();
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const task_submission = useMarkdown("/task_submission.md");
    const review_process = useMarkdown("/review_process.md");

    useEffect(() => {
        setWidth(ref.current.offsetWidth)
    }, []);

    const videoWidth = Math.min(width, 700)
    const opts = {
        height: videoWidth / 1920 * 1080,
        width: videoWidth,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <Box ref={ref} margin={theme.spacing(0, 0, 8)}>
            <Section margin={theme.spacing(8, "auto", 1)}>
                <Title
                    title="Call for Task"
                    titleVariant="h3"
                />
            </Section>
            <Box maxWidth={800} margin="auto" textAlign="left">
                <SubSection>
                    <Typography
                        component={"span"}
                        variant="body1"
                        color="textSecondary"
                    >
                        <div>
                            Instruction-tuning has made substantial achievements in natural language
                            processing (NLP), enabling models to perform various tasks in a zero-shot
                            manner. Contrary to conventional benchmarks with a very limited number
                            of tasks, BIG-BENCH collects over 200 NLP tasks to examine and extend
                            language models’ capabilities. Similarly, instruction-based models are
                            gaining popularity in speech processing as well. To evaluate these models,
                            Dynamic-SUPERB is the first benchmark to include instruction-based speech
                            (and audio) processing tasks. However, we are still far from a truly
                            comprehensive evaluation benchmark considering the high flexibility and
                            emergent capabilities of recent models. We invite the community to
                            collaboratively contribute diverse tasks to the benchmark, not only to
                            examine the existing models but also to provide insights for the
                            development of future models. The organizers will assess the existing
                            models for these tasks and submit a paper summarizing the results.
                            Accepted task contributors will be also listed as co-authors.
                        </div>
                        <br/>
                        <div>
                            To submit tasks, we encourage contributors to carefully read our
                            {" "}<HashLink smooth to="#Task-Submission-Tutorial">submission guidelines</HashLink> and
                            {" "}<HashLink smooth to="#Review-Process">review process</HashLink> beforehand. You are welcome to
                            have discussions on GitHub with not only the organizers but also other
                            researchers in the community. As an evaluation benchmark for universal
                            models, Dynamic-SUPERB embraces various creative tasks. To make sure your
                            submission is included in our review, please submit the pull requests
                            before the middle of June. You are allowed to make some minor revisions
                            according to reviewers' comments after submission if necessary. The final
                            decision will be made around the beginning of July. Due to the limited
                            computational resources, we might not be able to accept all submissions at
                            this time. Organizers will include the accepted contributors in the later
                            paper submission to AAAI 2025 or ICLR 2025, depending on the actual
                            schedule. We will summarize the accepted tasks and the evaluation results
                            on selected baseline models. Each accepted task may cover 1 author in the
                            paper, and each contributor can submit 5 tasks at most. We will consider
                            individual contributions when ordering the authors of the paper.
                            Contributors are sorted first by the number of accepted tasks and then
                            alphabetically if they have the same number. Please notice that we may ask
                            contributors of accepted tasks for technical assistance in the baseline
                            evaluation stage.
                        </div>
                    </Typography>
                </SubSection>

                <Box margin={theme.spacing(8, 0)} textAlign="center">
                    <MarkdownBlock mdFile={task_submission}/>
                </Box>
                <Box margin={theme.spacing(8, 0)} textAlign="center">
                    <MarkdownBlock mdFile={review_process}/>
                </Box>
            </Box>
        </Box>
    );
}
