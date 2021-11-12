const URL = "https://api.taprotec.com:5057"
const headers = {
    "Authorization": "IiQyYSQxMCRpaDVWSFVwT3c4RERGdWlhbnZTTUwuUUhBaGFDZU5jbTZZd2ovdVVhalhQOFpjQnNhSjB3eSI=",
    "Content-Type": "application/json"
}

async function registration(event) {
    event.preventDefault();



    let full_name = document.getElementById("Full_name").value;
    let phone_number = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;



    let path = `create-auth`

    let body = {
        model: "user",
        field: "password",
        full_name,
        phone_number,
        location,
        email,
        password,
        role

    }

    console.log(body)

    let response = await fetch(`${URL}/${path}`, {
        body: JSON.stringify(body),
        method: 'POST',
        headers
    })
    response = await response.json()
    console.log(response)


    // } catch (error) {
    //     console.log(error.message)
    // }
    document.getElementById("myForm").reset()
    if (response.success) {
        alert("Form submited");

    } else {
        alert("Form is not submited")

    }
}