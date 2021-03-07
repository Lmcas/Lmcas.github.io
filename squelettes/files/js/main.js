function displayWidth() {

		
		var dWindowSizing = null, dWinSize = null, css={};

		$("body").append("<div id='window-sizing'></div>");
		dWindowSizing = $("#window-sizing")

		dWindowSizing.append("<div id='win-size' class='spip-admin-boutons'></div>");

		dWinSize = $('#win-size');

		dWinSize.append("<div></div>");

		css = {
			display:"inline-block",
			opacity:0.8,
			position: "fixed",
			top: "0",
			left: "11%",
			"background-color": "#939393",
			padding: "6px 10px",
			"border-radius": "5px",
			color: "white",
			"font-weight": "bold",
			"z-index" : 100
		};

		$.each(css,function(key, value) {
				dWinSize.css(key, value);
		});

		dWinSize.children('div').append('<p class="size" style="margin:0px">'+$(window).width()+'px / '+$(window).height()+'px</p>');

		$(window).on('resize', function() {
			if(dWinSize.children('div').children('p').hasClass('size')) {
				dWinSize.children('div').children('p').remove();
			}
			dWinSize.children('div').append('<p class="size" style="margin:0px">'+$(window).width()+'px / '+$(window).height()+'px</p>')
		});
}

