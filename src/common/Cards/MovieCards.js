import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
export default function MovieCard(props) {
    console.log(props,'props')
  return (
    <Link href={`movie/${props.movies.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.movies.poster_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movies.title}
        </Typography>
      </CardContent>
      
    </Card>
    </Link>
  );
}