function confirmSubmit(evt){
  var fullname = document.getElementById("firstname");
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById('confirmBox');
  var btn = document.getElementById('submit');

  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  alert("Thanks " + firstname.value + " for joining us");