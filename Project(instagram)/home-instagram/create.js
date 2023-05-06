
let formCreate = document.getElementById("my-form");
let alertplus = document.getElementById("alert");
let checkImage = document.getElementById("check-img");
idInfors = JSON.parse(localStorage.getItem("idInfors"));
contents = JSON.parse(localStorage.getItem("contents")); // content
let checkIdUserName = -1;

//sư kiện input
formCreate.imageContent.oninput = function () {
  if (formCreate.imageContent.value !== "") {
    formCreate.imageContent.style.border = "1px solid rgb(227, 223, 223)";
    formCreate.imageContent.style.borderBottom = "1.2px solid black";
    checkImage.innerHTML = `
    <img src="${formCreate.imageContent.value}" alt="" />
    `;
    alertplus.style.display = "none";
  } else {
    formCreate.imageContent.style.border = "1px solid red";
    alertplus.style.display = "block";
  }
  //sự kiện textarea
  formCreate.textarea.onkeyup = function () {
    if (formCreate.imageContent.value !== "") {
      formCreate.textarea.style.border = "1px solid rgb(227, 223, 223)";
      formCreate.textarea.style.borderBottom = "1.2px solid black";
      alertplus.style.display = "none";
    } else {
      formCreate.textarea.style.border = "1px solid red";
      alertplus.style.display = "block";
    }
  };
};

//tìm username
// sự kiện form
formCreate.onsubmit = function (event) {
  if (
    formCreate.imageContent.value !== "" &&
    formCreate.textarea.value !== ""
  ) {
    let content = {
      id: Math.floor(Math.random() * 10000000),
      avatar: currenAccount.avatar,
      fullname: currenAccount.fullname,
      img: formCreate.imageContent.value,
      like: 0,
      numberComment: 0,
      content: formCreate.textarea.value,
    };
    contents.push(content);
    localStorage.setItem("contents", JSON.stringify(contents));
    return;
  } else if (
    formCreate.imageContent.value === "" &&
    formCreate.textarea.value === ""
  ) {
    alertplus.style.display = "block";
    alertplus.innerText = "no content. please enter content!";
    event.preventDefault();
    return;
  }

  if (formCreate.imageContent.value === "") {
    formCreate.imageContent.style.border = "1px solid red";
    alertplus.style.display = "block";
    alertplus.innerText = "no photos yet!";
    event.preventDefault();
    return;
  } else {
    alertplus.style.display = "none";
    event.preventDefault();
  }
  if (formCreate.textarea.value === "") {
    formCreate.textarea.style.border = "1px solid red";
    alertplus.style.display = "block";
    alertplus.innerText = "no content.Please enter content for the post!";
    event.preventDefault();
  } else {
    alertplus.style.display = "none";
    event.preventDefault();
  }
};

formCreate.imageContent.oninput = function () {
  if (formCreate.imageContent.value !== "") {
    formCreate.imageContent.style.border = "1px solid rgb(227, 223, 223)";
    formCreate.imageContent.style.borderBottom = "1.2px solid black";
    checkImage.innerHTML = `
        <img src="${formCreate.imageContent.value}" alt="" />
      `;
  } else {
    formCreate.imageContent.style.border = "1px solid red";
  }
};

formCreate.textarea.onkeyup = function () {
  if (formCreate.imageContent.value !== "") {
    formCreate.textarea.style.border = "1px solid rgb(227, 223, 223)";
    formCreate.textarea.style.borderBottom = "1.2px solid black";
  } else {
    formCreate.textarea.style.border = "1px solid red";
  }
};
