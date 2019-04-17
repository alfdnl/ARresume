AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        // const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
        	if (ev.target.id === "animated-model") {
            console.log("sulses");
            window.location.href = "https://www.instagram.com/alf.dnl/";
        	}
			if (ev.target.id === "animated-model2") {
            console.log("sulses2");
            window.location.href = "https://twitter.com/alipnoi";
        	}
            
        });
	}
});