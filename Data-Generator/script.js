const userForm = document.getElementById("userForm");

async function postData(data) {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Error:", res.status);
        }

        let jsonData = await response.json();

        console.log(jsonData);
        alert("Form submitted! Check console for data.");

    } 
    catch (err) {
        alert("Failed to Submit form! An error occured.");
        console.error(err);
    }
}

userForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        username: userForm.username.value.trim(),
        email: userForm.email.value.trim(),
        dob: userForm.dob.value,
        hobbies: Array.from(userForm.hobbies.selectedOptions).map(
            (opt) => opt.value
        ),
        isSubscribed: userForm.isSubscribed.checked,
    };

    console.log("Form Data:", formData);

    await postData(formData);
});
