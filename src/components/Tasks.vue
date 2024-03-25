<template>
    <div class="task-container">
      <h2>Tareas Pendientes</h2>
      <div class="task-list">
        <ul class="tasks">
          <li class="task">
            <input type="checkbox" id="task1" class="task-checkbox">
            <label for="task1" class="task-label">Terminar el informe para mañana</label>
          </li>
          <li class="task">
            <input type="checkbox" id="task2" class="task-checkbox">
            <label for="task2" class="task-label">Comprar los ingredientes para la cena</label>
          </li>
          <li class="task">
            <input type="checkbox" id="task3" class="task-checkbox">
            <label for="task3" class="task-label">Llamar al cliente para confirmar la reunión</label>
          </li>
          <!-- Agrega más tareas según sea necesario -->
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .task-container {
    position: fixed;
    top: 200px; /* Ajusta la posición vertical según el tamaño de tu encabezado */
    left: 400px; /* Ajusta la posición horizontal según tus necesidades */
    background-color: #355483;
    padding: 10px;
    border-radius: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  
  .task-list {
    background-color: #355483;
    padding: 10px;
    border-radius: 5px;
  }
  
  .tasks {
    list-style: none;
    padding: 0;
  }
  
  .task {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .task-checkbox {
    margin-right: 10px;
  }
  
  .task-label {
    color: #fff;
    font-size: 16px;
  }
  
  .task-label.completed {
    text-decoration: line-through;
  }
  </style>
  