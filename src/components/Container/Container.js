import React from "react"

const Container = props => (
	<div className={`py-32 flex flex-row justify-center h-full ${props.className}`.trim()}>
		<div className="px-6 w-full max-w-5xl">
			{props.children}
		</div>
	</div>
)

export default Container
