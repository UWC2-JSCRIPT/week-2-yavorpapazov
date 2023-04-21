const Events = require('../models/events');

module.exports = {};

module.exports.getAll = async (calendarId) => {
  const events = await Events.find({ calendarId: calendarId })
  return events
};

module.exports.getById = async (id) => {
  try {
    const event = await Events.findOne({ _id: id }).lean();
    return event;
  } catch (e) {
    return null;
  }
};

module.exports.create = async (name, date, calendarId) => {
  return await Events.create({ name, date, calendarId });
};

module.exports.updateById = async (id, newData) => {
  try {
    const event = await Events.findOneAndUpdate({ _id: id }, newData, { new: true }).lean();
    return event;
  } catch (e) {
    return null;
  }
};

module.exports.removeById = async (id) => {
  try {
    const event = await Events.findOneAndDelete({ _id: id }).lean();
    return event;
  } catch (e) {
    return null;
  }
};