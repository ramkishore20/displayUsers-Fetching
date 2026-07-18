const container = document.getElementById("userContainer");

async function fetchUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        userDisplay(users);
    }
    catch(error){
        console.log(error);
    }
}
fetchUser();
function userDisplay(users){
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `<h3>${user.name}</h3>
        <p><strong>Email:</strong>${user.email}</p>
        <p><strong>Phone:</strong>${user.phone}</p>
        <p><strong>City:</strong>${user.address.city}</p>
        <p><strong>Company:</strong>${user.company.name}</p>`

        container.appendChild(card);
    });
}

