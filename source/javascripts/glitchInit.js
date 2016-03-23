function loadImage(src, callback) {
	var img = new Image();

	img.onload = function() {
		callback(img);
	};

	img.src = src;
}

function glitchImage(params) {
	loadImage(imgPath, function(img) {
		glitch(params)
			.fromImage(img)
			.toDataURL()
			.then(function(dataURL) {
				var img = new Image();
				img.src = dataURL;
				imgContainer.innerHTML = "";
				imgContainer.appendChild(img);
			});
	});
}

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
