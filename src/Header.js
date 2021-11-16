import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ROOT, TITLES } from "./navigation/CONSTANTS";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href={ROOT} color="inherit" underline="none">
                Titles
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
