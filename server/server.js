const express = require('express');
const app = express();
const PORT = 4500;
const { DateTime } = require('luxon');

app.use(express.json());
express.urlencoded({ extended: true });

app.post('/getTimeZone', (req, res) => {
    try {
        const newDate = new Date();
        const iso8601DateString = new Date(newDate).toISOString();
        const inputTimeUTC = DateTime.fromISO(iso8601DateString);

        const dateTimeUTC = inputTimeUTC.setZone(req.body.timezone);

        const formattedCurrentTime = dateTimeUTC.toFormat('dd-MM-yyyy hh:mm a');

        res.status(200).json({
            status: true,
            date: formattedCurrentTime
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});