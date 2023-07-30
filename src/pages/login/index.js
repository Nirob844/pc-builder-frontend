import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { callbackUrl } = router.query;
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  mx-auto my-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>

        <div className="">
          {/* <button
            onClick={() =>
              signIn("google", {
                callbackUrl:
                  callbackUrl || "https://pc-builder-frontend-pi.vercel.app/",
              })
            }
            className=" my-2 w-full btn btn-outline btn-neutral"
          >
            Sign in with google
          </button> */}
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl:
                  callbackUrl || "https://pc-builder-frontend-pi.vercel.app/",
              })
            }
            className=" my-2 w-full btn btn-outline btn-neutral"
          >
            Sign in with github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
