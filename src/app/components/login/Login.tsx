import Header from "../Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/8b07ca45-0d02-4689-ad4d-79cf71fb0314/US-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <div>
        <form className="absolute flex flex-col gap-4 w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-[.70] p-4 text-white">
          <h1 className="mx-10 h-10 text-3xl">Sign In</h1>
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
          <button className="bg-red-700 mx-10 h-12 mt-6 rounded">
            Sign In
          </button>
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
        </form>
      </div>
    </div>
  );
}

export default Login;
