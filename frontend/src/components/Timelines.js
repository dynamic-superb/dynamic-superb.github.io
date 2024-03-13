import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import {Typography, Paper, Box} from '@material-ui/core';

const CallForTaskTimeline = () => {
    return (
      <React.Fragment>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent style={{ flex: 0 }}/>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Box textAlign="left" padding={1}>
                  <Typography variant="h6" color="textPrimary">
                    Submit task
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    contributors first open an issue (register, need approval), and NTU members should reply to the issue in <strong>3-5 days</strong>.
                  </Typography>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent style={{ flex: 0 }}/>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Box textAlign="left" padding={1}>
                  <Typography variant="h6" color="textPrimary">
                    Pull requests
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    The first pull requests should be submitted to GitHub before <strong>the beginning of JUN</strong>, and we need to finish the review in <strong>2 weeks</strong>.
                  </Typography>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent style={{ flex: 0 }}/>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Box textAlign="left" padding={1}>
                  <Typography variant="h6" color="textPrimary">
                    Task Acceptance
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    By <strong>the end of JUN</strong> or <strong>the beginning of JUL</strong>, we will have a meeting for the final decision and notify the authors.
                  </Typography>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </React.Fragment>
    )
}
export {
    CallForTaskTimeline,
};