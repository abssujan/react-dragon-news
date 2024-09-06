import { FaGoogle, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 ">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>
      {/* find links */}
      <div className="p-4 mb-4">
        <h2 className="text-2xl mb-4">Find us on</h2>
        <a className="p-4 flex items-center border rounded-t-lg" href="">
            <FaFacebook className="mr-4"></FaFacebook>
            Facebook
        </a>
        <a className="p-4 flex items-center border-x " href="">
            <FaTwitter className="mr-4"></FaTwitter>
            Twitter
        </a>
        <a className="p-4 flex items-center border rounded-b-lg " href="">
           <FaInstagram className="mr-4"></FaInstagram>
           Instagram
        </a>
      </div>
      {/* q-zone */}
      <div className="p-4 mb-4">
        <h2 className="text-2xl mb-4">Q-zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
