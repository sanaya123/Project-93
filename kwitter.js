function login(){
    User_name = document.getElementById("username").value
    localStorage.setItem("user_name", User_name)
    window.location="kwitter_room.html"
}