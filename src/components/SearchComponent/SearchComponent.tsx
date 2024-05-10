import { Autocomplete, Button, TextField, Theme } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface SearchComponentProps {
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectFunc: (e: React.ChangeEvent<any>, values: string) => void;
  searchOptions: any[];
  searchString: string;
}

const SearchComponent = ({
  onChangeFunc,
  onSelectFunc,
  searchOptions,
  searchString,
}: SearchComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[A-Za-z]+$/; // for english letters only
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };

  // why do i even need custom render option ?
  // accuweather api returns cities with the same name
  // autocomplete default key is the label which is the city name
  // than react throw "same key" error
  // using state and custom btn to handle the issue
  const handleOnOptionClick = (_: ChangeEvent<any>, label: string) => {
    onSelectFunc(_, label);
    toggleOpen();
  };

  return (
    <Autocomplete
      options={searchOptions?.map((item) => item) || []}
      onOpen={toggleOpen}
      onClose={toggleOpen}
      open={isOpen}
      renderOption={(_, option) => (
        <Button
          onClick={(_) => handleOnOptionClick(_, option?.LocalizedName)}
          variant="dropdown"
          key={option?.Key}
        >
          {option?.LocalizedName}
        </Button>
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      getOptionLabel={() => searchString}
      sx={{
        width: 300,
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: (theme: Theme) => theme.palette.common.purple,
          borderWidth: "2px",
        },
      }}
      value={searchString}
      renderInput={(params) => (
        <TextField
          key={params.id}
          lang="en"
          onKeyDown={handleKeyDown}
          onChange={onChangeFunc}
          {...params}
          label="City"
        />
      )}
    />
  );
};

export default SearchComponent;
