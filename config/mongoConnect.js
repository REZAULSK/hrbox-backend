import mongoose from "mongoose";
import colors from "colors";

const mongoConnect = (mongoConnectUri, port, app) => {
  mongoose
    .connect(mongoConnectUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(port, () => {
        console.log(colors.blue("Connected to mongodb"));
        console.log(colors.bold.yellow(`> App is running on port ${port}`));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default mongoConnect;