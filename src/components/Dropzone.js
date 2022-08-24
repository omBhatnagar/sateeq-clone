import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
function Dropzone({ open, setPitch }) {
	const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	useEffect(() => {
		if (acceptedFiles) setPitch(acceptedFiles);
	}, [acceptedFiles, setPitch]);

	return (
		<div className='border-4 border-[#78aff5] border-dashed rounded-xl bg-[#f0f8ff] flex justify-center items-center px-6 py-10 w-11/12 mx-auto'>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p>Drag and drop or click to browse</p>
			</div>
			<aside>
				<ul>{files}</ul>
			</aside>
		</div>
	);
}
export default Dropzone;
