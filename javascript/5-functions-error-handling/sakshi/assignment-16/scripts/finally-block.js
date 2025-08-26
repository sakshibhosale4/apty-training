const users = {
  "lucky": { address: { city: "Hyderabad" } },
  "sakshi": { address: { city: "Pune" } },
  "rahul": { address: { city: "Delhi" } }
};

const default_city = "Pune";

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
  } finally {
    if (!result.textContent) {
      result.textContent = `Showing default city: ${default_city}`;
    }
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
  error.textContent = "";
});
