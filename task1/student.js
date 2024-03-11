const FULLNAME = "Vasyl Panov";
const STUDENT_ID = 48992;

const getStudentFullName = (id) => {
    switch (id) {
        case 0:
            return FULLNAME;
        case 1:
            return "Kacper Nowak";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michal Wisniewski";
    }
};
const getStudentId = (id) => {
    switch (id) {
        case 0:
            return STUDENT_ID;
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
};


module.exports = { getStudentFullName, getStudentId };
