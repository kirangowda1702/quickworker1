import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    if (name && mobile && password) {

      localStorage.setItem(
        "user",
        JSON.stringify({
          name,
          mobile,
          password
        })
      );

      toast.success("Registration Successful");

      setTimeout(() => {

        window.location.href = "/login";

      }, 1500);

    } else {

      toast.error("Please fill all fields");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center px-6">

      <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-10 rounded-[40px] shadow-2xl w-full max-w-md">

        <h1 className="text-5xl font-extrabold text-white text-center">
          Create Account
        </h1>

        <p className="text-center text-white/80 mt-4">
          Register to continue
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full mt-10 px-6 py-5 rounded-2xl outline-none text-lg"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
          className="w-full mt-5 px-6 py-5 rounded-2xl outline-none text-lg"
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
          onClick={handleRegister}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-5 rounded-2xl mt-8 transition"
        >
          Register
        </button>

        <a href="/login">

          <button className="w-full bg-white/30 hover:bg-white/40 text-white py-4 rounded-2xl font-bold text-lg mt-5 transition border border-white/40">
            Back To Login
          </button>

        </a>

      </div>

    </div>
  );
}