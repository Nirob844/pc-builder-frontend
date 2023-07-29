import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Head>
        <title>Next Signup</title>
      </Head>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  mx-auto my-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to create your account
          </p>
        </div>
        <div>
          <div>
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
            />
            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="name"
                  id="name"
                  placeholder="leroy jenkins"
                  className="w-full px-3 py-2 border rounded-md "
                  {...register("name", { required: true })}
                />
                {errors.name && <p>Name is required</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md "
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Email is required</p>}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline "
                  ></a>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md  "
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required</p>}
              </div>
            </div>
            <div className="">
              <div>
                <button type="submit" className="my-2 w-full btn btn-neutral">
                  Sign up
                </button>
              </div>
              <button className=" my-2 w-full btn btn-outline btn-neutral">
                Sign in with google
              </button>

              <p className="px-6 text-sm text-center ">
                have an account?.
                <Link href="/login" className="text-violet-500">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
