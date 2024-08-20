const loginForm = document.querySelector(".login-form");
const serverUrl = "http://localhost:3000";

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(loginForm);
	const data = Object.fromEntries(formData);
	console.log(serverUrl.concat("/login"));
	try {
		const request = await fetch(serverUrl.concat("/login"), {
			method: "Post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
	} catch (err) {
		console.log(err);
	}
});
