webpackJsonp([15],{201:function(t,e,r){"use strict";r(202)},202:function(t,e,r){(function(){var t=r(2);(function(){!function(e){return e(t)}(function(t){var e,r,i,n,o,s;return o=function(){function e(t){this.$inputor=t}return e.prototype.css_attr=["overflowY","height","width","paddingTop","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom","fontFamily","borderStyle","borderWidth","wordWrap","fontSize","lineHeight","overflowX","text-align"],e.prototype.copy_inputor_css=function(){var e,r=this;return e={position:"absolute",left:-9999,top:0,zIndex:-2e4,"white-space":"pre-wrap"},t.each(this.css_attr,function(t,i){return e[i]=r.$inputor.css(i)}),e},e.prototype.create=function(e){return this.$mirror=t("<div></div>"),this.$mirror.css(this.copy_inputor_css()),this.$mirror.html(e),this.$inputor.after(this.$mirror),this},e.prototype.get_flag_rect=function(){var t,e,r;return t=this.$mirror.find("span#flag"),e=t.position(),r={left:e.left,top:e.top,bottom:t.height()+e.top},this.$mirror.remove(),r},e}(),n={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13},r={data_refactor:function(e){return t.isArray(e)?t.map(e,function(e,r){return t.isPlainObject(e)||(e={name:e}),e}):e},matcher:function(t,e){var r,i,n;return n=new RegExp(t+"([A-Za-z0-9_+-]*)$|"+t+"([^\\x00-\\xff]*)$","gi"),r=n.exec(e),i=null,r&&(i=r[2]?r[2]:r[1]),i},filter:function(e,r,i){var n=this;return t.map(r,function(r,n){var o;return o=t.isPlainObject(r)?r[i]:r,o.toLowerCase().indexOf(e)>=0?r:void 0})},remote_filter:function(e,r,i){return t.ajax(r,{data:e,success:function(t){return i(t)}})},sorter:function(t,e,r){var i,n,o,s,a;if(!t)return e.sort(function(t,e){return t[r].toLowerCase()>e[r].toLowerCase()});for(n=[],s=0,a=e.length;a>s;s++)i=e[s],o=i[r],i.order=o.toLowerCase().indexOf(t),n.push(i);return n.sort(function(t,e){return t.order-e.order})},tpl_eval:function(t,e){var r;try{return r=t.replace(/\$\{([^\}]*)\}/g,function(t,r,i){return e[r]})}catch(i){return""}},highlighter:function(t,e){return e?t.replace(new RegExp(">\\s*(\\w*)("+e.replace("+","\\+")+")(\\w*)\\s*<","ig"),function(t,e,r,i){return"> "+e+"<strong>"+r+"</strong>"+i+" <"}):t},selector:function(t){return t.length>0?this.replace_str(t.data("value")||""):void 0}},e=function(){function e(e){this.settings={},this.common_settings={},this.pos=0,this.flags=null,this.current_flag=null,this.query=null,this.$inputor=t(e),this.mirror=new o(this.$inputor),this.common_settings=t.extend({},t.fn.atwho["default"]),this.view=new s(this,this.$el),this.listen()}return e.prototype.listen=function(){var t=this;return this.$inputor.on("keyup.atwho",function(e){return t.on_keyup(e)}).on("keydown.atwho",function(e){return t.on_keydown(e)}).on("scroll.atwho",function(e){return t.view.hide()}).on("blur.atwho",function(e){return t.view.hide(t.get_opt("display_timeout"))})},e.prototype.reg=function(e,r){var i,n;return i={},i=t.isPlainObject(e)?this.common_settings=t.extend({},this.common_settings,e):this.settings[e]?this.settings[e]=t.extend({},this.settings[e],r):this.settings[e]=t.extend({},r),n=i.data,i.data=this.callbacks("data_refactor").call(this,n),this},e.prototype.trigger=function(t,e){return e||(e=[]),e.push(this),this.$inputor.trigger(""+t+".atwho",e)},e.prototype.data=function(){return this.get_opt("data")},e.prototype.callbacks=function(t){var e;return(e=this.get_opt("callbacks",{})[t])||(e=this.common_settings.callbacks[t]),e},e.prototype.get_opt=function(t,e){var r;try{return this.current_flag&&(r=this.settings[this.current_flag][t]),void 0===r&&(r=this.common_settings[t]),r=void 0===r?e:r}catch(i){return r=void 0===e?null:e}},e.prototype.rect=function(){var e,r,i,n,o,s,a,l,c,u;return e=this.$inputor,document.selection?(r=document.selection.createRange(),c=r.boundingLeft+e.scrollLeft(),u=r.boundingTop+t(window).scrollTop()+e.scrollTop(),n=u+r.boundingHeight,{top:u-2,left:c-2,bottom:n-2}):(o=function(t){return t.replace(/</g,"&lt").replace(/>/g,"&gt").replace(/`/g,"&#96").replace(/"/g,"&quot").replace(/\r\n|\r|\n/g,"<br />")},l=e.val().slice(0,this.pos-1),s="<span>"+o(l)+"</span>",s+="<span id='flag'>?</span>",a=e.offset(),i=this.mirror.create(s).get_flag_rect(),c=a.left+i.left-e.scrollLeft(),u=a.top-e.scrollTop(),n=u+i.bottom,u+=i.top,{top:u,left:c,bottom:n+2})},e.prototype.catch_query=function(){var e,r,i,n,o,s,a=this;return r=this.$inputor.val(),e=this.$inputor.caretPos(),s=r.slice(0,e),n=null,t.each(this.settings,function(t,e){return n=a.callbacks("matcher").call(a,t,s),null!=n?(a.current_flag=t,!1):void 0}),"string"==typeof n&&n.length<=20?(o=e-n.length,i=o+n.length,this.pos=o,n={text:n.toLowerCase(),head_pos:o,end_pos:i},this.trigger("matched",[this.current_flag,n.text])):this.view.hide(),this.query=n},e.prototype.replace_str=function(t){var e,r,i,n,o;return e=this.$inputor,i=e.val(),r=this.get_opt("display_flag")?0:this.current_flag.length,n=i.slice(0,(this.query.head_pos||0)-r),o=""+n+t+" "+i.slice(this.query.end_pos||0),e.val(o),e.caretPos(n.length+t.length+1),e.change()},e.prototype.on_keyup=function(e){switch(e.keyCode){case n.ESC:e.preventDefault(),this.view.hide();break;case n.DOWN:case n.UP:t.noop();break;default:this.look_up()}return e.stopPropagation()},e.prototype.on_keydown=function(e){if(this.view.visible()){switch(e.keyCode){case n.ESC:e.preventDefault(),this.view.hide();break;case n.UP:e.preventDefault(),this.view.prev();break;case n.DOWN:e.preventDefault(),this.view.next();break;case n.TAB:case n.ENTER:if(!this.view.visible())return;e.preventDefault(),this.view.choose();break;default:t.noop()}return e.stopPropagation()}},e.prototype.render_view=function(t){var e;return e=this.get_opt("search_key"),t=this.callbacks("sorter").call(this,this.query.text,t,e),t=t.splice(0,this.get_opt("limit")),this.view.render(t)},e.prototype.remote_call=function(e,r){var i,n;return i={q:r.text,limit:this.get_opt("limit")},n=function(t){return this.reg(this.current_flag,{data:t}),this.render_view(this.data())},n=t.proxy(n,this),this.callbacks("remote_filter").call(this,i,e,n)},e.prototype.look_up=function(){var e,r,i;return(r=this.catch_query())?(e=this.data(),i=this.get_opt("search_key"),"string"==typeof e?this.remote_call(e,r):(e=this.callbacks("filter").call(this,r.text,e,i))?this.render_view(e):this.view.hide(),t.noop()):!1},e}(),s=function(){function e(e){this.controller=e,this.id=this.controller.get_opt("view_id","at-view"),this.timeout_id=null,this.$el=t("#"+this.id),this.create_view()}return e.prototype.create_view=function(){var e,r,i=this;if(!this.exist())return r="<div id='"+this.id+"' class='at-view'><ul id='"+this.id+"-ul'></ul></div>",t("body").append(r),this.$el=t("#"+this.id),e=this.$el.find("ul"),e.on("mouseenter.view","li",function(r){return e.find(".cur").removeClass("cur"),t(r.currentTarget).addClass("cur")}).on("click",function(t){return t.stopPropagation(),t.preventDefault(),i.$el.data("_view").choose()})},e.prototype.exist=function(){return t("#"+this.id).length>0},e.prototype.visible=function(){return this.$el.is(":visible")},e.prototype.choose=function(){var t;return t=this.$el.find(".cur"),this.controller.callbacks("selector").call(this.controller,t),this.controller.trigger("choose",[t]),this.hide()},e.prototype.reposition=function(){var e,r;return r=this.controller.rect(),r.bottom+this.$el.height()-t(window).scrollTop()>t(window).height()&&(r.bottom=r.top-this.$el.height()),e={left:r.left,top:r.bottom},this.$el.offset(e),this.controller.trigger("reposition",[e])},e.prototype.next=function(){var e,r;return e=this.$el.find(".cur").removeClass("cur"),r=e.next(),r.length||(r=t(this.$el.find("li")[0])),r.addClass("cur")},e.prototype.prev=function(){var t,e;return t=this.$el.find(".cur").removeClass("cur"),e=t.prev(),e.length||(e=this.$el.find("li").last()),e.addClass("cur")},e.prototype.show=function(){return this.visible()||this.$el.show(),this.reposition()},e.prototype.hide=function(t){var e,r=this;return isNaN(t)?this.visible()?this.$el.hide():void 0:(e=function(){return r.hide()},clearTimeout(this.timeout_id),this.timeout_id=setTimeout(e,t))},e.prototype.clear=function(){return this.$el.find("ul").empty()},e.prototype.render=function(e){var r,n,o=this;return t.isArray(e)?e.length<=0?(this.hide(),!0):(this.clear(),this.$el.data("_view",this),r=this.$el.find("ul"),n=this.controller.get_opt("tpl",i),t.each(e,function(e,i){var s,a;return a=o.controller.callbacks("tpl_eval").call(o.controller,n,i),s=t(o.controller.callbacks("highlighter").call(o.controller,a,o.controller.query.text)),s.data("info",i),r.append(s)}),this.show(),r.find("li:eq(0)").addClass("cur")):!1},e}(),i="<li data-value='${name}'>${name}</li>",t.fn.atwho=function(r,i){return this.filter("textarea, input").each(function(){var n,o;return n=t(this),o=n.data("atwho"),o||n.data("atwho",o=new e(this)),o.reg(r,i)})},t.fn.atwho.Controller=e,t.fn.atwho.View=s,t.fn.atwho.Mirror=o,t.fn.atwho["default"]={data:null,search_key:"name",callbacks:r,limit:5,display_flag:!0,display_timeout:300,tpl:i}})}).call(this),function(){!function(e){return e(t)}(function(t){var e,r;return e=function(t){var e,r,i,n,o,s,a,l;return document.selection?(s=document.selection.createRange(),o=0,s&&s.parentElement()===t&&(n=t.value.replace(/\r\n/g,"\n"),i=n.length,l=t.createTextRange(),l.moveToBookmark(s.getBookmark()),r=t.createTextRange(),r.collapse(!1),l.compareEndPoints("StartToEnd",r)>-1?a=e=i:(a=-l.moveStart("character",-i),e=-l.moveEnd("character",-i)))):a=t.selectionStart,a},r=function(t,e){var r;return document.selection?(r=t.createTextRange(),r.move("character",e),r.select()):t.setSelectionRange(e,e)},t.fn.caretPos=function(t){var i;return i=this[0],i.focus(),t?r(i,t):e(i)}})}.call(this)}).call(window)}});