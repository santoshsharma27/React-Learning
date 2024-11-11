// script.js

function doCirclesIntersect(x1, y1, r1, x2, y2, r2) {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance <= r1 + r2 && distance >= Math.abs(r1 - r2);
}

function checkIntersection() {
  const x1 = parseFloat(document.getElementById("x1").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const r1 = parseFloat(document.getElementById("r1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);
  const r2 = parseFloat(document.getElementById("r2").value);

  if (
    isNaN(x1) ||
    isNaN(y1) ||
    isNaN(r1) ||
    isNaN(x2) ||
    isNaN(y2) ||
    isNaN(r2)
  ) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  const intersects = doCirclesIntersect(x1, y1, r1, x2, y2, r2);
  document.getElementById("result").innerText = intersects
    ? "The circles intersect!"
    : "The circles do not intersect.";
}
