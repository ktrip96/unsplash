import { useState } from 'react'
import LoadingModal from './components/LoadingModal'
import Image from './components/Image'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	return (
		<div className='h-screen flex items-center justify-center  bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
			{error === '' ? (
				<Image setIsLoading={setIsLoading} setError={setError} />
			) : (
				<h1 className='text-3xl text-white'>{error}</h1>
			)}
			<LoadingModal isOpen={isLoading} />
		</div>
	)
}

export default App
