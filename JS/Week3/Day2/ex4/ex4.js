const f = document.querySelector("form");
f.addEventListener("submit", sphere);

function sphere(event) {
    event.preventDefault();
    let a = Number(document.getElementById("radius").value);
    console.log(a);
    let b = document.getElementById("volume");
    if (Number.isNaN(a)) return;
    let v = (4 / 3) * Math.PI * a ** 3;
    b.value = v.toFixed(2);
    console.log(`your volume of sphere: ${v} `);
}