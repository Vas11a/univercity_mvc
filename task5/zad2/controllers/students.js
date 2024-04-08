
const students = [];

export const getAddNewStudentPage = (req, res) => {
  res.render('Home');
};

export const addNewStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;
  const newStudent = { fullName, code, fieldOfStudies };
  students.push(newStudent);
  res.redirect('/');
};


export const getStudentsListPage = (req, res) => {
    res.render('List', { students: students });
  };
  
