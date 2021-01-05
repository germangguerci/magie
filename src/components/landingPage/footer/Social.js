import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from '@material-ui/icons/Twitter';
import { socialMedia } from "../../../data/config";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",
    color: "white",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Social = () => {
  const classes = useStyles();
  const { instagram, facebook, twitter } = socialMedia;
  return (
    <Grid item container spacing={2} justify="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel=""
        href={twitter}
      >
        <TwitterIcon
          className={classes.snsIcon}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel=""
        href={facebook}
      >
        <FacebookIcon
          className={classes.snsIcon}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel=""
        href={instagram}
      >
        <InstagramIcon
          className={classes.snsIcon}
        />
      </Grid>
    </Grid>
  );
};

export default Social;
