import React from "react"
import useMethods from "use-methods"

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

/*

New folder (folder)
Upload (upload)
Sort ascending / sort descending (sort-ascending, sort-descending)
Show more documents / show less documents (plus-circle, plus-minus)

*/

const initialState = {
	itemsShown: 4,
}

const reducer = state => ({
	showLessItems() {
		if (state.itemsShown === 1) {
			// No-op
			return
		}
		state.itemsShown--
	},
	showMoreItems() {
		if (state.itemsShown === 4) {
			// No-op
			return
		}
		state.itemsShown++
	},
})

const App = props => {
	const [state, dispatch] = useMethods(reducer, initialState)

	return (
		<Container>
			<div className="flex flex-row">
				<div>
					{/* ... */}
				</div>
				<div>
					{/* ... */}
				</div>
			</div>
			<div className={`grid grid-cols-${state.itemsShown} gap-6`}>
				{[...new Array(20)].map((_, index) => (
					<div key={index} className="pb-3/4 relative">
						<div className="absolute inset-0 bg-gray-200 rounded-lg">

						</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default App
