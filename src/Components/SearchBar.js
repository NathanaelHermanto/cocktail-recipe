import React from 'react';
import { FormControl, TextField, InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import  SearchIcon  from '@mui/icons-material/Search' 

const SearchBar = ({ setSearchQuery, onSubmit }) => {
  return (
    <>
      <FormControl
        onSubmit={onSubmit}
        fullWidth>
        <TextField
          fullWidth
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          variant="outlined"
          placeholder="Search a drink"
          InputProps={{
            endAdornment:  (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
              </InputAdornment>
            ) 
          }}
          sx={{mt: 1, mb: 1, }}
        />
      </FormControl>
    </>
  )
}

export default SearchBar