#!/usr/bin/env node
const fs = require("fs");
const aR = require("app-root-path");
const [, , ...args] = process.argv;
const flattenedFiles = (d, f_) => {
  const f = fs.readdirSync(d);
  for (const i in f) {
    const n = `${d}/${f[i]}`;
    fs.statSync(n).isDirectory() ? flattenedFiles(n, f_) : f_.push(n);
  }
  return f_;
};
const files = flattenedFiles(`${aR}/${args.length > 0 ? args : "src"}`, []);
files
  .filter((f) => f.split(".").pop() === "js")
  .map((f) =>
    fs.readFile(f, "utf8", (e, d) => {
      if (e) console.log(e);
      if (d.includes("class=")) {
        fs.writeFile(f, d.replace(/class=/g, "className="), "utf8", () => {
          console.log("Done");
        });
      }
    })
  );

console.log("hello ==>");
