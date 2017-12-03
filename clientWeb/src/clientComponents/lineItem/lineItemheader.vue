<template>
    <div>
        <ul class="itemheader">
            <li @click="listItem" :style="listItembg"><i class="el-icon-zoom-in itemi">&nbsp;&nbsp;</i>订单详情</li>
            <li @click="callWaiter" :style="callWaiterbg"><i class="el-icon-service itemi">&nbsp;&nbsp;</i>联系客服</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import router from '../../router/index.js';
    export default {
        data(){
            return {
                callWaiterbg:'background:#545c64;',
                listItembg:'background:#ffd04b;'
            }
        },
        methods: {
            listItem(){
                router.push({name: 'listItem'});
                this.listItembg='background:#ffd04b;';
                this.callWaiterbg='background:#545c64;'
            },
            callWaiter(){
                this.callWaiterbg='background:#ffd04b;';
                this.listItembg='background:#545c64;'
                router.push({name: 'callWaiter'});
            }
        }
    }
</script>