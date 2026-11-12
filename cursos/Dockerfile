# 1. Imagen base: Node.js 24 (LTS) sobre Alpine
FROM node:24-alpine

# 2. Carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Primero solo package.json (caché de capas)
COPY package*.json ./

# 4. Instalar dependencias de producción
RUN npm install --omit=dev

# 5. Copiar el resto del código
COPY . .

# 6. Documentar el puerto y arrancar
EXPOSE 3000
CMD ["node", "index.js"]