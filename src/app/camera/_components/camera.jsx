"use client";
import React, { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const CameraCapture = () => {
    const videoRef = useRef(null);
    const inputRef = useRef(null);
    const [isCapturing, setIsCapturing] = useState(false);

    const startCapture = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            videoRef.current.srcObject = stream;
            setIsCapturing(true);
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    const stopCapture = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        setIsCapturing(false);
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Do something with the uploaded image, e.target.result contains the image data
                console.log("Uploaded image:", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className=" h-[calc(100%-200px)] bg-accent">
            <button onClick={startCapture}>Start Capture</button>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleUpload}
            />
            <video ref={videoRef} autoPlay playsInline muted />
        </div>
    );
};

export default CameraCapture;
