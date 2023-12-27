function Footer() {
  return (
    <div className="absolute w-full  bg-black bg-opacity-[.70] h-1/3 -bottom-1/2 text-[#656565] text-xs">
      <div className="flex flex-wrap mx-32 gap-y-3">
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
    </div>
  );
}

export default Footer;
