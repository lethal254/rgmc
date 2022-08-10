const mongoose = require("mongoose")

// export const connectMongoDb = async () => {
//   await mongoose.connect(process.env.MONGO_DEV_URI,{})
//   console.log("Database connected")
// }

const MONGO_DEV_URI = process.env.MONGO_DEV_URI

if (!MONGO_DEV_URI) {
  throw new Error(
    "Please define the MONGO_DEV_URI environment variable inside .env.local"
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectMongoDb() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_DEV_URI, opts).then((mongoose) => {
      console.log("DB connected")
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
