# Используем официальный OpenJDK 21 slim образ в качестве базового
FROM openjdk:21-slim

# Копируем JAR файл Spring Boot приложения из хоста в контейнер и переименовываем его в app.jar
COPY target/docker-demo-0.0.1-SNAPSHOT.jar app.jar

# Указываем, что контейнер будет слушать на порту 8080
EXPOSE 8080

# Определяем команду для запуска приложения
ENTRYPOINT ["java", "-jar", "app.jar"]
