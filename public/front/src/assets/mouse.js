var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  var cursorWidth = cursor.offsetWidth;
  var x = e.clientX - cursorWidth / 2;
  var y = e.clientY - cursorWidth / 2;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
var links = document.querySelectorAll("button");
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener("mouseover", function () {
    cursor.classList.add("link-hover");
  });
  link.addEventListener("mouseout", function () {
    cursor.classList.remove("link-hover");
  });
}
