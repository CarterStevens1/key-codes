const insert = document.getElementById("insert");
//window listener
//event.key checks if space if so enters space else prints key
//this pushes the html from here into the html in the document
window.addEventListener("keydown", (event) => {
  insert.innerHTML = `     
   <div class="key">
   
  ${event.key === " " ? "Space" : event.key}
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>`;
});
