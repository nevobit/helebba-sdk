# Helebba SDK

# @api/helebba SDK

El SDK @api/helebba proporciona una interfaz simplificada para interactuar con la API de Helebba, permitiendo a los desarrolladores gestionar productos, clientes y más desde su aplicación.

## Instalación

Para instalar @api/helebba SDK, puedes usar npm o yarn:

```
npm install @api/helebba
o
yarn add @api/helebba
```

import { createHelebbaClient } from '@api/helebba';

const apiKey = 'tu-api-key-aqui';
const helebba = createClient(apiKey);


async function fetchProducts() {
    try {
        const products = await helebba.listProducts();
        console.log('Productos:', products);
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
    }
}

fetchProducts();



### Explicación del README

- **Instalación**: Proporciona instrucciones claras sobre cómo instalar el SDK usando npm o yarn.

- **Configuración**: Explica cómo configurar el SDK utilizando la función `createHelebbaClient` y tu clave de API de Helebba.

- **Ejemplos de Uso**: Proporciona ejemplos concretos de cómo usar las funciones del SDK para listar productos, obtener productos por ID, listar clientes y obtener clientes por ID.

- **Contribución**: Anima a los desarrolladores a contribuir al SDK y proporciona información sobre cómo pueden hacerlo.

- **Licencia**: Informa sobre la licencia bajo la cual se distribuye el SDK.

Este README servirá como una guía útil para los desarrolladores que desean integrar y utilizar el SDK de Helebba en sus proyectos, proporcionándoles ejemplos claros y directos de cómo interactuar con las funciones principales del SDK.
