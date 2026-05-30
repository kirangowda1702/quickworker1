import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {

      toast.error("No user found");
      return;

    }

    const user = JSON.parse(savedUser);

    if (
      mobile === user.mobile &&
      password === user.password
    ) {

      toast.success("Login Successful");

      setTimeout(() => {

        window.location.href = "/";

      }, 1500);

    } else {

      toast.error(
        "Invalid Mobile Number or Password"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-orange-300 to-pink-300 flex items-center justify-center px-6 overflow-hidden">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        <div className="hidden md:flex justify-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            className="w-[350px] animate-bounce"
          />

        </div>

        <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-[40px] p-10 shadow-2xl">

          <h1 className="text-5xl font-extrabold text-white text-center">
            Welcome Back
          </h1>

          <p className="text-center text-white/80 mt-4 text-lg">
            Login to continue QuickWorker
          </p>

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
            className="w-full mt-10 px-6 py-5 rounded-2xl outline-none text-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full mt-5 px-6 py-5 rounded-2xl outline-none text-lg"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-5 rounded-2xl font-bold text-lg mt-8 transition"
          >
            Login
          </button>

          <a href="/register">

            <button className="w-full bg-white/30 hover:bg-white/40 text-white py-4 rounded-2xl font-bold text-lg mt-5 transition border border-white/40">
              Create Account
            </button>

          </a>

          <a href="/">

            <button className="w-full bg-black/20 hover:bg-black/30 text-white py-4 rounded-2xl font-bold text-lg mt-5 transition">
              Back To Home
            </button>

          </a>

        </div>

      </div>

    </div>
  );
}