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
  document.title = "Redirecting to '" + window.host + "'"
  var addifsafe = async function(){
    var req = await fetch("https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/Alternative%20list%20formats/antimalware_domains.txt")
    var list = (await req.text()).split('\n')
    var urlhaus = await fetch("https://raw.githubusercontent.com/curbengh/urlhaus-filter/master/urlhaus-filter-online.txt")
    var urlhauslist = (await urlhaus.text()).split("\n")
    var phishinglistreq = await fetch("https://raw.githubusercontent.com/curbengh/phishing-filter/master/dist/phishing-filter.txt")
    var phishinglist = (await phishinglistreq.text()).split("\n")
    var PUPlistreq = await fetch("https://curbengh.github.io/pup-filter/pup-filter-domains.txt")
    var PUPlist = (await PUPlistreq.text()).split("\n")
    var dandlistr = await fetch("https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareDomains.txt")
    var dandlist = (await dandlistr.text()).split("\n")
    var iplistr = await fetch("https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/Alternative%20list%20formats/antimalware_ips.txt")
    var iplist = (await iplistr.text()).split("\n")
    var blpmalr = await fetch("https://raw.githubusercontent.com/blocklistproject/Lists/master/alt-version/malware-nl.txt")
    var blpmal = (await blpmalr.text()).split("\n")
    if(list.includes(host) === true || urlhauslist.includes(host) === true || phishinglist.includes(host) === true || PUPlist.includes(host) === true || dandlist.includes(host + "\r") === true || iplist.includes(host) == true || blpmal.includes(host) === true){
      var malwarn = document.getElementById('malwarewarn')
      malwarn.innerText += "Warning! \n"
      malwarn.appendChild(document.createTextNode('The url you are being redirected to has been identified as malicious or deceptive. \nIt is highly recommended you do not continue'))
      window.setTimeout(function(){malwarn.innerText += "\nClick on this warning to continue"},955)
      document.getElementById('link').hidden = true
      malwarn.onclick = async function(){
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
        document.getElementById('malwarewarn').innerText = "The url you are being redirected to has been identified as malicious or deceptive. \nIt is highly recommended you do not continue"
        document.getElementById('link').hidden = false
      }
      malwarn.hidden = false
    }
    else{
      
    document.getElementById('link').href = url
    try{
      var httpsupgrade = await fetch("https://raw.githubusercontent.com/iam-py-test/https-upgrade-lists/main/crawled.txt")
      var manualupgrade = await fetch('https://raw.githubusercontent.com/iam-py-test/https-upgrade-lists/main/sites.txt')
      var domainslist = (await httpsupgrade.text()).split("\n")
      var manualdomains = (await manualupgrade.text()).split('\n')
      if(domainslist.includes(host) === true || manualdomains.includes(host) === true){
        var urlp = new URL(document.getElementById('link').href)
        urlp.protocol = 'https:'
        document.getElementById('link').href = urlp.href
      }
    }
    catch(err){
    }
    }
    
    document.getElementById('link').textContent =  "Continue to '{}'?".replace("{}",host)
    document.getElementById('alerturl').textContent = host
  }
  addifsafe()
}
