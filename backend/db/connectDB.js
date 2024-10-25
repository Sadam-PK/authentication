import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log('mongo_uri = ' , process.env.MONGO_URI);
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(`Error connection to mongodb`, error.message);
    process.exit(1);
  }
};
