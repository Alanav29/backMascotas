const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Por favor teclea tu nombre"],
		},
		email: {
			type: String,
			required: [true, "Por favor teclea tu email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Por favor teclea tu password"],
		},
		lostPets: {
			type: Array,
			default: [],
		},
		ShelteredPets: {
			type: Array,
			default: [],
		},
		PetsForAdoption: {
			type: Array,
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
