import "dotenv/config.js";
console.log(process.env.ATLAS_URI);
import app from "./app.js";
const PORT = process.env.PORT || 5001;

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
