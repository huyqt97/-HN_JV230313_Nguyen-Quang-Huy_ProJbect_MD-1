// Lấy tất cả tài khoản  từ  localStorage về
let idInfors = JSON.parse(localStorage.getItem("idInfors")); // tất cả các acc đã đăng ký
// Lấy thông tin tài khoản đang đăng nhập từ localStorage về
let currenAccount = JSON.parse(localStorage.getItem("currenAccount")); // acc đang đăng nhập
let contents = JSON.parse(localStorage.getItem("contents"));
let idContent;
let listFriend = document.querySelector(".menu-friend");
let containerContent = document.getElementById("containerContent");
let containerListComment = document.getElementById("containerListComment");
let eventInput = document.getElementById("eventInput");
let inputComment = document.getElementById("inputComment");
let btnPost = document.getElementById("btnPost");
let main = document.getElementById("main1");
let sumComments = 0;
let sumLikes = 0;

// lấy comments từ localStorage (lúc tạo post sẽ lưu vào localStorage)
let comments = JSON.parse(localStorage.getItem("comments"));

let checkIdContent = -1;

// render list gợi ý kiết bạn
function renderListFriend() {
  let friend = "";
  for (let i = 0; i < idInfors.length; i++) {
    if (idInfors[i].username !== currenAccount.username) {
      friend += `
      <div class="list-frend">
                  <div class="user-left">
                    <img src="${idInfors[i].avatar}" alt="" />
                    <div class="user-left-list">
                      <p>${idInfors[i].fullname}</p>
                    </div>
                  </div>
                  <button>Follow</button>
      </div>
      `;
    }
  }
  listFriend.innerHTML = friend;
}
renderListFriend();

//render content
function renderContents() {
  let listContent = "";
  for (let i = contents.length - 1; i >= 0; i--) {
    listContent += `
    <div id="${contents[i].id}" class="main-child">
    <div class="child-head">
    <div class="left">
    <img src="${contents[i].avatar}" alt="" />
    <span>${contents[i].fullname}</span>
    </div>
    <div class="delete-post">
    <i class="fas fa-ellipsis-h block"></i>
    <i class="fas fa-ellipsis-h none"></i>
    <span class="btn-delete">Delete</span>
    <div id="${contents[i].id}" class="btn-curren">
      <button class="btn-deleteCurren">Delete</button><br>
      <button id="${contents[i].id}" type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn-editCurren">Edit</button>
    </div>
    </div>
    </div>
    <div class="img-content">
    <img src="${contents[i].img}" alt="" class="" />
    </div>
    <div class="child-nav">
                    <div class="icon-left">
                    <i class="far fa-heart"></i>
                    <i type="button" id = '${i}' class="btn  far fa-comment-dots btn-content" data-toggle="modal" data-target="#exampleModal"></i>
                    <i class="fab fa-telegram-plane"></i>
                    </div>
                    <i class="far fa-bookmark"></i>
                    </div>
                    <p>${contents[i].content}</p>
                    <p
                    >
                    View all<span>${contents[i].numberComment}</span> Comments
                    </p>
                    </div>
                    `;
  }
  containerContent.innerHTML = listContent;
}

renderContents();
//bước 2
// render trong (containerListComment)
function renderContainerListComment() {
  // render img
  // Lấy currentContent từ  localStorage về
  let currentContentString = localStorage.getItem("currentContent");
  // Chuyển currentContent từ string sang object
  let currentContent = JSON.parse(currentContentString);
  // Lấy ảnh gán vào thẻ img có id là imgPost
  let imgPost = document.getElementById("imgPost");
  imgPost.src = currentContent.img;
  // lấy avatar người đăng
  let poster = document.getElementById("poster");
  poster.innerText = currentContent.fullname;
  // lấy fullname người đăng
  let avatarPoster = document.getElementById("avatarPoster");
  avatarPoster.src = currentContent.avatar;
  // render list comment
  let listcomment = "";
  //chú ý
  if (comments != null) {
    for (let i = 0; i < comments.length; i++) {
      let element = comments[i];
      if (element && element.content.id == currentContent.id) {
        listcomment += `
        <div id="${comments[i].id}" class="comment box-comment">
        <div class="id-comment">
        <div class="avatar-comment avatar-img1">
        <img src="${comments[i].img}" alt="">
      </div>
      <b>${comments[i].fullname}</b>
      <span>${comments[i].comment}</span>
      </div>
      <i class="fa-regular fa-heart"></i>
      </div>
      `;
      }
    }
    //
  } else {
    comments = [];
  }
  containerListComment.innerHTML = listcomment;
}

