import React from 'react';
import DataTable from 'react-data-table-component';
import data from '../../data';
const MyDataTable = () => {

  const columns = [
    {
      name: 'Name',
      selector:(row)=>row.name,
      sortable: true,
    },
    {
      name: 'Position',
      selector:(row)=>row.position,
      sortable: true,
    },
    {
      name: 'Office',
      selector:(row)=>row.office,
      sortable: true,
    },
    {
      name: 'Age',
      selector:(row)=>row.age,
      sortable: true,
    },
    {
      name: 'Start date',
      selector:(row)=>row.startDate,
      sortable: true,
    },
    {
      name: 'Salary',
      selector:(row)=>row.salary,
      sortable: true,
    },
  ];

  return (
    
        <div>
          <DataTable
         title="Employee Data"
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10} // Number of rows per page
        paginationRowsPerPageOptions={[10, 20, 30]} 
          />
        </div>
  );
};

export default MyDataTable;
