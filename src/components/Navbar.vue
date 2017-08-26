<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stream" exact>Stream</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stats</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/bot-settings" exact>Bot Settings</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Configure</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>