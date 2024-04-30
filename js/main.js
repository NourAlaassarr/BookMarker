var WebSiteNameInput = document.getElementById("WebSiteNameInput");
var WebSiteUrlInput = document.getElementById("WebSiteUrlInput");



if(localStorage.getItem("Websites")!=null){
    Websites=JSON.parse(localStorage.getItem("Websites"));
    Websites}
else{
    Websites=[]
}
function Add()
{
    var Website={
        WebsiteName:WebSiteNameInput.value,
        Url:WebSiteUrlInput.value,}
        Websites.push(Website)
        window.localStorage.setItem("Websites",JSON.stringify(Websites))
        ClearForm();
        Display(Websites);

}

function Display (Websitelist){
    var Cartoona=``
    for(i=0;i<Websitelist.length;i++){
        Cartoona+=`<div class="ListContent d-flex  ">
        <h4 class="fw-bolder m-4">${Websitelist[i].WebsiteName}</h4>
        <button onclick="VisitUrl(${i})" class=" m-4 btn btn-primary">Visit </button>
        <button onclick="deleteUrl(${i})" class=" m-4 btn btn-danger">Delete </button>
    </div>`
    }
    document.getElementById("tabelWebsites").innerHTML=Cartoona
}

function ClearForm()
{
    WebSiteNameInput.value="";
    WebSiteUrlInput.value="";

};

function deleteUrl(WebsiteUrlIndex) {
    Websites.splice(WebsiteUrlIndex, 1)
    localStorage.setItem("Websites",JSON.stringify(Websites));
    Display(Websites);
}

function VisitUrl(WebsiteUrlIndex) {
window.open(Websites[WebsiteUrlIndex].Url)
}
