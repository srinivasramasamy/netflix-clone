function Footer() {
  return (
    <div className="absolute w-full  bg-black bg-opacity-[.75] h-[45%] -bottom-1/2 text-[#656565] text-xs">
      <div className="flex flex-col mx-32 my-5 gap-y-8">
        <div className="text-sm">Questions? Call 1-844-505-2993</div>
        <div className="flex flex-wrap  gap-y-4">
          <a className="basis-1/4">FAQ</a>
          <a className="basis-1/4">Help Center</a>
          <a className="basis-1/4">Netflix Shop</a>
          <a className="basis-1/4">Terms of Use</a>
          <a className="basis-1/4">Privacy</a>
          <a className="basis-1/4">Cookie Preferences</a>
          <a className="basis-1/4">Corporate Information</a>
          <a className="basis-1/4">
            Do Not Sell or Share My Personal <br />
            Information
          </a>
          <a className="basis-1/4">Ad Choices</a>
        </div>
        <div>English</div>
      </div>
    </div>
  );
}

export default Footer;
