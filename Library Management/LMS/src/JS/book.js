const fs = require("fs");
fs.readFile("src/student.json", (error, data) => {
    if (error) {
        console.error(error);
        throw err;
      }
      const user = JSON.parse(data);
      console.log(user);
});

const user = {
    id: 2,
    completeName: "Vennifer Jones",
    age: 24,
  };
  
  // converting the JSON object to a string
  const data = JSON.stringify(user);
  
  // writing the JSON string content to a file
  fs.writeFile("data.json", data, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);
  
      throw error;
    }
  
    console.log("data.json written correctly");
  });