const { Router } = require("express");

const EventDAO = require('../daos/events');

const router = Router({ mergeParams: true });

router.post("/", async (req, res, next) => {
    try {
        let { name, date } = req.body
        if (!name) {
            res.sendStatus(400)
        } else if(!date) {
            res.sendStatus(400)
        } else {
            const savedEvent= await EventDAO.create(name, date, req.params.calendarId)
            res.json(savedEvent)
        }
        } catch(e) {
        next(e);
        }
  });

module.exports = router;