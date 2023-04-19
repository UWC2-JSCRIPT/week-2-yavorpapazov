const Events = require('../models/events');

module.exports = {};

// module.exports.getAll = async () => {
//   const calendars = await Calendars.find().lean()
//   return calendars
// };

module.exports.create = async (name, date, calendarId) => {
  return await Events.create({ name, date, calendarId });
};

// module.exports.getById = async (id) => {
//   try {
//     const calendar = await Calendars.findOne({ _id: id }).lean();
//     return calendar;
//   } catch (e) {
//     return null;
//   }
// };

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