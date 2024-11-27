import React, { useEffect } from "react";

const SplineViewer = () => {
  useEffect(() => {
    // Dynamically load the script when the component mounts
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* The spline viewer component */}
      <spline-viewer url="https://prod.spline.design/iNddcl2WCo4LsctB/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default SplineViewer;
