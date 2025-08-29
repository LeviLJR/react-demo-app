import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/main");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!phoneNumber) {
      setError("Phone number is required");
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setError("Invalid phone number");
      return;
    }

    try {
      login(phoneNumber);
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-[50%] mx-auto">
      <h1>Already have an Account?</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label>
          <PhoneInput
            placeholder="Enter phone number"
            international
            value={phoneNumber || undefined}
            onChange={setPhoneNumber}
            className="p-3 border-gray-300 border-1 rounded-lg focus-within:border-blue-500"
          />
          {error && (
            <div className="text-red-600 text-sm pt-2" role="alert">
              {error}
            </div>
          )}
        </label>
        <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-zinc-100 px-6 py-3 rounded-xl w-full"
          >
            Login
          </button>
      </form>
    </div>
  );
}
