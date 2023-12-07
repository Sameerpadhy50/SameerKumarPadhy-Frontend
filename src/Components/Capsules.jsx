import React, { useContext, useState } from 'react';
import { CapsulesContext } from '../Context/CapsulesContext';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export const Capsules = () => {
  const capsules = useContext(CapsulesContext);

  const [selectedRowData, setSelectedRowData] = useState(null);

  const columnDefs = [
    { headerName: 'Capsule Serial', field: 'capsule_serial' },
    { headerName: 'Capsule ID', field: 'capsule_id' },
    { headerName: 'Status', field: 'status' },
    {
      headerName: 'Original Launch',
      field: 'original_launch',
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
      },
    },
    { headerName: 'Landings', field: 'landings' },
    { headerName: 'Type', field: 'type' },
    { headerName: 'Details', field: 'details' },
    { headerName: 'Reuse Count', field: 'reuse_count' },
  ];

  const defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
    maxWidth: 500,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
  };

  const handleClick = () => {
    alert('button Pressed');
  };

  const onRowClicked = (event) => {
    setSelectedRowData(event.data);
    // Open your popup/modal here with the selectedRowData
    // For example, you can use window.alert or a custom modal component
    // Replace window.alert with your preferred popup/modal implementation
    if (event.data) {
      window.alert(JSON.stringify(event.data, null, 2));
    }
  };

  const paginationPageSize = 5; // Number of rows per page
  return (
    <div className='border-4 border-red-500 w-5/6 m-auto '>
      <div className='ag-theme-quartz-auto-dark  h-screen capitalize overflow-hidden'>
        <AgGridReact
          onClick={handleClick}
          rowData={capsules}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={paginationPageSize}
          onRowClicked={onRowClicked}
        />
      </div>
    </div>
  );
};
