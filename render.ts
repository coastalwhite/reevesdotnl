// @deno-types="https://deno.land/x/denjucks/mod.d.ts"
import denjucks from "https://deno.land/x/denjucks/mod.js";

const exportFiles = [
	"index.html",
	"gondwana.html",
	"news.html",
	"publications.html",
	"about.html",
	"contact.html",
];

exportFiles.forEach((fileName) => {
	console.log("Starting with %s", fileName);
	const compiledHTML = denjucks.render("./src/" + fileName, {});
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
