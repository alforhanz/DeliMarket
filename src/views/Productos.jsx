// src/views/Productos.jsx
import { Grid, Typography, Container } from '@mui/material';
import ProductoCard from '../components/ProductoCard';
import manzanasImg from '../assets/img/manzana.jpg';
import quesoImg from '../assets/img/queso.jpg';
import cafeImg from '../assets/img/cafe.jpg';

const productosMock = [
  {
    id: 1,
    nombre: 'Manzanas',
    descripcion: 'Manzanas rojas frescas.',
    precio: 1.99,
    imagen: manzanasImg,
  },
  {
    id: 2,
    nombre: 'Queso Cheddar',
    descripcion: 'Queso madurado de alta calidad.',
    precio: 4.5,
    imagen: quesoImg,
  },
  {
    id: 3,
    nombre: 'Café Premium',
    descripcion: 'Café arábica molido.',
    precio: 3.25,
    imagen: cafeImg,
  },
  {
    id: 4,
    nombre: 'Café Premium',
    descripcion: 'Café arábica molido.',
    precio: 3.25,
    imagen: cafeImg,
  },
];

function Productos() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Productos disponibles
      </Typography>

      <Grid container spacing={4}>
        {productosMock.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id}>
            <ProductoCard producto={producto} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Productos;
