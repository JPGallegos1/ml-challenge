## Instalación local 💻

- **IMPORTANTE**: para correr este proyecto se necesita usar la version **v14.17.5** de Node.
- Clonar el proyecto `git clone https://github.com/JPGallegos1/ml-challenge.git`
- Moverse hacia la carpeta e instalar las dependencias con `cd ml-challenge && npm install`
- Y levantar proyecto en local `npm run dev`
- El archivo `.env.local` por supuesto que siempre va dentro del `.gitignore`; siendo esta una prueba, lo dejé a mano para que no se deba crear el archivo.

## Features del proyecto 📋

- Elegí `Next.js` porque a pesar de ser un framework de React también me da la posibilidad de interactuar con `Node` y crear endpoints y servicios.

- Cada carpeta contiene archivos que cumplen con funcionalidades específicas para mantener una estructura ordenada pensando en escalabilidad.
- El proyecto fue pensado **from back to front** por lo que primero haré un breve review de mi backend:

#### Backend ⚙️

- Mi backend cuenta con tres endpoints y su lógica se encuentra en `services/index.js`:
  - `http://localhost:3000/api/items?q=lentes`
  - `http://localhost:3000/api/items/MLA884243417`
  - `http://localhost:3000/api/items/MLA884243417/description`
- **`lentes`** es un ejemplo de producto que retornará **sólo cuatro resultados** y **`MLA884243417`** es un ejemplo de id dinámico al visitar los detalles de un producto.

#### Frontend 💅

- Funcionalidad de búsqueda de producto y redireccionamiento dinámico.
- Navegación dinámica por id a producto seleccionado
- Estilado con `scss`, manteniendo el órden de los estilos para cada componente
- Después de la primera búsqueda, los productos quedarán guardados en el `localStorage`, por lo que podes refrescar tranqui 😝
- Cuando refrescas o entras al `Home`, notá que estás habilitado para buscar un producto, tal como tiene Mercado Libre.

#### Hooks utilizados ⚛️

- **`useState`**: para funcionalidades locales de los componentes
- **`useContext`**: La plataforma cuenta con un store global utilizando
- **`useEffect`**: para la carga de datos asíncronos desde `localStorage`, control de carga de datos asíncronos por id de producto y la funcionalidad del `focus()` del input al cargar la `Home` page.
- **`useRef`**: en este caso sólo controla el input dentro del hook de efecto.
