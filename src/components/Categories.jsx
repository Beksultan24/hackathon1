import { ForkLeftTwoTone } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { ButtonToolbar } from "react-bootstrap";
const Categories = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  //   console.log(window.location.search);

  const [left, setLeft] = useState("-100%");

  const handleSidebar = () => {
    if (left == "-100%") {
      setLeft("0");
    } else {
      setLeft("-100%");
    }
  };

  return (
    <Box>
      <Button
        onClick={handleSidebar}
        sx={{
          mt: 11,
          color: "black",
          height: "50px",
          width: "150px",
          zIndex: 99,
        }}
      >
        {/* <KeyboardArrowRightRoundedIcon
          
        /> */}
        <span>Categories</span>
      </Button>
      <Paper
        sx={{
          zIndex: 999,
          position: "fixed",
          transition: "500ms",
          left: left,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 2,
          maxHeight: 350,
          maxWidth: 180,
        }}
      >
        <Box>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ mb: 1, color: "black !important" }}
            >
              Categories
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio sx={{ color: "black !important" }} />}
                label="All"
              />
              <FormControlLabel
                value="Maybach"
                control={<Radio sx={{ color: "black !important" }} />}
                label="Maybach"
              />
              <FormControlLabel
                value="AMG"
                control={<Radio sx={{ color: "black !important" }} />}
                label="AMG"
              />
              <FormControlLabel
                value="EQ"
                control={<Radio sx={{ color: "black !important" }} />}
                label="EQ"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <TextField
          sx={{ width: "100%", mt: 3, mr: 2, color: "dark" }}
          onChange={(e) => setSearch(e.target.value)}
          id="input-with-icon-textfield"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Paper>
    </Box>
  );
};

export default Categories;
