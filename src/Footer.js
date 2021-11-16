import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { TITLES } from "./navigation/CONSTANTS";

export const Footer = () => {
  return (
    <footer style={{ marginTop: "96px" }}>
      <Divider />
      <div
        style={{
          display: "block",
          margin: "24px 0px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          Simon Choi 2021
        </div>
      </div>
    </footer>
  );
};
