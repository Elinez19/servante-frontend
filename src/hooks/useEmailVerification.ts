import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { VerifyEmail } from "@/services/features/auth/authSlice";
import { toast } from "sonner";
import { extractErrorMessage } from "@/helpers/extractErrorMessage";

type VerificationStatus = "verifying" | "success" | "error" | "missing-token";

interface UseEmailVerificationReturn {
  status: VerificationStatus;
  message: string;
}

export function useEmailVerification(
  token: string
): UseEmailVerificationReturn {
  console.log("useEmailVerification called with token:", token);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [status, setStatus] = useState<VerificationStatus>("verifying");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!token) {
        setStatus("missing-token");
        setMessage("No verification token found in the URL.");
        return;
      }

      try {
        setStatus("verifying");
        const result = await dispatch(VerifyEmail(token)).unwrap();

        setStatus("success");
        setMessage(
          typeof result === "string"
            ? result
            : result?.message || "Your email has been verified successfully!"
        );

        toast.success("Email verified successfully!");

        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } catch (error) {
        setStatus("error");
        const errorMessage = extractErrorMessage(error);
        setMessage(errorMessage);
        toast.error(errorMessage);
      }
    };

    verifyEmailToken();
  }, [token, dispatch, router]);

  return { status, message };
}
