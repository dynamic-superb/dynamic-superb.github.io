import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useTable, useFilters } from 'react-table';
import modelScores from './leaderboardData.json';

// Styled-components for basic styling
const Styles = styled.div`
  padding: 1rem;
  width: auto;
  max-width: 100%;
  table {
    width: 100%;
    table-layout: auto;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th, td {
      margin: 0;
      width: auto;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Default filter UI component for text input filters
const DefaultColumnFilter = ({
  column: { filterValue, setFilter },
}) => (
  <input
    value={filterValue || ''}
    onChange={e => setFilter(e.target.value || undefined)}
    placeholder={`Search...`}
  />
);

// The Table component
function Table({ columns, data, defaultColumn }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn,
  },
  useFilters // Use filters
  );

  return (
    <table style={{ width: '100%', tableLayout: 'auto' }} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
                {/* Render the column's filter UI */}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// LeaderBoard component to render the leaderboard using the Table component
function LeaderBoard() {
  // Define defaultColumn for filtering
  const defaultColumn = useMemo(() => ({
    Filter: DefaultColumnFilter,
  }), []);

  // Define columns for the table based on the JSON structure
  const columns = useMemo(() => [
    {
      Header: 'Model Name',
      accessor: 'name',
    },
    {
      Header: 'Task',
      accessor: 'task',
    },
    {
      Header: 'Score',
      accessor: 'score',
    },
    {
      Header: 'Model URL',
      accessor: 'modelURL',
      Cell: ({ value }) => <a href={value} target="_blank" rel="noopener noreferrer">Link</a>,
    },
    {
      Header: 'Precision',
      accessor: 'additionalMetrics.precision',
    },
    {
      Header: 'Recall',
      accessor: 'additionalMetrics.recall',
    },
    // Add more columns as needed
  ], []);

  // Use the static imported data as the data source for the table
  const data = useMemo(() => modelScores, []);

  return (
    <Styles>
      <Table columns={columns} data={data} defaultColumn={defaultColumn} />
    </Styles>
  );
}

export default LeaderBoard;
