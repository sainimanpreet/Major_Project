# 🏞️ Wanderlust - Explore the World, One Stay at a Time

> A full-stack MERN-style web application to browse, review, and manage travel listings – inspired by Airbnb.

![Wanderlust Banner](https://res.cloudinary.com/dddtnlpjt/image/upload/v1722000000/wanderlust/banner.jpg)

---

## 🌐 Live Demo

🚀 [Click here to view Wanderlust live](https://wanderlust-production.up.railway.app)

*(Note: May take a few seconds to load if hosted on a free server)*

---

## 📸 Screenshots

### 🏘️ Homepage
![Homepage](https://res.cloudinary.com/dddtnlpjt/image/upload/v1722000000/wanderlust/homepage.jpg)

### 📄 Listing Details
![Listing Page](https://res.cloudinary.com/dddtnlpjt/image/upload/v1722000000/wanderlust/listing.jpg)

### 📝 Create a Listing
![Create Listing](https://res.cloudinary.com/dddtnlpjt/image/upload/v1722000000/wanderlust/create.jpg)

---

## 🔧 Features

- 🧭 Browse all listings with images and details
- 🗺️ Add your own travel destinations
- 💬 Review listings with comments
- 🧾 Edit or delete listings (authorization included)
- ☁️ Cloudinary integration for image uploads
- 🔒 Authentication & session handling with Passport.js

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Hosting |
|---------|---------|----------|---------|
| EJS, Bootstrap | Express.js, Node.js | MongoDB Atlas | Railway, Cloudinary |

---

## 🧰 Local Setup Instructions

```bash
# Clone the repo
git clone https://github.com/sainimanpreet/Major_Project
cd Major_Project

# Install dependencies
npm install

# Create a .env file and add:
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

# Initialize sample data
node init/index.js

# Start the app
nodemon app.js

