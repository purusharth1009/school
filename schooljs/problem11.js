const findTopStudent = (school, courseName) => {
    let topStudent = null;
    let highestScore = -1;
  
    for (const student of school.students) {
      const { scores } = student;
      if (scores[courseName] > highestScore) {
        highestScore = scores[courseName];
        topStudent = student;
      }
    }
  
    return topStudent;
  };
  
  console.log(findTopStudent(school, 'math'));
  