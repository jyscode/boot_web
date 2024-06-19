testBtn.addEventListener('click', async function (){
    let resObj = await fetch('/list')
    let data = await resObj.json()
    // console.log(data)


    let displayData =
        `
    <thead>
        <td>ID</td>
        <td>title</td>
        <td>writer</td>
        <td>created</td>
</thead><tbody>`

    data.forEach(function (item, index) {
        displayData += `<tr>
    <td>${item.id}</td>
    <td><a class="a-modal" data-bs-toggle="modal" href="#pTitle" >${item.title}</a></td>
    <td>${item.writer}</td>
    <td>${item.created}</td>
</tr>`
    })

    displayData += `</tbody>`


    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         // Typical action to be performed when the document is ready:
    document.getElementById("datatablesSimple").innerHTML = displayData;


    // new simpleDatatables.DataTable(datatablesSimple);
    //     }
    // };
    // xhttp.open("GET", "/list", true);
    // xhttp.send();


})
