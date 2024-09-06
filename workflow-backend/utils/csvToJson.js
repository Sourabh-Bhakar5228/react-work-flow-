const csvtojson = require("csvtojson");

exports.convertCsvToJson = async (filePath) => {
  try {
    return await csvtojson().fromFile(filePath);
  } catch (error) {
    throw new Error("Error converting CSV to JSON");
  }
};
