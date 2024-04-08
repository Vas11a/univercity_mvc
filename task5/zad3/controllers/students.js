let students = [];
let nextId = 1;

export const getAddNewStudentPage = (req, res) => {
  res.render('Home');
};

export const addNewStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;
  const newStudent = { id: nextId++, fullName, code, fieldOfStudies };
  students.push(newStudent);
  res.redirect('/success');
};

export const getAddingNewStudentSuccessPage = (req, res) => {
  res.render('Success', { title: 'Success', message: 'Student has been added with success!' });
};

export const getStudentsListPage = (req, res) => {
  res.render('List', { title: 'Students List', students });
};
