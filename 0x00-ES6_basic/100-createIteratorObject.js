function createIteratorObject(report) {
  let currentDept = 0;
  let currentEmp = 0;
  const numDepts = report.departments.length;
  const numEmps = report.departments[0].employees.length;

  return {
    next: function() {
      if (currentEmp === numEmps) {
        currentDept++;
        currentEmp = 0;
      }
      if (currentDept === numDepts) {
        return { done: true };
      }
      const employee = report.departments[currentDept].employees[currentEmp];
      currentEmp++;
      return { value: employee, done: false };
    }
  };
}
