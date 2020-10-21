# agenda

Proyecto para demostrar conocimientos sobre Angular

## Requerimiento previos

- **json-server:** Se puede instalar usando el comando `npm install -g json-server`
- **pm2:** Se puede instalar usando el comando `npm install -g pm2`

## ¿Cómo probarlo?

- Instalamos dependencias:
  `npm install`
- Arrancamos pm2:
  `pm2 start dev-process.json`
- Opcionalmente podemos ver los logs de angular con el comando:
  `pm2 logs agenda`
- Y finalmente para detener todos los procesos
  `pm2 stop all`
