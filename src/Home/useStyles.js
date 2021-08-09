import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    height: "100vh",
  },
  content: {
    maxWidth: 1200,
    minWidth: 1200,
    margin: "0 auto",
  },
  sidebar: {
    maxHeight: "90vh",
  },
  restaurants: {
    maxHeight: "98vh",
    overflow: "auto",
    scrollBehavior: "smooth",
  }
}));
