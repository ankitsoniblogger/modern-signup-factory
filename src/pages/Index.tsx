
import { useState } from "react";
import { SignUpForm } from "@/components/SignUpForm";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us and start your journey</p>
        </div>
        <SignUpForm />
      </motion.div>
    </div>
  );
};

export default Index;
