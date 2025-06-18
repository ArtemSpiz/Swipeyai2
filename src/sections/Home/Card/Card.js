import './Card.css'
import heroGirl from '../../../assets/img/heroGirl.png'
import Button from '../../../ui/Button/Button'

function Card() {
	return (
		<div className='cardWrapper'>
			<div className='card'>
				<div className='cardImage'>
					<img src={heroGirl} alt='girl' />
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
