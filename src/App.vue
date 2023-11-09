<template>
  <div id="app">
    <div class="btn-wrapper">
      <div class="btn" @click.prevent="">
        <div @click="clickWithPreventDefault()">with @click.prevent=""</div>
      </div>

      <div style="margin-top: 2rem" class="btn">
        <div @click="clickWithoutPreventDefault()">no @click.prevent=""</div>
      </div>
    </div>

    <div style="margin-top:20px;">
      <div
        ref="componentContainer"
        class="google-wrapper"
      >
        <div
          :id="'google-btn'"
          class=""
        ></div>
        <div class="">
          Continue with Google
        </div>
        <img
          src="@/assets/ico-google.png"
          alt="google-icon"
          class=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {
    clickWithPreventDefault() {
      console.log("with @click.prevent");
      alert("with");
    },
    clickWithoutPreventDefault() {
      console.log("no @click.prevent");
      alert("no");
    },
  },
  mounted() {

  },
};
</script>

<style>
.google-wrapper {
  display: flex;
  justify-content: center;
  border: 1px solid red;
  padding: 1rem;
  cursor: pointer;
}
.btn {
  height: 50px;
  width: 100%;
  border: 1px solid gray;
  position: relative;
}

.btn > div {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  line-height: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1rem;
  height: 100vh;
}
</style>
