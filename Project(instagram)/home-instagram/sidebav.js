let aside1 = document.getElementById("aside1");
let main1 = document.getElementById("main1");
let profile = document.getElementById("profile");
let home = document.getElementById("home");
let create = document.getElementById("create");
let createPosts = document.getElementById("create-posts");
let admin = document.getElementById("admin");
let adminPosts = document.getElementById("admin-posts");
let homeLogo = document.getElementById("home-logo");
// formCreate = document.getElementById("form-create");
let accountAdmin = {
  id: "admin",
  password: "admin",
};
// chuyển sang home
// cách 1
home.onclick = function () {
  main1.style.display = "block";
  aside1.style.display = "block";
  personalPage.style.display = "none";
  createPosts.style.display = "none";
  adminPosts.style.display = "none";
  location.reload();
};
// cách 2
homeLogo.onclick = function () {
  main1.style.display = "block";
  aside1.style.display = "block";
  personalPage.style.display = "none";
  createPosts.style.display = "none";
  adminPosts.style.display = "none";
  location.reload();
};

//chuyển sang ccreate
create.onclick = function () {
  main1.style.display = "none";
  aside1.style.display = "none";
  personalPage.style.display = "none";
  createPosts.style.display = "block";
  adminPosts.style.display = "none";
};

// chuyển trang sang personalPage
// cách 1
fullname.onclick = function () {
  main1.style.display = "none";
  aside1.style.display = "none";
  personalPage.style.display = "block";
  createPosts.style.display = "none";
  adminPosts.style.display = "none";
};
// cách 2
profile.onclick = function () {
  main1.style.display = "none";
  aside1.style.display = "none";
  personalPage.style.display = "block";
  createPosts.style.display = "none";
  adminPosts.style.display = "none";
};

//chuyển sang admin
let modalAdmin = document.getElementById("modal-admin");
let containerHome = document.getElementById("container-home");
let body = document.querySelector("body");
admin.onclick = function () {
  let checkAdmin = JSON.parse(localStorage.getItem("checkAdmin"));
  if (checkAdmin) {
    main1.style.display = "none";
    aside1.style.display = "none";
    personalPage.style.display = "none";
    createPosts.style.display = "none";
    adminPosts.style.display = "block";

  } else {
    alert("Please login!");
    modalAdmin.style.display = "block";
    containerHome.style.display = "none";
    body.style.backgroundColor = "#c1b4b4a3";
  }
};
