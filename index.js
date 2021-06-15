const speedTest = require("speedtest-net");

const runTest = async () => {
  try {
    const results = await speedTest();
    return (results.upload.bytes / 100000 ) / (results.upload.elapsed / 1000)
  } catch (err) {
    return err.message;
  }
};

runTest().then(result => {
    if (typeof result === "string") {
        console.log(result)
        return;
    }

    if (result > 10) {
        console.log('good to go')
    } else {
        console.log('your internet sucks')
    }
})