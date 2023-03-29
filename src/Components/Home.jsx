import { Container, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
//import "./css/Home.css";

const Home = () => {
  const [userdata, setuserdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const Datas = require("../Data/users.json");
    const parsedata = Datas.users.map((users) => ({
      id: users.id,
      Name: users.name,
      age: users.age,
      address: users.address,
      email: users.email,
    }));
    setuserdata(parsedata);
  }, []);

  const columns = [
    { field: "Name", headerName: "Name", width: 230 },
    { field: "age", headerName: "Age", width: 300 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "email", headerName: "Email", width: 500 },
  ];

  return (
    <>
      <Container
        className="nav-container"
        sx={{ width: 400, height: 100, p: 5, border: "1px dashed grey" }}
      >
        <Button type="submit" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button type="submit" onClick={() => navigate("/Weather")}>
          Today's Weather
        </Button>
      </Container>
      <Box height="50em">
        <DataGrid
          rows={userdata}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </Box>
    </>
  );
};

export default Home;
