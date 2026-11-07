"use strict";

var index = 0;
var data = [{
  id: 1,
  name: "Ahmed El Fassi",
  role: "Nettoyage",
  email: "ahmed.fassi@gmail.com",
  tele: "0600000001",
  img: "https://randomuser.me/api/portraits/men/11.jpg",
  localEx: "Hotel Casablanca",
  nameEx: "Reception Manager",
  startDate: "2022-01-01",
  endDate: "2023-01-01",
  local: "unassigned"
}, {
  id: 2,
  name: "Sara Benali",
  role: "IT",
  email: "sara.benali@gmail.com",
  tele: "0600000002",
  img: "https://randomuser.me/api/portraits/women/12.jpg",
  localEx: "IT Department",
  nameEx: "Network Technician",
  startDate: "2021-03-01",
  endDate: "2022-12-31",
  local: "unassigned"
}, {
  id: 3,
  name: "Youssef Idrissi",
  role: "Manager",
  email: "y.idrissi@gmail.com",
  tele: "0600000003",
  img: "https://randomuser.me/api/portraits/men/13.jpg",
  localEx: "Hotel Casablanca",
  nameEx: "General Manager",
  startDate: "2020-06-01",
  endDate: "2024-06-01",
  local: "unassigned"
}, {
  id: 4,
  name: "Khadija El Amrani",
  role: "Securite",
  email: "khadija.amrani@gmail.com",
  tele: "0600000004",
  img: "https://randomuser.me/api/portraits/women/14.jpg",
  localEx: "Security Department",
  nameEx: "Security Guard",
  startDate: "2023-01-01",
  endDate: "2024-01-01",
  local: "unassigned"
}];
console.log(data);
var compt = 0; // Afficher les données dans le tableau

function displaydata() {
  console.log("disply function");
  var content = document.querySelector(".content");
  var filtredData = data.filter(function (d) {
    return d.local === "unassigned";
  });
  content.innerHTML = "";
  filtredData.forEach(function (object) {
    var Worker = document.createElement("div");
    Worker.classList.add("worker");
    Worker.innerHTML = "\n             <img src=".concat(object.img, " alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n               <div class=\"info\" >\n        <p><strong>R\xF4le :</strong> ").concat(object.name, "</p>\n        <p><strong>R\xF4le :</strong> ").concat(object.role, "</p>\n        <p><strong>Email :</strong> ").concat(object.email, "</p>\n        <p><strong>T\xE9l\xE9phone :</strong> ").concat(object.tele, "</p>\n        <p><strong>L'entreprise :</strong> ").concat(object.local, "</p>\n        <p><strong>Son role dans le travaille :</strong> ").concat(object.nameEx, "</p>\n        <p><strong>D\xE9but :</strong> ").concat(object.startDate, "</p>\n        <p><strong>Fin :</strong> ").concat(object.endDate, "</p>\n\n    </div>\n\n         ");
    content.appendChild(Worker);
  });
}

displaydata(); // Afficher le formulaire d'ajout

function creat() {
  document.querySelector(".add").style.display = "none";
  document.querySelector(".ajouter").style.display = "block";
} // for le managment des erreur 


function check(think) {
  console.log(think);
} // Ajouter un nouvel employé


function add() {
  console.log("add function");
  var id = index++;
  var name = document.querySelector("#nom").value;
  var role = document.querySelector("#role").value;
  var email = document.querySelector("#email").value;
  var tele = document.querySelector("#tele").value;
  var img = document.querySelector("#img").value;
  var local = document.querySelector("#local").value;
  var nameEx = document.querySelector("#nameEx").value;
  var startDate = document.querySelector("#start").value;
  var endDate = document.querySelector("#end").value;
  check(endDate); // Vérifier que les dates sont correctes

  if (!startDate || !endDate || !name || !role || !email || !tele || !img || !nameEx || !local) {
    alert("Veuillez remplire tout les information!");
    return;
  } else {
    console.log("la formule a ete bien remplie");
  }

  var newperson = {
    name: name,
    role: role,
    email: email,
    tele: tele,
    img: img,
    nameEx: nameEx,
    localEx: local,
    startDate: startDate,
    endDate: endDate,
    local: "unassigned"
  };
  data.push(newperson); // reafficher le tableau

  displaydata(); // pour fermer la formule 

  formehidden(); // pour vider les champs du formulaire

  document.querySelector("#nom").value = "";
  document.querySelector("#role").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#tele").value = "";
  document.querySelector("#img").value = "";
  document.querySelector("#start").value = "";
  document.querySelector("#end").value = "";
}

function formehidden() {
  document.querySelector(".ajouter").style.display = "none";
  document.querySelector(".add").style.display = "block";
}

function displayforadd() {
  var all = document.querySelectorAll(".all");
  var element = document.querySelectorAll(".element");

  var _loop = function _loop(i) {
    all[i].addEventListener("click", function () {
      element.forEach(function (e) {
        return e.hidden = true;
      });
      element[i].hidden = !element[i].hidden;
      return;
    });
  };

  for (var i = 0; i < all.length; i++) {
    _loop(i);
  }
}

