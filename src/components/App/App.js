import React from "react"

// ;(() => {
// 	document.body.classList.add("debug-css")
// })()

const Container = props => (
	<div className="mx-6 my-32 flex flex-row justify-center h-full">
		<div className="w-full max-w-5xl">
			{props.children}
		</div>
	</div>
)

const App = props => (
	<Container>
		<div className="grid grid-cols-3 gap-6">
			{[...new Array(20)].map((_, index) => (
				<div key={index} className="pb-3/4 relative">
					<div className="absolute inset-0 bg-gray-100 rounded-lg">

					</div>
				</div>
			))}
		</div>
	</Container>
)

export default App
