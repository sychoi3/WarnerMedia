import { Grid, Stack } from "@mui/material";
import { CreditListItem } from "./CreditListItem";

export const CreditList = ({ credits }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Stack spacing={1}>
        {credits.map((credit, i) => (
          <CreditListItem key={"creditListItem-" + i} credit={credit} />
        ))}
      </Stack>
    </Grid>
  );
};
