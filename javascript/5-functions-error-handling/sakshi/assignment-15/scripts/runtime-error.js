const users = {
  "lucky": { address: { city: "Chennai" } },
  "sakshi": { address: { city: "Hyderabad" } },
  "rahul": { address: { city: "Delhi" } }
};
const input = document.getElementById("username");
const result = document.getElementById("result");
const error = document.getElementById("error");
document.getElementById("checkBtn").addEventListener("click", () => {
  result.textContent = "";
  error.textContent = "";

  try {
    const name = input.value.trim().toLowerCase();
    if (!name) throw new Error("Please enter a username.");
    const city = users[name].address.city;
    result.textContent = `${name} lives in ${city}.`;
  } catch (err) {
    error.textContent = "Error: " + err.message;
  }
});
document.getElementById("clearBtn").addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
  error.textContent = "";
});
