import Spinner from './Spinner'
import ReactDOM from 'react-dom'

type LoadingModalProps = {
	isOpen: boolean
}

const LoadingModal = ({ isOpen }: LoadingModalProps) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className='fixed z-50 left-0 top-0 right-0 bottom-0 bg-gray-700 bg-opacity-40 flex items-center justify-center'>
			<Spinner />
		</div>,
		document.body
	)
}

export default LoadingModal
