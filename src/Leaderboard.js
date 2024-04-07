import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { columns, rows } from './leaderboardData.js';

export default function App() {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}