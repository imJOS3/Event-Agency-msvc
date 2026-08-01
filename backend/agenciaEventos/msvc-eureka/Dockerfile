# Usar una imagen de Java
FROM eclipse-temurin:21-jdk

# Crear directorio de la app
WORKDIR /app

# Copiar el JAR generado
COPY target/msvc-eureka-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto que usa Eureka (normalmente 8761)
EXPOSE 8761

# Comando para ejecutar el servicio
ENTRYPOINT ["java", "-jar", "app.jar"]
