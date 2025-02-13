
import { useState } from "react";
import { SignUpForm } from "@/components/SignUpForm";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-purple-50 to-white">
      {/* Left Column - Information and Features */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your Learning Journey Today
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Join thousands of students and begin your path to success
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm"
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Expert Teachers</h3>
                <p className="text-sm text-gray-600">Learn from industry professionals</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm"
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <Laptop className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Online Learning</h3>
                <p className="text-sm text-gray-600">Study at your own pace</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm"
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Rich Content</h3>
                <p className="text-sm text-gray-600">Access extensive resources</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm"
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Community</h3>
                <p className="text-sm text-gray-600">Connect with peers</p>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              10K+ Students
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              50+ Courses
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              95% Success Rate
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Sign Up Form */}
      <div className="w-full lg:w-1/2 p-4 lg:p-16 flex items-center justify-center bg-gradient-to-br from-purple-50/50 to-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Join us and start your journey</p>
          </div>
          <SignUpForm />
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
