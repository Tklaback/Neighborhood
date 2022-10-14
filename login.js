
import zxcvbn from "./node_modules/zxcvbn/dist/zxcvbn.mjs";

var API = "https://api.eva.pingutil.com/email?email=";

document.getElementById("submitBtn").addEventListener("click", (event) =>
{
  event.preventDefault();
  let isValid;
  let pwrdScore = zxcvbn(document.getElementById("pwrd").value).score;
  var frm = document.getElementById("frm");
  
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch(API + document.getElementById("usrInput").value, requestOptions)
  .then((response) => response.json())
  .then((json) => {
    isValid = (json.status == "success");
    if (pwrdScore <= 2 && !isValid){
      document.getElementById("usrInput").placeholder ="Please enter valid email";
      document.getElementById("pwrd").placeholder ="Please enter stronger Password";
      document.getElementById("usrInput").style.outline = "solid red";
      document.getElementById("pwrd").style.outline = "solid red";
      frm.reset();
    }
    else if (!isValid){
        // document.getElementById("usrInput").placeholder.color = "red";
      document.getElementById("usrInput").placeholder="Please enter valid email";
      document.getElementById("usrInput").value = '';
      document.getElementById("usrInput").style.outline = "solid red";
      document.getElementById("usrInput").style.outline = "solid red";
      document.getElementById("pwrd").style.outline = "none";
    }
    else if (pwrdScore <= 2){
      // document.getElementById("pwrd").placeholder.color = "red";
      document.getElementById("pwrd").placeholder="Please enter stronger password";
      document.getElementById("pwrd").value = "";
      document.getElementById("usrInput").style.outline = "none";
      document.getElementById("pwrd").style.outline = "solid red";
    }
    else{
      frm.submit();
      frm.reset();
      frm.style.border = "2px solid green";
    }
  });
});
