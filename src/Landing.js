import React, { useRef, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography, Link, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Section, SubSection, SubSubSection } from "./components/Sections";
import { DescriptionButton } from "./components/Buttons";
import { Strong } from "./components/Utilies";
import { subscribe_link } from "./Data";
import YouTube from "react-youtube";
import { Title } from "./components/Titles";
import { HashLink } from "react-router-hash-link";
import { useMarkdown } from "./hooks/markdown-file";
import MarkdownBlock from "./components/MarkdownBlock";

export default function Landing(props) {
  const theme = useTheme();
  const ref = useRef(null);
  //const [width, setWidth] = useState(0);

  /*useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const videoWidth = Math.min(width, 700);
  const opts = {
    height: (videoWidth / 1920) * 1080,
    width: videoWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };*/

  const landing = useMarkdown(
    "https://raw.githubusercontent.com/dynamic-superb/dynamic-superb/main/README.md"
  );

  return (
    <Box margin={theme.spacing(0, 0, 8)} textAlign="center">
      <Box margin={theme.spacing(8, "auto", 1)}>
        <Typography
          variant={useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"}
          color="textPrimary"
        >
          <strong>Dynamic-SUPERB</strong>
        </Typography>
      </Box>
      <Box margin={theme.spacing(1, "auto", 6)}>
        <Typography
          variant={useMediaQuery(theme.breakpoints.up("sm")) ? "h4" : "h5"}
          color="textPrimary"
        >
          Towards A Dynamic, Collaborative, and Comprehensive Instruction-Tuning
          Benchmark for Speech
        </Typography>
      </Box>
      <MarkdownBlock mdFile={landing} landing={true} />
      <SubSection>
        <Grid container justify="space-evenly" spacing={0}>
          {[
            ["ntu-1000.png", "https://www.ntu.edu.tw/english/"],
            ["cmu-1000.png", "https://www.cmu.edu/"],
            ["ut-austin-1000.png", "https://www.utexas.edu/"],
          ].map((filename) => {
            return (
              <Grid item xs={6} sm={4} md={4} key={filename[0]}>
                <a target="_blank" href={filename[1]}>
                  <img src={filename[0]} width="100%" />
                </a>
              </Grid>
            );
          })}
        </Grid>
      </SubSection>
      <Box margin={theme.spacing(8, 0)} textAlign="center">
        <Title title="" />
        <Typography variant="body1" color="textSecondary">
          This website is modified from the source code of{" "}
          <DescriptionButton
            name={<a>the SUPERB official website</a>}
            link="https://github.com/superbbenchmark/superbbenchmark.github.io"
            target="_blank"
            rel="noopener noreferrer"
          />
          .
        </Typography>
      </Box>
    </Box>
  );
  /*
  return (
    <Box ref={ref} margin={theme.spacing(0, 0, 8)}>
      <Box margin={theme.spacing(8, "auto", 1)}>
        <Typography
          variant={useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"}
          color="textPrimary"
        >
          <strong>Dynamic-SUPERB</strong>
        </Typography>
      </Box>
      <Box margin={theme.spacing(1, "auto", 6)}>
        <Typography
          variant={useMediaQuery(theme.breakpoints.up("sm")) ? "h4" : "h5"}
          color="textPrimary"
        >
          Towards A Dynamic, Collaborative, and Comprehensive Instruction-Tuning
          Benchmark for Speech
        </Typography>
      </Box>
      <SubSection>
        <Typography component={"span"} variant="body1" color="textSecondary">
          <a
            href="https://arxiv.org/abs/2309.09510"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dynamic-SUPERB
          </a>{" "}
          is a dynamic and collaborative benchmark aimed at building universal
          speech models capable of leveraging instruction tuning to perform
          multiple tasks in a zero-shot fashion. It provides a platform for
          researchers and developers to evaluate and compare different models in
          various speech-processing tasks.
        </Typography>
        <img src={"dynamic-superb.png"} width="100%" />
      </SubSection>
      <Box maxWidth={800} margin="auto" textAlign="left">
        <SubSection>
          <Title title="News" titleVariant="h4" />
          <Typography component={"span"} variant="body1" color="textSecondary">
            <ul>
              <li>
                <span>
                  <Strong>Apr 11, 2024</Strong>: Apr 11, 2024: We have uploaded
                  general guidelines for task proposals. 📄 Check them out{" "}
                  <HashLink to="/task-proposal">here</HashLink>! 🌟
                </span>
              </li>
              <li>
                <span>
                  <Strong>Apr 11, 2024</Strong>: We have now included the
                  evaluation results for LTU-AS, Qwen-Audio, and SALMONN. 📊 For
                  more details, please see{" "}
                  <a
                    href="https://github.com/dynamic-superb/dynamic-superb/blob/main/docs/leaderboard_gpt_evaluation.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  . 🔍
                </span>
              </li>
              <li>
                <span>
                  <Strong>Mar 14, 2024</Strong>: 📢 We have announced the call
                  for tasks. 🚀 Please click{" "}
                  <HashLink to="/call-for-task">here</HashLink> for detailed
                  information. 📄✨
                </span>
              </li>
              <li>
                <span>
                  <Strong>Mar 13, 2024</Strong>: We have reduced the size of the
                  data for all evaluation instances.
                </span>
              </li>
            </ul>
          </Typography>
        </SubSection>
        <SubSection>
          <Title
            title="About the Benchmark"
            titleVariant="h5"
            titleAlign="left"
          />
          <Typography component={"span"} variant="body1" color="textSecondary">
            <div>
              To kickstart the benchmark, we have included 55 evaluation
              instances by combining 33 tasks and 22 datasets. These cover a
              range of dimensions, including content, speaker, semantics,
              degradation, and paralinguistics. We also included
              audio-processing tasks to evaluate the performance of speech
              models beyond speech-processing. Each task consists of one or more
              datasets (evaluation instances) with labeled examples and
              corresponding instructions.
            </div>
            <br />
            <div>
              A comprehensive list of all tasks along with their detailed
              descriptions can be found{" "}
              <HashLink to="/tasks#top">here</HashLink>. This list provides an
              overview of the tasks currently included in the benchmark, but we
              are actively seeking contributions from the community to expand
              the range of tasks and make the benchmark more diverse and
              comprehensive. You can view the performance of each model on the{" "}
              <HashLink to="/leaderboard">leaderboard</HashLink>.
            </div>
          </Typography>
        </SubSection>
        <SubSection>
          <Title
            title="Call for Contributions"
            titleVariant="h5"
            titleAlign="left"
          />
          <Typography component={"span"} variant="body1" color="textSecondary">
            <div>
              We invite and encourage everyone to contribute to Dynamic-SUPERB
              by submitting new tasks. This is an excellent opportunity to
              showcase your creativity and explore the potential of large spoken
              language models in solving various speech-related problems.
            </div>
            <br />
            <div>
              For contributing new tasks, please refer to the{" "}
              <HashLink to="/task-submission">
                task submission tutorial
              </HashLink>
              . To submit scores for your model, please refer to the{" "}
              <HashLink to="/score-submission">
                score submission tutorial
              </HashLink>
              . We welcome tasks from different domains and applications, as
              long as they are relevant to speech processing.
            </div>
            <br />
            <div>
              All submitted tasks will undergo a{" "}
              <HashLink to="/review-process">review process</HashLink> conducted
              by our team. We will evaluate the quality, feasibility, and
              relevance of each task proposal. Upon approval, the tasks will be
              merged into the Dynamic-SUPERB repository, making them available
              for evaluation and comparison by the community.
            </div>
          </Typography>
        </SubSection>
        <SubSection>
          <Title
            title="Paper and Documentation"
            titleVariant="h5"
            titleAlign="left"
          />
          <Typography component={"span"} variant="body1" color="textSecondary">
            <div>
              A paper introducing Dynamic-SUPERB is now available on{" "}
              <a
                href="https://arxiv.org/abs/2309.09510"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv
              </a>
              .This paper presents an overview of the benchmark, detailing its
              motivation, tasks, and evaluation framework. It also showcases
              experimental results and insights gained from evaluating various
              models on the benchmark tasks. Due to space constraints, ablation
              studies are not included in the paper; however, we present them{" "}
              <a
                href="https://github.com/dynamic-superb/dynamic-superb/blob/main/docs/ablation_studies.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </div>
            <br />
            <div>
              We also provide two introductory documents here:{" "}
              <a
                href="https://github.com/dynamic-superb/dynamic-superb/blob/main/docs/Dynamic-SUPERB-Introduction.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dynamic-SUPERB Introduction
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/dynamic-superb/dynamic-superb/blob/main/docs/Dynamic-SUPERB-Tutorial.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dynamic-SUPERB Tutorial
              </a>
              . These documents offer a high-level introduction to the benchmark
              and include information on dataset formats, evaluation protocols,
              and implementation details.
            </div>
          </Typography>
        </SubSection>
        <SubSection>
          <Title title="Contact Us" titleVariant="h5" titleAlign="left" />
          <Typography component={"span"} variant="body1" color="textSecondary">
            <div>
              If you have any questions or need further assistance, please don't
              hesitate to contact us at{" "}
              <a href="mailto:dynamic.superb.official@gmail.com">
                dynamic.superb.official@gmail.com
              </a>
              . We are here to support and guide you through the process of task
              submission, review, and evaluation. Your feedback and suggestions
              are valuable to us as we strive to make Dynamic-SUPERB a
              comprehensive and useful benchmark for the community.
            </div>
            <br />
            <div>
              Join us in exploring the capabilities of large spoken language
              models and shaping the future of speech-related research and
              applications!
            </div>
          </Typography>
        </SubSection>
        <SubSection>
          <Grid container justify="space-evenly" spacing={0}>
            {[
              ["ntu-1000.png", "https://www.ntu.edu.tw/english/"],
              ["cmu-1000.png", "https://www.cmu.edu/"],
              ["huggingface-1000.png", "https://huggingface.co/"],
            ].map((filename) => {
              return (
                <Grid item xs={6} sm={4} md={4} key={filename[0]}>
                  <a target="_blank" href={filename[1]}>
                    <img src={filename[0]} width="100%" />
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </SubSection>
        <Box margin={theme.spacing(8, 0)} textAlign="center">
          <Title title="" />
          <Typography variant="body1" color="textSecondary">
            This website is modified from the source code of{" "}
            <DescriptionButton
              name={<a>the SUPERB official website</a>}
              link="https://github.com/superbbenchmark/superbbenchmark.github.io"
              target="_blank"
              rel="noopener noreferrer"
            />
            .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
  */
}
