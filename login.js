
import zxcvbn from "./node_modules/zxcvbn/dist/zxcvbn.mjs";

var API = "https://api.eva.pingutil.com/email?email=";

document.getElementById("submitBtn").addEventListener("click", (event) =>
{
  event.preventDefault();
  let isValid;
  
  // fetch("https://open.kickbox.com/v1/disposable/afjlakjflkajflkajfnvlaknvlaknvlkand.com")
  // .then(response => response.json())
  // .then((json)=>{
  //   isDisposable = json.disposable;
  //   alert(json);
  // });
  
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch(API + document.getElementById("usrInput").value)
  .then((response) => response.json())
  .then((json) => {
    isValid = (json.status == "success");
    if (zxcvbn(document.getElementById("pwrd").value).score <= 2){
      if (isValid === false){
       console.log("NOT CORRECT");
      }
      else{
        console.log("CORRECT");
      }
    }
  });
  
  
});
