ctz = n => {
  if (n > 0) {
    return n - 1;
  }
  if (n < 0) {
    return n + 1;
  }

  if (n == 999) {
    console.log("you found easter egg!!");
  }
  
  return n;
}

exports.ctz = ctz;


// directry invoke ctz to check c8 without mocha
ctz(100);
ctz(0);
ctz(-100);

