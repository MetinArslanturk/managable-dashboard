const mongoose = require('mongoose');
const _ = require('lodash');
const {GridItemSchema} = require('./relations/griditem');

var Schema = mongoose.Schema;

var LayoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [GridItemSchema],
    canAdd: {
      type: [String],
      default: ['progressbar', 'leaderboard', 'textpoint', 'badge', 'piechart']
    }
});


LayoutSchema.methods.toJSON = function () {
  const layout = this;
  const layoutObject = layout.toObject();
  return _.pick(layoutObject, ['_id', 'user', 'items', 'canAdd']);
};


const Layout = mongoose.model('Layout', LayoutSchema);

module.exports = {Layout}