# PDAM_Soccer-Football

El proyecto consiste en tres partes una web, una móvil y un proyecto con un backend

# SPRING

El proyecto de backend es un proyecto en Spring Boot en el que se tiene dos perfiles uno en desarrollo y otro en producción, en la parte de producción se tiene que hacer docker compose up, después arrancas el proyecto.

# WEB

El proyecto web es un proyecto en Angular en el que se gestiona los valores de las ligas, los equipos y los jugadores, para ello se necesita el proyecto de Spring arrancado. De momento solo se puede editar y borrar, pero si se intenta borrar un equipo con jugadores asignados no se borra.

Actualización

Ahora cuando se crea un equipo o un jugador en el modal en el que se crea se podrá añadir directamente un equipo a una liga y un jugador a un equipo, también pasa cuando se edita un equipo muestra en que liga esta, con los jugadores pasa lo mismo muestra en que equipo se encuentra actualmente.

# MÓVIL

El proyecto móvil es un proyecto en Swift con Storyboard, se necesita el proyecto de Spring para acceder a la siguiente pantalla del móvil. El proyecto comienza con un splash screen y abre el login, solo se puede acceder con un rol de usuario.
Para ver el código recomiendo XCODE en la ultima versión que sería la 13.4 si se tiene en una versión anterior no funciona.

Actualización

Se ha añadido una pantalla de registro con todos los datos que hay que meter, para poder acceder a esta pantalla hay que hacer click en "No tienes cuenta. Pues registrate" cuando lo hagas te llevara a la pantalla de registro pero si quieres salir de esa pantalla hay dos formas una es haciendo el registro y la segunda es haciendo click en "Ya tienes una cuenta pues inicia sesión". La pantalla de registro se ha hecho con un UIScrollView es decir que para moverse en esa pantalla hay que scroll view. En la pantalla de jugadores se ha hecho dos menus dropdown en el que muestran la ligas en general y después en el dropdown de los equipos muestra los equipos que hay en esa liga, para acceder a los equipos primero hay que seleccionar una liga. Por último he intentado hacer cambiar contraseña controlo la navegación pero no he podido el cambiar la contraseña actual por la nueva.

# Usuarios 

ale1234 : rol USER

admin : rol ADMIN

Ambos usuarios usan la misma contraseña que es: 1234 en el archivo import.sql aparece encriptado
