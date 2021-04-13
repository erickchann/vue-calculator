<template>
  <div id="main">
    <div class="home">
      <header>
        <img alt="Vue logo" src="../assets/logo.png" class="vue-logo">
        <h1>- Calculator</h1>
      </header>

      <main>
        <router-link to="/calculator1">
          <li>Test 1</li>
        </router-link>

        <router-link to="/calculator2">
          <li>Test 2</li>
        </router-link>

        <router-link to="/calculator3">
          <li>Test 3</li>
        </router-link>
      </main>
    </div>
  </div>
</template>

<style scoped>

#main {
  margin: 5% !important;
}

header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

img.vue-logo {
  width: 70px;
  height: 70px;
}

a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

li {
  font-size: 20px;
}
</style>