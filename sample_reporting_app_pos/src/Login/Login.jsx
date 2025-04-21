// src/Login.jsx
import { useState } from "react";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Username || !password) {
      alert("Please fill in both fields");
      return;
    }
    console.log({ Username, password });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[url('./assets/loginbackground.jpg')] bg-cover bg-center">
      <form
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">POS360 Reports</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-sm mt-1">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => setShowPass(!showPass)}
              />
              Show Password
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
