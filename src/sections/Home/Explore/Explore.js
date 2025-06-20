import './Explore.css'
import checkMark from '../../../assets/img/checkMark.png'
import Fire from '../../../assets/img/fire.png'
import girlImg1 from '../../../assets/img/girlImage1.png'
import girlImg2 from '../../../assets/img/girlImage2.png'
import girlImg3 from '../../../assets/img/girlImage3.png'
import girlImg4 from '../../../assets/img/girlImage4.png'

import { useNavigate } from 'react-router-dom'

const girlsCard = [
	{
		image: girlImg1,
		name: 'Mai',
		age: '22',
		checkMark: true,
	},
	{
		image: girlImg2,
		name: 'Imani',
		age: '26',
		checkMark: true,
	},
	{
		image: girlImg3,
		name: 'Olivia',
		age: '24',
		checkMark: false,
	},
	{
		image: girlImg4,
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
								<img
									loading='lazy'
									decoding='async'
									src={Fire}
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
									<img
										loading='lazy'
										decoding='async'
										src={checkMark}
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
