import { Container, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../Theme/loginTheme";
import { height } from "@mui/system";


const Home = () => {
  const [userdata, setUserData] = useState([]);
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
    setUserData(parsedata);
  }, []);
  
  const columns = [
    { field: "Name", headerName: "Name", width: 230 },
    { field: "age", headerName: "Age", width: 300 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "email", headerName: "Email", width: 500 },
  ];
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <Container component="form" display="flex" className="nav-container" sx={{ width: 600, height: 100, p: 5, border: "1px dashed grey",bgcolor:"white" }} >
    <Button type="submit" variant="outlined" sx={{width:100, height:50}} onClick={() => navigate("/")}>Back</Button>
    <Button type="submit" variant="outlined"  sx={{width:200, height:50}} onClick={() => navigate("/Weather")}>Today's Weather</Button>
    <Button type="submit" variant="outlined" sx={{width:100, height:50}} onClick={() => navigate("/foodRecipe")}>Your Recipe</Button>
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
    </ThemeProvider>
    </>
    );
  };
  
  export default Home;
