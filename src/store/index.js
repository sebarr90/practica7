import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    cursos: [
      { id: 1, img: 'https://i.pinimg.com/originals/b5/57/64/b55764416830e7d8b0133c7c0eeaf445.png', nombre: 'JavaScript Avanzado', costo: 30000, duracion: '2 meses', cupos: 20, inscritos: 10, completado: false , fecha_registro: '06/03/2022', descripcion: 'Curso con las nuevas actualizaciones de JavaScript.' },
      { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzwE1WBjfzFZ5lH46GgSvgc9_5O38EtI8HA&s', nombre: 'CSS para principiantes', costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 23, completado: false, fecha_registro: '05/03/2022', descripcion: 'Aprendiendo estilos con CSS desde el nivel más básico.' },
      { id: 3, img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAe1BMVEX33x4AAAD95R/RvRnNuRlHQAn/6B/64h6rmxUkIAX/6iD/7CArJwVzaA6llRTu1x3HtBjn0RxRSQrgyxsyLQaRgxIQDgK7qRfZxBqzohZsYQ1AOgiVhxIgHQSBdRAdGgN6bg//8iA6NAdjWQycjhMXFQNYUAsIBwCIfBD+TbuOAAAG0ElEQVR4nO2c63ayOhCGIdgMFTQcVECtJyz1/q9wQ9uvRTLgYJG415rnrzXNm+OcomUxDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMN0AUJIOa2QUggw3Z1PQGoQeiamUqVB4s7P5/PcTYI0FFPzgiDM5m6DLOzuFnjgnA/raOO/2xXv/ibKD9tAeWKkXrcgnGj/es0+mnR1Crx4m2++ZNT5OBU7R8rReo4gnBetWy8dYkoph8VK+8o3fh5MDS62nmIk7NqEfJOH5ianlxgQwQ0pFZk0NTl9xAAsCVpse2YZUtNDjFBrkpaygdDMsUYXI8KcqKVsITaihixGhNR5qSiMqKGKAXVpPZAxZiZWGlWMyN76aLFXWwOnAFGMSPU/62afPKsYsLY9tdj2ZvxtQxMjnF4b5ovl6AuNuMxot2WDYGQtNDEQv7b0d/X2um+ZtLdd+JxiErS7+2i2zTJ3OYt8XWWRjG+i0ZYZel9G89ArXebSdVbZrOHfLLbhdGwpNDGgdFfM/pilP0MPU+Uu6h/OAjBha5LEpMi85FdXPMjgV43vGvJpSGIyXct72uivdP59dHBMhTYoYgRyMK+9ZkvTr1NikSljYQ2SmJkuJtEXkqg86kNsZLd894AiJtLFxHqXQdl+YjR4RhEzRYxMhXU6VgbO4xoUMRKZGTROaHCFfUJaZoUuxjEcvEQhiUEMgK12mj0BJDFI4O9keklhkMScdTGrudm9jkKyADCj2Q+eb6GRxISIGPtkLgzbBs1qRiMz+6X1ZEuN5s8cMDG2vQlMp5eu+YunWcmZPJOcP8YAqtkxfvH/MEB0ZuHGT6KHGAScII7zL/52osznmsli1KVLTHmyHZJYGt891Fizs+lWU/qec+NyyCmN8+0AbbFNzd6j9PwMJW8WLcP/ReocYkpSY7U5g7m11iOnmbZfNnU5fnAcXcW/LtKzzTIl5jVyYWhy+tQBTMM9TY0dmLl1elVoSBV90NQs0ejNo+lXOyOsywLpOsIaCaw9nJ6FQAAJEqrBKNJnTdDWvxCfaZNjQE1vMeVSm9ww1L6JRl9p/cVUFUFOi+t5TT6Sht+O3SGm3DkqRTIDGmNHCu8SU8mBmDA76bi3551irCqRac31LPM1+3Etm/vFVMWnMtl01wdlowaj/iKmRHpBfuoQc/o/iSkb8JxLu5GzD8bMO/9ZTNmETM9IOuqL2ZgH2gBiykZE2mYWvIxpcQ4ipmwGWu7RRTLi6TyQmMosmGNiVtsRj4DBxJT3qIupOYy4aYYTYwEaxF0P3eMOBhRjQYicAsWItnM/Mbf6hWybaET7rNfDBivufvMkJrqYe6e5k5bYnJjoQeQXtGIBIHTtQ2fPhKOvs00wvBhhJRlmWYhAt3wjRAwIlZTX/BtSzVT7I6SUe3gxINOt7WNV0wLJ8BX6MhdWcPgMAb50bQGR6tM8uBip5uWoflwwMUiV37q5M8qx+Akxdb1YQPfMsFU2IIL156j6iXYbg0LuhlnDnpJWzZBcdcT3sGtz2NNsqnb/tkWujSrESBhsd9VbOCZRPQn43vr+AkLEeM5vPPrsA3ju66+3oZXnA/YiblmfQE8VjQjzx6UlHSsw62w23MR44fWWnF9HtEEhY/nm/p5YEpZIarawsDNNotUCu4FsM0Ce783rcwMW9uqyds0BcnB/konG7ABI1Gp+dYdyNRMkBbGrkvZfWCHqg+S/ekXQ5uBvAvXTTtWUSvEY9GaYIC3gXS09DCcOwzBOnTPuuteNdrFtde8XyyCNQ1USxo7blvHMh9ky0DJW1XDl67xoi3n5dd8Q4lbvvuQjWh92u1lHfGawGjvpUhNdV7xcN9Lz4VwDf6gQAC3brXG5Pn4ELeTfwnIwP1O2nUVdrBpjiZ7eZAZ8dibvGNVlc5ELtKiRhm4/3Q8IYgayBvJgAXs+QyIfNJwJVt//j4VT71XzPnAAUPbsB258CGo5wzWDvzqVQZ+jtWgdk76vgUsT7wHOf7tFohO1musyPnTWAuqcHuD7V+4f9WzNO9aFUHP6oFRtOY/JZYiUNKrvu841Xvqrt37YpNbW9mGvtIXKbhYl2qebD9+kSogmxTqwHhf5A0iRhxZXLNPb1bwg44Tw2xNFEj62qElY8bbD7LyktKEEUJNLdw3dYRI+vsi59J8CfFiLLKQXWVd+WHBpG5e8T1N/AkCUy+162RfLidX0gAntyDC5NM5Ifz1PBeXXxIYDpsfjUcXOZDJxYuUdj/f+KpnwvONUxZOgwgnhePSmRooZy6Gt+Pt6+GqnYohuMQzDMMwA/Afhn2E03Drn1QAAAABJRU5ErkJggg==', nombre: 'JavaScript Básico de 0 a 100', costo: 20000, duracion: '2 meses', cupos: 25, inscritos: 0, completado: true, fecha_registro: '05/03/2022', descripcion: 'Programando para la web con JavaScript.' },
      { id: 4, img: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', nombre: 'HTML Básico', costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 0, completado: true, fecha_registro: '31/01/2022', descripcion: 'Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.' },
      { id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgyp0cGPFS4V3HEtHeE2hO0udk6QbTA5Kcg&s', nombre: 'Vue JS de 0 a 100', costo: 85500, duracion: '5 meses', cupos: 35, inscritos: 35, completado: false, fecha_registro: '06/03/2022', descripcion: 'Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.' },
      { id: 6, img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png', nombre: 'Estilos con SASS', costo: 45000, duracion: '1 mes', cupos: 40, inscritos: 35, completado: false, fecha_registro: '06/03/2022', descripcion: 'Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.' },
    ]
  },
  getters: {
    getAlumnosInscritos: (state) => {
      return state.cursos.reduce((acc, curso) => acc + parseInt(curso.inscritos), 0)
    },
    getTotalCupos: (state) => {
      return state.cursos.reduce((acc, curso) => acc + parseInt(curso.cupos) , 0)
    },
    getCuposDisponibles: (state, getters) => {
      return parseInt(getters.getTotalCupos - getters.getAlumnosInscritos)
    },
    getCursosCompletados: (state) => {
      return state.cursos.reduce((acc, curso) => acc + curso.completado, 0)
  },
  getCursosActivos: (state) => {
    return state.cursos.reduce((acc, curso) => acc + !curso.completado, 0)
},
getTotalCursos: (state) => {
  return state.cursos.length
}
  },
  mutations: {
    editarCurso(state, curso) {
      const index = state.cursos.findIndex(c => c.id === curso.id)
      state.cursos.splice(index, 1, curso)
    },
    eliminarCurso(state, id) {
      state.cursos = state.cursos.filter(curso => curso.id !== id)
    },
    agregarCurso(state, curso) {
      state.cursos.push(curso)
    }
  },
  actions: {
    eliminarCurso({ commit }, id) {
      commit('eliminarCurso', id)
      },
    agregarCurso({ commit }, curso) {
      commit('agregarCurso', curso)
    }
  },
  modules: {
  }
})