function serveurs() {
  displayforadd();
  var content = document.querySelector(".serveurs.element");
  var emp = document.querySelector(".empSER");
  content.innerHTML = "";
  var filtredData = data.filter(function (d) {
    return d.role === "IT" && d.local !== "IT";
  });
  filtredData.forEach(function (object) {
    var worker = document.createElement("div");
    worker.classList.add("worker");
    worker.dataset.id = object.id;
    worker.innerHTML = "\n            <img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n        ");
    content.appendChild(worker);
    worker.addEventListener("click", function () {
      if (emp.querySelector("[data-id=\"".concat(object.id, "\"]"))) return;
      var picked = document.createElement("div");
      picked.classList.add = "hhhhhhh";
      object.local = "IT";
      picked.local = object.local;
      picked.dataset.id = object.id;
      picked.innerHTML = worker.innerHTML;
      picked.addEventListener("click", function () {
        content.appendChild(worker);
      });
    });
    emp.appendChild(picked);
    var element = document.querySelectorAll(".element");
    element.forEach(function (e) {
      return e.hidden = "true";
    });
    displaydata();
  });
}

;

function manager() {
  displayforadd();
  var content = document.querySelector(".manager.element");
  var emp = document.querySelector(".empM");
  content.innerHTML = "";
  data.forEach(function (object) {
    var worker = document.createElement("div");
    worker.classList.add("worker");
    worker.dataset.id = object.id;
    worker.innerHTML = "\n            <img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n        ");
    content.appendChild(worker);
    worker.addEventListener("click", function () {
      if (emp.querySelector("[data-id=\"".concat(object.id, "\"]"))) return;
      var picked = document.createElement("div");
      picked.classList.add("worker");
      picked.dataset.id = object.id;
      picked.innerHTML = worker.innerHTML;
      picked.addEventListener("click", function () {
        content.appendChild(worker);
      });
      emp.appendChild(picked);
      var element = document.querySelectorAll(".element");
      element.forEach(function (e) {
        return e.hidden = true;
      });
      displaydata();
    });
  });
}

function securite() {
  displayforadd();
  var content = document.querySelector(".securite.element");
  var emp = document.querySelector(".empS");
  content.innerHTML = "";
  data.forEach(function (object) {
    var worker = document.createElement("div");
    worker.classList.add("worker");
    worker.dataset.id = object.id;
    worker.innerHTML = "\n            <img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n        ");
    content.appendChild(worker);
    worker.addEventListener("click", function () {
      if (emp.querySelector("[data-id=\"".concat(object.id, "\"]"))) return;
      var picked = document.createElement("div");
      picked.classList.add("worker");
      object.local = "securite";
      picked.local = object.local;
      picked.dataset.id = object.id;
      picked.innerHTML = worker.innerHTML;
      emp.appendChild(picked);
      var element = document.querySelectorAll(".element");
      element.forEach(function (e) {
        return e.hidden = true;
      });
      displaydata();
    });
  });
}

function personnel() {
  displayforadd();
  var content = document.querySelector(".personnel.element");
  var emp = document.querySelector(".empP");
  content.innerHTML = "";
  data.forEach(function (object) {
    var worker = document.createElement("div");
    worker.classList.add("worker");
    worker.dataset.id = object.id;
    worker.innerHTML = "\n            <img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n        ");
    content.appendChild(worker);
    worker.addEventListener("click", function () {
      if (emp.querySelector("[data-id=\"".concat(object.id, "\"]"))) return;
      var picked = document.createElement("div");
      picked.classList.add("hhhhhhh");
      object.local = "personnel";
      picked.local = object.local;
      picked.dataset.id = object.id;
      picked.innerHTML = worker.innerHTML;
      emp.appendChild(picked);
      var element = document.querySelectorAll(".element");
      element.forEach(function (e) {
        return e.hidden = true;
      });
      displaydata();
    });
  });
}

function archives() {
  displayforadd();
  var content = document.querySelector(".archives.element");
  var emp = document.querySelector(".empA");
  content.innerHTML = "";
  var filtredData = data.filter(function (d) {
    return d.role !== "Nettoyage" && d.local != "archive";
  });
  filtredData.forEach(function (object) {
    var worker = document.createElement("div");
    worker.classList.add("worker");
    worker.dataset.id = object.id;
    worker.innerHTML = "\n            <img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n        ");
    content.appendChild(worker);
    worker.addEventListener("click", function () {
      if (emp.querySelector("[data-id=\"".concat(object.id, "\"]"))) return;
      var picked = document.createElement("div");
      picked.classList.add("hhhhhhh");
      object.local = "archive";
      picked.local = object.local;
      picked.dataset.id = object.id;
      picked.innerHTML = worker.innerHTML;
      picked.addEventListener("click", function () {
        content.appendChild(worker);
      });
      emp.appendChild(picked);
      var element = document.querySelectorAll(".element");
      element.forEach(function (e) {
        return e.hidden = true;
      });
      displaydata();
    });
  });
}

;

function reception() {
  displayforadd();
  var content = document.querySelector(".reception.element");
  var emp = document.querySelector(".empR");
  content.innerHTML = "";
  var filtredData = data.filter(function (d) {
    return d.role === "Reception" && d.local != "Reception";
  });
  filtredData.forEach(function (object) {
    var worker = document.createElement("div");
    worker.classList.add("worker");
    worker.dataset.id = object.id;
    worker.innerHTML = "\n            <img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\" class=\"w-[50px] h-[50px] rounded-[50px]\">\n        ");
    content.appendChild(worker);
    worker.addEventListener("click", function () {
      if (emp.querySelector("[data-id=\"".concat(object.id, "\"]"))) return;
      var picked = document.createElement("div");
      picked.classList.add("hhhhhhh");
      object.local = "Reception";
      picked.local = object.local;
      picked.dataset.id = object.id;
      picked.innerHTML = worker.innerHTML;
      picked.addEventListener("click", function () {
        content.appendChild(worker);
      });
      emp.appendChild(picked);
      var element = document.querySelectorAll(".element");
      element.forEach(function (e) {
        return e.hidden = true;
      });
      displaydata();
    });
  });
}
  