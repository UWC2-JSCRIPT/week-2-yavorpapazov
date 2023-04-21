const { Router } = require("express");

const CalendarDAO = require('../daos/calendars');
const EventDAO = require('../daos/events');

const router = Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
    try {
        const calendar = await CalendarDAO.getById(req.params.calendarId)
        if (!calendar) {
            return res.sendStatus(404);
        }
        const events = await EventDAO.getAll(req.params.calendarId);
        res.json(events);
    } catch(e) {
        next(e);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const event = await EventDAO.getById(req.params.id);
        if (!event) {
            res.sendStatus(404);
        } else if (event.calendarId.toString() !== req.params.calendarId) {
            res.sendStatus(404);
        } else {
            res.json(event);
        }
    } catch(e) {
        next(e);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const calendar = await CalendarDAO.getById(req.params.calendarId)
        if (!calendar) {
            return res.sendStatus(404);
        }
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

router.put("/:id", async (req, res, next) => {
    try {
        const newEvent = req.body
        const event = await EventDAO.getById(req.params.id);
        if (event.calendarId.toString() !== req.params.calendarId) {
            res.sendStatus(404);
        } else {
            const updatedEvent = await EventDAO.updateById(req.params.id, newEvent);
            if (updatedEvent) {
            res.json(updatedEvent);
            } else {
            res.sendStatus(404);
            }
        }
    } catch(e) {
        next(e);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const event = await EventDAO.removeById(req.params.id);
        if (!event) {
            res.sendStatus(404);
        } else if (event.calendarId.toString() !== req.params.calendarId) {
            res.sendStatus(404);
        } else {
            res.json(event);
        }
    } catch(e) {
        next(e);
    }
});

module.exports = router;