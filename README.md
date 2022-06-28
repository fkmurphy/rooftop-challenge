# Rooftop Career Switch - Challenge (28 Junio 08:00 -03:00)

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

### Nota adjunta
Una observación interesante es que sin contar la obtención del token y los bloques, la fórmula para calcular la cantidad de peticiones realizadas a la API en el peor de los casos es:

$$ Peticiones = {x * (x-1) \over 2}  \forall x \ge 3 \text{, x cantidad de elemetnos}$$

Por ejemplo: para 7 elementos, la cantidad de peticiones 21.

En mi opinión no es performante. Podría reducirse en `1` (constante) si se considera que no es necesario ordenar el último item ya que si se ordenaron los previos, este último se encuentra en el lugar correcto.

La gráfica será:

![Función que representa la cantidad de peticiones x elementos](https://github.com/fkmurphy/rooftop-challenge/blob/main/funcion_peticiones.jpeg)

Por cierto, es la primera vez que trabajo con Typescript, fue una buena experiencia.

### Ejecución de test
Para ejecutar los test:
```bash
npm test
``` 


