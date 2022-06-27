# rooftop-challenge

El challenge fue realizado en typescript y para ejecutarlo en un ambiente, se utilizó nodeJs.

### Instalación
1. Clonar el repositorio:
  ```bash
  git clone https://github.com/fkmurphy/rooftop-challenge.git
  ```
2. Instalar con npm
  - Version node-js `18.4.0` 
  - Version npm `8.12.1` 

  Ejecutar
  ```bash
  npm install
  ```
3. Copiar enviroment .env_example a .env
```bash
cp .env_example .env
```
4. Editar configuración del ambiente `.env`. Ejemplo:
```
BASE_API=https://rooftop-career-switch.herokuapp.com
EMAIL=mimail@gmail.com
```
_Nota:_ el email determinado se utilizará para obtener el token y realizar las peticiones necesarias.

5. Ejecutar:
```bash
npm start
```

### Test
Para ejecutar los test:
```bash
npm test
``` 


