// @deno-types="https://deno.land/x/bq_denjucks@1.1.2/mod.d.ts"
import denjucks from "https://deno.land/x/bq_denjucks@1.1.2/mod.js";

const exportFiles = [
	{
		fileName: "index.html",
		path: "",
		data: {
			home: true,
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "index.html",
		path: "gondwana/",
		data: {
			gondwana: true,
			title: "Gondwana",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "course.html",
		path: "gondwana/",
		data: {
			gondwana: true,
			title: "Gondwana Course",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "animations.html",
		path: "gondwana/",
		data: {
			gondwana: true,
			title: "Gondwana Animations",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "updates.html",
		path: "gondwana/",
		data: {
			gondwana: true,
			title: "Gondwana Updates",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "index.html",
		path: "news/",
		data: {
			news: true,
			title: "News",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "publications.html",
		path: "",
		data: {
			publications: true,
			title: "Publications",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "about.html",
		path: "",
		data: {
			about: true,
			title: "About",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
	{
		fileName: "contact.html",
		path: "",
		data: {
			contact: true,
			title: "Contact",
			description:
				"Colin Reeves is an earth scientist with 40 years’ experience in the instigation, execution and interpretation of regional (particularly airborne) geophysical surveys in Africa, India, Australia and the Americas, spread across the government, commercial and educational sectors.",
		},
	},
];

exportFiles.forEach(({ fileName, path, data }) => {
	console.log("Starting with %s", fileName);
	const compiledHTML = denjucks.render("./src/" + path + fileName, data);
	console.log("Compiled %s into HTML", fileName);
	const fileWrite = Deno.writeTextFile(
		"./" + path + fileName,
		compiledHTML
	);
	fileWrite
		.then(() =>
			console.log(
				"Wrote %s to './%s'",
				path + fileName,
				path + fileName
			)
		)
		.catch((err) =>
			console.log(
				"Failed to write %s to './%s', reason: %s",
				path + fileName,
				path + fileName,
				err
			)
		);
	console.log("");
});
