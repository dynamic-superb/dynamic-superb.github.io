import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Box, Typography, Grid, Button, Chip, List, ListItem, Divider, Menu } from "@material-ui/core";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Section, SubSection } from "./components/Sections";
import { Title } from "./components/Titles";
import AdaptiveLink from "./components/AdaptiveLink";
import { LiftedPaper } from "./components/LiftedOnHover";
import { capitalizeFirstLetter, Strong } from "./components/Utilies";
import { DescriptionButton } from "./components/Buttons";
import baseline from "./data/baseline.json";

const useStyles = makeStyles((theme) => ({
  taskName: {
    fontWeight: "bold",
  },
}));

const statuses = ["Proposal","WIP","Pending","Accepted","Benchmark"]

const domains = ["content","speaker","semantics","degradation","paralinguistics"]

const taskList = [
  {
    name: "Phoneme Segment Counting Task",
    description: "",
    domain: "paralinguistics",
    status: "WIP",
    author: "123456789ab"
  },
  {
    name: "Emotional Speech Audio Classification_RAVDESS-EmotionalSound",
    description: "",
    domain: "paralinguistics",
    status: "Pending",
    author: "kasohg39"
  },
  {
    name: "Human vocal sound recognition",
    description: "The objective is to separate individual sound sources from a complex audio signal. This task is essential in scenarios where audio recordings contain overlapping sounds from multiple sources, such as different speakers, music, and environmental noises. But in this task, our goal is only to isolate each speaker source into its own track.",
    domain: "Audio",
    status: "Proposal",
    author: "sdgo8h3h"
  },
]

function Tasks(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Section margin={theme.spacing(8, "auto", 1)}>
        <Title
          title="Tasks"
          description={
            <span>
              Lorem Ipsum
            </span>
          }
        />
      </Section>
      <Table>
        <TableContainer component={LiftedPaper}>
          <Table stickyHeader className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Instance</TableCell>
                <TableCell align="right" style={{ minWidth: "300" }}>BERT-GSLM</TableCell>
                <TableCell align="right" style={{ minWidth: "300" }}>Whisper</TableCell>
                <TableCell align="right" style={{ minWidth: "300" }}>ImageBind-LLM</TableCell>
                <TableCell align="right" style={{ minWidth: "300" }}>Whisper-LLM</TableCell>
                <TableCell align="right" style={{ minWidth: "300" }}>ASR-ChatGPT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {baseline.seen.map((instance) => (
                <TableRow key={instance.Instance}>
                  <TableCell component="th" scope="row">
                    {instance.Instance}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Table>
      <Box margin={theme.spacing(1, "auto", 6)}>
        <Typography component={"span"} variant="body1" color="textSecondary">
          Want to submit new tasks? Check out<DescriptionButton name={<a>CALL FOR TASK</a>}link="/contribute"/>
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Tasks;
