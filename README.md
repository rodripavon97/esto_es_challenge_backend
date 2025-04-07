🧠 Project Management Backend 
Backend API para una plataforma de gestión de proyectos, desarrollada con NestJS, Sequelize, PostgreSQL y Docker. 
🚀 Tecnologías 
NestJS
Sequelize ORM
PostgreSQL
Docker + Docker Compose
Swagger
Validaciones con class-validator
Seeds con datos de prueba 
🛠️ Instalación y ejecución 
📦 Requisitos 
Docker
Docker Compose
pnpm (opcional, también podés usar npm o yarn) 
▶️ Correr el proyecto 
# 1. Cloná el repositorio
git clone <url-del-repo>
cd project-management-backend
# 2. Levantá todo con Docker
docker compose up --build

Esto ejecuta: 
NestJS en http://localhost:3000
PostgreSQL en localhost:5432 

📚 Endpoints principales 
🔐 Users 
GET /users – Listar usuarios
📁 Projects 
POST /projects – Crear proyecto
GET /projects – Listar proyectos con paginación y búsquedaGET /projects/:id – Obtener proyecto por ID
PUT /projects/:id – Actualizar proyecto
DELETE /projects/:id – Eliminar proyecto 
🔎 Filtro de búsqueda y paginación 
GET /projects?page=1&limit=10&search=crm 
page: número de página
limit: resultados por página
search: término parcial para buscar por nombre de proyecto 
🧪 Casos de uso 
✅ Crear un proyecto con PM y usuarios asignados 
POST /projects
{
"name": "Proyecto NestJS",
"description": "Backend con Sequelize",
"status": "enabled",
"projectManagerId": "uuid-pm",
"assignedUserIds": ["uuid-user1", "uuid-user2", "uuid-pm"]
}

🧭 Documentación Swagger 
Disponible en: 
http://localhost:3000/api

Con la interfaz interactiva de Swagger UI. 

✍️ Autor 
Desarrollado por [Rodrigo Pavon] – 2025