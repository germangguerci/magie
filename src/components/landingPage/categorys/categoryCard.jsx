import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    maxWidth: 420,
    margin: "auto",
  },
  media: {
    height: 140,
  },
});

export default function CatCard({cat}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/products/category/${cat.id}`}>
        <CardMedia
          className={classes.media}
          image={cat.image.src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cat.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            + Ir
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}