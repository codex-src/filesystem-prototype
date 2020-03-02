import * as Hero from "components/Icons"
// import Container from "components/Container"
import React from "react"
import useMethods from "use-methods"
import editorSrc from "images/editor.png" // Tell webpack this JS file uses this image

// ;(() => {
// 	// TODO: Add event listener
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
	<button className={`p-2 text-blue-500 disabled:text-gray-500 disabled:bg-transparent hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 rounded-full focus:outline-none trans-300 ${className || ""}`.trim()} {...props}>
		<Icon className="p-px w-6 h-6" />
	</button>
)

const App = props => {
	const ref = React.useRef()

	const [state, dispatch] = useMethods(reducer, initialState)

	React.useEffect(() => {
		window.addEventListener("scroll", e => {
			if (window.scrollY < ((32 * 4) - (6 * 4))) {
				ref.current.classList.remove("shadow")
			} else {
				ref.current.classList.add("shadow")
			}
		}, false)
	}, [])

	return (
		// <Container className="bg-white">
		<div>

			<div className="pt-32" />

			<div ref={ref} className="-mt-6 py-6 sticky inset-x-0 top-0 bg-white z-30 trans-300">
				<div className="flex flex-row justify-center">
					<div className="px-6 w-full max-w-5xl">

						<div className="flex flex-row justify-between items-center">
							<p className="flex flex-row items-center font-semibold text-lg tracking-px leading-none text-gray-800">
								<span className="-mx-2 px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-full trans-150">
									Home
								</span>
								<Hero.CheveronRight className="w-6 h-6 text-gray-500" />
								<span className="-mx-2 px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-full trans-150">
									Directory
								</span>
								<Hero.CheveronRight className="w-6 h-6 text-gray-500" />
								<span className="-mx-2 px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-full trans-150">
									Subdirectory
								</span>
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
						<div className="h-3" />
						<div className="grid grid-cols-5 gap-6">
							{["Folder", "Second folder", "Third folder"].map((each, index) => (
								<div key={index} className="px-4 py-3 flex flex-row items-center bg-white rounded-lg shadow-hero">
									<Hero.Folder className="mr-3 w-6 h-6 text-blue-500" />
									<p className="whitespace-pre truncate font-semibold tracking-px leading-none text-gray-800">
										{each}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-center">
				<div className="px-6 w-full max-w-5xl">
					<div className="h-6" />
					<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${state.itemsShown} gap-6`}>
						{[...new Array(60)].map((_, index) => (
							<button key={index} className="pb-3/4 relative bg-white rounded-lg focus:outline-none shadow-hero overflow-hidden trans-150">
								<div className="absolute inset-0 flex flex-row justify-center items-center">
									<img src={editorSrc} alt="" />
								</div>
							</button>
						))}
					</div>
				</div>
			</div>

		</div>
		// </Container>
	)
}

export default App
