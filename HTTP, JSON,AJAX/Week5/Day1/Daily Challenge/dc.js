let click = document.getElementById("submit");

click.addEventListener("click", submitting);

function submitting(e) {
    e.preventDefault()
    let inp1 = document.getElementById("firstname").value;
    let inp2 = document.getElementById("lastname").value;
    console.log(inp1, inp2);
    
    inp1 = inp1.replace(/[^a-z\s]/gi, '');
    inp2 = inp2.replace(/[^a-z\s]/gi, '');

    let sen = {};
    sen.firstname = `${inp1}`;
    sen.lastname = `${inp2}`;
    console.log(sen);

    let jsonUser = JSON.stringify(sen);
    console.log(jsonUser);
    let vis = document.getElementById("jsonstring");
    vis.append(jsonUser);
}