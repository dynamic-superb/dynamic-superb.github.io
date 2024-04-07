import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import {
  //columns,
  //rows,
  columns_transpose,
  rows_transpose_seen,
  rows_transpose_unseen,
  rows_transpose_all,
} from "./leaderboardData.js";
import { styled } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnsContainer": "#fafafa",
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-columnsContainer, .MuiDataGrid-cell":
    {
      borderRight: "1px solid #d0d0d0",
    },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#d0d0d0",
  },
}));

export default function App() {

  const [rows, setrows] = useState(rows_transpose_all);
  const [columns, setcolumns] = useState(columns_transpose);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 64px)",
        maxWidth: "1152px",
        margin: "auto",
      }}
    >
      <StyledDataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </div>
  );
}
