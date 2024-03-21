import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import { useMarkdown } from './hooks/markdown-file';
import MarkdownBlock from './components/MarkdownBlock';
import { HashLink } from 'react-router-hash-link';

export default function Submission(props) {
    const theme = useTheme();
    const task_submission = useMarkdown('/task_submission.md');
    const score_submission = useMarkdown('/score_submission.md');

    return (
        <Box margin={theme.spacing(0, 0, 8)}>
            <Box maxWidth={800} margin="auto" textAlign="left">
                {/* Table of Contents */}
                <Box margin={theme.spacing(4, 0)}>
                    <h2 style={{ textAlign: 'center' }}>Table of Contents</h2>
                    <Box component="ul" style={{ margin: '0 auto', width: 'fit-content' }}>
                        <li>
                            <HashLink smooth to="#task-submission">
                                Task Submission Guidelines
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#score-submission">
                                Score Submission Guidelines
                            </HashLink>
                        </li>
                    </Box>
                </Box>

                {/* Task Submission Section */}
                <Box id="task-submission" margin={theme.spacing(8, 0)} textAlign="center">
                    <MarkdownBlock mdFile={task_submission} />
                </Box>

                {/* Score Submission Section */}
                <Box id="score-submission" margin={theme.spacing(8, 0)} textAlign="center">
                    <MarkdownBlock mdFile={score_submission} />
                </Box>
            </Box>
        </Box>
    );
}
