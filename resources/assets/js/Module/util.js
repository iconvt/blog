export default {
    getMounseFocus:function(cb){
        //判断是否支持document.selection属性
        var result = {}
        if (document.selection) {		
            var pos = 0;		
            var range = document.selection.createRange();		
            var srcele = range.parentElement();		
            //新建一个range，焦点在开头		
            var copy = document.body.createTextRange();		
            copy.moveToElementText(srcele);		
            //判断copy的焦点起始部分是否在range的焦点起始部分的后面		
            for (pos = 0; copy.compareEndPoints("StartToStart", range) < 0; pos++) {			
                //copy的焦点向后移动一个字符			
                copy.moveStart("character", 1);		
            }
            result.focus=pos;
            result.selected=range.htmlText;
            result.source=range;
        }else if (window.getSelection) {
            //获取Selection对象
            var se = window.getSelection();
            //获取起始位置，这个是字符的序号位置，而不是坐标
            var start = se.anchorOffset;
            //获取结束位置
            var end = se.focusOffset;
            //获取起始的dom元素
            var startEl = se.anchorNode.parentElement;
            //获取结束的dom元素
            var endEl = se.focusNode.parentElement;
            //获取起始dom元素的文本内容
            var startText = startEl.innerText;
            var txt = '';
            if (startEl == endEl) {
                txt = startText.substring(start, end);
            }
            result.focus=start;
            result.selected=txt;
            result.source=se;
        }
        if (cb&&typeof cb =='function'){
            cb.call(result);
        } else{
            return result;
        }
    }
}