
function run() {
	const today = new Date();
	const daysSinceLastSaturday = (today.getDay() + 1) % 7;
	const lastSaturday = new Date(today);
	lastSaturday.setDate(today.getDate() - daysSinceLastSaturday);

	const yearForPath = lastSaturday.getFullYear();
	const monthForPath = (lastSaturday.getMonth() + 1).toString().padStart(2, "0");
	const dayForPath = lastSaturday.getDate();

	const datePath = (
		yearForPath
		+ "/" +
		monthForPath
		+ "/" +
		dayForPath
	);
	const fullPath = `https://www.nytimes.com/interactive/${datePath}/upshot/flashback.html`;

	location.href = fullPath;
}

addEventListener("DOMContentLoaded", run);
