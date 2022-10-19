import "./SiteHeader.css";
import Button from "@mui/material/Button";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { useNavigateIfNew } from "../../hooks/useNavigateIfNew";

export const SiteHeader = () => {
  const navigate = useNavigateIfNew();

  return (
    <div className="siteHeader-parent">
      <div className="siteHeader">
        <div className="siteHeader-left">
          <div className="siteHeader-title">
            <LocalMoviesIcon
              className="siteHeader-title-logo"
              sx={{ fontSize: "40px" }}
              onClick={() => {
                navigate("/");
              }}
            ></LocalMoviesIcon>
            <Typography
              className="siteHeader-title-text"
              variant="h6"
              noWrap
              component="h6"
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {"\u2001"}AllTheMovies
            </Typography>
          </div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              navigate("popular");
            }}
          >
            Popular
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              navigate("upcoming");
            }}
          >
            Upcoming
          </Button>
        </div>

        <div className="siteHeader-center">
          <SearchBar></SearchBar>
        </div>
        <div className="siteHeader-right"></div>
      </div>
    </div>
  );
};
