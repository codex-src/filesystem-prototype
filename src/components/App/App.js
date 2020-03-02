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

const ITEMS_SHOWN_MIN = 3
const ITEMS_SHOWN_MAX = 5

const initialState = {
	itemsShown: ITEMS_SHOWN_DEFAULT,
	sortAscending: false,
	scrollEnabled: false,
}

const reducer = state => ({
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
	toggleSortDirection() {
		state.sortAscending = !state.sortAscending
	},
	toggleScrollEnabled() {
		state.scrollEnabled = !state.scrollEnabled
	},
})

const ButtonIcon = ({ className, icon: Icon, ...props }) => (
	<button className={`p-2 text-md-blue-a200 disabled:text-gray-500 disabled:bg-transparent hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 rounded-full focus:outline-none trans-300 ${className || ""}`.trim()} {...props}>
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
		<div className="bg-white">

			<div className="pt-32" />

			<div ref={ref} className="-mt-3 py-3 sticky inset-x-0 top-0 bg-white z-30 trans-300">
				<div className="flex flex-row justify-center">
					<div className="px-6 w-full max-w-5xl">
						<div className="flex flex-row justify-between items-center">
							<p className="flex flex-row items-center font-medium text-lg tracking-px text-gray-800">
								<button className="text-md-blue-a200 hover:text-md-blue-a200 trans-150">
									Zaydek’s Codex
								</button>
								<Hero.CheveronRightOutline className="mx-px mt-px p-px w-6 h-6 text-gray-400" />
								<button className="text-md-blue-a200 hover:text-md-blue-a200 trans-150">
									Directory
								</button>
								<Hero.CheveronRightOutline className="mx-px mt-px p-px w-6 h-6 text-gray-400" />
								<button className="text-md-blue-a200 hover:text-md-blue-a200 trans-150">
									Subdirectory
								</button>
							</p>
							<div className="-mx-1 flex flex-row">
								<ButtonIcon
									className="hidden lg:block"
									icon={Hero.ZoomOutOutline}
									disabled={state.itemsShown === ITEMS_SHOWN_MAX}
									onClick={dispatch.showMoreItems}
								/>
								<ButtonIcon
									className="hidden lg:block"
									icon={Hero.ZoomInOutline}
									disabled={state.itemsShown === ITEMS_SHOWN_MIN}
									onClick={dispatch.showLessItems}
								/>
								<ButtonIcon
									icon={!state.sortAscending ? Hero.SortDescendingOutline : Hero.SortAscendingOutline}
									onClick={dispatch.toggleSortDirection}
								/>
								<ButtonIcon
									className={!state.scrollEnabled ? "" : "bg-blue-100"}
									icon={Hero.SwitchVerticalOutline}
									onClick={dispatch.toggleScrollEnabled}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="h-6" />
			<div className="flex flex-row justify-center">
				<div className="px-6 w-full max-w-5xl">
					<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
						{["This is a really long folder name", "Second folder", "Third folder"].map((each, index) => (
							<button key={index} className="px-4 py-3 flex flex-row items-center bg-white rounded-lg shadow-hero">
								<Hero.FolderSolid className="mr-3 p-px flex-shrink-0 w-6 h-6 text-md-blue-a200" />
								<p className="whitespace-pre truncate font-medium tracking-px text-gray-800">
									{each}
								</p>
							</button>
						))}
						<div className="flex flex-row items-center">
							<button className="p-2 hover:bg-indigo-100 rounded-full focus:bg-blue-100 focus:outline-none trans-300">
								<Hero.PlusSolid className="p-px w-6 h-6 text-md-blue-a200" />
							</button>
						</div>
					</div>
					<div className="h-6" />
					<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${state.itemsShown} gap-6`}>
						<button className="pb-5/4 relative hover:bg-indigo-100 rounded-xl focus:outline-none shadow-2px trans-300">
							<div className="absolute inset-0 flex flex-row justify-center">
								<div className="absolute inset-0 flex flex-col justify-center items-center">
									<Hero.PlusOutline className="-mt-8 p-px w-8 h-8 text-md-blue-a200" />
									{/* <p className="font-medium text-2xl tracking-px text-md-blue-a200"> */}
									{/* 	New note */}
									{/* </p> */}
								</div>
							</div>
						</button>
						{[...new Array(60)].map((_, index) => (
							<button key={index} className="pb-5/4 relative bg-white rounded-lg shadow-hero overflow-hidden">
								<div className="absolute inset-0 flex flex-row justify-center">
									<img className="py-2 object-contain object-top" src={editorSrc} alt="" />
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="h-32" />

		</div>
		// </Container>
	)
}

export default App
