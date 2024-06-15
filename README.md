# Helebba SDK

El SDK helebba-sdk proporciona una interfaz simplificada para interactuar con la API de Helebba, permitiendo a los desarrolladores gestionar productos, clientes y más desde su aplicación.

## Instalación

Para instalar el SDK e Helebba, puedes usar npm o yarn:

```
npm install helebba-sdk
o
yarn add helebba-sdk
```

## Ejemplo de uso

```
import { createClient } from 'helebba-sdk';

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

```

