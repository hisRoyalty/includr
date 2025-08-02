import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import Header from "./Header";
import Footer from "./Footer";

const SignLanguageDetector = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [gesture, setGesture] = useState("Waiting...");

  const isFingerOpen = (tip, pip) => tip.y < pip.y - 0.05;

  const classifyGesture = (landmarks) => {
    const [
      wrist, thumbTip, , , thumbIP,
      indexTip, , , indexPIP,
      middleTip, , , middlePIP,
      ringTip, , , ringPIP,
      pinkyTip, , , pinkyPIP
    ] = landmarks;

    const allFingers = [
      isFingerOpen(indexTip, indexPIP),
      isFingerOpen(middleTip, middlePIP),
      isFingerOpen(ringTip, ringPIP),
      isFingerOpen(pinkyTip, pinkyPIP),
    ];

    const allClosed = allFingers.every(open => !open);
    const allOpen = allFingers.every(open => open);

    const thumbUp = thumbTip.y < wrist.y - 0.1 && Math.abs(thumbTip.x - wrist.x) < 0.1;
    const thumbDown = thumbTip.y > wrist.y + 0.1 && Math.abs(thumbTip.x - wrist.x) < 0.1;

    const thumbOpen = thumbTip.x < wrist.x - 0.1 || thumbTip.x > wrist.x + 0.1;
    const pinkyOpen = pinkyTip.y < pinkyPIP.y;

    if (thumbUp && allClosed) return "Thumbs Up (Yes)";
    if (thumbDown && allClosed) return "Thumbs Down (No)";
    if (allClosed && !thumbUp && !thumbDown) return "Fist";
    if (allOpen && thumbOpen) return "Open Palm (Hello)";
    if (thumbOpen && pinkyOpen && !isFingerOpen(indexTip, indexPIP)) return "Thank You (approx)";

    return "Unrecognized";
  };

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.6,
    });

    hands.onResults((results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const gestureName = classifyGesture(results.multiHandLandmarks[0]);
        setGesture(gestureName);
      } else {
        setGesture("No hand detected");
      }
    });

    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen">
      <Header />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">Sign Language Detector</h2>
        <video ref={videoRef} style={{ display: "none" }}></video>
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          className="rounded shadow-md"
        />
        <div className="mt-4 text-lg bg-white px-4 py-2 rounded">
          Detected Gesture: <strong>{gesture}</strong>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignLanguageDetector;
