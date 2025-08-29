class Person {
  constructor() {
    this.name = "";
    this.age = null;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  greet() {
    return `Hello, I am ${this.name}, ${this.age} years old.`;
  }
}
document.getElementById("createBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const ageValue = document.getElementById("ageInput").value.trim();
  const output = document.getElementById("output");
  if (name === "" || ageValue === "") {
    output.textContent = "Please enter both name and age.";
    return;
  }
  const age = parseInt(ageValue, 10);
  if (isNaN(age) || age <= 0) {
    output.textContent = "Please enter a valid age.";
    return;
  }
  const person = new Person().setName(name).setAge(age);
  output.textContent = person.greet();
});
