# 📝 Todo App - Cliente / Servidor

Aplicación full-stack de lista de tareas (ToDo) desarrollada con **Angular + Angular Material** en el frontend y **NestJS + Node.js + TypeScript** en el backend.

---

## 🚀 Funcionalidad

Desde la interfaz web, el usuario puede:

- ✅ Crear nuevas tareas.
- 📋 Visualizar la lista completa de tareas.
- ❌ Eliminar tareas individualmente.

---

## 📡 Comunicación Frontend ↔ Backend

| Acción del usuario | Método HTTP | Ruta           | Función en el backend       |
|--------------------|-------------|----------------|-----------------------------|
| Crear tarea        | `POST`      | `/todos`       | Crea una nueva tarea        |
| Obtener tareas     | `GET`       | `/todos`       | Devuelve todas las tareas   |
| Eliminar tarea     | `DELETE`    | `/todos/:id`   | Elimina una tarea por su ID |

---

## 🧠 Arquitectura

La aplicación está dividida en dos capas:

### 🔹 **Frontend (Angular + Angular Material)**

- Interfaz moderna y responsive usando componentes de Angular Material.
- Servicio Angular (`TodoService`) que realiza peticiones HTTP (`GET`, `POST`, `DELETE`) al backend.
- Manejo reactivo de las tareas, agregándolas o eliminándolas del estado local.
- Validación del campo de entrada para evitar tareas vacías.
- Capitalización automática de cada palabra ingresada.
  
### 🔹 **Backend (NestJS + Node + TypeScript)**

- Servicio (`TodosService`) que maneja la lógica de negocio para crear, listar y eliminar tareas.
- Controlador (`TodosController`) que expone las rutas HTTP.
- Validaciones de entrada usando `DTOs` y `class-validator`.
- Manejo de errores con excepciones estándar de NestJS (`NotFoundException`, `ConflictException`).
- Persistencia de datos mediante un archivo `todos.json` sin necesidad de base de datos.
- Al eliminar una tarea, el backend devuelve un mensaje con el detalle de la tarea eliminada.


---


## ✅ Validaciones

- En el frontend: control de campos vacíos, capitalización automática.
- En el backend:
  - Verifica que el `title` no esté vacío (DTO + `class-validator`).
  - Impide duplicar tareas con el mismo título.
  - Lanza error `404` si se intenta eliminar una tarea que no existe.
  - Devuelve mensajes claros de éxito y error en cada operación.

---

## 🧪 Consideraciones

- No utiliza base de datos: los datos se almacenan en un archivo JSON local.
- Ideal como proyecto educativo para comprender el flujo cliente-servidor con Angular y NestJS.
- Código modular, escalable y alineado a las buenas prácticas de cada framework.

