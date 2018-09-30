<template>
    <!--<div @click.stop="changeK">-->
    <div>
        <div class="tabar-list">
            <i :style="{color:icon_color}" class="mdui-icon material-icons" >{{icon}}</i>
            <span class="con-title" v-on="mydiyevent" :data-child="type" :data-id="k">{{title}}</span>
            <i class="mdui-icon material-icons keydown">keyboard_arrow_down</i>
        </div>
        <!--<tabar_list_content v-bind:lists="lists" :class="leftshow" @click.stop="aaa"></tabar_list_content>-->
        <tabar_list_content v-bind:lists="lists" v-on="mydiyevent" :class="leftshow"></tabar_list_content>
    </div>
</template>
<script>
    import tabar_list_content from './tabar_list_content'
    import { mapGetters, mapState } from 'vuex'
    export default {
        components:{
            tabar_list_content
        },
        data(){
          return {
              key:this.key,
              type:'parent'  //父标签
          }
        },
        props:{
            title:{
                type: [String, Number],
                required: true
            },
            lists:{
                type:Array,
                default:function(){
                    return [];
                }
            },
            icon:{
                type:String,
                default:'home'
            },
            icon_color:{
                type:String,
                default:'pink'
            },
            k:{
                type:Number,
                default:-1
            }
        },
        mounted(){
            // console.log(list_);
        },
        methods:{
            changeK:function(){
                this.$store.commit({type:'leftbanner/setShowItem',id:this.k});
            },
            aaa:function(e){
                console.log(e.target);
            }
        },
        computed:{
            ...mapState({
                leftshow : function (state){
                    return state.leftbanner.showCateitem==this.k?"show":'none';
                }
            }),
            mydiyevent:function(){
                let _this= this;
                return Object.assign({},
                    this.$listeners,
                    {
                        click:function(event){
                            if (event.target.getAttribute('data-child')=='child'){
                                _this.$emit('childclick',event);
                            }
                            if (event.target.getAttribute('data-child')=='parent'){
                                _this.$emit('parentclick',event);
                            }
                        }
                    }
                )
            }
        }
    }
</script>
<style>
    .tabar-list{width: 100%;height: 48px;line-height: 48px;padding: 0 16px;box-sizing: border-box;}
    .tabar-list > *{display: inline-block;float: left;}
    .tabar-list .keydown{float: right;}
    .tabar-list .con-title{margin-left: 15px;width: 185px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;letter-spacing:2px;}
    .tabar-list+.show{display: block;}
    .tabar-list+.none{display: none;}
    .tabar-list .con-title:hover{cursor: pointer;}
    .left-nav .mdui-icon.material-icons{padding: 0px;line-height: 48px;}
    .tabar-list:hover{background-color: #F2f2f2;}
</style>