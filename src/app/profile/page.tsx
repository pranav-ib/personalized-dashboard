"use client";

import {useState, useEffect} from "react";

export default function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedEmail = localStorage.getItem("email");

        if (savedName) {
            setName(savedName);
        }
        if (savedEmail) {
            setEmail(savedEmail);
        }

        if(savedName || savedEmail) {
            setSaved(true);
        }

    }, []);

    const saveProfile = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        setSaved(true);
    };

    const editProfile = () => {
        setSaved(false);
    }

    return (
        <div className="max-w-lg p-6">
            <h1 className="text-2xl font-bold mb-6">
                Profile
            </h1>


        {saved ? (
           <div className="flex flex-col gap-3">

            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>

            <button
                onClick={editProfile}
                className="bg-gray-200 px-4 py-2 rounded-full"
            >
                Edit
            </button>

            </div>
        ) : (
           <div className="flex flex-col gap-4">
                <input type="text" placeholder="Name" value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="border p-3 rounded-full" />

                <input type="email" placeholder="Email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 rounded-full" />

                <button onClick={saveProfile} className="bg-purple-600 text-white px-4 py-2 rounded-full">Save</button>
            </div>
        )}

        </div>
    );
}