let idInfors = JSON.parse(localStorage.getItem("idInfors"));
let formLogin = document.getElementById("form-login");
let fullname = document.getElementById("fullname");
// function renderIdInfors() {
//   for (let i = 0; i < idInfors.length; i++) {
//     if(formLogin.inputLoginUsername.value === idInfors[checkId].username &&
//       formLogin.inputLoginPassword.value === idInfors[checkId].password){
//         checkId = i
//       }
//   }
// }
formLogin.onsubmit = function (event) {
  event.preventDefault();
  let checkId = -1;
  for (let i = 0; i < idInfors.length; i++) {
    if (
      formLogin.inputLoginUsername.value === idInfors[i].username &&
      formLogin.inputLoginPassword.value === idInfors[i].password
    ) {
      checkId = i;
    }
  }
  if (checkId !== -1) {
    swal("Logged in successfully!", "Welcome to instagram!", "success").then(
      () => {
        window.location.href = "http://127.0.0.1:5501/home-instagram/home.html";
      }
    );
    console.log(idInfors[checkId]);
    localStorage.setItem("currenAccount", JSON.stringify(idInfors[checkId]));
  } else {
    alert("Invalid account or password. Please re-enter!");
    formLogin.inputLoginPassword.value = "";
    formLogin.inputLoginUsername.value = "";
  }
};
