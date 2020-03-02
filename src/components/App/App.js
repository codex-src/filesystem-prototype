import * as Hero from "components/Icons"
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

const IconButton = ({ icon: Icon, ...props }) => (
	<div className="p-2 text-indigo-500 hover:bg-indigo-100 active:bg-indigo-200 rounded-full trans-300" {...props}>
		<Icon className="w-6 h-6" />
	</div>
)

const App = props => {
	const [state, dispatch] = useMethods(reducer, initialState)

	return (
		<Container>
			{/* Header */}
			<div className="mb-12 flex flex-row justify-between items-center">
				<div>
					<p className="font-semibold text-4xl">
						Your notes
					</p>
				</div>
				<div className="-mx-1 flex flex-row">
					<IconButton
						icon={Hero.Minus}
						onClick={dispatch.showMoreItems}
					/>
					<IconButton
						icon={Hero.Plus}
						onClick={dispatch.showLessItems}
					/>
					<IconButton
						icon={Hero.SortDescending}
						// onClick={dispatch.showMoreItems}
					/>
					<IconButton
						icon={Hero.Folder}
						// onClick={dispatch.showMoreItems}
					/>
				</div>
			</div>
			{/* Cards */}
			<div className={`grid grid-cols-${state.itemsShown} gap-6`}>
				{[...new Array(20)].map((_, index) => (
					<div key={index} className="pb-3/4 relative">
						<div className="absolute inset-0 bg-indigo-500 rounded-lg">

						</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default App
