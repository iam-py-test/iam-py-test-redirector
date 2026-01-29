"use strict";
var url = new URL(location).searchParams.get('url')
var token = new URL(location).searchParams.get('token')
document.getElementById('url').textContent = url
var host = null
try{
var host = (new URL(url).hostname||exitvar)
}
catch(err){
  document.getElementById('url').textContent = "Invalid url"
  var host = null
}
if(window.host !== null & window.host !== undefined & window.host !== "") {
  document.title = "Redirecting to '" + window.host + "'";
  
  (async function(){
    var req = await fetch("https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/Alternative%20list%20formats/antimalware_domains.txt")
    var list = (await req.text()).split('\n')
    var urlhaus = await fetch("https://raw.githubusercontent.com/curbengh/urlhaus-filter/master/urlhaus-filter-online.txt")
    var urlhauslist = (await urlhaus.text()).split("\n")
    var dandlistr = await fetch("https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareDomains.txt")
    var dandlist = (await dandlistr.text()).split("\n")
    var iplistr = await fetch("https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/Alternative%20list%20formats/antimalware_ips.txt")
    var iplist = (await iplistr.text()).split("\n")

    if(list.includes(host) === true || urlhauslist.includes(host) === true || dandlist.includes(host + "\r") === true || iplist.includes(host) == true){
      var malwarn = document.getElementById('malwarewarn')
      malwarn.innerText += "Warning! \n"
      malwarn.appendChild(document.createTextNode('The url you are being redirected to has been identified as malicious or deceptive. \nIt is recommended you do not continue.'))
      malwarn.hidden = false
    }
      
    document.getElementById('link').href = url
    
    document.getElementById('link').textContent =  "Continue to '{}'?".replace("{}",host)
    document.getElementById('alerturl').textContent = host
})()
  
}
