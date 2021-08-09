import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  container: {
    margin: `0px ${theme.spacing(4)}px`,
    height: 545,
    [theme.breakpoints.down("sm")]: {
      height: 0,
      display: "none",
    }
  },
  category: {
    "&:active": {
      backgroundColor: "#e46d47",
      color: "#fff",
    },
  },
  text: {
    width: "100%",
    "&:hover": {
      color: "#e46d47",
    },
    "&:active": {
      color: "#fff",
    },
  },
  nav: {
    minWidth: 250,
    maxWidth: "fit-content",
    margin: "0 auto",
    boxShadow: "0 2px 4px 0 rgb(48 56 97 / 20%)",
    paddingTop: "35px",
    top: "80px",
    height: "calc(100vh - 200px)",
    maxHeight: "calc(100vh - 200px)",
    marginBottom: "100px",
    overflow: "hidden",
    contain: "strict",
  },
  anchor: {
    textDecoration: "none",
    color: "#535665",
    height: 85,
  },
}));
