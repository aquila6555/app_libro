function traduccion() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("english");
  if (checkBox.checked == true){
    english.style.display = "none";
    spanish.style.display = "block";
  } else {
     english.style.display = "block";
     spanish.style.display = "none";
  }
}