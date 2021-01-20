// @deno-types="https://deno.land/x/bq_denjucks@1.1.2/mod.d.ts"
import denjucks from "https://deno.land/x/bq_denjucks@1.1.2/mod.js";

const exportFiles = [
	{ fileName: "index.html", path: "", data: { home: true } },
	{ fileName: "gondwana.html", path: "", data: { gondwana: true } },
	{ fileName: "index.html", path: "news/", data: { news: true } },
	{
		fileName: "publications.html",
		path: "",
		data: { publications: true },
	},
	{ fileName: "about.html", path: "", data: { about: true } },
	{ fileName: "contact.html", path: "", data: { contact: true } },
];

exportFiles.forEach(({ fileName, path, data }) => {
	console.log("Starting with %s", fileName);
	const compiledHTML = denjucks.render("./src/" + path + fileName, data);
	console.log("Compiled %s into HTML", fileName);
	const fileWrite = Deno.writeTextFile("./" + path + fileName, compiledHTML);
	fileWrite
		.then(() =>
			console.log("Wrote %s to './%s'", path + fileName, path + fileName)
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
