import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../css/SignUp.css";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const URL = "http://localhost:3001/register";

  const [inputs, setInputs] = useState({
    // id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    await axios.post(URL, inputs);
    setInputs({
      // id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    Swal.fire({
      title: "Welcome!",
      text: "Thanks for signing up. Welcome to our community. We are happy to have you on board.",
      icon: "success",
      confirmButtonText: "Accept",
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="container-cover rs-flex-box-grid mx-auto">
        <Grid container component="main" sx={{ height: "auto" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://www.uplers.com/wp-content/uploads/2020/06/Exclusive-Research-on-Why-Remote-Working-is-the-Future-of-IT-Industry-1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1 }} id="avatar"></Avatar>
              <Typography component="h1" variant="h3" id="title">
                Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Form className="container mt-2" id="form">
                  <div
                    className="container-flex d-flex flex-column m-auto align-items-center"
                    id="boxp"
                  >
                    {Object.keys(inputs).map((key, index) => (
                      <Form.Group
                        className="pt-4"
                        key={index}
                        style={{ maxWidth: "auto" }}
                        id="grp"
                      >
                        <Form.Label id="label">
                          {key === ""
                            ? key.toUpperCase()
                            : key[0].toUpperCase() + key.slice(1)}
                        </Form.Label>
                        <Form.Control
                          id="control"
                          name={key}
                          value={inputs[key]}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    ))}

                    <Button className="mt-3" onClick={handleClick} id="button">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default SignUp;
