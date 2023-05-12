function caloriesCalculate(type, duration) {
		type = type.toLowerCase();
		// Yoga: Estimated calorie burn = Duration (in minutes) * 4.0
		const calculateCaloriesYoga = (duration) => duration * 4.0;

		// Jogging: Estimated calorie burn = Duration (in minutes) * 8.0
		const calculateCaloriesJogging = (duration) => duration * 8.0;

		// Abs exercises: Estimated calorie burn = Duration (in minutes) * 5.0
		const calculateCaloriesAbs = (duration) => duration * 5.0;

		// Zumba: Estimated calorie burn = Duration (in minutes) * 8.0
		const calculateCaloriesZumba = (duration) => duration * 8.0;

		// Pilates: Estimated calorie burn = Duration (in minutes) * 3.5
		const calculateCaloriesPilates = (duration) => Math.floor(duration * 3.5);

		switch (type) {
			case "yoga":
				return calculateCaloriesYoga(duration);
			case "jogging":
				return calculateCaloriesJogging(duration);
			case "abs":
				return calculateCaloriesAbs(duration);
			case "zumba":
				return calculateCaloriesZumba(duration);
			case "pilates":
				console.log("sadfasdfdsa");
				return calculateCaloriesPilates(duration);
		}

	}

    export { caloriesCalculate }