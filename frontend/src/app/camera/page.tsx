"use client"
import React, { useState } from "react";

const ImageUploader = () => {
    const [image, setImage] = useState<any>(null);
    const [editedImageUrl, setEditedImageUrl] = useState("");

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await fetch(`${process.env.SERVER_IP}/image`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload image");
            }

            const data = await response.json();
            setEditedImageUrl(data.imageUrl);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload Image</button>
            {editedImageUrl && (
                <div>
                    <h2>Edited Image:</h2>
                    <img src={editedImageUrl} alt="Edited" />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
