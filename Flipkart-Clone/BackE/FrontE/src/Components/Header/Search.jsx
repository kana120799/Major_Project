import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Box, styled } from "@mui/material";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const InputPlacehold = styled(InputBase)`
  font-size: unset;
  width: 100%;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputPlacehold placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
