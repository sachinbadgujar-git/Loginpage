const wrapper=document.querySelector('.wrapper');
const registerLink=document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');

registerLink.onclick =() =>{
    wrapper.classList.add('active');
}

loginLink.onclick=()=>{
    wrapper.classList.remove('active');
}

document.getElementById('register-form').onsubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect input data using getElementById
    const username = document.getElementById('register-username').value;
    const mobile = document.getElementById('register-mobile').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        // API call for registration
        const response = await fetch('http://localhost:8087/add-user', {
            method: 'POST', // Use POST for sending data
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, mobile, email, password }) // Data to send
        });

        const data = await response.json(); // Parse JSON response
        if (response.ok) {
            alert('Registration successful!');
            console.log(data); // Handle success (e.g., save tokens, redirect)
        } else {
            alert(data.message || 'Registration failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};


    // document.getElementById("signupForm").addEventListener("submit", async function (event) {
    //   event.preventDefault(); // Prevent default form submission

    //   // Collect form data
    //   const formData = {
    //     name: document.getElementById("name").value,
    //     // address: document.getElementById("address").value,
    //     // mobile: document.getElementById("mobile").value,
    //     email: document.getElementById("email").value,
    //     pass: document.getElementById("password").value,
    //     // city: document.getElementById("city").value,
    //   };

    //   try {
    //     const response = await fetch("http://localhost:8080/add-user", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //       alert("School added successfully!");
    //       const result = await response.json();
    //       console.log("Success:", result);
    //     } else {
    //       alert("Failed to add school. Check your input.");
    //       console.error("Error:", response.statusText);
    //     }
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //     alert("An error occurred while submitting the form.");
    //   }
    // });


// const apiBaseUrl = 'http://localhost:8080/add-user';
// async function login() {
    
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     try {
//         const response = await fetch(`${apiBaseUrl}/login?username=${username}&password=${password}`, {
//             method: 'POST'
//         });

//         if (!response.ok) {
//             throw new Error('Failed to log in');
//         }

//         const message = await response.text();
//         alert(message);
//     } catch (error) {
//         alert('Error: ' + error.message);
//     }
// }

// async function register() {
    
//     const username = document.getElementById('registerUsername').value;
//     const email = document.getElementById('registerEmail').value;
//     const password = document.getElementById('registerPassword').value;

//     try {
//         const response = await fetch(`${apiBaseUrl}/register`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, email, password })
//         });

//         if (!response.ok) {
//             throw new Error('Failed to register');
//         }

//         const message = await response.text();
//         alert(message);
//     } catch (error) {
//         alert('Error: ' + error.message);
//     }
// }



// // Backend API URL
// const apiBaseUrl = 'http://localhost:8080/api/auth';

// // Login Function
// async function login() {
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     const response = await fetch(`${apiBaseUrl}/login?username=${username}&password=${password}`, {
//         method: 'POST'
//     });
//     const message = await response.text();
//     alert(message);
// }

// // Register Function
// async function register() {
//     const username = document.getElementById('registerUsername').value;
//     const email = document.getElementById('registerEmail').value;
//     const password = document.getElementById('registerPassword').value;

//     const response = await fetch(`${apiBaseUrl}/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, password })
//     });
//     const message = await response.text();
//     alert(message);
// }
