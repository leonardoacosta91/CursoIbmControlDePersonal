
# Creación del repositorio en Github.
https://github.com/leonardoacosta91/CursoIbmControlDePersonal.git


# Conformación del equipo ya definida. 
Equipo:

  ● Nicolás Quagliata
  
  ● Leonardo Acosta
  
  ● Ricardo Aguerre

# Resumen

El control de horarios en las empresas si bien tiene grandes ventajas, requiere mucho tiempo dedicado a la lectura y procesamiento de la información y la elaboración de informes. Por otra parte, estos sistemas impactan negativamente en la motivación de los empleados, quienes sienten, en muchos casos, excesivamente vigilado y percibe este control como una falta de confianza. 

Por otro lado, muchas empresas que cuentan con espacios compartidos como ser: sala de reuniones, anfiteatros, biblioteca, cafeterías, comedores, terrazas, espacios al aire libre se les dificulta contar con un control real y efectivo sobre la movilidad interna de sus empleados.

Estas actividades generan un alto costo y como oferta a esta necesidad han surgido modelos de negocio que ofrecen su tercerización manteniendo la calidad del servicio a un menor costo, sin embargo, esto se realiza con personal humano limitado en condiciones naturales por tiempo y ambiente.

Aprovechando el potencial que brindan las nuevas tecnologías se ha desarrollado un sistema que integra varios servicios e incorpora una inteligencia artificial entrenada e implementada para responder las solicitudes hechas por funcionarios de la organización buscando lograr una tecnificación importante en los procesos de gestión humana, disminuyendo costos y logrando una respuesta inmediata y una trazabilidad rápida y completa.

La metodología de desarrollo utilizada para la implementación del proyecto fue IBM Garage que permite crear innovaciones de alto impacto y centradas en el cliente. IBM Garage permite crear equipos diversificados y capacitados, que colaboran para aplicar tecnologías apropiadas para crear y ampliar rápidamente ideas nuevas e innovadoras que hacen que las organizaciones evolucionen de forma drástica hacia su próximo nivel.

# Introduccion 

Detrás de cualquier organización hay personas concentradas en ofrecer soluciones que mejoren la calidad de vida de su entorno, gracias a estos esfuerzos se ha conseguido el avance tecnológico, comercial y social que tenemos, la comunicación entre las organizaciones y la sociedad ha jugado un papel vital en este campo y cualquier servicio o innovación que no cuente con una comunicación clara y efectiva está en alto riesgo de fracaso. Por eso las organizaciones se enfrentan constantemente al reto de comunicar, tanto internamente como externamente, sus actividades y de establecer canales que permitan a los interesados acercarse a ellas.

En el presente documento se mencionan los principales problemas que tienen las organizaciones para mantener esos canales de comunicación que sirven de respaldo a sus procesos de atención, así como las opciones que se han ido generando para dar solución a esta problemática. También se trata el por qué la inteligencia artificial es una gran oportunidad para automatizar estas actividades aprovechando la humanización que hoy día ella puede alcanzar y se muestra el proceso de diseño de un prototipo implementado en una organización.


# Descripción de la problemática a solucionar
Los sistemas de control de horario reflejan individualmente la información de cada empleado como puede ser el horario de la jornada de trabajo, los turnos, las vacaciones, salidas ocasionales, etc. Esta información puede ser muy valiosa ya que nos da mejor información sobre la productividad y el rendimiento de cada trabajador.

Existen diferentes tipos de control horario, biométrico, tarjetas inteligentes, tarjetas de banda magnética, tarjetas de código de barras, etc. La mayoría de estas soluciones permiten un control de asistencia, pero no proporcionan datos acerca de la actividad real (tiempo de trabajo) de los individuos. Existen otras herramientas como los softwares de gestión de horario que brindan otro tipo de indicadores, pero siempre partiendo de la base que el empleado registre sus actividades en él. Ninguno de estos sistemas contempla el error humano, por ejemplo, al olvidar utilizar el sistema se pierde información valiosa. 

Las organizaciones han notado esto; la inteligencia artificial es una gran opción para llevar el control de estos procesos, una infraestructura correctamente diseñada y mantenida puede soportar fácilmente una alta cantidad de solicitudes sin saturación y según la base de conocimiento proporcionada se puede ir entrenando y nutriendo en su experiencia para hacerla cada vez más ágil y efectiva. 

El reto principal surge tanto en el desarrollo como en su mantenimiento ya que se hace costoso y complejo. Se deben tener en cuenta varios factores como el ambiental, el tecnológico o el recurso humano que puedan servir para brindar estos servicios, esto también está limitado a aspectos legales y a la disponibilidad del personal creando aún más escenarios a considerar para financiar a esta compleja división.
Para dar solución a esta problemática hay empresas cómo IBM especializadas en prestar servicios de Inteligencia Artificial que ofrecen servicios en línea. Estos servicios se han convertido en un complejo paradigma empresarial que permite a las organizaciones delegar estas actividades sin preocuparse por una disminución en la calidad. 



# Descripción de la solución inicial planteada.
Se plantea realizar un sistema que permita controlar los horarios sin necesidad de esfuerzo por parte de los empleados a través del reconocimiento facial para el ingreso y egreso del personal. Además se colocarán cámaras con reconocimiento facial en las distintas áreas de la empresa para generar un “mapa de calor” de los empleados, pudiendo reconocer el tiempo efectivamente trabajado, tiempo utilizado en reuniones y tiempos “muertos”. 
A partir de esta información el sistema generará:

  ● Reportes automatizados por equipo y persona.
  
  ● Grupos de afinidad del personal.
  
  ● Medición de la “felicidad” de los empleados y predecir en base a esto su desempeño y si permanecerá en la empresa o está pensando en cambiar de trabajo.


# Descripcion del modelo de Machine/Deep Learning a utilizar
La arquitectura del modelo seran Redes Neuronales Convolucionales debido a que son las que mejor se adaptan al problema de identificacion de usuarios.

![cnn](https://user-images.githubusercontent.com/30410928/70396220-a4b8c880-19e5-11ea-861e-c11ab11b22cf.png)

Para encontrar la solucion mas optima, se probo el rendimiento tanto del modelo de Watson Visual Recognition como el de un modelo entrenado en Keras y este ultimo logro un rendimiento superior utilizando el dataset creado.
Para poner en funcionamiento esto se utilizó un servidor de Flask el cual cargara el modelo para realizar las predicciones

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

# Paso a paso para poner en funcionamiento la aplicacion

Prerequisitos: 
            - Node.js
            - Python 3.7
            - Virtualenv

- clonar este mismo repositorio con "git clone https://github.com/leonardoacosta91/CursoIbmControlDePersonal.git"
- Entrar a la carpeta Node server y ejecutar en el terminal "npm install" el cual instalara todas las dependencias para ejecutar           correctamente el servidor
- Iniciar la aplicacion con "npm run dev" la misma correra en el puerto por defecto 3000 por lo que la ruta para acceder es               "localhost:3000"
- Ahora para poner en funcionamiento el servidor Flask es necesario ingresar a la carpeta Flask y ejecutar en el terminar "virtualenv     env"
- Ingresar al ambiente virtual con "env\Scripts\activate"
- Ingresar el comando "pip install -r requirements.txt" el cual instalara las dependencias necesarias para ejecutar el servidor Flask
- Para iniciar el servidor basta con ejecutar en el virtualenv "python run.app"
