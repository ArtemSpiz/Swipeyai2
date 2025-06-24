import './Card.css'
import Button from '../../../ui/Button/Button'
import LazyImage from '../../../LazyImage'

function Card() {
	return (
		<div className='cardWrapper'>
			<div className='card'>
				<div className='cardImage'>
					<LazyImage loading='lazy' src='/img/heroGirl.png' alt='girl' />
				</div>
				<div className='cardRight'>
					<div className='cardRightTop'>
						<div className='cardSubtitle'>
							Create Your Perfect AI Girlfriend
						</div>
						<div className='cardTitle'>CREATE YOUR OWN AI SLUT</div>
					</div>
					<Button className='cardBtn'>Try now</Button>
				</div>
			</div>
		</div>
	)
}

export default Card
