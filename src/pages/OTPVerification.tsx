
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Timer, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      toast.success("OTP verified successfully!");
      // Navigate to reset password page or handle verification
      console.log("OTP:", otp);
    } else {
      toast.error("Please enter a valid OTP");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link
          to="/forgot-password"
          className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-purple-100 rounded-xl mb-4">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Enter Verification Code
          </h1>
          <p className="text-gray-600">
            We've sent a verification code to your email address
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-purple-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <InputOTP
                value={otp}
                onChange={(value) => setOtp(value)}
                maxLength={6}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-2 flex justify-center">
                    {slots.map((slot, index) => (
                      <InputOTPSlot
                        key={index}
                        {...slot}
                        index={index}
                        className="h-12 w-12 text-lg"
                      />
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Timer className="w-4 h-4" />
              <span>Code expires in</span>
              <span className="font-medium text-purple-600">04:59</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Button
                type="submit"
                className="w-full h-12 bg-purple-600 hover:bg-purple-700 transition-all duration-200"
              >
                Verify Code
              </Button>
            </motion.div>

            <div className="text-center text-sm text-gray-600">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={() => toast.success("New code sent!")}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default OTPVerification;
