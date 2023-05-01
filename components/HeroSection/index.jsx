import { NavLink } from '@/styles/globalStyles';
import TypingEffect from "../TypingEffect";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="font-poppins" style={{paddingTop: "63px"}}>
      <main>
        <div className="banner-bg bg-mask mask_bg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-full ">
            <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="rounded-lg left-div">
                  <h1 className="p-6 pb-0 pl-3 text-4xl font-bold text-red-600" style={{fontSize: "170%"}} >Mohammed Khalid</h1>
                  <TypingEffect className='p-2 ml-4 mr-2 font-medium' text="Studying Bachelor's in Electronics and Communication Engineering.
                      Mostly Interested in Software and Website Development related
                      oppurtunities to utilize technical and management skill for the
                      growth of organization as well as to enhance knowledge."  />
                  <div className='p-2 mr-2'>
                    <h1 className='font-semibold'>Connect with Me:</h1>
                    <ul className='p-3 font-normal text-md'>
                      <li>GitHub <i className="fa-brands fa-github"></i> : <NavLink className='font-medium ml-3' href="https://github.com/thekhalidsha" target='_blank'>GitHub/TheKhalidSha</NavLink></li>
                      <li>Instagram <i className="fa-brands fa-instagram"></i> : <NavLink className='font-medium ml-3' href="https://instagram.com/thekhalidsha" target='_blank'>@TheKhalidSha</NavLink></li>
                      <li>LinkedIn <i className="fa-brands fa-linkedin-in"></i> : <NavLink className='font-medium ml-3' href="https://www.linkedin.com/in/thekhalidsha/" target='_blank'>LinkedIn/TheKhalidSha</NavLink></li>
                    </ul>
                  </div>
                  <div className='p-2 mr-2'>
                    <h1 className='font-semibold'>Contact Me:</h1>
                    <ul className='p-3 font-normal text-md'>
                      <li>Email <i className="fa-solid fa-envelope"></i> : <NavLink className='font-medium ml-3' href="mailto:thekhalidsha@gmail.com" target='_blank'>TheKhalidSha@gmail.com</NavLink></li>
                      <li>Phone <i className="fa-solid fa-phone-flip"></i> : <NavLink className='font-medium ml-3' href="tel:+917994748874" target='_blank'>+91 799 474 8874</NavLink></li>
                      <li>WhatsApp <i className="fa-brands fa-whatsapp"></i> : <NavLink className='font-medium ml-3' href="https://wa.me/917994748874" target='_blank'>WhastApp Me</NavLink></li>
                    </ul>
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="banner-container banner-right">
              <div className="flex justify-center align-middle">
                <div className="rounded-lg right-div p-2">
                  <a href="#">
                    <img  className="rounded-lg" src="https://avatars.githubusercontent.com/u/72810866?v=4" alt="thekhalidsha-github_avatar" />
                  </a>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="banner-bg bg-mask mask_bg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-full ">
          <div className="banner-container banner-right">
              <div className="flex justify-center align-middle">
                <div className="rounded-lg right-div p-2">
                  <div className="pdf-viewer flex justify-center">
                    {/* <iframe className="h-screen w-full overflow-hidden" src="../../docs/thekhalidsha_resume.pdf#view=FitH" ></iframe> */}
                    <iframe className="h-screen w-full overflow-hidden" src="https://drive.google.com/file/d/1mtrSuA8EthGab0a6g_wVwaPPjVzrRkC_/preview" width="640" height="480" allow="autoplay"></iframe>

                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div id="resume" className="rounded-lg left-div">
                  <h1 className="p-6 pb-0 pt-0 pl-3 text-4xl font-bold text-red-600" style={{fontSize: "110%"}} >My Resume</h1>
                    <p>It&apos;s Just my Resume which also includes informations about my Studies and Achievements. </p>
                    <p>For an Overview,</p>
                    <div className='ml-3 content-evenly'>
                      <p className='mb-1'>&#x2022; I&apos;m still pursuing on Electronics Engineering at College of Engineering Muttathara.</p>
                      <p className='mb-1'>&#x2022; I&apos;ve been Freelancing as a Web Developer from the last 4 years.(2019)</p>
                      <p className='mb-1'>&#x2022; I&apos;ve done Projects based on both Electronics and in Website Development Field.</p>
                      <p className='mb-1'>&#x2022; IoT Based Hydroponics & Multi Access Admin Web Panel are 2 of those Projects.</p>
                      <p className='mb-1'>&#x2022; Developed a Fest Website for CE Muttathara single-handedly.</p>
                      <p className='mb-1'>Check out My GitHub for my recent Projects!!</p>
                      <div className='flex justify-center'>
                        <NavLink href="../../docs/thekhalidsha_resume.pdf" target='_blank'>
                          <button className="bg-red-500 text-white rounded-md py-2 px-4 pdf-button">Download Resume ( <i className="fa-solid fa-file-pdf"></i>)</button>
                        </NavLink>
                      </div>
                      
                    </div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </main>
    </div>
  );
}
