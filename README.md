# Trabajo final frontend - Diplamatura FullStack UTN
Alumno: Bruno Paternostro 
Profesor: Matias Agustin Gimenez

Stack tecnologicó utilizado:
- React (Router, ReactIcons, Contexto)
- Css Flexbox
- Vercel para deployar el proyecto (el hosting tiene vigencia hasta el 2-10-2023)
  - https://utn-frontend-tp.vercel.app/

Comentarios sobre el desarrollo:
- El tema utilizado es "carrito de compras de productos electronicos"
- Las imagenes se encuentran en la ruta: "public\img"
- La fuente de datos del proyecto se encuentra en el archivo "src\products.js"
- Para resolver el proyecto:
    - Se utilizó un unico archivo de contexto
    - Se aplicó PageRouter
    - El proyecto es "full-responsive" y funciona en todo tipo de dispositivos
    - Funcionalidades:
        - Todos los datos de los productos son tomados del archivo "src\products.js"
        - Barra de navegación con resaltador de sección y campo de busqueda
            - Para los dispositivos moviles se oculta el campo de busqueda y habilita un icono que presionandolo muestra el campo de busqueda
        - Marketplace con barra de filtros y campo de busqueda que aparece unicamente en la sección
        - Detalle de cada uno de los productos con boton para agregar al carrito
        - Si el producto no cuenta con Stock, deberia mostrar un mensaje e inhabilitar la opción de ingresar al detalle
        - Carrito de compras con funcionalidades
            - Alta/baja de productos
            - Modificacion de cantidad
            - Suma de totales
        - Sección de contacto con Formulario que incluye los campos solicitados en la consigna
        - Footer con secciones (pendientes)
       
        
