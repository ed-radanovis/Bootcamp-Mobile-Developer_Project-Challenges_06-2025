// examples of the exports default

async function connectToDatabase(dataName) {
  // logic
  console.log("... connecting to the database :" + dataName);
}
// make the modifications below
exports.connectToDatabase = async (dataName) => {
  // logic
  console.log("... connecting to the database : " + dataName + "\n");
};

// another exemplo
async function disconnectDatabase() {
  // logic
  console.log("... disconnecting to the database :");
}

exports.disconnectDatabase = async (dataName) => {
  // logic
  console.log("... disconnecting to the database : " + dataName + "\n");
};
