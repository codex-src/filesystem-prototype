import * as Hero from "components/Icons"
import Container from "components/Container"
import React from "react"
import useMethods from "use-methods"

// // TODO: Add event listener
// ;(() => {
// 	document.body.classList.add("debug-css")
// })()

const ITEMS_SHOWN_DEFAULT = 3

const ITEMS_SHOWN_MIN = 2
const ITEMS_SHOWN_MAX = 4

const initialState = {
	sortAscending: false,
	itemsShown: ITEMS_SHOWN_DEFAULT,
}

const reducer = state => ({
	toggleSortDirection() {
		state.sortAscending = !state.sortAscending
	},
	showLessItems() {
		if (state.itemsShown === ITEMS_SHOWN_MIN) {
			// No-op
			return
		}
		state.itemsShown--
	},
	showMoreItems() {
		if (state.itemsShown === ITEMS_SHOWN_MAX) {
			// No-op
			return
		}
		state.itemsShown++
	},
})

const IconButton = ({ className, icon: Icon, ...props }) => (
	<button className={`p-2 text-indigo-500 disabled:text-indigo-300 focus:bg-indigo-100 hover:bg-indigo-100 active:bg-indigo-200 rounded-full focus:outline-none trans-300 ${className || ""}`.trim()} {...props}>
		<Icon className="w-6 h-6" />
	</button>
)

const App = props => {
	const [state, dispatch] = useMethods(reducer, initialState)

	return (
		<Container>
			{/* Header */}
			<div className="mb-12 flex flex-row justify-between items-center">
				{/* TODO */}
				<div />
				<div className="-mx-1 flex flex-row">
					<IconButton
						className="hidden lg:block"
						icon={Hero.Minus}
						disabled={state.itemsShown === ITEMS_SHOWN_MIN}
						onClick={dispatch.showLessItems}
					/>
					<IconButton
						className="hidden lg:block"
						icon={Hero.Plus}
						disabled={state.itemsShown === ITEMS_SHOWN_MAX}
						onClick={dispatch.showMoreItems}
					/>
					<IconButton
						icon={!state.sortAscending ? Hero.SortDescending : Hero.SortAscending}
						onClick={dispatch.toggleSortDirection}
					/>
					<IconButton
						icon={Hero.Folder}
						// TODO
					/>
				</div>
			</div>
			{/* Cards */}
			<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${state.itemsShown} gap-6`}>
				{[...new Array(60)].map((_, index) => (
					<button key={index} className="pb-3/4 relative bg-indigo-100 hover:bg-indigo-200 rounded-lg focus:outline-none focus:shadow-outline trans-150">
						<div className="absolute inset-0">

						</div>
					</button>
				))}
			</div>
		</Container>
	)
}

export default App
