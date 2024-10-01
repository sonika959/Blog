import React, { useState } from 'react';

const Component = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sample vlog entries
  const vlogEntries = [
    {  
        
    title: "Day 1: Starting My Fitness Journey", content: "Today marks the beginning of my fitness journey! I kicked things off with a light morning jog and a healthy breakfast—scrambled eggs with avocado toast. I’m excited but also nervous about staying consistent. My goal is to exercise five times a week and eat cleaner. I’ll be tracking my progress and sharing tips on how to stay motivated!" },
   

{ title: "Day 2: Trying a New Yoga Routine", content: "Today I explored a new yoga routine, focusing on flexibility and mindfulness. It was a 30-minute session that left me feeling both relaxed and energized. I noticed my balance has improved since I started practicing regularly. Yoga has become my go-to for de-stressing, and I’m planning to incorporate it at least three times a week from now on" },
    { title: "Day 3: Healthy Meal Prep for the Week", content: "Meal prep day! I spent the afternoon preparing healthy meals for the week—grilled chicken, quinoa, roasted veggies, and overnight oats. Having everything ready in advance makes it easier to stick to a nutritious diet, even on busy days. It also helps me avoid last-minute junk food cravings. I’ll be sharing my favorite meal prep recipes with you!" },
    { title: "Day 4: Mental Health Check-In", content: "Today I focused on mental health and took a break from intense workouts. I spent time journaling and meditating for about 15 minutes in the morning, which helped clear my mind. Mental well-being is just as important as physical health, and I want to remind everyone to take time to check in with themselves. It’s okay to slow down and rest." },
   
   
  ];

  const toggleBackground = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
    style={{
        backgroundColor: isDarkMode ? "#1c1c1c" : "#f0f0f0",
      
        color: isDarkMode ? "#e0e0e0" : "#1a1a1a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "background-color 0.5s ease, color 0.5s ease, background-image 0.5s ease",
        fontFamily:  "'Georgia', serif",
        padding: "40px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px",color: "blue",fontFamily: "Georgia, serif" }}>My Fitness Vlog</h1>
        <p style={{ fontSize: "1.8rem", opacity: "0.8",color: "blueviolet",fontFamily: "Georgia, serif",fontStyle: "bold" }}>
          Welcome to my fitness and health journey
        </p>

        {/* Dark Mode Toggle Switch */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            cursor: "pointer",
          }}

          >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              fontSize: "1.5rem",
              marginRight: "10px",
            }}
          >
            Theme
          </label>
          <div
            onClick={toggleBackground}
            style={{
                
              width: "50px",
              height: "25px",
              
              background: isDarkMode ? "#4caf50" : "#ccc", 
              borderRadius: "25px",
              position: "relative",
              transition: "background-color 0.3s ease",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                
                background: isDarkMode ? "#f5f5f5" : "#222",
                borderRadius: "50%",
                position: "absolute",
                top: "2.5px",
                left: isDarkMode ? "27px" : "2.5px",
                transition: "left 0.3s ease",
              }}
            ></div>
          </div>
        </div>
      </header>
         {/* Blog Entries */}
      <div
        style={{
            
          width: "100%",
          maxWidth: "800px",
          display: "grid",
        
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {vlogEntries.map((entry, index) => (
          <div
            key={index}
            style={{
              backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              cursor: "pointer",
              border: "1px solid #e0e0e0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: isDarkMode ? "#f5f5f5" : "#333",fontFamily: "Georgia, serif",color: "blueviolet" }}>
              {entry.title}
            </h2>
            <p style={{ lineHeight: "1.6", fontSize: "1.1rem",fontStyle: "italic" }}>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component;