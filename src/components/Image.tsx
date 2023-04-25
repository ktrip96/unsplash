import React, { useState } from 'react'

type Props = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
	setError: React.Dispatch<React.SetStateAction<string>>
}

const Image = ({ setIsLoading, setError }: Props) => {
	const [counter, setCounter] = useState(1)

	const handleImageClick = () => {
		setCounter((prev) => prev + 1)
		setIsLoading(true)
	}

	return (
		<div className='max-h-[600px] rounded-lg overflow-hidden'>
			<img
				src={`https://source.unsplash.com/random/?fruit/${counter}`}
				alt='unsplash_random'
				className='max-h-[600px] object-fit rounded-lg  cursor-pointer hover:scale-125 transition duration-300'
				onClick={handleImageClick}
				onLoad={() => setIsLoading(false)}
				onError={() => setError('There was an error during the loading phase of the image.')}
			/>
		</div>
	)
}

export default Image
