import './Categories.css'
import fire from '../../../assets/img/fire.png'

const categories = [
	{
		image: fire,
		title: 'title1',
	},
	{
		image: fire,
		title: 'title2',
	},
	{
		image: fire,
		title: 'title3',
	},
]

function Categories() {
	return (
		<>
			<div className='Categories'>
				{categories.map((category, index) => (
					<div key={index} className='category'>
						<div className='categoryImage'>
							<img src={category.image} alt='categoryImage' />
						</div>

						<div className='categoryTitle'>{category.title}</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Categories
