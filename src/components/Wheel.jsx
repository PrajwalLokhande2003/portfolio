import React, { useEffect } from "react";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const text = [
        "typescript", 
        "javascript", 
        "dart", 
        "java", 
        "react", 
        "flutter", 
        "android", 
        "html5", 
        "css3", 
        "nodedotjs", 
        "express", 
        "nextdotjs", 
        "prisma", 
        "amazonaws", 
        "postgresql", 
        "firebase", 
        "nginx", 
        "vercel", 
        "testinglibrary", 
        "jest", 
        "cypress", 
        "docker", 
        "git", 
        "jira", 
        "github", 
        "gitlab", 
        "visualstudiocode", 
        "androidstudio", 
        "sonarqube", 
        "figma"
        
      ];

      const options = {
        radius: window.innerWidth>768?250:130,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, text, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <div className="tagcloud"></div>
      </div>
    </>
  );
};

export default TextShpere;