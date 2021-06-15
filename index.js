const speedTest = require("speedtest-net");

const runTest = async () => {
  try {
    const results = await speedTest();
    const uploadBpms = (results.upload.bytes / 100000 ) / (results.upload.elapsed / 1000)
    console.log(`${uploadBpms} Mb/S`)
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
};

runTest();