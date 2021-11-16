import { useEffect, useState } from "react";
import { useParams } from "react-router";
import titleApi from "../api/title";
import Chip from "@mui/material/Chip";
import { borderBottom, Box } from "@mui/system";
import {
  Container,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { StarOutline, Face, Movie } from "@mui/icons-material";
import { CreditList } from "./Credits/CreditList";
import { AwardList } from "./Awards/AwardList";
import { ROOT } from "../navigation/CONSTANTS";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Title() {
  let { titleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState(null);
  const [credits, setCredits] = useState([]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    titleApi.getTitleById(titleId).then(async (data) => {
      setTitle(data);
      setIsLoading(false);
    });

    titleApi.getCreditsByTitle(titleId, 1).then(async (data) => {
      setCredits(data);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>LOADING</h2>
      ) : (
        <>
          <Link href={ROOT} underline="none">
            SEARCH
          </Link>
          <h1>
            {title.title_name}&nbsp;
            <span>({title.release_year})</span>
          </h1>
          <Stack direction="row" spacing={1}>
            {title.genres.map((genre, i) => (
              <Chip
                key={"genre-" + i}
                label={genre.name}
                size="small"
                variant="outlined"
              />
            ))}
          </Stack>
          <br />
          <span>{title.story_line}</span>
          <Box
            sx={{
              paddingTop: "10px",
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "Background.paper",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Awards & Nominations" {...a11yProps(0)} />
              <Tab label="Cast & Crew" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AwardList awards={title.awards} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CreditList credits={credits} />
          </TabPanel>
        </>
      )}
    </>
  );
}
