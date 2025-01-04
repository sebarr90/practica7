<template>
    <v-container >
        <h1>Administración de Cursos</h1>
        <div class="table-container">
      <v-table
        height="300px"
        fixed-header
        class="table"
      >
        <thead>
          <tr>
            <th class="text-left">Curso</th>
            <th class="text-left">Cupos</th>
            <th class="text-left">Inscritos</th>
            <th class="text-left">Duración</th>
            <th class="text-left">Costo</th>
            <th class="text-left">Terminado</th>
            <th class="text-left">Fecha</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="curso in cursos" :key="curso.id">
            <td>{{ curso.nombre }}</td>
            <td>{{ curso.cupos }}</td>
            <td>{{ curso.inscritos }}</td>
            <td>{{ curso.duracion }}</td>
            <td><span class="costo">${{ curso.costo }}</span></td>
            <td><span :class="curso.completado ? 'Si' : 'No'">{{ curso.completado ? 'Sí' : 'No' }}</span></td>
            <td>{{ curso.fecha_registro }}</td>
            <td>
              <div class="actions">
                <i class="fa-solid fa-pencil" style="color: orange" @click="editarCurso(curso.id)"></i>
                <i class="fa-solid fa-trash" style="color: #f20202;" @click="elminarCurso(curso.id)"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
     <hr>
     <br> 
        <v-alert
          color="purple"
          outlined><i class="fa-solid fa-user-group"></i>  Cantidad total de alumnos permitidos: <strong>{{ getTotalCupos }}</strong> alumnos. </v-alert>
          <v-alert
          color="blue"
          outlined><i class="fa-solid fa-user-check"></i>  Cantidad total de alumnos inscritos: <strong>{{ getAlumnosInscritos }}</strong>  </v-alert>
          <v-alert
          color="red"
          outlined><i class="fa-solid fa-user-plus"></i>  Cantidad total de cupos restantes: <strong>{{ getCuposDisponibles }}</strong>  </v-alert>
          <v-alert
          color="pink"
          outlined><i class="fa-solid fa-ban"></i>  Cantidad total de cursos terminados: <strong>{{ getCursosCompletados }}</strong>  </v-alert>
          <v-alert
          color="green"
          outlined><i class="fa-solid fa-bell"></i>  Cantidad total de cursos activos: <strong>{{ getCursosActivos }}</strong>  </v-alert>
          <v-alert
          color="orange"
          outlined><i class="fa-solid fa-bell fa-shake"></i>  Cantidad total de cursos: <strong>{{ getTotalCursos }}</strong>  </v-alert>
          <v-btn @click=" showForm ">agregarCurso</v-btn>
         
         <div class="overlay" v-if="show">
          <v-sheet v-if="show"  class="mx-auto"  style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;">
      <v-form ref="form" id="form" >
        <v-text-field
      :rules="rules"
      hide-details="auto"
      label="Nombre del curso"
      v-model="curso.nombre"
    ></v-text-field>
    <v-text-field
      :rules="rules"
      hide-details="auto"
      label="URL de la imagen"
      v-model="curso.img"
    ></v-text-field>
    <v-text-field 
      :rules="rules"
      hide-details="auto"
      label="Cupos del curso"
      type="number"
      v-model="curso.cupos"
      ></v-text-field>
      <v-text-field 
      :rules="rules"
      hide-details="auto"
      label="Inscritos en el curso"
      type="number"
      v-model="curso.inscritos"
      ></v-text-field>
      <v-text-field 
      :rules="rules"
      hide-details="auto"
      label="Duración del curso"
      v-model="curso.duracion"
      ></v-text-field>
      <v-text-field
      :rules="rules"
      hide-details="auto"
      label="Fecha de inicio del curso"
      v-model="curso.fecha_registro"
      ></v-text-field>
      <v-text-field
      :rules="rules"
      hide-details="auto"
      label="Costo del curso"
      type="number"
      v-model="curso.costo"
      ></v-text-field>
      <v-textarea label="Descripción del curso" variant="underlined" 
      v-model="curso.descripcion"></v-textarea>

        <div class="d-flex flex-row">
          <v-btn
            class="mt-4"
            color="success"
            block
            @click="agregarNuevoCurso"
          >
            Agregar
          </v-btn>

          <v-btn
            class="mt-4"
            color="error"
            block
            @click="ocultarForm"
          >
            Cancelar
          </v-btn>

          <v-btn
            class="mt-4"
            color="warning"
            block
            @click="resetValidation"
          >
            Limpiar Formulario
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
    </v-container>
  </template>
  
  <script>
  import { mapGetters, mapState, mapActions } from 'vuex';
  export default {
    name: 'AdminComponent',
    data: () => ({
      show: false,
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length <= 10) || 'Max 10 characters',
      ],
      curso:{
        id: 0,
        nombre: '',
        img: '',
        descripcion: '',
        cupos: 0,
        costo: 0,
        duracion: '',
        completado: false,
        fecha_registro: '',
        inscritos: 0,
      },
      cursoEdit:{
        id: 0,
        nombre: '',
        img: '',
        descripcion: '',
        cupos: 0,
        costo: 0,
        duracion: '',
        completado: false,
        fecha_registro: '',
        inscritos: 0,
        },
      
    }),
    computed: {
      ...mapState(['cursos']),
      ...mapGetters(['getAlumnosInscritos']),
      ...mapGetters(['getTotalCupos']),
      ...mapGetters(['getCuposDisponibles']),
      ...mapGetters(['getCursosCompletados']),
      ...mapGetters(['getCursosActivos']),
      ...mapGetters(['getTotalCursos']),
      ...mapActions(['agregarCurso'])
    },
    methods: {
      editarCurso(id) {
        this.$store.dispatch('editarCurso', id);
      },
      elminarCurso(id) {
        this.$store.dispatch('eliminarCurso', id);
      },
      ocultarForm() {
        this.show = false;
      },
      showForm() {
        this.show = true;
      },
  agregarNuevoCurso() {
    
    const nuevoCurso = {
      id: this.cursos.length + 1,
      nombre: this.curso.nombre,
      img: this.curso.img,
      descripcion: this.curso.descripcion,
      cupos: this.curso.cupos,
      costo: this.curso.costo,
      duracion: this.curso.duracion,
      completado: this.curso.completado,
      fecha_registro: this.curso.fecha_registro,
      inscritos: this.curso.inscritos,
    };
    
    this.$store.dispatch('agregarCurso', nuevoCurso);
    this.show = false;
  }
}
  };
  </script>
  
  <style scoped>
  .table-container {
    position: relative;
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    margin: 20px; /* Espaciado alrededor de la tabla */
  }

  .table {
    width: 100%; /* O un ancho específico, como 80% */
    max-width: 800px; /* Limita el ancho máximo de la tabla */
  }
  
  td {
    text-align: start;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  th {
    text-align: start;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .costo {
    color: white;
    background-color: rgb(20, 160, 20);
    border-radius: 15px;
    padding: 5px;
  }
  
  .Si {
    color: white;
    background-color: rgb(20, 160, 20);
    border-radius: 15px;
    padding: 5px;
  }
  
  .No {
    color: white;
    background-color: rgb(160, 20, 20);
    border-radius: 15px;
    padding: 5px;
  }
  
  .actions {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  }

  .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
  </style>