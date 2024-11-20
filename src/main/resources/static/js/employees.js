window.onload = function () {
    fetch("http://localhost:8080/api/employees")
        .then(response => response.json())
        .then(employees => {
            const ul = document.querySelector("#employees-ul");
            for (let employee of employees) {
                ul.innerHTML += `<ul>${employee.name}</ul>`;
            }
        })
}