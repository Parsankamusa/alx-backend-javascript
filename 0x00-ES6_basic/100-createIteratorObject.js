export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentDepartmentIndex >= report.departments.length) {
        return { done: true };
      }

      const currentDepartment = report.departments[currentDepartmentIndex];
      const currentEmployee = currentDepartment.employees[currentEmployeeIndex];

      currentEmployeeIndex++;
      if (currentEmployeeIndex >= currentDepartment.employees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
return this;
    },
  };

  return iterator;
}      
