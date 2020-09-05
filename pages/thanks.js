import { useEffect } from "react";
import { useRouter } from "next/router";

export const Thanks = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen h-full justify-center mx-auto max-w-screen-lg px-5 lg:px-0">
      <h1 className="text-4xl sm:text-6xl font-black">Thank you!</h1>
      <p className="text-4xl sm:text-6xl font-black">
        We'll be in touch soon. 😊
      </p>
    </div>
  );
};

export default Thanks;