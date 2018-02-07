function defaultData() {
	var json = {};
	json.groups = [];
	json.groups[0] = {}
	json.groups[0].location = "City";
	json.groups[0].number = "5";
	json.groups[0].repo = "repoLink";
	json.groups[0].members = [];
	json.groups[0].members[0] = {};
	json.groups[0].members[0].firstName = "";
	json.groups[0].members[0].lastName = "";
	json.groups[0].members[0].userName = "";
	return JSON.stringify(json);
}
function loadData(callback) {
	var request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open("GET", "data.json", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			if (request.status == 200) {
				callback(request.responseText);
			}
		}
	}
	callback(defaultData());
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

window.onload = function() {
	loadData(vueOnLoad);
}
