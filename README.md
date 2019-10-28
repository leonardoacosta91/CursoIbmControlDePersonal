
# Creación del repositorio en Github.
https://github.com/leonardoacosta91/CursoIbmControlDePersonal.git


# Conformación del equipo ya definida. 
Equipo:
  ● Nicolás Quagliata
  
  ● Leonardo Acosta
  
  ● Ricardo Aguerre


# Descripción de la problemática a solucionar
El control de horarios si bien tiene grandes ventajas para la empresa requiere mucho tiempo dedicado a la lectura y procesamiento de la informacion y la elaboracion de informes. Por otra parte estos sistemas impactan negativamente en la motivación del empleado, quien se siente excesivamente vigilado y percibe este control como una falta de confianza. 

Los sistemas de control de horario reflejan individualmente la información de cada empleado como puede ser el horario de la jornada de trabajo, los turnos, las vacaciones, salidas ocasionales, etc. Esta información puede ser muy valiosa ya que nos da mejor información sobre la productividad y el rendimiento de cada trabajador.

Existen diferentes tipos de control horario, biométrico, tarjetas inteligentes, tarjetas de banda magnética, tarjetas de código de barras, etc. La mayoría de estas soluciones permiten un control de asistencia pero no proporcionan datos acerca de la actividad real (tiempo de trabajo). Existen otras herramientas como los sofwares de gestión de horario que brindan otro tipo de indicadores pero siempre partiendo de la base que el empleado registre sus actividades en él. Ninguno de estos sistemas contemplan el error humano por lo que al olvidar utilizar el sistema se pierde información valiosa. 

Muchas empresas que cuentan con espacios compartidos como ser: sala de reuniones, anfiteatros, biblioteca, cafeterías, comedores, terrazas, espacios al aire libre se les dificulta contar con un control real y efectivo sobre lamovilidad interna de sus empleados.


# ● Descripción de la solución inicial planteada.
Se plantea realizar un sistema que permita controlar los horarios sin necesidad de esfuerzo por parte de los empleados a través del reconocimiento facial para el ingreso y egreso del personal. Además se colocarán cámaras con reconocimiento facial en las distintas áreas de la empresa para generar un “mapa de calor” de los empleados, pudiendo reconocer el tiempo efectivamente trabajado, tiempo utilizado en reuniones y tiempos “muertos”. 
A partir de esta información el sistema generará:

  ● Reportes automatizados por equipo y persona.
  
  ● Grupos de afinidad del personal.
  
  ● Medición de la “felicidad” de los empleados y predecir en base a esto su desempeño y si permanecerá en la empresa o está pensando en cambiar de trabajo.


# Descripcion del modelo de Machine/Deep Learning a utilizar
La arquitectura del modelo seran Redes Neuronales Convolucionales debido a que son las que mejor se adaptan al problema de identificacion de usuarios.
Es posible que la solucion sea modelada utilizando los servicios de Watson Visual Recognition ya que es una solucion del ecosistema que utilizaremos y que ademas cuenta con facilidades a la hora de entrenar y evaluar la aplicacion
Como segunda opcion se encuentra disponible realizarlo mediante Python y keras


# Descripción de la organización del equipo con respecto a la metodología IBM Garage 
(Herramientas a utilizar, definición de roles, ciclos de desarrollo, servicios en la nube a utilizar, procesos de iteración a realizar).

### Herramientas a utilizar
-Slack como plataforma de comunicación

-Trello para organizar el proyecto

-Box como gestor de archivos

-Visual Studio Code como IDE de desarrollo

-Github como repositorio de código

### Definicion de roles
Nicolás Quagliata - 
- Analisis de requerimientos por parte del cliente
- Prototipado
- Desarrollo del Front End de la aplicación
- Desarrollo MVP

Leonardo Acosta
- Conexión con Watson e IBM Cloud
- Definición de estructura de redes neuronales
- Desarrollo MVP

Ricardo Aguerre
- Recolección y análisis de datos 
- Conexión a orígenes de datos - IBM Cloud
- Arquitectura del servicio
- Desarrollo MVP

### Ciclos de desarrollo
Primer ciclo de definición del problema y enfoque de la solución en el usuario. Determinar los puntos claves que agreguenvalor al producto.
A continuación se propone una metodología ágil, basada en 2 sprints de 2 semanas de duración y 2 de 1 semana

### Servicios en la nube a utilizar
-IBM Cloud

-Cloud Foundry

-IBM Watson

### Procesos de iteracion a realizar
- Obtener las fuentes de informacion (imagenes) necesarias
- Exploracion y preprocesado de imagenes
- Construccion de modelo predictivo
- Evaluacion del proceso
- Puesta en produccion
- Opciones de mejora
