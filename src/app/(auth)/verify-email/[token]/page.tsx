"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { useEmailVerification } from "@/hooks/useEmailVerification";

interface VerifyEmailPageProps {
  params: {
    token: string;
  };
}

export default function VerifyEmailPage({ params }: VerifyEmailPageProps) {
  console.log("VerifyEmailPage rendered with params:", params);
  const { status, message } = useEmailVerification(params.token);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          {status === "verifying" && (
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-black animate-spin" />
            </div>
          )}
          {status === "success" && (
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <CheckCircle2
                className="w-10 h-10 text-white"
                strokeWidth={2.5}
              />
            </div>
          )}
          {(status === "error" || status === "missing-token") && (
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <XCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-black mb-3">
          {status === "verifying" && "Verifying Your Email"}
          {status === "success" && "Email Verified!"}
          {status === "error" && "Verification Failed"}
          {status === "missing-token" && "Invalid Link"}
        </h1>

        {/* Message */}
        <p className="text-center text-gray-600 mb-6">
          {status === "verifying" &&
            "Please wait while we verify your email address..."}
          {status === "success" && message}
          {status === "error" && message}
          {status === "missing-token" && message}
        </p>

        {/* Actions */}
        <div className="space-y-3">
          {status === "success" && (
            <>
              <Button
                asChild
                className="w-full bg-black hover:bg-gray-800 text-white font-medium"
              >
                <Link href="/login">Continue to Login</Link>
              </Button>
              <p className="text-sm text-center text-gray-500">
                Redirecting automatically in 3 seconds...
              </p>
            </>
          )}

          {(status === "error" || status === "missing-token") && (
            <>
              <Button
                asChild
                className="w-full bg-black hover:bg-gray-800 text-white font-medium"
              >
                <Link href="/register">Back to Register</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50"
              >
                <Link href="/">Go to Homepage</Link>
              </Button>
            </>
          )}

          {status === "verifying" && (
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Verifying your email address...</span>
            </div>
          )}
        </div>

        {/* Additional Help */}
        {(status === "error" || status === "missing-token") && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-center text-gray-600 mb-3">Need help?</p>
            <p className="text-xs text-center text-gray-500">
              If you continue to experience issues, please contact our support
              team or try registering again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
