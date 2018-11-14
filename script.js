window.onload = function () {
	document.getElementById("enable").onclick = function () {
		enableScroll();
		document.getElementById("status").innerHTML = "Скролл включённ";
		document.getElementById("status").className = "enabled";
		document.getElementById("text").className = "text-on"
	};

	document.getElementById("disable").onclick = function () {
		disableScroll();
		document.getElementById("status").innerHTML = "Скролл отключённ";
		document.getElementById("status").className = "disabled";
		document.getElementById("text").className = "text-off"
	};

	var keys = {
		33: 1,
		34: 1,
		35: 1,
		36: 1,
		37: 1,
		38: 1,
		39: 1,
		40: 1,
	};

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	function disableScroll() {
		if (window.addEventListener)
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		window.onwheel = preventDefault;
		window.onmousewheel = document.onmousewheel = preventDefault;
		window.ontouchmove = preventDefault;
		document.onkeydown = preventDefaultForScrollKeys;
	}

	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		window.ontouchmove = null;
		document.onkeydown = null;
	}

	function disable_scroll_mobile(){
		document.addEventListener('touchmove',preventDefault, false);
	}
	function enable_scroll_mobile(){
		document.removeEventListener('touchmove',preventDefault, false);
	}
};