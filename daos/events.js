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

// module.exports.updateById = async (id, newData) => {
//   try {
//     const calendar = await Calendars.findOneAndUpdate({ _id: id }, newData, { new: true }).lean();
//     return calendar;
//   } catch (e) {
//     return null;
//   }
// };

// module.exports.removeById = async (id) => {
//   try {
//     const calendar = await Calendars.findOneAndDelete({ _id: id }).lean();
//     return calendar;
//   } catch (e) {
//     return null;
//   }
// };