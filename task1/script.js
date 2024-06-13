let resultElement = document.getElementById("result");
function showInfo(e) {
    e.preventDefault();
    let nameInfo = document.getElementById("inputName").value;
    let age = document.getElementById("inputAge").value;
    resultElement.innerHTML = `<p>name : ${nameInfo} age :${age}</p>`;
}

document.getElementById("bttn").addEventListener("click", showInfo);