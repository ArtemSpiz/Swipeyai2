import './Categories.css'
import categories1 from '../../../assets/img/categories1'
import categories2 from '../../../assets/img/categories2'
import categories3 from '../../../assets/img/categories3'

const categories = [
	{
		image: categories1,
		title: 'Fully Uncensored Content',
	},
	{
		image: categories2,
		title: 'Unlimited Spicy Chat',
	},
	{
		image: categories3,
		title: 'Hot Role Plays',
	},
]

function Categories() {
	return (
		<>
			<div className='Categories'>
				{categories.map((category, index) => (
					<div key={index} className='category'>
						<div className='categoryImage'>
							<img
								loading='lazy'
								decoding='async'
								src={category.image}
								alt='categoryImage'
							/>
						</div>

						<div className='categoryTitle'>{category.title}</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Categories
