# 📝 Todo App - Cliente / Servidor

Aplicación full-stack de lista de tareas (ToDo) desarrollada con **Angular + Angular Material** en el frontend y **NestJS + Node.js + TypeScript** en el backend.

---

## 🚀 Funcionalidad

Desde la interfaz web, el usuario puede:

- ✅ Crear nuevas tareas.
- 📋 Visualizar la lista completa de tareas.
- ❌ Eliminar tareas individualmente.
- 🔄 Cambiar el estado de una tarea (completada y no completada) permitiendo estilos visuales según el estado.

---

## 📡 Comunicación Frontend ↔ Backend

| Acción del usuario       | Método HTTP | Ruta           | Función en el backend            |
|--------------------------|-------------|----------------|----------------------------------|
| Crear tarea              | `POST`      | `/todos`       | Crea una nueva tarea             |
| Obtener tareas           | `GET`       | `/todos`       | Devuelve todas las tareas        |
| Eliminar tarea           | `DELETE`    | `/todos/:id`   | Elimina una tarea por su ID      |
| Actualizar estado tarea  | `PATCH`     | `/todos/:id`   | Cambia el estado de una tarea    |

---

## 🧠 Arquitectura

La aplicación está dividida en dos capas:

### 🔹 **Frontend (Angular + Angular Material)**

- Interfaz moderna y responsive usando componentes de Angular Material.
- Servicio Angular (`TodoService`) que realiza peticiones HTTP (`GET`, `POST`, `DELETE`, `PATCH`) al backend.
- Manejo reactivo de las tareas, agregándolas o eliminándolas del estado local.
- Validación del campo de entrada para evitar tareas vacías.
- Capitalización automática de cada palabra ingresada.
- **Implementación de notificaciones tipo toast para mostrar mensajes de éxito o error recibidos desde el backend**, mejorando la experiencia del usuario.

### 🔹 **Backend (NestJS + Node + TypeScript)**

- Servicio (`TodosService`) que maneja la lógica de negocio para crear, listar, eliminar y actualizar tareas.
- Controlador (`TodosController`) que expone las rutas HTTP.
- Validaciones de entrada usando `DTOs` y `class-validator`.
- Manejo de errores con excepciones estándar de NestJS (`NotFoundException`, `ConflictException`).
- Persistencia de datos mediante **base de datos PostgreSQL** corriendo en un contenedor Docker (reemplazando el almacenamiento previo en archivo JSON).
- Al eliminar una tarea, el backend devuelve un mensaje con el detalle de la tarea eliminada.
- Soporte para actualización parcial del estado de la tarea vía método PATCH.

---

## ✅ Validaciones

- En el frontend: control de campos vacíos, capitalización automática, y despliegue de mensajes toast para mostrar errores y confirmaciones.
- En el backend:
  - Verifica que el `title` no esté vacío (DTO + `class-validator`).
  - Impide duplicar tareas con el mismo título.
  - Lanza error `404` si se intenta eliminar o actualizar una tarea que no existe.
  - Devuelve mensajes claros de éxito y error en cada operación.

---

## 🧪 Consideraciones

- Persistencia de datos con **PostgreSQL en Docker**, reemplazando el uso previo de archivos JSON.
- Ideal como proyecto educativo para comprender el flujo cliente-servidor con Angular y NestJS, y el uso de bases de datos relacionales.
- Implementa notificaciones visuales en frontend para una mejor experiencia usuario.
- Código modular, escalable y alineado a las buenas prácticas de cada framework.
