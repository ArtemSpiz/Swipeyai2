import LazyImage from '../../../LazyImage'
import './Explore.css'
import { useNavigate } from 'react-router-dom'

const girlsCard = [
	{
		image: '/img/girlImage1.png',
		name: 'Mai',
		age: '22',
		checkMark: true,
	},
	{
		image: '/img/girlImage2.png',
		name: 'Imani',
		age: '26',
		checkMark: true,
	},
	{
		image: '/img/girlImage3.png',
		name: 'Olivia',
		age: '24',
		checkMark: false,
	},
	{
		image: '/img/girlImage4.png',
		name: 'Valentina',
		age: '23',
		checkMark: true,
	},
]

function Explore() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/sign-up')
	}
	return (
		<>
			<div className='explore'>
				<div className='exploreTitle'>
					<span className='exploreTitle2'>Explore</span> AI Girls
				</div>

				<div className='exploreGirlsCard'>
					{girlsCard.map((girl, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${girl.image})` }}
							className='girlCard'
							onClick={handleClick}
						>
							<div className='girlCardFire'>
								<LazyImage
									loading='lazy'
									src='/img/fire.png'
									alt='fire'
									className='fire'
								/>
							</div>

							<div className='girlInfo'>
								<div className='girlText'>
									<div className='girlName'>{girl.name},</div>
									<div className='girlAge'>{girl.age}</div>
								</div>
								{girl.checkMark && (
									<LazyImage
										loading='lazy'
										src='/img/checkMark.png'
										alt='verified'
										className='checkMark'
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Explore
