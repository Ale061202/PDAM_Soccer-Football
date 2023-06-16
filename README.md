# PDAM_Soccer-Football

El proyecto consiste en tres partes una web, una móvil y un proyecto con un backend

# SPRING

El proyecto de backend es un proyecto en Spring Boot en el que se tiene dos perfiles uno en desarrollo y otro en producción, en la parte de producción se tiene que hacer docker compose up, después arrancas el proyecto.

# WEB

El proyecto web es un proyecto en Angular en el que se gestiona los valores de las ligas, los equipos y los jugadores, para ello se necesita el proyecto de Spring arrancado. De momento solo se puede editar y borrar, pero si se intenta borrar un equipo con jugadores asignados no se borra.

# MÓVIL

El proyecto móvil es un proyecto en Swift con Storyboard, se necesita el proyecto de Spring para acceder a la siguiente pantalla del móvil. El proyecto comienza con un splash screen y abre el login, solo se puede acceder con un rol de usuario.
Para ver el código recomiendo XCODE en la ultima versión que sería la 13.4 si se tiene en una versión anterior no funciona

# Usuarios 

ale1234 : rol USER

admin : rol ADMIN

Ambos usuarios usan la misma contraseña que es: 1234 en el archivo import.sql aparece encriptado
