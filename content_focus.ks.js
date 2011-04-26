var PLUGIN_INFO =
<KeySnailPlugin>
    <name>zou search</name>
    <name lang="ja">content focus</name>
    <description>focus to content with onload event</description>
    <version>0.0.1</version>
    <updateURL></updateURL>
    <iconURL></iconURL>
    <author mail="basyura@gmail.com" homepage="http://github.com/basyura/content-focus">basyura</author>
    <license>The MIT License</license>
    <license lang="ja">MIT ライセンス</license>
    <minVersion>1.8.8</minVersion>
    <include>main</include>
    <provides>
    </provides>
	<options>
	</options>
    <detail><![CDATA[
=== Usage ===
=== 使い方 ===
	
履歴：
0.0.1 initial
    ]]></detail>
</KeySnailPlugin>;

gBrowser.addEventListener('load' , function(event) {
    let doc = event.originalTarget;
    if (!(doc instanceof HTMLDocument)) {
      return;
    }
    //alert(event.target.linkedBrowser.currentURI);
    //alert(gBrowser.currentURI.spec);
    setTimeout(function () {
        let elem = document.commandDispatcher.focusedElement;
        if (elem) {
          elem.blur();
        }
        gBrowser.focus();
        content.focus();
      } , 100);
  } , true);

