var url = new URL(location).searchParams.get('url')
var token = new URL(location).searchParams.get('token')
document.getElementById('url').textContent = url
try{
var host = (new URL(url).hostname||exitvar)
}
catch(err){
  document.getElementById('url').textContent = "Invalid url"
  var host = null
}
