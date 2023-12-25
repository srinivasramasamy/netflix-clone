function LoginForm() {
  return (
    <div>
      <form className="absolute flex flex-col gap-4 w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-[.70] p-4 text-white">
        <h1 className="mx-10 mt-10 h-10 text-3xl">Sign In</h1>
        <input
          className="mx-10 h-12 bg-[#333] px-5 rounded"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="mx-10 h-12 bg-[#333] px-5 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-700 mx-10 h-12 mt-6 rounded">Sign In</button>
        <div className="mx-10 flex items-center justify-between text-xs">
          <div className="flex items-center">
            <input
              id="remember-me"
              className="accent-[#4c4c4c]"
              type="checkbox"
            />
            <label htmlFor="remember-me">
              <span className="ml-1 text-[#4c4c4c]">Remember me</span>
            </label>
          </div>
          <a className="text-[#4c4c4c]" href="#">
            Need help?
          </a>
        </div>
        <div className=" my-20 mx-10 text-[#656565]">
          <div className="mt-2">
            New to Netflix? <span className="text-white">Sign up now</span>.
          </div>
          <div className="text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-600">Learn more.</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
