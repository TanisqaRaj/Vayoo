import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bus } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "user") {
      navigate("/dashboard");
    } else if (role === "admin") {
      navigate("/addbusauthandcyber");
    } else if (role === "cyber") {
      navigate("/registeruser");
    } else if (role === "busAuthority") {
      navigate("/editroutes");
    } else {
      navigate("/"); // fallback
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1224]">
      <div className="relative w-full max-w-md">
        {/* Radiant Glow Background */}
        <div className="absolute -inset-1 rounded-xl shadow-2xl shadow-purple-600 blur-lg opacity-60 z-0"></div>

        {/* Login Card */}
        <div className="relative bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-100 z-10">
          {/* Header */}
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-2xl text-black font-semibold">Sign in</h2>
          </div>

          {/*Signup text */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-black hover:underline"
              >
                SignUp
              </a>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2.5 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password (min. 8 character)"
                className="w-full px-4 py-2.5 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Roles */}
            <div>
              <label htmlFor="roles" className="block text-sm font-medium mb-1">
                Roles
              </label>
              <select
                id="roles"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2.5 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="cyber">Cyber</option>
                <option value="busAuthority">Bus Authority</option>
              </select>
            </div>

            {/* Sign in button */}
            <motion.button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-black text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Bus Icon */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <Bus size={24} color="yellow" />{" "}
              </motion.div>

              <span>Sign in</span>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-1.5 text-sm text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google Sign-in */}
          <button
            className="w-full bg-gray-100 text-black py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-gray-200"
            // onClick={handleLoginWithGoogle}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
