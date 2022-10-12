
import zxcvbn from "./node_modules/zxcvbn/dist/zxcvbn.mjs";

// const client = new stytch.Client({
//   project_id: 'PROJECT_ID',
//   secret: 'SECRET',
//   env: stytch.envs.test,
// });



document.getElementById("submitBtn").addEventListener("click", (event) =>
{
  event.preventDefault();
  if (zxcvbn(document.getElementById("pwrd").value).score <= 2){
    console.log(zxcvbn(document.getElementById("pwrd").value).score);
    alert("HEEY");
  }
});


console.log("hey");
alert("herro");
