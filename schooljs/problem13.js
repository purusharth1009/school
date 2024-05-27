const highestStudentCountDepartment = (school) => {
    const { departments } = school;
    let highestCount = 0;
    let highestDept = '';
  
    for (const [dept, { students }] of Object.entries(departments)) {
      if (students > highestCount) {
        highestCount = students;
        highestDept = dept;
      }
    }
  
    return highestDept;
  };
  
  console.log(highestStudentCountDepartment(school));
  