// src/components/ProductoCard.jsx
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

function ProductoCard({ producto }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={producto.imagen}
        alt={producto.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.descripcion}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ marginTop: 1 }}>
          ${producto.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductoCard;
