let Person = {
  greet: function () {
    return `Hello, ${this.name}!`;
  }
};
let Employee = Object.create(Person);
Employee.greetEmployee = function () {
  return `Hello, ${this.name} the ${this.job}!`;
};
document.getElementById("createEmployee").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const job = document.getElementById("jobInput").value.trim();
  const output = document.getElementById("output");

  if (!name || !job) {
    output.textContent = "Please enter both name and job.";
    return;
  }
  let newEmployee = Object.create(Employee);
  newEmployee.name = name;
  newEmployee.job = job;
  output.textContent =
    newEmployee.greet() + "\n" + newEmployee.greetEmployee();
});
