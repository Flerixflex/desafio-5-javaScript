// LISTA DE TAREAS (ARREGLO DE OBJETOS)
let tareas = [
  { id: 1, nombre: "Hacer mercado", completado: false },
  { id: 2, nombre: "Estudiar JavaScript", completado: true },
  { id: 3, nombre: "Sacar la basura", completado: false }
];

let idActual = 3;

// =============================
//      RENDERIZAR TABLA
// =============================
function render() {

  const tbody = document.getElementById("listaTareas");
  tbody.innerHTML = "";

  tareas.forEach(t => {
    tbody.innerHTML += `
      <tr>
        <td>${t.id}</td>
        <td>${t.nombre}</td>
        <td>
          <span class="icon-btn check" onclick="toggle(${t.id})">
            ${t.completado ? "✔" : "✗"}
          </span>
        </td>
        <td>
          <span class="icon-btn delete" onclick="eliminar(${t.id})">🗑</span>
        </td>
      </tr>
    `;
  });

  // CONTADORES
  document.getElementById("total").textContent = tareas.length;
  document.getElementById("realizadas").textContent =
    tareas.filter(t => t.completado).length;
}

// =============================
//      AGREGAR TAREA
// =============================
function agregarTarea() {

  const texto = document.getElementById("nuevaTarea").value.trim();

  if (texto === "") {
    alert("Debes escribir una tarea");
    return;
  }

  idActual++;

  tareas.push({
    id: idActual,
    nombre: texto,
    completado: false
  });

  document.getElementById("nuevaTarea").value = "";
  render();
}

// =============================
//      TOGGLE COMPLETAR
// =============================
function toggle(id) {
  tareas = tareas.map(t =>
    t.id === id ? { ...t, completado: !t.completado } : t
  );

  render();
}

// =============================
//      ELIMINAR TAREA
// =============================
function eliminar(id) {
  tareas = tareas.filter(t => t.id !== id);
  render();
}

// Render inicial
render();
