const timer = () => {
  const argument = process.argv.splice(2);
  if (argument.length <= 0) return null;
  for (let num of argument) {
    if (isNaN(num)) return null;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  }
};

timer();
