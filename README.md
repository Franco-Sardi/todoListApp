# 📋 React To-Do Sprint Manager

Aplicación web de gestión de tareas y sprints desarrollada con **React + TypeScript**, **Zustand** para el manejo de estado global y **json-server** como backend temporal. Este proyecto simula una herramienta ágil de organización personal o de equipo, permitiendo administrar tareas en un backlog o dentro de un sprint, con filtrado por vencimiento próximo.

---

## 🎯 Descripción del Proyecto

El objetivo principal de este proyecto es implementar una **To-Do List Avanzada** con funcionalidades completas de **CRUD para tareas y sprints**, organizada en pantallas intuitivas. El proyecto está diseñado para simular una experiencia real de gestión ágil de proyectos.

🧩 Está dividido en dos vistas principales:

- **Backlog**: Visualización y gestión de todas las tareas aún no asignadas a un sprint.
- **Sprint**: Visualización tipo kanban con columnas por estado, donde se puede arrastrar tareas entre estados y volver al backlog.

🚀 Instalación del Proyecto

1. Clonar el repositorio
  git clone git@github.com:Franco-Sardi/todoListApp.git
  cd todoListApp

2. Instalar dependencias

  npm install

▶️ Comando para ejecutar el backend:

  npm run bdDev

▶️ Comando para ejecutar el frontend:

  npm run dev

## ⚙️ Tecnologías utilizadas

- ⚛️ **React** + **TypeScript**
- 🐻 **Zustand** (manejo de estado global)
- 🛠️ **json-server** (backend simulado)
- 💅 Estilos con **Tailwind CSS** (o el que elijas)
- 📅 **uuid** para IDs únicas de tareas/sprints
- 🔄 **Axios** para comunicación HTTP

---

## 🧪 Funcionalidades Clave

### 🗂️ CRUD de Sprints

- Crear, editar y eliminar sprints
- Listar todos los sprints
- Asociar tareas a un sprint
- Sprint activo con su lista de tareas

### ✅ CRUD de Tareas

- Crear, editar y eliminar tareas
- Listar tareas del backlog o de un sprint específico
- Mover tareas entre estados dentro del sprint
- Enviar tareas desde el backlog al sprint y viceversa

---

## 🔌 Backend Local con json-server

### 📁 Estructura del archivo `db.json`

```json
{
  "backlog": {
    "tareas": [
      {
        "id": "uuid",
        "titulo": "Tarea backlog",
        "descripcion": "Descripcion tarea backlog",
        "estado": "pendiente",
        "fechaLimite": "2025-03-05"
      }
    ]
  },
  "sprintList": {
    "sprints": [
      {
        "id": "uuid",
        "nombre": "Sprint 1",
        "fechaInicio": "2025-03-04",
        "fechaCierre": "2025-03-11",
        "tareas": [ /* tareas asociadas */ ]
      }
    ]
  }
}