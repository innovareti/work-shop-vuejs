<template>
  <div id="app" class="container">

    <navbar></navbar>

    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {   
    Navbar 
  }
}
</script>

<style>

</style>
