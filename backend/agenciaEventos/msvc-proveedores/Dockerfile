# Usar una imagen de Java
FROM eclipse-temurin:21-jdk

# Crear directorio de la app
WORKDIR /app

# Copiar el JAR generado
COPY target/msvc-proveedores-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8006

# Comando para ejecutar el servicio
ENTRYPOINT ["java", "-jar", "app.jar"]
