import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

export default function CustomPaper({ text, style }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },

    typography: {
      marginTop: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={style} elevation={5}>
        <Typography align="center" className={classes.typography} variant="h4">
          {text}
        </Typography>
      </Paper>
    </div>
  );
}
