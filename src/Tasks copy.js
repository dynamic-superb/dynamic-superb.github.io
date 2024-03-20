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

const statusText = (text) => {
  switch (text) {
    case "Proposal":
      return (<span style={{color: "purple"}}>{text}</span>)
    case "WIP":
      return (<span style={{color: "red"}}>{text}</span>)
    case "Pending":
      return (<span style={{color: "yellow"}}>{text}</span>)
    case "Accepted":
      return (<span style={{color: "green"}}>{text}</span>)
    default:
      return (<span style={{color: "blue"}}>{text}</span>)
  }
}

// function Task(props) {
//   return (

//   )
// }

function Tasks(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [statusFilter, setStatusFilter] = React.useState(1);
  const [domainFilter, setDomainFilter] = React.useState(1);
  const [statusFilterMenu, setStatusFilterMenu] = React.useState(false);
  const [domainFilterMenu, setDomainFilterMenu] = React.useState(false);

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
      <Section margin={theme.spacing(8, "auto", 1)}>
        <LiftedPaper elevation={3}>
          <Box padding={theme.spacing(3, 2)}>
            <Typography color="textPrimary" variant="body1">
              Filter/Search
            </Typography>
            {/*
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Open Menu
            </Button>
            <Menu anchorEl={statusFilterMenu} keepMounted open={Boolean(statusFilterMenu)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            */}
            <List>
              {taskList.map(({name, description, domain, status, author}) => {
                return (
                  <React.Fragment>
                    <ListItem button>
                      <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                          <Typography noWrap color="textPrimary" variant="body1" className={classes.taskName}>
                            {name}
                          </Typography>
                          <Typography noWrap color="textSecondary" variant="body2">
                            {description}
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Box padding={theme.spacing(0, 1, 1)}>
                              <Chip size="small" label={domain}/>
                            </Box>
                          </Grid>
                          <Grid item>
                            <Typography noWrap color="textPrimary" variant="body2" align="right">
                              {<span style={{fontWeight: "bold"}}>{status} · </span>}{author}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider/>
                  </React.Fragment>
                )
              })}
            </List>
            <Table>
              <TableContainer component={LiftedPaper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Instance</TableCell>
                      <TableCell align="right">BERT-GSLM</TableCell>
                      <TableCell align="right">Whisper&nbsp;(g)</TableCell>
                      <TableCell align="right">ImageBind-LLM&nbsp;(g)</TableCell>
                      <TableCell align="right">Whisper-LLM&nbsp;(g)</TableCell>
                      <TableCell align="right">ASR-ChatGPT&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {["1234", "test", "abcd"].map((row) => (
                      <TableRow key={row}>
                        <TableCell component="th" scope="row">
                          {row}
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
          </Box>
        </LiftedPaper>
      </Section>
      <Box margin={theme.spacing(1, "auto", 6)}>
        <Typography component={"span"} variant="body1" color="textSecondary">
          Want to submit new tasks? Check out<DescriptionButton name={<a>CALL FOR TASK</a>}link="/contribute"/>
        </Typography>
      </Box>
    </React.Fragment>
  );
}

function OldTasks(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Section margin={theme.spacing(8, "auto", 1)}>
        <Title
          title="Tasks"
          description={
            <span>
              General speech processing can be categorized into{" "}
              <Strong>discriminative</Strong> and <Strong>generative</Strong>{" "}
              tasks. The initial release of SUPERB focues on the former, where
              ten tasks are collected from <Strong>five domains</Strong>.
            </span>
          }
        />
        <Grid container direction="row" spacing={2} justify="center">
          {domains.map(({ name }) => (
            <Grid item>
              <AdaptiveLink link={`/tasks#${name}`}>
                <Button variant="outlined">
                  {capitalizeFirstLetter(name.toLowerCase())}
                </Button>
              </AdaptiveLink>
            </Grid>
          ))}
        </Grid>
      </Section>
      {domains.map(({ name, description, tasks }) => {
        return (
          <Section anchorKey={name} margin={theme.spacing(8, "auto", 1)}>
            <Title
              title={capitalizeFirstLetter(name.toLowerCase())}
              description={description}
            />
            <Grid container spacing={5} justify="center">
              {tasks.map(({ name, description }) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <LiftedPaper elevation={3}>
                      <Box padding={theme.spacing(3, 2)}>
                        <Typography
                          color="textPrimary"
                          variant="h6"
                          className={classes.taskName}
                        >
                          {`${name}`}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {description}
                        </Typography>
                      </Box>
                    </LiftedPaper>
                  </Grid>
                );
              })}
            </Grid>
          </Section>
        );
      })}
    </React.Fragment>
  );
}

export default Tasks;
