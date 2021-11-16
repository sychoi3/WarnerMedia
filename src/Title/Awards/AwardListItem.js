import { StarOutline } from "@mui/icons-material";
import { Chip, Grid } from "@mui/material";

export const AwardListItem = ({ award }) => {
  return (
    <Grid item>
      <Chip
        label={award.award_name}
        variant="outlined"
        icon={award.award_won ? <StarOutline /> : undefined}
      />
    </Grid>
  );
};