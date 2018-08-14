// Saves options to chrome.storage
function save_options() {
  var emr_prefix = document.getElementById('emr_prefix').value;
  chrome.storage.sync.set({
    emr_name_prefix: emr_prefix
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1200);
  });
}
	
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get('emr_name_prefix', function(data){
	  console.log(data)
	  document.getElementById('emr_prefix').value = data.emr_name_prefix;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);