const mongoose = require('mongoose');
const _ = require('lodash');

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});


CourseSchema.methods.toJSON = function () {
  const course = this;
  const courseObject = course.toObject();
  return _.pick(courseObject, ['_id', 'owner', 'name', 'code']);
};


const Course = mongoose.model('Course', CourseSchema);

module.exports = {Course}