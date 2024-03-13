import React, { useRef, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography, Link, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Section, SubSection, SubSubSection } from "./components/Sections";
import { DescriptionButton } from "./components/Buttons";
import { CallForTaskTimeline } from "./components/Timelines";
import { Strong } from "./components/Utilies";
import { subscribe_link } from "./Data";
import YouTube from 'react-youtube';
import { Title } from "./components/Titles";
import { HashLink } from "react-router-hash-link";

export default function Landing(props) {
    const theme = useTheme();
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

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
                    title="Call for Task Contributions"
                    description={
                        <span><Strong><a href={subscribe_link} target="_blank" rel="noopener noreferrer">Subscribe</a></Strong> our e-news to receive all the latest information about SUPERB.</span>
                    }
                />
            </Section>
            <Box margin={theme.spacing(1, "auto", 6)}>
                <p><strong><a href={subscribe_link} target="_blank" rel="noopener noreferrer">Subscribe</a></strong> our e-news to receive all the latest information about SUPERB or <strong>contact us</strong> via</p>
                <p><strong><a href="mailto:superb.announcement@gmail.com" target="_blank">superb.announcement@gmail.com</a></strong></p>
            </Box>
            <Box maxWidth={800} margin="auto" textAlign="left">
                <SubSection>
                    <SubSubSection>
                        <Typography
                            component={"span"}
                            variant="body1"
                            color="textSecondary"
                        >
                                We invite the community to collaboratively contribute diverse tasks to the benchmark, not only to examine the existing models but also to provide insights for the development of future models.
                                The organizers will assess the existing models for these tasks and submit a paper summarizing the results. Accepted task contributors will be listed as authors after organizers, by the number of accepted tasks and in alphabetical order.
                                
                            <div
                                style={{
                                    width: "fit-content",
                                    margin: "auto",
                                    textAlign: "left",
                                }}
                            >
                                <ol>
                                    <li>
                                        A benchmark of ten speech processing
                                        tasks[1]built on established public
                                        datasets,
                                    </li>
                                    <li>
                                        A
                                        <DescriptionButton
                                            name={<a>benchmark toolkit</a>}
                                            link={
                                                "https://github.com/s3prl/s3prl"
                                            }
                                        />
                                        designed to evaluate and analyze
                                        pretrained model performance on various
                                        downstream tasks following the
                                        conventional evaluation protocols from
                                        speech communities,
                                    </li>
                                    <li>
                                        A public
                                        <DescriptionButton
                                            name={<a>leaderboard</a>}
                                            link="/leaderboard"
                                        />
                                        for{" "}
                                        <DescriptionButton
                                            name={<a>submissions</a>}
                                            link="/submit"
                                        />
                                        and performance tracking on the
                                        benchmark.
                                    </li>
                                </ol>
                            </div>
                        </Typography>
                    </SubSubSection>
                    <SubSubSection>
                        <Typography
                            component={"span"}
                            variant="body1"
                            color="textSecondary"
                        >
                            The organizers will assess the existing models for these tasks and submit a paper summarizing the results. Accepted task contributors will be listed as authors after organizers, by the number of accepted tasks and in alphabetical order.
                        </Typography>
                    </SubSubSection>
                    <SubSubSection>
                        <CallForTaskTimeline/>
                    </SubSubSection>
                </SubSection>
                <Box margin={theme.spacing(8, 0)} textAlign="center">
                    <Title title="Review Guidelines"/>
                    <Typography variant="body1" color="textSecondary">
                    Submission Guidelines
                    </Typography>
                </Box>
                <Box margin={theme.spacing(8, 0)} textAlign="center">
                    <Title title="Evaluation Metric Guidelines"/>
                    <Typography variant="body1" color="textSecondary">
                    Evaluation Metric Guidelines
                    </Typography>
                </Box>
                <Box margin={theme.spacing(8, 0)} textAlign="center">
                    <Title title="FAQ"/>
                    <Typography variant="body1" color="textSecondary">
                        FAQ
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
