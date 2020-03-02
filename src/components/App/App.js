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

const ItemAdd = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4V9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8946 16.2652 11 16 11H11V16C11 16.2652 10.8946 16.5196 10.7071 16.7071C10.5196 16.8946 10.2652 17 10 17C9.73478 17 9.48043 16.8946 9.29289 16.7071C9.10536 16.5196 9 16.2652 9 16V11H4C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H9V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3V3Z" />
	</svg>
)
const ItemSub = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
		<path d="M16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H4C3.73478 9 3.48043 9.10536 3.29289 9.29289C3.10536 9.48043 3 9.73478 3 10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11H16C16.2652 11 16.5196 10.8946 16.7071 10.7071C16.8946 10.5196 17 10.2652 17 10C17 9.73478 16.8946 9.48043 16.7071 9.29289Z" />
	</svg>
)
const SortAsc = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
		<path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
	</svg>
)
const SortDsc = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
		<path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
	</svg>
)

const Button = props => (
	<div className="-mx-1 p-2 text-indigo-500 hover:bg-indigo-100 rounded-full trans-300" {...props}>
		{props.children}
	</div>
)

const App = props => {
	const [state, dispatch] = useMethods(reducer, initialState)

	return (
		<Container>
			{/* Header */}
			<div className="mb-12 flex flex-row justify-between items-center">
				<div>
					<p className="font-semibold text-3xl">
						Your notes
					</p>
				</div>
				<div className="flex flex-row">
					<Button onClick={dispatch.showLessItems}>
						<ItemSub className="w-6 h-6" />
					</Button>
					<Button onClick={dispatch.showMoreItems}>
						<ItemAdd className="w-6 h-6" />
					</Button>
					<Button /* onClick={dispatch.showMoreItems} */>
						<SortDsc className="w-6 h-6" />
					</Button>
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
