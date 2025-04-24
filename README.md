# 💼 DeliMarket

Aplicación web para mostrar productos disponibles, desarrollada con **React + Vite** en el frontend y **Express** en el backend.

---

## 📁 Estructura del Proyecto

```
DeliMarket/
├── api/                # Backend con Express
│   ├── index.js
│   └── package.json
├── public/
├── src/
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/     # Componentes reutilizables
│   ├── views/          # Vistas de la aplicación
│   └── main.jsx        # Punto de entrada
├── package.json        # Configuración del frontend
└── README.md
```

---

## ⚙️ Requisitos Previos

- Node.js ≥ 18
- npm ≥ 9

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/DeliMarket.git
cd DeliMarket
```

### 2. Instala las dependencias del frontend

```bash
npm install
```

### 3. Ejecuta el frontend

```bash
npm run dev
```

Accede a la aplicación en:

```
http://localhost:5173
```

---

## 🔧 Backend (API)

Si estás usando una API Express en la carpeta `/api`, sigue estos pasos:

### 1. Ir a la carpeta del backend

```bash
cd api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor

```bash
npm run dev
```

El servidor quedará escuchando en:

```
http://localhost:3000
```

---

## 🖼️ Imágenes de Productos

Coloca tus imágenes en `src/assets/img/` y asegúrete de importarlas en tus componentes así:

```js
import manzanasImg from '../assets/img/manzanas.jpg';
```

---

## ✍️ Autor

- Tu Nombre – [@tuusuario](https://github.com/tuusuario)

---

## 📝 Licencia

Este proyecto está licenciado bajo MIT.

