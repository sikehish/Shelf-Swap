import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuItem,

	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FiMenu} from "react-icons/fi";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { FcMoneyTransfer } from "react-icons/fc";


function App() {
	const [count, setCount] = useState(0)

	return (
		<div className={"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "}>

			<header className="py-8 px-4  text-gray-800 ">
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="text-2xl sm:text-4xl font-semibold">ShelfSwap</h1>
					<nav>
						<div className={"sm:hidden"}>
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Button variant="outline" className={"bg-transparent border-gray-800"}
											size={"icon"}>
										<FiMenu className={"h-4 w-4"}/>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>Home</DropdownMenuItem>
									<DropdownMenuItem>Rent</DropdownMenuItem>
									<DropdownMenuItem>Sell</DropdownMenuItem>
									<DropdownMenuItem>Contact</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<ul className="hidden sm:flex space-x-4">
							<li className="inline-block"><a href="#" className="hover:text-yellow-300">Home</a></li>
							<li className="inline-block"><a href="#" className="hover:text-yellow-300">Rent</a></li>
							<li className="inline-block"><a href="#" className="hover:text-yellow-300">Sell</a></li>
							<li className="inline-block"><a href="#" className="hover:text-yellow-300">Contact</a>
							</li>
						</ul>
					</nav>

					{/*<nav>*/}

					{/*</nav>*/}
				</div>
			</header>

			<section className="px-4 py-16 text-gray-800">
				<div className="container mx-auto text-center">
					<h2 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h2>
					<p className="text-lg mb-8">Explore our vast collection of books available for rent and sale.
						Find
						the perfect book for your journey.</p>
					<Button
						className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">Get
						Started
					</Button>
				</div>
			</section>


			<section className="bg-white py-16 px-4">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Why Choose Book Haven?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
						<div className="text-center">
							<svg className="h-12 w-12 text-purple-500 mx-auto mb-4" fill="none"
								 stroke="currentColor"
								 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									  d="M5 13l4 4L19 7"></path>
							</svg>
							<h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
							<p className="text-gray-600">Choose from a diverse range of books spanning various
								genres
								and subjects.</p>
						</div>
						<div className="text-center">
							<svg className="h-12 w-12 text-pink-500 mx-auto mb-4" fill="none" stroke="currentColor"
								 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									  d="M9 9v6a2 2 0 002 2h2a2 2 0 002-2V9m-6 0h6m-9 2l2 2 4-4"></path>
							</svg>
							<h3 className="text-xl font-semibold mb-2">Easy Transactions</h3>
							<p className="text-gray-600">Rent or sell books hassle-free with our user-friendly
								platform.</p>
						</div>
						<div className="text-center">
							<svg className="h-12 w-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor"
								 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									  d="M15 14l-3 6v-9"></path>
							</svg>
							<h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
							<p className="text-gray-600">Rent books at budget-friendly prices and earn by selling
								your
								old books.</p>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default App
