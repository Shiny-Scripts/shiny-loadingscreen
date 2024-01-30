

window.onload = function() 
{
  document.body.addEventListener("mousemove", function(event)
  {
        var cursor = document.getElementById("cursor");

        var x = event.pageX - cursor.width + 7;
        var y = event.pageY - 7;

        cursor.style.left = x;
        cursor.style.top = y;
  });
}

var textcontainer = document.getElementById("textcontainer")
var servertitle = document.getElementById("servertitle")
var serverdescription = document.createElement("p")
textcontainer.appendChild(servertitle)
textcontainer.appendChild(serverdescription)


serverdescription.innerHTML = config.serverDescription

servertitle.innerHTML = config.ServerName
servertitle.style.color = config.ServerMaincolor

serverdescription.style.color = config.serverDescriptioncolor

var discordlink = document.getElementById("discordlink")

var ulelement = document.getElementById("element")
var ulelement2 = document.getElementById("element2")
var teamspeak = document.getElementById("teamspeak")
discordlink.innerHTML = config.Discordlink
discordlink.style.color = config.ServerSecondaryColor;
ulelement.style.backgroundColor = config.ServerMaincolor
ulelement2.style.backgroundColor = config.ServerMaincolor
teamspeak.style.color = config.ServerSecondaryColor

ulelement.addEventListener("click", function(){
    window.location.href = config.Discordlinkhttps;
})
function TeamspeakVisible(){
if (config.Teamspeak == true) {
    teamspeak.innerHTML = config.Teamspeakurl
} else {
    teamspeak.innerHTML = "PMA-VOICE"
    
}}
TeamspeakVisible()


var StaffTitle = document.getElementById("stafftitle")

StaffTitle.style.color = config.ServerMaincolor


//STAFF SECTION 
var stafflist = document.getElementById("stafflist")
var staffs = document.getElementById("staff")
var staffname = document.getElementById("staffname")

config.staffMembers.forEach(function (staffMember) {
    var li = document.createElement("li");
    var h1 = document.createElement("h1");
    var img = document.createElement("img");
    var role = document.createElement("h2");
    li.appendChild(h1)
    h1.innerHTML = staffMember.name
    h1.style.fontSize = "3.4vh",
    h1.style.textTransform = "uppercase",
    role.style.fontSize = "3.4vh",
    role.style.textTransform = "uppercase",
    li.appendChild(img)
    li.appendChild(role)
    role.innerHTML = staffMember.role
    img.src = staffMember.Img
    li.style.backgroundColor    = config.ServerMaincolor
    li.style.color    = config.ServerSecondaryColor   
    stafflist.appendChild(li);
  });


// Music 
   
let audio = document.getElementById("aidop");
    
audio.src = config.songsource;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
          
        }
    }
});
