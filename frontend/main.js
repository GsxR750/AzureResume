window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const fuctionApiUrl = "https://getresumecounterx.azurewebsites.net/api/GetResumeCounter?code=iPC2jEnhxaXk/GC7LFb1CeG/tNyV0qa2rbzg3NIZSdqUfYmBgVRBNg==";
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(fuctionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called fuction API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error); 
    });
    return count;
}