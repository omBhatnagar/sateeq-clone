import { NavLink } from "react-router-dom";
import logo from "../../images/logo-dark.png";

const Footer = () => {
	return (
		<div className='bg-[rgba(200,210,255,.15)] px-10 py-6'>
			<div className='flex flex-col md:flex-row'>
				<div className='w-5/6 md:w-1/3 lg:w-1/2 mx-auto'>
					<div className='w-5/12'>
						<img src={logo} alt='logo' className=' -ml-3' />
					</div>
					<div className='text-footer-p text-sm leading-7'>
						<p>Auctic Solutions Pvt Ltd © 2021 </p>
						<p>All Rights Reserved </p>
					</div>
				</div>
				<div className='grid grid-cols-2 md:grid-cols-4 mt-6 w-5/6 mx-auto gap-5'>
					<div className='md:w-1/3'>
						<h2 className='text-media-grey text-lg font-semibold'>Investors</h2>
						<NavLink to='/login'>
							<p className='text-footer-p text-sm leading-7 mt-4'>Login</p>
						</NavLink>
						<NavLink to='/invest'>
							<p className='text-footer-p text-sm leading-7 mt-4'>Invest</p>
						</NavLink>
					</div>
					<div className='md:w-1/3'>
						<h2 className='text-media-grey text-lg font-semibold'>StartUp</h2>
						<NavLink to='/login'>
							<p className='text-footer-p text-sm leading-7 mt-4'>Login</p>
						</NavLink>
						<NavLink to='/raise'>
							<p className='text-footer-p text-sm leading-7 mt-4'>Raise</p>
						</NavLink>
					</div>
					<div>
						<h2 className='text-media-grey text-lg font-semibold'>
							Fine Print
						</h2>

						<p className='text-footer-p text-sm leading-7 mt-4'>
							Privacy Policy
						</p>

						<p className='text-footer-p text-sm leading-7 mt-4'>
							<p>Terms & </p>
							<p>Conditions</p>
						</p>
					</div>
					<div>
						<h2 className='text-media-grey text-lg font-semibold'>
							Get In Touch
						</h2>
						<p className='text-footer-p text-sm leading-7 mt-4'>
							<p>Questions or</p>
							<p>Feedback</p>
						</p>

						<p className='text-footer-p text-sm leading-7 mt-4'>
							<p>We'd love to hear</p>
							<p>from you</p>
						</p>
						<div className='flex justify-around items-center mt-3'>
							<i class='fa-brands fa-linkedin'></i>
							<i class='fa-brands fa-facebook'></i>
							<i class='fa-brands fa-instagram'></i>
							<i class='fa-solid fa-envelope'></i>
						</div>
					</div>
				</div>
			</div>
			<div className='w-5/6 mx-auto md:w-full'>
				<p className='text-[#787f9d] text-sm my-10 border-t border-[rgba(0,0,0,.12)] pt-10'>
					<strong className='text-footer-p'>
						Auctic Solutions Pvt Ltd (Sateeq)
					</strong>{" "}
					is neither a stock exchange nor does it intend to get recognized as a
					stock exchange under the Securities Contracts Regulation Act, 1956.
					Auctic Solutions Pvt Ltd is not authorized by the capital markets
					regulator to solicit investments. The securities traded on these
					platforms are not traded on any regulated exchange. Sateeq also
					provides that it does not facilitate any online or offline buying,
					selling, or trading of securities.{" "}
				</p>
				<p className='text-[#787f9d] text-sm mb-10'>
					{" "}
					This Site will be updated on a regular basis.{" "}
				</p>
				<p className='text-media-grey font-bolder text-sm leading-7'>
					<strong>
						{" "}
						Auctic Solutions Private Limited (CIN-: U74999DL2021PTC386817){" "}
					</strong>
				</p>
				<p className='text-media-grey font-bolder text-sm leading-7'>
					<strong>
						Registered Address -: A-6 New Govind Pura, Delhi - 110051
					</strong>
				</p>
				<p className='text-media-grey font-bolder text-sm leading-7'>
					<strong>Contact: +91 9319533382 (Support@Sateeq.com)</strong>
				</p>
			</div>
		</div>
	);
};

export default Footer;
