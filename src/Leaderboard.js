import * as React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import {
  //columns,
  //rows,
  columns_transpose,
  rows_transpose_seen,
  rows_transpose_unseen,
  rows_transpose_all,
} from "./leaderboardData.js";
import { styled } from "@mui/material/styles";
import {
  Box,
  Tab,
  Tabs,
  Paper,
  Typography,
  IconButton,
  Popover
} from "@material-ui/core";
import { useState } from "react";
import HelpIcon from "@material-ui/icons/Help";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: "1px solid #d0d0d0",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#e0e0e0",
  },
}));

export default function App() {
  const [rows, setrows] = useState(rows_transpose_all);
  const [columns, setcolumns] = useState(columns_transpose);

  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const OpenInfo = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const CloseInfo = () => {
    setAnchorEl(null);
  };

  const infoOpen = Boolean(anchorEl);
  const infoId = infoOpen ? 'simple-popover' : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setrows(rows_transpose_all);
    } else if (newValue === 1) {
      setrows(rows_transpose_seen);
    } else if (newValue === 2) {
      setrows(rows_transpose_unseen);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 160px)",
        maxWidth: "1170px",
        margin: "auto",
      }}
    >
      <Paper variant="outlined">
        <Box
          sx={{
            height: "48px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <div style={{ width: "1em" }}></div>
          <Typography variant="h5">Leaderboard</Typography>
          <IconButton size="small" onClick={OpenInfo}>
            <HelpIcon fontSize="inherit" />
          </IconButton>
          <Popover
            id={infoId}
            open={infoOpen}
            anchorEl={anchorEl}
            onClose={CloseInfo}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography style={{padding: "1em"}}>
              <strong>Seen</strong>: The model has been trained on this task.<br />
              <strong>Unseen</strong>: The model has not been trained on this task.<br />
              All metrics for the current benchmark tasks are <strong>ACCURACY</strong>.
            </Typography>
          </Popover>
        </Box>
        <Box sx={{ backgroundColor: "#f0f0f0" }}>
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleChange}
          >
            <Tab label="All" />
            <Tab label="Seen" />
            <Tab label="Unseen" />
          </Tabs>
        </Box>
      </Paper>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
      />
    </div>
  );
}
