if(typeof window["AtKit"] == "undefined"){
	// Load AtKit

d=document;jf=d.createElement('script');jf.src='https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/atkit.js';jf.type='text/javascript';jf.id='AtKitLib';d.getElementsByTagName('head')[0].appendChild(jf);

	window.AtKitLoaded = function(){
		var eventAction = null;

		this.subscribe = function(fn) {
			eventAction = fn;
		};

		this.fire = function(sender, eventArgs) {
			if (eventAction != null) {
				eventAction(sender, eventArgs);
			}
		};
	}

	window["AtKitLoaded"] = new AtKitLoaded();
	window["AtKitLoaded"].subscribe(function(){ __start(); });
} else {
	__start();
}

function __start(){

	// Start toolbar code
	(function (window, AtKit) {

		$ = AtKit.lib();

		var settings = {
			"version": "1.0"
		};

		settings.baseURL = ("https:" == document.location.protocol ? "https://ssl.atbar.org/c/ATBar/" : "http://c.atbar.org/ATBar/");

		var plugins = ["tooltip"];

		var onLoad = function(){

			// Set our logo

			AtKit.setLanguage("en");

			var about = "Version " + settings.version;
			about += "My Toolbar";

			AtKit.setAbout(about);



			// Add all the plugins to the toolbar

			$.each(plugins, function(i, v){
				AtKit.addPlugin(v);
			});
			AtKit.addPlugin("resize");
    	AtKit.addPlugin("css1");
			AtKit.addPlugin("link");
			AtKit.addPlugin("fonts");
			AtKit.addPlugin("fonts1");
			AtKit.addPlugin("back");
			AtKit.addPlugin("insipio-tts");


			/*AtKit.addResetFn("reset-saved", function(){
				AtKit.clearStorage();
			});*/


			// Run
			AtKit.render();
		};


		AtKit.importPlugins(plugins, onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/resize.js', onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/fc.js', onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/lc.js', onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/fontface.js', onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/lineheight.js', onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/bc.js', onLoad);
		AtKit.addScript('https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/tts.js', onLoad);



	}(window, AtKit));

}
