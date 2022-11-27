fetchData(){
    try {
        await fetch('http://localhost:3000')
            .then(res => res.json())
            .then(data => {
                console.log(data.firstname)
                const root = document.body;
                let div = document.createElement('div')
                div.innerText = `first name: ${data.firstname} last name is: ${data.lastname}`
                root.appendChild(div)
            })
    }
    catch (e) {
        console.log(e)
    }
}
fetchData()