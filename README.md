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
const products = await helebba.listProducts();

```

## API
La api expone las siguentes apis basadas en promesas

- contacts
- saleschannels
- products
- warehouses
- treasury
- expenses
- payments
- documents

Cada api expone los sigueinte metodos:

- list()
- create({ resource })
- get({ id })
- update({ id, resource })
- delete({ id })

Excepto para la api de documentos:

- list({ type })
- create({ type, document })
- get({ type, id })
- update({ type, id, document })
- delete({ type, id })
- downloadPdf({ type, id })
- pay({ type, id, payment })

## Testng
Clone el repositorio y ejecute:

```
npm test
```