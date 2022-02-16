const args = process.argv.slice(2);

const timer = function (args) {
  console.log(args);
  if (args.length === 0) {
    return "";
  }
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) {
      console.log("Not a valid input");
      continue;
    }
    if (!isNaN(args[i]) && args[i] < 0) {
      console.log("Not a valid input");
      continue;
    }
    if (lisNaN(args[i]) && args[i] > 0) {
      setTimeout(() => {
        return process.stdout.write("\x07");
      }, args[i] * 1000);
    }
  }
};
console.log(timer(args));
