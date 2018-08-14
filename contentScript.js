function waiting(){
	if (document.readyState != "complete" || document.getElementById("cl-table-filter-text-input") == null) {
		setTimeout(waiting, 100);
	}
	else {
		ready()
	}
}

function ready(){
	element = document.getElementById("cl-table-filter-text-input");
	chrome.storage.sync.get('emr_name_prefix', function(data){
		element.dispatchEvent(new Event('focus'));
		element.value=data.emr_name_prefix;
		element.dispatchEvent(new Event('change'));
		style = document.createElement('style');
		style.innerHTML= ".GKW0IXEGE.GKW0IXEBF.GKW0IXENE.GKW0IXEAR {display: inline !important}"
		document.getElementsByTagName('head')[0].append(style)
	})
}

waiting()
