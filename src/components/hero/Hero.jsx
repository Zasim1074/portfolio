import React, { Profiler } from "react";
import profileImage from "../../assets/profile_img.png";
import "./Hero.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profileImage} alt="profile-image" />
      <h1>
        <span>I'm Jaseem Quraishi,</span> Frontend Developer (React Web ·
        Flutter Mobile) based in India.
      </h1>
      <p>
        I build responsive web applications using React and modern JavaScript,
        and cross-platform mobile apps using Flutter.
      </p>
      <div className="hero-action">
        <AnchorLink
          className="anchor-link"
          href={"#contact"}
          offset={50}
          onClick={() => setMenu("contact")}
        >
          {" "}
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <div
          className="hero-resume"
          onClick={() => {
            window.open(
              "https://doc-04-28-docstext.googleusercontent.com/export/pgp845arkannejvl2rb1ujsftg/10a7lhu4q8tq6h38oofd3i361c/1768111005000/109141071420314914076/109141071420314914076/1lCY02NBb2anI4SQJ8gM9mQxr7FR4m_yyydoceVCj5Ko?format=pdf&id=1lCY02NBb2anI4SQJ8gM9mQxr7FR4m_yyydoceVCj5Ko&token=AC4w5VjY13YR6RxiTCRkcMzOKgEMY_XcYA:1768110805251&ouid=109141071420314914076&includes_info_params=true&cros_files=false&tab=t.0&dat=AGz9j0qd0qH8pj-jEOJ5Nkt3dgCcGnealQ_uVYr5IRh61rsR_m7rIWK9t8_Jyo379i0kEajTixLaVcj9sGCRpVQJW6PZ361FfproQc1nlE3-jq1bFKhAArWq32J_ve4TZQFk_MrcQRITizEd0CD0zl99aIYuFWLABT65Ja43r3bxrONgzCd-zSUEqgxJzbEmBQ9x1NO_WvE5gkot9rnQpbRUbPPXmXC8YSmiOiTowqCikd-VuL6bDMSauAscGl-7cL1l79h3g-Dawg1j9MDhcVJLkWVJ3fZMYSGNGPC2GL3PAbUm1_I6AiYKLIUBWAXS4M7OwSx8xtuWrqTf6s4dPg2_ZOjo5i4hZlSdVdQ86fzKB8Q_eKxzJgeW9vlPP3ti8xcbYoUc_c_qGJwRx3YurxzMfV5FL_WPlN-_zPwfD4DZAgT2vUbLJtSCRFx4LqUjnZ2eBL7Gv1dR73MsJT9gEl4OVjDuFsdp4a-zxdhTcQIv3HTJtp_HwO47mITEdri9A94Z2quLmly2lqSX9mRsv-JsiH5beZVx5YJ8WXNX8zf0VV9feZ6oWZhpF1KfmsXUywBHd_TKoGtDJHAotBkHMen1AhesgGbsXNkH20kzgHA6DtQJz3MwK6qUGMsYtzw_4CEXmn8kCQAn1tT0r76zPMaoU7ZHk31vYyA2ZfkR9yXGb9UFycyMaoEuiS0VVfqES1k1g0MDNQXsDeBYcywe9wNNkWERcSedx7BdKiBxnKlIB5r8rRV4_qG3u2SznsnqDVLqBLwC-DrclSh_a9-0jGTWRhzdBO3oy3pyJxhlVOCS-T2kPXVWuu1DmljjMQacnusil2xX8sXAf7hhISTQXYgJqVfOypyLguRchjqz-puFIvqhH2O47BlW70A2Q03ekYFF0tjPg3FCTJV05RSJI4lkPq8FjOzDHpq3A0-XZ_9h2c--lj_fvcG9omHTS7cNB59mT4TqgP5ztYaT",
              "_blank"
            );
          }}
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
