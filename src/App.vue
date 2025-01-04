<template>
  <v-app>
    <v-app-bar app color="primary" dark>
     
      <span>Cursos AlfaWeb</span>
      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </v-btn>
      <v-btn text to="/administracion">
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
