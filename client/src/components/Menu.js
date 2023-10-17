import React, { useState } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import getResults from "../util";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

/**
 * Takes in input from user about the product they would like to see the prices for and routes the request to Results page
 * @returns
 */
function Menu() {
  const navigate = useNavigate();

  const fetchResults = async () => {
    let result = null;
    try {
      result = await getResults(searchWeb, searchItem);
      navigate("/results", { state: { response: result } });
    } catch (error) {
      console.log(error);
    } finally {
      setButton("Fetched");
    }

    //props.getResult(response);
  };

  const handleSubmission = () => {
    setButton("Fetching");
    fetchResults();
  };

  const [button, setButton] = useState("Default");
  const [searchItem, setSearchItem] = useState(undefined);
  const [searchWeb, setSearchWeb] = useState(undefined);

  return (
    <div>
      <div style={{ display: "flex", marginLeft: "1vw", marginTop: "2vh" }}>
        {button === "Default" ? (
          <Stack direction="row" alignItems="center" spacing={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              onChange={(e) => setSearchItem(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel variant="outlined" htmlFor="outlined-basic1">
                Website Name
              </InputLabel>
              <Select
                id="outlined-basic1"
                label="Website Name"
                variant="outlined"
                onChange={(e) => setSearchWeb(e.target.value)}
              >
                <MenuItem value="az">Amazon</MenuItem>
                <MenuItem value="wm">Walmart</MenuItem>
                <MenuItem value="eb">Ebay</MenuItem>
                <MenuItem value="cc">Costco</MenuItem>
                <MenuItem value="tg">Target</MenuItem>
                <MenuItem value="bb">BestBuy</MenuItem>
                <MenuItem value="all">All</MenuItem>
              </Select>
            </FormControl>

            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmission}>
              Search Item
            </Button>

          </Stack>
        ) : button === "Fetching" ? (
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Menu;
