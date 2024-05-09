import { Autocomplete, TextField, Typography } from "@mui/material";

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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[A-Za-z]+$/; // for english letters only
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Autocomplete
      freeSolo
      selectOnFocus
      options={searchOptions?.map((item) => item) || []}
      renderOption={(_, option) => (
        <Typography key={option.Key}>{option.item.LocalizedName}</Typography>
      )}
      sx={{ width: 300 }}
      value={searchString}
      onChange={onSelectFunc}
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
