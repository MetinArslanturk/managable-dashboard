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
    type: Boolean,
    default: true
  },
  isResizable: {
    type: Boolean,
    default: true
  },
  canRemove: {
    type: Boolean,
    default: true
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
  },
  type: {
    type: String,
    required: true
  }
});


module.exports = {GridItemSchema}