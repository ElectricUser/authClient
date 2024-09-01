const loginForm = document.querySelector(".auth-form");
const serverUrl = "http://localhost:3000";

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(loginForm);
	const data = Object.fromEntries(formData);
	try {
		const response = await fetch(serverUrl.concat("/users/login"), {
			method: "Post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("There was an error fetching data")
		}
		const jwtToken = response.headers.get('Authorization')
	} catch (err) {
		console.log(err.message);
	}
});
