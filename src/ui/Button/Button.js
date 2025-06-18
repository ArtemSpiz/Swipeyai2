import './Button.css'
import HeroPencil from '../../assets/svg/heroPencil'

function Button({ children = 'Try for free', className = '' }) {
	return (
		<a href='/sign-up' className={`button ${className}`}>
			<HeroPencil className='HeroPencil' />
			{children}
		</a>
	)
}

export default Button
