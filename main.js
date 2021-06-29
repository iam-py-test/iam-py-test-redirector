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
if(window.host !== null & window.host !== undefined) {
  document.title = "Redirecting to '" + window.host + "'"
  var addifsafe = async function(){
    var req = await fetch("https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/Alternative%20list%20formats/antimalware_domains.txt")
    var urlhaus = await fetch("https://raw.githubusercontent.com/curbengh/urlhaus-filter/master/urlhaus-filter-online.txt")
    var urlhauslist = (await urlhaus.text()).split("\n")
    var list = (await req.text()).split('\n')
    if(list.includes(host) === true || urlhauslist.includes(host) === true){
      var malwarn = document.getElementById('malwarewarn')
      malwarn.innerText += "Warning! \n"
      malwarn.appendChild(document.createTextNode('The url you are being redirected to has been identified as malware. It is recommended you do not continue'))
      malwarn.innerText += "\nClick on this warning to continue"
      document.getElementById('link').hidden = true
      malwarn.onclick = function(){
        document.getElementById('link').hidden = false
      }
      malwarn.hidden = false
    }
    document.getElementById('link').href = url
    try{
      var httpsupgrade = await fetch("https://raw.githubusercontent.com/iam-py-test/https-upgrade-lists/main/crawled.txt")
      var domainslist = (await httpsupgrade.text()).split("\n")
      if(domainslist.includes(host) === true){
        var urlp = new URL(document.getElementById('link').href)
        urlp.protocol = 'https:'
        document.getElementById('link').href = urlp.href
      }
    }
    catch(err){
    }
    
    document.getElementById('link').textContent =  "Continue to '{}'?".replace("{}",host)
    document.getElementById('alerturl').textContent = host
  }
  addifsafe()
}
