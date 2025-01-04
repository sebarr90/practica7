<template>
  <v-container>
    <v-row>
      <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="8" md="6" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-img class="d-flex justify-center align-center img" color="surface-variant" height="200" :src="curso.img"
            contain>

          </v-img>
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">{{ curso.nombre }}</div>
            <span>Información:</span>

            <v-timeline aling="start" density="compact">
              <v-timeline-item size="x-small">
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <span>Costo: </span>
                    <strong>${{ curso.costo }}</strong>
                    <br>
                    <span>Duración: </span>
                    <strong>{{ curso.duracion }}</strong>
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <span>Cupos: </span>
                    <strong>{{ curso.cupos }}</strong>
                    <br>
                    <span>Completado: </span>
                    <strong>{{ curso.completado ? 'Sí' : 'No' }}</strong>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>Fecha de registro: </strong>
                    <span>{{ curso.fecha_registro }}</span>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>descripcion:</strong>
                  </div>

                  <div>{{ curso.descripcion }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',

  data: () => ({
    
  }),
  computed: {
    ...mapState(['cursos'])
  }
}
</script>

<style scoped></style>