const { getUsersService } = require('./user.service');

async function getUsersController(req, res, next) {
    try {
        const result = getUsersService(req.query);

        return res.status(200).json({
            success: true,
            ...result
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { getUsersController };