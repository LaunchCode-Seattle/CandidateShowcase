function loadData(callback) {
	var request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open("open", "launchcode-seattle.github.io/data.json", true);
	request.onreadystatechange = function() {
		console.log("readyState == " & request.readyState);
		if (request.readyState == 4 && request.status == 200) {
			callback(request.responseText);
		}
	}
	request.send(null);
}

function vueOnLoad(raw) {
	console.log(raw)
	new Vue({
		el: '#app',
		data: JSON.parse(raw)
	});
}

window.onload = loadData(vueOnLoad);
