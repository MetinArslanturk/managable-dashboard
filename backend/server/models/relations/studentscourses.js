const mongoose = require('mongoose');
const _ = require('lodash');

var Schema = mongoose.Schema;

var StudentsCoursesSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
});


StudentsCoursesSchema.methods.toJSON = function () {
  const studentsCourses = this;
  const studentsCoursesObject = studentsCourses.toObject();
  return _.pick(studentsCoursesObject, ['_id', 'student', 'course']);
};


const StudentsCourses = mongoose.model('StudentsCourses', StudentsCoursesSchema);

module.exports = {StudentsCourses}