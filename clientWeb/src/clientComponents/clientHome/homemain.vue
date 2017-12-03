<template>
    <main id="homemain">
    <div class="nav" @click="click"> 
        <caside></caside>
    </div>
       
        <section class="content">
            <datagrid :api = 'api'></datagrid>
            <!-- <router-view></router-view> -->
        </section>
    </main>
</template>

<script type="text/javascript">
    import './homemain.scss';
    import caside from "./homeaside.vue";
    import datagrid from "../datagrid/datagrid.vue";
    export default{
        data: function(){
            return {
                api:'homeDetail'
            }
        },
        components: {
            caside,
            datagrid
            // content
        },
        methods:{
            
            click(event){
                // console.log(event)
                var self = this;
                var classify = '';
                if(event.target.tagName.toLowerCase() == 'span' || event.target.tagName.toLowerCase() == 'i'){
                    classify = event.path[1].textContent;
                }else if(event.target.tagName.toLowerCase() == 'li'){
                    classify = event.target.textContent;
                }
                console.log(classify)
                this.api = 'homeSale'
                switch (classify){
                    case ' 热门推荐':
                        this.api = 'homeDetail'
                        break;
                    case ' 每日折扣':
                        this.api = 'homeSale'
                        break; 
                    // case ' 今日套餐':
                    //     this.api = 'properties'
                    //     break;
                    case ' 无肉不欢':
                        this.api = 'meat'
                        break;
                    case ' 维C满满':
                        this.api = 'vegetable'
                        break;
                    case ' 开胃小菜':
                        this.api = 'beforeEating'
                        break;
                    case ' 滋补靓汤':
                        this.api = 'soap'
                        break;
                    default:
                        break;
                }
            }
        }

    }
</script>