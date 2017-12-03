<script>
  import http from '../../utils/httpClient.js'

  export default {
    methods: {
      addaffirm:function(){
        console.log(this.addcont)
        this.addcontBox=!this.addcontBox;
        console.log(this.addcontBox)
      }

    },
    data() {
      return {
        getData:{

        },
        addcont:this.addcontBox,
        currentPage: 1
      };
    },
    props:['colsArray', 'addcontBox']
  }
</script>
<style type="text/css">
  
</style>
 