let fullname = document.getElementById("fullname");
let personalPage = document.getElementById("personal-page");
let personalPageFullname = document.getElementById("personal-page-fullname");
let headerRight2 = document.getElementById("header-right-2");
let fname = document.getElementById("fname");
let btnUpAvatar = document.getElementById("btn-up-avatar");
let inputAvatar = document.getElementById("input-avatar");
let checkImg = document.getElementsByClassName("avatar-img1");
let avatarPage = document.getElementById("avatar-img");
let logOut = document.getElementById("logout");
let btnProfile = document.getElementById("btn-profile");
let btnPosts = document.getElementById("btn-posts");
let boxPosts = document.getElementById("box-posts");
let sumPosts = 0;
//check avatar
inputAvatar.oninput = function () {
  avatarPage.innerHTML = `
  <img src="${inputAvatar.value}" alt="" />
  `;
};

btnUpAvatar.onclick = function () {
  let checkId = -1;
  if (inputAvatar.value !== "") {
    console.log(inputAvatar.value);
    currenAccount.avatar = inputAvatar.value;
    localStorage.setItem("currenAccount", JSON.stringify(currenAccount));
    // forCheckId();
    for (let i = 0; i < idInfors.length; i++) {
      if (currenAccount.username === idInfors[i].username) {
        checkId = i;
      }
    }
    if (checkId !== -1) {
      idInfors.splice(checkId, 1, currenAccount);
      localStorage.setItem("idInfors", JSON.stringify(idInfors));
      alert("cập nhập ảnh thành công!");
      location.reload();
    }
  } else {
    alert("chưa chọn file");
  }
};

//in ra số post
for (let i = 0; i < contents.length; i++) {
  if (currenAccount.fullname === contents[i].fullname) {
    sumPosts += 1;
  }
}

// in ra cá nhân
fname.innerHTML = currenAccount.fullname;
fullname.innerHTML = currenAccount.fullname;
personalPageFullname.innerText = currenAccount.fullname;

//in ra avatar
for (let i = 0; i < checkImg.length; i++) {
  checkImg[i].innerHTML = `
  <img src="${currenAccount.avatar}" alt="" />
  `;
}
// log out
logOut.onclick = function () {
  swal({
    title: "you are trying to log out!?",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      window.location.href = "http://127.0.0.1:5501/login/login.html";
      localStorage.removeItem("currenAccount");
      localStorage.removeItem("checkAdmin");
    }
  });
};

// btn profile
btnProfile.onclick = function () {};

//posts trang cá nhân
let listPost = "";
for (let i = 0; i < contents.length; i++) {
  if (currenAccount.fullname === contents[i].fullname) {
    listPost += `
    <div class="post">
            <img src="${contents[i].img}" alt="">
            <div class="icon-post">
            <span><i class="fas fa-heart"></i> ${contents[i].like}</span>
            <span><i class="fas fa-comment"></i> ${contents[i].numberComment}</span>
            </div>
            </div>
            `;
  }
}
boxPosts.innerHTML = listPost;
btnPosts.onclick = function () {
  btnPosts.style.backgroundColor = "rgb(225, 221, 221)";
  let listPost = "";
  for (let i = 0; i < contents.length; i++) {
    if (currenAccount.fullname === contents[i].fullname) {
      listPost += `
    <div class="post">
            <img src="${contents[i].img}" alt="">
            <div class="icon-post">
            <span><i class="fas fa-heart"></i> ${contents[i].like}</span>
            <span><i class="fas fa-comment"></i> ${contents[i].numberComment}</span>
            </div>
            </div>
            `;
    }
  }
  boxPosts.innerHTML = listPost;
};

//in ra số posts, số like, số following
headerRight2.innerHTML = `
        <span><b>${sumPosts}</b> posts</span>
        <span><b>${0}</b> followers</span>
        <span><b>${0}</b> following</span>
        `;

//click profile
let profileEmail = document.getElementById("profile-email");
let profileFullname = document.getElementById("profile-fullname");
let profilePassword = document.getElementById("profile-password");
btnProfile.onclick = function () {
  profileEmail.innerText = currenAccount.EmailPhone;
  profileFullname.innerText = currenAccount.fullname;
  profilePassword.innerText = currenAccount.password;
};
//profile
//sửa Email
let editEmail = document.getElementById("edit-email");
let profileEmailInput = document.getElementById("profile-email-input");
let confirmEmail = document.getElementById("confirm-email");
editEmail.onclick = function () {
  profileEmailInput.style.display = "block";
  profileEmail.style.display = "none";
  editEmail.style.display = "none";
  confirmEmail.style.display = "block";
};
confirmEmail.onclick = function () {
  if (profileEmailInput.value !== "") {
    profileEmail.innerText = profileEmailInput.value;
    profileEmailInput.style.display = "none";
    profileEmail.style.display = "block";
    editEmail.style.display = "block";
    confirmEmail.style.display = "none";
  } else {
    alert("Please enter content!");
  }
};
//sửa fullname
let editFullname = document.getElementById("edit-fullname");
let profileFullnameInput = document.getElementById("profile-fullname-input");
let confirmFullname = document.getElementById("confirm-fullname");
editFullname.onclick = function () {
  profileFullnameInput.style.display = "block";
  profileFullname.style.display = "none";
  editFullname.style.display = "none";
  confirmFullname.style.display = "block";
};
confirmFullname.onclick = function () {
  if (profileFullnameInput.value !== "") {
    profileFullname.innerText = profileFullnameInput.value;
    profileFullnameInput.style.display = "none";
    profileFullname.style.display = "block";
    editFullname.style.display = "block";
    confirmFullname.style.display = "none";
  } else {
    alert("Please enter content!");
  }
};
//sửa password
let editPassword = document.getElementById("edit-password");
let profilePasswordInput = document.getElementById("profile-password-input");
let confirmPassword = document.getElementById("confirm-password");
editPassword.onclick = function () {
  profilePasswordInput.style.display = "block";
  profilePassword.style.display = "none";
  editPassword.style.display = "none";
  confirmPassword.style.display = "block";
};
confirmPassword.onclick = function () {
  if (profilePasswordInput.value.length >= 8) {
    profilePassword.innerText = profilePasswordInput.value;
    profilePasswordInput.style.display = "none";
    profilePassword.style.display = "block";
    editPassword.style.display = "block";
    confirmPassword.style.display = "none";
  } else {
    alert("Password is too much. Please re-enter!");
  }
};

//save profile
let saveProfile = document.getElementById("save-profile");
saveProfile.onclick = function () {
  currenAccount.EmailPhone = profileEmail.innerText;
  currenAccount.fullname = profileFullname.innerText;
  currenAccount.password = profilePassword.innerText;
  localStorage.setItem("currenAccount", JSON.stringify(currenAccount));
  let checkid = -1;
  for (let i = 0; i < idInfors.length; i++) {
    if (currenAccount.id === idInfors[i].id) {
      checkid = i;
    }
  }
  if (checkid != -1) {
    idInfors.splice(checkid, 1, currenAccount);
    renderContents();
    renderContainerListComment();
  }
  location.reload();
};
