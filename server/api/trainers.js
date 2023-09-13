const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const SALT_ROUNDS = 10;

const {
	createTrainer,
    getAllTrainers,
    getTrainerByUsername
} = require("../db/helpers/trainers");

// GET - /api/trainers - get all trainers
router.get("/", async (req, res, next) => {
	try {
		const trainers = await getAllTrainers();
		res.send(trainers);
	} catch (error) {
		console.log("error from router get", error);
		next(error);
	}
});

// POST - /api/trainers/register - create a new trainer
router.post("/register", async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
		const trainer = await createTrainer({ username, password: hashedPassword });
		delete trainer.password;

		const token = jwt.sign(trainer, JWT_SECRET);

		res.cookie("token", token, {
			sameSite: "strict",
			httpOnly: true,
			signed: true,
		});

		delete trainer.password;
        
		res.send({ token, trainer});
	} catch (error) {
		next(error);
	}
});

router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const trainer = await getTrainerByUsername(username);
		const validPassword = await bcrypt.compare(password, trainer.password);

		if (validPassword) {
			const token = jwt.sign(trainer, JWT_SECRET);

			res.cookie("token", token, {
				sameSite: "strict",
				httpOnly: true,
				signed: true
			});

			delete trainer.password;

			res.send({ token, trainer});
		}
	} catch (error) {
		next(error);
	}
});

router.post("/logout", async (req, res, next) => {
	try {
		res.clearCookie("token", {
			sameSite: "strict",
			httpOnly: true,
			signed: true,
		});
		res.send({
			loggedIn: false,
			message: "Logged Out",
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
