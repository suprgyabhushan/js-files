/* Javascript for PrintXBlock. */
function printDiv() {
    window.print();
}
function changecolorDiv(){
  document.body.style.color = "blue";
}
function resizetextDiv() {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (10 * 0.2) + "em";
}
function decreasetextDiv() {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + ((-10) * 0.2) + "em";
}

function enable()
  {
    d=document;
    jf=d.createElement('script');
    jf.src='https://core.atbar.org/atbar/en/latest/atbar.min.js';
    jf.type='text/javascript';
    jf.id='ToolBar';
    d.getElementsByTagName('head')[0].appendChild(jf);
  }
function enable1()
{
  d=document;
  jf=d.createElement('script');
  jf.src='https://gitcdn.xyz/cdn/suprgyabhushan/ab-xblock/ef239f34de1aeb2e9dbebb0eca8e3f9c8090d3fd/abxblock/static/js/src/vebar-atkit-1.6.js';
  jf.type='text/javascript';
  jf.id='ToolBar';
  d.getElementsByTagName('head')[0].appendChild(jf);
}
//document.getElementById('atbar').dispatchEvent(new MouseEvent("click"));
//var elem = document.getElementById('atbar');

// Simulate clicking on the specified element.
//triggerEvent( elem, 'click' );

//function triggerEvent( elem, event ) {
//  var clickEvent = new Event( event ); // Create the event.
//  elem.dispatchEvent( clickEvent );    // Dispatch the event.
//}

/*var all = d.getElementsByTagName("*");
for (var l = 0, max=all.length; l < max ; l++){
    all[l].style.fontSize= window.sessionStorage.getItem(l);
}*/
window.onload = onPageLoad();

function onPageLoad() {
  d=document;
  jf=d.createElement('script');
  jf.src='https://gitcdn.xyz/cdn/suprgyabhushan/ab-xblock/ef239f34de1aeb2e9dbebb0eca8e3f9c8090d3fd/abxblock/static/js/src/vebar-atkit-1.6.js';
  jf.type='text/javascript';
  jf.id='ToolBar';
  d.getElementsByTagName('head')[0].appendChild(jf);
  d.getElementById('bcsession').style.backgroundColor = window.localStorage.getItem('bColour');
  var c = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];
  var all = d.getElementsByTagName("*");
  var alinks = d.getElementsByTagName("a");



  for (var a = 0; a < c.length; a++){
       $(c[a]).each(function(c, d){
         var e = $(d).css("font-size");
         e = parseFloat(e);
         var f = parseFloat(window.localStorage.getItem("fSize"));
         var newVal = parseFloat(e + f);
         $(d).css("font-size", newVal + "px");
       });

  };

  for (var b = 0, max=c.length; b < max ; b++){
      $(c[b]).css("font-family", window.localStorage.getItem("fFace"));
  };
  for (var b = 0, max=c.length; b < max ; b++){

      $(c[b]).css("line-height", window.localStorage.getItem("lHeight") + "%");
  };
  for (var b = 0, max=c.length; b < max ; b++){
      $(c[b]).css("color", window.localStorage.getItem("textColour"));
  };
  /*for (var l = 0, max=alinks.length; l < max ; l++){
      //alinks[l].style.color = window.localStorage.getItem("linkColour");

  };*/
  //$("*").css("color", window.localStorage.getItem("textColour"));
  $("a").css("color", window.localStorage.getItem("linkColour"));




}

/*$lib = AtKit.lib();
for (var b = AtKit.getHtmlTags(), a = 0; a < b.length; a++) $lib(b[a]).each(function(b, c) {
    if (window.sessionStorage.length !== 0) {
    $lib(c).css("font-size", window.sessionStorage.getItem("fSize") + "px");
  })
}*/
/*window.onload = refreshBlock();

function refreshBlock() {
         document.getElementById('only').location.reload();
}*/

/*function doalert(checkboxElem) {
  if (checkboxElem.checked==false) {
    d=document;
    jf=d.createElement('script');
    jf.src='http://marketplace.atbar.org/toolbars/25d28f0a5b08d5159bcdc88623586eb1a808b534.user.js';
    jf.type='text/javascript';
    jf.id='ToolBar';
    d.getElementsByTagName('head')[0].appendChild(jf);
  } else {
    window.alert("checked");
  }
}*/
