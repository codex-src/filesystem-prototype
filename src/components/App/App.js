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

const ButtonIcon = ({ className, icon: Icon, ...props }) => (
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
		<div>

			<div className="pt-32" />

			<div ref={ref} className="-mt-3 py-3 sticky inset-x-0 top-0 bg-white z-30 trans-300">
				<div className="flex flex-row justify-center">
					<div className="px-6 w-full max-w-5xl">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row items-center">
								<Hero.CheveronLeftOutline className="mr-3 p-px w-8 h-8 text-blue-500" />
								<p className="flex flex-row items-center font-semibold text-lg tracking-px text-gray-800">
									<button className="text-blue-500 hover:text-blue-500 trans-150">
										Home
									</button>
									<Hero.CheveronRightSolid className="p-px w-6 h-6 text-gray-400" />
									<button className="text-blue-500 hover:text-blue-500 trans-150">
										Folder
									</button>
									<Hero.CheveronRightSolid className="p-px w-6 h-6 text-gray-400" />
									<button className="text-blue-500 hover:text-blue-500 trans-150">
										Nested folder
									</button>
								</p>
							</div>
							<div className="-mx-1 flex flex-row">
								<ButtonIcon
									className="hidden lg:block"
									icon={Hero.MinusSolid}
									disabled={state.itemsShown === ITEMS_SHOWN_MIN}
									onClick={dispatch.showLessItems}
								/>
								<ButtonIcon
									className="hidden lg:block"
									icon={Hero.PlusSolid}
									disabled={state.itemsShown === ITEMS_SHOWN_MAX}
									onClick={dispatch.showMoreItems}
								/>
								<ButtonIcon
									icon={!state.sortAscending ? Hero.SortDescendingSolid : Hero.SortAscendingSolid}
									onClick={dispatch.toggleSortDirection}
								/>
								<ButtonIcon
									icon={Hero.SwitchVerticalSolid}
									// TODO
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
						{["This is a really long folder name", "Second folder", "Third folder", "Fourth folder", "Fifth folder", "Sixth folder", "Eigth folder", "Ninth folder"].map((each, index) => (
							<button key={index} className="px-4 py-3 flex flex-row items-center bg-white rounded-lg shadow-hero">
								<Hero.FolderSolid className="mr-3 p-px flex-shrink-0 w-6 h-6 text-blue-500" />
								<p className="whitespace-pre truncate font-semibold tracking-px text-gray-800">
									{each}
								</p>
							</button>
						))}
						<button className="px-4 py-3 flex flex-row items-center bg-gray-100 rounded-lg">
							<Hero.PlusSolid className="mr-3 p-px flex-shrink-0 w-6 h-6 text-blue-500" />
							<p className="whitespace-pre truncate font-semibold tracking-px text-blue-500">
								Add a folder
							</p>
						</button>
					</div>
					<div className="h-6" />
					<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${state.itemsShown} gap-6`}>
						{[...new Array(60)].map((_, index) => (
							<button key={index} className="pb-4/5 relative bg-white rounded-xl shadow-hero overflow-hidden">
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
