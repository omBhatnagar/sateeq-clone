const { default: Layout } = require("../components/shared/Layout");

const NotFound = () => {
	return (
		<Layout>
			<div className='text-center h-80 flex items-center justify-center w-11/12 mx-auto font-bold text-sm md:text:xl leading-[48px] mb-4 md:text-left lg:mt-12 xl:mt-24'>
				<h1 className='text-center'>
					404 <span className='font-semibold'> | </span> Page Not Found
				</h1>
			</div>
		</Layout>
	);
};

export default NotFound;
