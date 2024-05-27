const addNewDept = (school, newDepartment) => {
    return {
      ...school,
      departments: {
        ...school.departments,
        ...newDepartment
      }
    };
  };
  
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  