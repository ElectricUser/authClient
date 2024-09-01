const registerForm = document.querySelector(".auth-form");
const serverUrl = "http://localhost:3000";

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);
    try {
        const request = await fetch(serverUrl.concat("/users/register"), {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    } catch (err) {
        console.log(err);
    }
});
