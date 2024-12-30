<template>
  <v-app>
    <v-app-bar app color="primary" dark>
     
      <span>Cursos AlfaWeb</span>
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </v-btn>
      <v-btn text>
        <i class="fa-solid fa-wrench"></i>
        <span>Administración</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
