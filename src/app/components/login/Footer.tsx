function Footer() {
  return (
    <div className="absolute w-full  bg-black bg-opacity-[.75] h-[45%] -bottom-1/2 text-[#656565] text-xs">
      <div className="flex flex-col mx-32 my-5 gap-y-8">
        <div className="text-base">Questions? Call 1-844-505-2993</div>
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
        <div className="flex border-solid border-[1px] gap-1 border-[#272727] p-3 w-max">
          <img
            className="h-5 inline"
            src="data:image/png;base64,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"
          ></img>
          <select className="focus:outline-none bg-black">
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Footer;
