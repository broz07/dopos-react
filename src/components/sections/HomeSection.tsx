const HomeSection = () => {
	return (
		<div
			// className="h-[38rem] scrollama-step select-none bg-white"
			className="relative h-screen w-screen scrollama-step bg-white"
			data-step="home"
		>
			<div className="absolute top-0 w-full h-full bg-white opacity-30" />
			<video
				src="/assets/video.mp4"
				autoPlay
				loop
				muted
				controls={false}
				playsInline
				className="w-full h-full object-cover z-[-1]"
			/>
			<div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-dopos-black">
				<h1 className="text-7xl font-bold text-center uppercase">
					S námi se nespálíte!
				</h1>
				<p className="text-3xl font-bold text-center text-dopos-blue">
					Společnost DOPOS HK s.r.o.
				</p>
			</div>
		</div>
	);
};

export default HomeSection;
