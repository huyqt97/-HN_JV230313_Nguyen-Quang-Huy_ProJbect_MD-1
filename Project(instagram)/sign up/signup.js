// login up
let idInfors = JSON.parse(localStorage.getItem("idInfors"));

let loginUp = document.getElementById("form-login_up");
let id = 0;

//
loginUp.onsubmit = function (event) {
  event.preventDefault();
  checkUser = -1;
  if (idInfors) {
    for (let i = 0; i < idInfors.length; i++) {
      if (loginUp.userName.value === idInfors[i].username) {
        checkUser = i;
      }
    }
    if (checkUser !== -1) {
      alert("Account name already exists, please re-enter!");
    } else if (
      loginUp.emailOrNumber.value !== "" &&
      loginUp.fullName.value !== "" &&
      loginUp.userName.value.length >= 6 &&
      loginUp.password.value.length >= 8
    ) {
      let idInfor = {
        id: Math.random(Math.random() * 1000000),
        EmailPhone: loginUp.emailOrNumber.value,
        fullname: loginUp.fullName.value,
        username: loginUp.userName.value,
        password: loginUp.password.value,
        avatar: "",
      };
      idInfors.push(idInfor);
      localStorage.setItem("idInfors", JSON.stringify(idInfors));
      alert("Sign Up Success!");
      // Resert dữ liệu
      loginUp.emailOrNumber.value = "";
      loginUp.fullName.value = "";
      loginUp.userName.value = "";
      loginUp.password.value = "";
      window.location.href = "http://127.0.0.1:5501/login/login.html";
    } else {
      alert("Please enter enough information!");
    }
  } else {
    idInfors = [];
  }
};
