// Event listener that fires when a user clicks a button.
document.getElementById("luluBtn").addEventListener("click", function(){
  computeCity("Honolulu");
});

document.getElementById("ciscoBtn").addEventListener("click", function(){
  computeCity("San Francisco");
});

document.getElementById("denBtn").addEventListener("click", function(){
  computeCity("Denver");
});

document.getElementById("minnBtn").addEventListener("click", function(){
  computeCity("Minneapolis");
});

document.getElementById("yorkBtn").addEventListener("click", function(){
  computeCity("New York");
});

function computeCity(city) {
  // Determine the time zone
  switch (city)
  {
    case "Honolulu":
      document.getElementById('outCity').innerHTML = "Hawaii-Aleutian";
      break;
    case "San Francisco":
      document.getElementById('outCity').innerHTML = "Pacific";
      break;
    case "Denver":
      document.getElementById('outCity').innerHTML = "Mountain";
      break;
    case "Minneapolis":
      document.getElementById('outCity').innerHTML = "Central";
      break;
    case "New York":
      document.getElementById('outCity').innerHTML = "Eastern";
      break;
  }
}
