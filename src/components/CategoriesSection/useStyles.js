import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  cardContainer: {
    margin: "20px -20px -41px",
  },
  cardImage: {
    width: "100%",
    aspectRatio: "auto 254 / 160",
    height: 160,
    objectFit: "cover",
    maxWidth: "100%",
  },
  card: {
    padding: "20px 20px 57px",
    border: "1px solid #fff",
    contain: "content",
    '&:hover': {
      boxShadow: "0 4px 7px 0 rgb(218 220 230 / 60%)",
      borderColor: "#d3d5df",
      cursor: "pointer",
   },
  },
  title: {
    wordBreak: "break-word",
    paddingBottom: theme.spacing(1),
    lineHeight: 1,
  },
  type: {
    wordBreak: "inherit",
  },
  rating: {
    backgroundColor: "#48c479",
    color: "#fff",
    height: "20px",
    width: "43px",
    padding: "0 5px",
    fontWeight: 400,
  },
  ratingText: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 12,
  },
  dot: {
    fontWeight: 300,
  }
  
}));
