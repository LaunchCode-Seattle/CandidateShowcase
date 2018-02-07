function loadData(callback) {
	var request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open("GET", "data.json", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			callback(request.responseText);
		}
	}
	request.send(null);
}

function vueOnLoad(raw) {
	data = function() {
		return JSON.parse(raw);
	}
	new Vue({
		el: '#app',
		data: data
	});
}

window.onload = loadData(vueOnLoad);
