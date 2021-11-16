import { Grid, Stack } from "@mui/material";
import { AwardListItem } from "./AwardListItem";

export const AwardList = ({ awards }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Stack spacing={1}>
        {awards.map((award, i) => (
          <AwardListItem key={"awardListItem-" + i} award={award} />
        ))}
      </Stack>
    </Grid>
  );
};