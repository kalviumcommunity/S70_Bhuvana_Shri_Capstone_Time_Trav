## S70_Bhuvana_Shri_Capstone_Time_Trav

# TimeTrav - Travel Diary & Itinerary Planner

## Project Title: Travel Diary & Itinerary Planner

### Idea Brief
TimeTrav is a MERN stack-based web application that allows users to document their trips, plan itineraries, track expenses, and share experiences. It integrates map functionality to help users efficiently organize their travel plans.

---
## Key Features

### 1. User Authentication & Profiles
- **Sign Up/Login** – Users can create accounts using email/password or Google OAuth.
- **Profile Dashboard** – Manage past and upcoming trips from the dashboard.
- **Privacy Settings** – Users can set their travel logs to public, private, or friends-only.

### 2. Travel Diary
Users can log their trips and create a personal travel journal.
#### **Trip Details**
- Trip name, destination, start & end dates.
- Travel companions (optional).
- Notes about the trip.

#### **Photo & Video Uploads**
- Upload travel photos & videos.
- Images stored via Cloudinary or Firebase Storage.
- Album view for each trip.

#### **Write Travel Experiences**
- Daily reflections or trip summaries.
- Text formatting options: bold, italic, bullet points.

#### **Trip Visibility Options**
- Public (others can see & comment).
- Private (only visible to the user).
- Friends Only (share with selected users).

### 3. Itinerary Planner
Plan a day-wise itinerary for organizing trip activities.
#### **Add Daily Plans**
- Add morning, afternoon, and evening activities.
- Select or search for places to visit.
- Attach locations via Google Maps API.
- Add travel duration, notes, and transportation details.

#### **Drag & Drop Itinerary Management**
- Rearrange activities easily.
- Color-coded time slots for better visualization.

#### **Multi-City Itinerary**
- Add multiple destinations for a single trip.

### 4. Interactive Map Integration
Google Maps or Mapbox API integration for location-based features.
#### **Add Trip Locations on a Map**
- Mark visited places and upcoming destinations.

#### **Route Planner**
- Calculates distances & travel time between locations.

#### **Nearby Recommendations**
- Suggests restaurants, attractions, hotels.

#### **Offline Map Mode**
- Users can download maps for offline access.

### 5. Expense Tracker
Built-in travel budget manager to track expenses.
#### **Add & Categorize Expenses**
- Categories: Food, Transport, Stay, Activities, Miscellaneous.
- Multi-currency support with exchange rate updates.

#### **Automatic Total Cost Calculation**
- Displays total trip expenses with breakdowns.
- Generates expense reports.

#### **Group Expense Splitting**
- Users can split costs with co-travelers.
- Generates a "Who Owes What" report.

---
## Tech Stack
### **Frontend (Client-Side) – React.js**
#### **Framework & Libraries:**
- React.js – Frontend framework for UI components.
- React Router – Navigation management.
- Redux / Context API – State management.
- Tailwind CSS / Material UI – Modern UI design.

### **Backend (Server-Side) – Node.js & Express.js**
#### **Framework & Libraries:**
- Node.js – JavaScript runtime for backend development.
- Express.js – Lightweight and fast backend framework.
- Mongoose.js – ODM (Object-Document Mapping) for MongoDB.
- JWT (JSON Web Tokens) – Secure user authentication.

---
## Project Timeline
### **Week 1: Project Setup & Authentication (Days 1-7)**
- **Day 1-2:** Project Initialization
  - Setup GitHub Repository & project structure.
  - Initialize MERN Stack (React, Node.js, Express, MongoDB).
  - Install dependencies (React Router, Tailwind CSS, Express, Mongoose, JWT, etc.).

- **Day 3-5:** User Authentication
  - Create MongoDB user schema.
  - Implement JWT-based authentication (Signup/Login/Logout).
  - Add password hashing (bcrypt.js) for security.
  - Implement protected routes.

- **Day 6-7:** User Dashboard & Profile
  - Create dashboard to display user trips.
  - Implement profile page (update profile picture, name, email).

### **Week 2: Travel Diary & Itinerary Planner (Days 8-14)**
- **Day 8-9:** Travel Diary (Trip Creation & Editing)
  - Develop Trip Schema in MongoDB.
  - Create Trip Creation Page.
  - Implement CRUD operations.

- **Day 10-11:** Photo Upload Feature
  - Integrate Cloudinary API.
  - Allow users to upload & view travel photos.

- **Day 12-13:** Itinerary Planner
  - Develop Itinerary Schema.
  - Implement drag-and-drop itinerary management.
  - Add Google Maps API for location selection.

### **Week 3: Map Integration, Expense Tracker & Collaboration (Days 15-21)**
- **Day 15-16:** Interactive Maps
  - Display map with trip locations.
  - Enable route planning & distance calculation.

- **Day 17-18:** Expense Tracker
  - Develop Expense Schema.
  - Allow users to record expenses & categorize costs.
  - Implement budget calculations.

- **Day 19-20:** Collaboration & Sharing
  - Implement Invite Friends feature.
  - Allow co-travelers to contribute to itineraries & expenses.
  - Add trip-sharing feature.

- **Day 21:** UI/UX Enhancements & Bug Fixes
  - Improve UI design using Tailwind CSS.
  - Fix responsiveness for mobile devices.

### **Week 4: Final Features, Testing & Deployment (Days 22-28)**
- **Day 22-23:** Notifications & Reminders
  - Implement trip reminders.
  - Add alerts for itinerary changes & budget overspending.

- **Day 24-25:** Offline Access & PDF Export
  - Enable offline mode for itineraries.
  - Add PDF export feature.

- **Day 26:** Testing & Debugging
  - Conduct unit & integration testing.
  - Perform security testing.

- **Day 27:** Deployment
  - Deploy frontend on Vercel/Netlify.
  - Deploy backend on Render/DigitalOcean/AWS.
  - Connect MongoDB Atlas.

- **Day 28:** Final Review & Launch
  - Perform final bug fixes & optimizations.
  - Announce project launch & gather feedback.

---
## Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Render / DigitalOcean / AWS
- **Database:** MongoDB Atlas

---