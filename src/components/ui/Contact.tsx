'use client';

interface Props {
	fullname: string;
	role: string;
	tel?: string;
	email: string;
}

const Contact: React.FC<Props> = ({ fullname, role, tel, email }) => {
	const formatedTel = tel ? tel.replace(/\s/g, '') : null;

	return (
		<div className="w-1/2 py-6 pr-6 flex flex-col text-lg">
			<h3 className="text-3xl font-semibold mb-0 leading-none uppercase">
				{fullname}
			</h3>
			<span className="font-semibold mb-2 leading-normal text-dopos-blue">
				{role}
			</span>
			{tel && (
				<span>
					<a href={`tel:${formatedTel}`} className="text-gray-300">
						{tel}
					</a>
				</span>
			)}
			<span>
				<a href={`mailto:${email}`} className="text-gray-300">
					{email}
				</a>
			</span>
		</div>
	);
};

export default Contact;
