const mongoose = require('mongoose');
const _ = require('lodash');


var GridItemSchema = new mongoose.Schema({
  h: {
    type: Number,
    default: 2
  },
  i: {
    type: String,
    required: true
  },
  isDraggable: {
    type: Boolean
  },
  isResizable: {
    type: Boolean
  },
  maxH: {
    type: Number
  },
  maxW: {
    type: Number
  },
  minH: {
    type: Number
  },
  minW: {
    type: Number
  },
  static: {
    type: Boolean,
    default: false
  },
  w: {
    type: Number,
    default: 1
  },
  x: {
    type: Number,
    default: 3
  },
  y: {
    type: Number,
    default: 3
  }
});


GridItemSchema.methods.toJSON = function () {
  const gridItem = this;
  const gridItemObject = gridItem.toObject();
  return _.pick(gridItemObject, ['_id', 'name', 'description', 'category', 'rate', 'price', 'stock', 'imageUrl', 'createdAt', 'key']);
};



module.exports = {GridItemSchema}