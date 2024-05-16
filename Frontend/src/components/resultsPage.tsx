import { Box, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Respone {
  groupName: string;
  studentName: string;
  result: number;
}
export function ResultsPage () {
  const [data, setData] = useState<Respone[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/authResults');
    } else {
      Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
     Axios.get('http://localhost:3001/api/get').then((result) => {
      setData(result.data);
    });
}
  }, [navigate]);

  const columns: GridColDef[] = [
    { field: 'groupName', headerName: 'Grupp', width: 120 },

    { field: 'studentName', headerName: 'Nimi', width: 230 },

    { field: 'result',
      headerName: 'Punktid',
      width: 120,
      renderCell: (params) => {
            const grade = params.value >= 3 ? 'A' : 'MA';
            return <span>{`${params.value} (${grade})`}</span>;
        } },
  ];

    const filteredData = data.filter((item) => item.groupName.toLowerCase().includes(search.toLowerCase())
  );

    return (
      <Box sx={{ display: 'flex',
      justifyContent: 'left',
      margin: '20px',
      marginTop: '50px',
       }}
      >
        <Box sx={{ width: '500px', height: '700px' }}>
          <TextField
            select
            style={{ width: '300px', marginBottom: '10px' }}
            label="Vali grupp"
            onChange={(input) => setSearch(input.target.value)}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
          {search !== '' && (
          <DataGrid
            rows={filteredData}
            columns={columns}
            getRowId={(row) => row.id}
            initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 20 },
        },
      }}
            pageSizeOptions={[20, 30, 40, 50]}
          />
)}
        </Box>
      </Box>
    );
}
