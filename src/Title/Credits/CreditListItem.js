import { Face, Movie } from "@mui/icons-material";
import { Chip, Grid } from "@mui/material";

export const CreditListItem = ({ credit }) => {
  return (
    <>
      <Grid item>
        <Chip
          label={`${credit.name} - ${credit.role_type}`}
          variant="outlined"
          icon={credit.is_on_screen ? <Face /> : <Movie />}
        />
      </Grid>
    </>
  );
};
