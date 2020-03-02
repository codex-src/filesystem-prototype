import React from "react"

const Container = props => (
	<div className="my-32 flex flex-row justify-center h-full">
		{/* NOTE: Use px-6 for responsiveness */}
		<div className="px-6 w-full max-w-5xl">
			{props.children}
		</div>
	</div>
)

export default Container
