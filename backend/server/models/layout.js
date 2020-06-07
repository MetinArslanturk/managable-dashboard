const mongoose = require('mongoose');
const _ = require('lodash');
const {GridItemSchema} = require('./griditem');

var Schema = mongoose.Schema;

var LayoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [GridItemSchema]
});


LayoutSchema.methods.toJSON = function () {
  const layout = this;
  const layoutObject = layout.toObject();
  return _.pick(layoutObject, ['_id', 'user', 'items']);
};


const Layout = mongoose.model('Layout', LayoutSchema);

module.exports = {Layout}