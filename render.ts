// @deno-types="https://deno.land/x/bq_denjucks@1.1.2/mod.d.ts"
import denjucks from "https://deno.land/x/bq_denjucks@1.1.2/mod.js";

const exportFiles = [
	{ fileName: "index.html", data: { home: true } },
	{ fileName: "gondwana.html", data: { gondwana: true } },
	{ fileName: "news.html", data: { news: true } },
	{ fileName: "publications.html", data: { publications: true } },
	{ fileName: "about.html", data: { about: true } },
	{ fileName: "contact.html", data: { contact: true } },
];

exportFiles.forEach(({ fileName, data }) => {
	console.log("Starting with %s", fileName);
	const compiledHTML = denjucks.render("./src/" + fileName, data);
	console.log("Compiled %s into HTML", fileName);
	const fileWrite = Deno.writeTextFile("./" + fileName, compiledHTML);
	fileWrite
		.then(() =>
			console.log("Wrote %s to './%s'", fileName, fileName)
		)
		.catch((err) =>
			console.log(
				"Failed to write %s to './%s', reason: %s",
				fileName,
				fileName,
				err
			)
		);
	console.log("");
});
