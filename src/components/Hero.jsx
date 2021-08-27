import { useState } from "react";
import { FormControl, Input, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomPaper from "./Paper";
function Hero() {
  const [str, setStr] = useState("");
  const splitArr = str.split("");
  const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    paperWrapper: {
      display: "flex",
      flexWrap: "wrap",
    },
    paper1: {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    paper2: {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      backgroundColor: "blue",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <FormControl>
        <Input
          id="str"
          name="str"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />
      </FormControl>
      <div className={classes.paperWrapper}>
        {str ? (
          splitArr.map((char, index) => (
            <CustomPaper
              key={index}
              style={
                index !== 0 && index % 3 === 0 ? classes.paper2 : classes.paper1
              }
              text={char}
            />
          ))
        ) : (
          <Typography variant="subtitle2">
            Type something to generate cards
          </Typography>
        )}
      </div>
    </>
  );
}

export default Hero;