// //sự kiên main
main.onclick = function (event) {
  if (event.target.classList.contains("btn-content")) {
    // bước 1
    // Lấy index của bài viết từ thẻ khi ta kick vào
    let idContent = event.target.id;
    // Từ index đó ta lấy ra được phần tử trong array contents có index vừa lấy
    let currentContent = contents[idContent];
    // Gán object connent đó vào localStorage
    localStorage.setItem("currentContent", JSON.stringify(currentContent));
    // render lại array comment và ảnh (Khi render lại sẽ lấy currentContent mình vừa gán ở dòng trên)
    renderContainerListComment();
  }
  if (event.target.classList.contains("block")) {
    let fullname =
      event.target.parentElement.parentElement.children[0].children[1]
        .innerText;
    let check = JSON.parse(localStorage.getItem("checkAdmin"));
    if (check) {
      let block = event.target.parentElement.children[0];
      let none = event.target.parentElement.children[1];
      let btnDelete = event.target.parentElement.children[2];
      let btnCurren = event.target.parentElement.children[3];
      block.style.display = "none";
      none.style.display = "block";
      btnDelete.style.display = "block";
      btnCurren.style.display = "none";
    } else if (fullname === currenAccount.fullname) {
      let block = event.target.parentElement.children[0];
      let none = event.target.parentElement.children[1];
      let btnDelete = event.target.parentElement.children[2];
      let btnCurren = event.target.parentElement.children[3];
      block.style.display = "none";
      none.style.display = "block";
      btnDelete.style.display = "none";
      btnCurren.style.display = "block";
    }
  } else if (event.target.classList.contains("none")) {
    let block = event.target.parentElement.children[0];
    let none = event.target.parentElement.children[1];
    let btnDelete = event.target.parentElement.children[2];
    let btnCurren = event.target.parentElement.children[3];
    block.style.display = "block";
    none.style.display = "none";
    btnDelete.style.display = "none";
    btnCurren.style.display = "none";
  } else if (event.target.classList.contains("btn-delete")) {
    let newContents = {};
    let checkId = -1;
    let idDelete = event.target.parentElement.parentElement.parentElement.id;
    for (let i = 0; i < contents.length; i++) {
      if (idDelete == contents[i].id) {
        checkId = i;
      }
    }
    if (checkId !== -1) {
      newContents = contents.splice(checkId, 1);
      localStorage.setItem("contents", JSON.stringify(contents));
      renderContents();
      location.reload();
    }
  } else if (event.target.classList.contains("btn-deleteCurren")) {
    let newContents = {};
    let checkId = -1;
    let idDelete = event.target.parentElement.id;
    console.log(idDelete);
    for (let i = 0; i < contents.length; i++) {
      if (idDelete == contents[i].id) {
        checkId = i;
      }
    }
    if (checkId !== -1) {
      newContents = contents.splice(checkId, 1);
      localStorage.setItem("contents", JSON.stringify(contents));
      renderContents();
      location.reload();
    }
  } else if (event.target.classList.contains("btn-editCurren")) {
    let idContent = event.target.id;
    let check = -1;
    for (let i = 0; i < contents.length; i++) {
      if (Number(idContent) === contents[i].id) {
        check = i;
      }
    }
    if (check != -1) {
      let inputCurren = document.getElementById("inputCurren");
      let textareaCurren = document.getElementById("textareaCurren");
      let imgCurren = document.getElementById("imgCurren");
      inputCurren.value = contents[check].img;
      textareaCurren.value = contents[check].content;
      inputCurren.oninput = function () {
        imgCurren.innerHTML = `
          <img src="${inputCurren.value}" alt="" height="100%">
        `;
      };
      let btnSave = document.getElementById("btn-save");
      btnSave.onclick = function () {
        if (inputCurren.value != "" && textareaCurren.value != "") {
          contents[check].img = inputCurren.value;
          contents[check].content = textareaCurren.value;
          localStorage.setItem("contents", JSON.stringify(contents));
          location.reload();
          renderContents();
          alert("successful update!");
        } else {
          alert("No edits! Please enter content.");
        }
      };
    }
  } else if (event.target.classList.contains("fa-heart")) {
    console.log(3223);
  }
};

//sự kiện input
inputComment.oninput = function () {
  if (inputComment.value === "") {
    eventInput.children[1].style.color = "#b3dbff";
  } else {
    eventInput.children[1].style.color = "rgb(17, 124, 238)";
  }
};

// // nhận dữ liệu comment
// bước 3
// Khi click vào nut Post
btnPost.onclick = function (e) {
  let flag = e.target.classList.contains("btnPost");
  flag;
  if (flag) {
    // Lấy content hiện tại khi bật popup từ localStorage
    let currentContent = JSON.parse(localStorage.getItem("currentContent"));
    if (inputComment.value !== "") {
      // Thêm currentContent vào thành 1 trường của object comment ( content: currentContent)
      let comment = {
        id: Math.floor(Math.random() * 1000000),
        content: currentContent,
        img: currenAccount.avatar,
        fullname: currenAccount.fullname,
        comment: inputComment.value,
        sumcomments: sumComments,
        sumlike: sumLikes,
      };
      // add comment vào 1 array
      comments.push(comment);
      // set array đó vào localStorage
      localStorage.setItem("comments", JSON.stringify(comments));
      console.log(sumComments);
      // render lại list comment
      renderContainerListComment();
      inputComment.value = "";
    }
  }
};

// like

//
