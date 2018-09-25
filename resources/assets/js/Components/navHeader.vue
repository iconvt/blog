<template>
    <div>
        <i class="mdui-icon material-icons" @click.stop="exporeLeft">menu</i>
        <span>{{ title }}</span>
    </div>
</template>
<script>
    import {event} from '../Module/event.js';
    export default {
        data(){
            return {
                title:'iconv',
                isShowLeft:true
            }
        },
        methods:{
            exporeLeft:function(ele){
                this.isShowLeft=!this.isShowLeft;
                event.emit('e_showLeft',this.isShowLeft)
            }
        }
    }
</script>
<style scoped>
    .mdui-icon.material-icons{padding: 18px;cursor: pointer;}
</style>