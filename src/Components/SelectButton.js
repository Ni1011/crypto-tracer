import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  selectbutton: {
    border: "1px solid #00C9C8",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    // backgroundColor: selected ? "gold" : "",
    // color: selected ? "black" : "",
    // fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "#00C9C8",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  },
});

const SelectButton = ({ children, selected, onClick }) => {


  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}
      style={{
        backgroundColor: selected ? "#00C9C8" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;