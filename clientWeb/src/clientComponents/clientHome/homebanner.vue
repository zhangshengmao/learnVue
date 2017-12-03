<template>
    <div id="homebanner">
      <el-carousel :interval="4000" type="card" >
        <el-carousel-item v-for="item in 6" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script type="text/javascript">
    import './homebanner.scss';
</script>