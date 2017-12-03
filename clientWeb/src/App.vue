<template>
  <div class="appcontainer">
    <div class="routerSelect">
        <router-view></router-view>
    </div>
    <cfooter></cfooter>
  </div>
</template class="">

<script>
import cfooter from "./clientComponents/footer/footer.vue"
    export default {
        components: {
            cfooter
        }
    }
</script>

<style type="text/css">
    body,html{height:100%;width:100%;padding:0;margin:0;}
    .appcontainer{height:100%;display:flex;flex-direction: column;}
    .appcontainer .routerSelect{flex:1;overflow:auto ;}
    #footer{height:150px;background-color:#000;}
</style>