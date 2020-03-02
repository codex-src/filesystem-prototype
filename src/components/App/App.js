import React from "react"

;(() => {
	document.body.classList.add("debug-css")
})()

const Container = props => (
	<div className="mx-6 my-32 flex flex-row justify-center h-full">
		<div className="w-full max-w-5xl">
			{props.children}
		</div>
	</div>
)

const App = props => (
	<Container>
		Hello, world!
	</Container>
)

export default App
