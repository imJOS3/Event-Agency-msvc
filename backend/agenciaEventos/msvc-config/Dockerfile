# Usar una imagen de Java
FROM eclipse-temurin:21-jdk

# Crear directorio de la app
WORKDIR /app

# Copiar el JAR generado
COPY target/msvc-config-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto que usa el Config Server (normalmente 8888)
EXPOSE 8888

# Comando para ejecutar el servicio
ENTRYPOINT ["java", "-jar", "app.jar"]
