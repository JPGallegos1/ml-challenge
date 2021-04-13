## Instalación local 💻

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

#### Custom Hooks ⚛️

- El proyecto cuenta con dos custom hooks: `useFetch` y `useForm`. Los dos tienen funcionalidades asíncronas para abstraer la mayor cantidad de lógica posible de los componentes.
  Ambos hooks siguen el mismo `module pattern` para la organización de los métodos a utilizar.

#### Test Cases 🧐

Realmente no son muchos, pero testea nuestro formulario pricipal y que se esté ejecutando correctamente el método principal de búsqueda de producto.

#### ¿Que hubiese agregado/mejorado? 👀

- Intenté incorporar una librería para hacer zoom en la imagen de X producto, tal cómo se puede hacer en Mercado Libre, pero todas eran viejas y/o sin mantenimiento actual y con las nuevas versiones de React y Nextjs se notan inconsistencias.
- Seguí el documento al pie de la letra pero me dejo de tarea (**después del feedback**) retornar 20 productos y agregar una navegación, renderizando 5 productos por página.
- Me faltó mejor control de errores y jugar con los status de las respuestas asíncronas.
- Me faltó mejorar un poco más las microinteracciones.

Me encantó hacer este challenge. Le puse mucho de mí y aprendí muchísimo. Espero les guste!
