let adminAccount = JSON.parse(localStorage.getItem("admin"));
let formAdmin = document.getElementById("form-admin");
formAdmin.onsubmit = function (event) {
  event.preventDefault();
  if (
    formAdmin.account.value === adminAccount.account &&
    formAdmin.password.value === adminAccount.password
  ) {
    alert("Logged in successfully!");
    checkAdmin = {
      account: formAdmin.account.value,
      password: formAdmin.password.value,
    };
    localStorage.setItem("checkAdmin", JSON.stringify(checkAdmin));
    location.reload();
  } else {
    alert("Incorrect account or password!");
  }
};

let homePage = document.getElementById("home-page");
homePage.onclick = function () {
  location.reload();
};

//render table
let tableAdmin = document.getElementById("table-admin");
function renderTable() {
  let renderTable = "";
  for (let i = 0; i < contents.length; i++) {
    renderTable += `
    <tr id="${i}">
      <td><img src="${contents[i].img}" alt=""></td>
      <td>${contents[i].content}</td>
      <td>${contents[i].fullname}</td>
      <td>
          <button id="${contents[i].id}" class="btnDelete">Delete</button>
      </td>
  </tr>
    `;
  }
  tableAdmin.innerHTML = renderTable;
}
renderTable();

//click accept
tableAdmin.onclick = function (event) {
  renderTable();
  if (event.target.classList.contains("btnDelete")) {
    let id = event.target.id;
    let checkId = -1;
    for (let i = 0; i < contents.length; i++) {
      if (Number(id) === contents[i].id) {
        checkId = i;
      }
    }
    if (checkId != -1) {
      contents.splice(checkId, 1);
      localStorage.setItem("contents", JSON.stringify(contents));
    }
  }
};
