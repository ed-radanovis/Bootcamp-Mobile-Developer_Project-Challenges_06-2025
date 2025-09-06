async function connectToDatabase(dataName) {
  // logic
  console.log(`\n ... connecting to the database : ${dataName}`);
}

async function disconnectDatabase(dataName) {
  // logic
  console.log(`... disconnecting to the database : ${dataName}`);
}

// example to export only one function
// =>
// export default connectToDatabase;

// example to export more than one function
export { connectToDatabase, disconnectDatabase };
