import * as Hero from "components/Icons"
import Container from "components/Container"
import React from "react"
import useMethods from "use-methods"

// ;(() => {
// 	// TODO: Add event listener
// 	document.body.classList.add("debug-css")
// })()

const ITEMS_SHOWN_DEFAULT = 4

const ITEMS_SHOWN_MIN = 3
const ITEMS_SHOWN_MAX = 7

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
	<button className={`p-2 text-blue-500 disabled:text-gray-500 disabled:bg-transparent focus:bg-blue-100 hover:bg-blue-100 active:bg-blue-200 rounded-full focus:outline-none trans-300 ${className || ""}`.trim()} {...props}>
		<Icon className="p-px w-6 h-6" />
	</button>
)

const App = props => {
	const [state, dispatch] = useMethods(reducer, initialState)

	return (
		<Container className="bg-gray-100">
			{/* Header */}
			<div className="flex flex-row justify-between items-center">
				<p className="flex flex-row items-center font-semibold text-lg tracking-px leading-none text-gray-800">
					<a className="-mx-2 px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-full trans-150">
						Home
					</a>
					<Hero.CheveronRight className="w-6 h-6 text-gray-500" />
					<a className="-mx-2 px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-full trans-150">
						Directory
					</a>
					<Hero.CheveronRight className="w-6 h-6 text-gray-500" />
					<a className="-mx-2 px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-full trans-150">
						Subdirectory
					</a>
				</p>
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
					{/* <IconButton */}
					{/* 	icon={Hero.Folder} */}
					{/* 	// TODO */}
					{/* /> */}
					{/* <div className="w-4 hidden lg:block" /> */}
					{/* <IconButton */}
					{/* 	className="hidden lg:block" */}
					{/* 	icon={Hero.Upload} */}
					{/* 	// TODO */}
					{/* /> */}
				</div>
			</div>

			<div className="h-6" />
			<div className="grid grid-cols-6 gap-3">
				{[...new Array(3)].map((_, index) => (
					<div className="px-4 py-3 flex flex-row items-center bg-gray-50 rounded-lg shadow-hero">
						<Hero.Folder className="mr-3 w-6 h-6 text-blue-500" />
						<p className="font-semibold tracking-px leading-none text-gray-800">
							Folder
						</p>
					</div>
				))}
			</div>

			{/* Cards */}
			<div className="h-6" />
			<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${state.itemsShown} gap-6`}>
				{[...new Array(60)].map((_, index) => (
					<button key={index} className="pb-3/4 relative bg-gray-50 rounded-xl focus:outline-none shadow-hero trans-150">
						<div className="absolute inset-0">

						</div>
					</button>
				))}
			</div>
		</Container>
	)
}

export default App
