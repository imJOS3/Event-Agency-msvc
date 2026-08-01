# Dockerfile
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copia el JAR compilado (ajusta el nombre si cambia)
COPY target/msvc-gateway-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8090

ENTRYPOINT ["java", "-jar", "app.jar"]
