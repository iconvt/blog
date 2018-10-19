<template>
    <div id="editor">
        <div class="md input" contenteditable="true" @input="update" @mouseup.stop="mounsefocous">{{init_content}}</div>
        <div class="md" v-html="compiledMarkdown"></div>
        <el-dropdown>
            <span class="el-dropdown-link">
                MD快捷键<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in mdkeys" :data-k="item.key" :key="index" @click.native="insertDOM">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    import marked from "marked";
    import hljs from "highlight.js";
    import utils from '../../Module/util'
    import 'highlight.js/styles/default.css';

    import {mdKeys,mdkeylists} from "../../Module/mdkeys";
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(lang, code, true).value;
            } else {
                return hljs.highlightAuto(code).value;
            }
        }
    });
    export default {
        data(){
            return {
                content:'',
                init_content:'',
                mdkeys:mdkeylists,
                currentFocus:{}
            }
        },
        computed:{
            compiledMarkdown: function () {
                return marked(this.content, { sanitize: true })
            }
        },
        methods:{
            update: _.debounce(function (e) {
                this.content = e.target.innerText
                // this.content = e.target.value
            }, 300),
            mounsefocous:function () {
                var _this = this;
                utils.getMounseFocus(function () {
                    _this.currentFocus.Node=this.source.focusNode;
                    _this.currentFocus.focus=this.focus;
                    _this.currentFocus.selected=this.selected;
                    console.log(this);
                    window._node=_this.currentFocus;
                })
            },
            insertDOM:function(e){      //替换选中的内容,textNode会自动转义,加了span,就是html有点丑,MD没有影响
                let k = e.target.getAttribute('data-k');
                let insertStr = mdKeys[k];
                let Node = this.currentFocus.Node;
                // let str = Node.textContent.slice(0,this.currentFocus.focus)+insertStr+Node.textContent.slice(this.currentFocus.focus);
                // let newDOM = document.createElement('span');
                // newDOM.innerHTML=str;
                // Node.parentNode.replaceChild(newDOM,Node)
                // window._node=Node;
                utils.setFocusContent(this.currentFocus,insertStr);
                this.content=document.getElementsByClassName('input')[0].innerText;
            }
        }
    }
</script>
<style>
    textarea, #editor div.md {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 20px 20px;
        background-color: rgba(192,192,192,0.2);
    }
    #editor{position: relative;}
    #editor .el-dropdown{position: absolute;top:20px;left: 35%;}
    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #e8bf6a;
    }
    pre{
        background-color: #2b2b2b;
    }
</style>