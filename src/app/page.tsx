"use client";

import CustomizedHook from "@/component/CustomMultiSelect";
import { Padding } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "#28324B",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    padding: "16px 12px",
    color: "#fff",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "12px 20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const Data = [
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
  ];

  return (
    <Paper sx={{ width: "50%", backgroundColor: "#303C5D" }}>
      <Typography
        sx={{
          p: "10px 12px",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        PLACE ORDER
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ Padding: "0px", m: "10px 12px" }}>
          
          <CustomizedHook />
        </Grid>
        <Grid item xs={12} sx={{ Padding: "0px", m: "10px 12px" }}>
          <FormControl
            variant="standard"
            sx={{ width: "100%", display: "flex", flexDirection: "row" }}
          >
            <BootstrapInput
              defaultValue=""
              id="bootstrap-input"
              placeholder="Price"
              sx={{ width: "80%", borderRight: "0px", fontWeight: "bold" }}
            />
            <Button
              variant="contained"
              sx={{
                width: "20%",
                borderRadius: "0px",
                borderLeft: "#efefef",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#5BA770",
                ":hover": {
                  backgroundColor: "#5BA770",
                },
              }}
            >
              BBO
            </Button>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            Padding: "0px !important",
            pt: "0px !important",
            m: "10px 12px",
          }}
        >
          <FormControl
            variant="standard"
            sx={{ width: "100%", display: "flex", flexDirection: "row" }}
          >
            <BootstrapInput
              defaultValue=""
              id="bootstrap-input"
              placeholder="Quantity (BUY)"
              sx={{ width: "80%", borderRight: "0px", fontWeight: "bold" }}
            />
            <Button
              variant="contained"
              sx={{
                width: "20%",
                borderRadius: "0px",
                borderLeft: "#efefef",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#5BA770",
                ":hover": {
                  backgroundColor: "#5BA770",
                },
              }}
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  ".MuiSvgIcon-root": {
                    path: {
                      fill: "white",
                    },
                  },
                  "::before": {
                    borderBottom: "none !important",
                    color: "#fff !important",
                  },
                  "::after": {
                    borderBottom: "none !important",
                    color: "#fff !important",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Button>
          </FormControl>
        </Grid>

        <Grid
          container
          gap={"10px"}
          sx={{
            paddingTop: "0px !important",
            pl: "15px !important",
            m: "10px 12px",
          }}
          justifyContent={"space-between"}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => {
            return (
              <Grid item key={i} sx={{ paddingLeft: "0px !important" }}>
                <Item>{i} %</Item>
              </Grid>
            );
          })}
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            Padding: "0px !important",
            pt: "0px !important",
            m: "10px 12px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "red",
              width: "100%",
              fontWeight: "bold",
              color: "#fff",
              ":hover": {
                backgroundColor: "red",
              },
            }}
          >
            PLACE ORDER
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            Padding: "0px !important",
            pt: "0px !important",
            m: "10px 12px",
          }}
        >
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              textDecoration: "none",
              border: "none !important",
              color: "#fff",
              ".MuiSvgIcon-root": {
                path: {
                  fill: "white",
                },
              },
              "::before": {
                border: "none !important",
                color: "#fff !important",
              },
              "::after": {
                border: "none !important",
                color: "#fff !important",
              },
              ".MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
            }}
          >
            <MenuItem value="">
              <em>Contract Details</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Home;
