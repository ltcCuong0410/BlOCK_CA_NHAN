function clickEmail() {
  const email = document.querySelector("#Email").value.toLocaleLowerCase();
  const errolemail = document.querySelector(".errol_email");
  const check_Email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // console.log("check email", email);
  const check = email.match(check_Email);
  // console.log("email", check);

  // lay phan chua thong tin ca nhan
  const user = document.querySelector(".personal-info .Info");
  // lay dl kiem soat nut button
  const submitcontrol = document.querySelector(".submit-email");
  if (check) {
    user.style.display = "block";
    submitcontrol.style.display = "none";
    errolemail.innerHTML = "";
  } else {
    errolemail.innerHTML = "*** Hãy nhập email của bạn!";
    errolemail.style.fontStyle = "italic";
    errolemail.style.color = "red";
  }
}

// view more, less more

function showButton(element) {
  let button = element.querySelector('.view-more');
  button.style.display = 'block';
}

function hideButton(element) {
  let button = element.querySelector('.view-more');
  button.style.display = 'none';
}

function handleShow(index) {
  // console.log('check', event)
  const sectionInfo = document.querySelectorAll('.section-information');
  const viewMore = document.querySelectorAll('.view-more');
  if (viewMore[index].innerText === 'view more') {
    sectionInfo[index].style.display = 'block';
    viewMore[index].innerText = 'less more';
  } else {
    viewMore[index].innerText = 'view more';
    sectionInfo[index].style.display = 'none';
  }
  // console.log('check')
}

