import LazyImage from '../../LazyImage'
import './Header.css'
function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-logo'>
					<LazyImage src='/img/logo.png' alt='logo' loading='lazy' />
				</div>
			</div>
		</>
	)
}

export default Header
