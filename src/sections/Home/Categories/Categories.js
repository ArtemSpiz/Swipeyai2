import LazyImage from '../../../LazyImage'
import './Categories.css'

const categories = [
	{
		image: '/img/categories1',
		title: 'Fully Uncensored Content',
	},
	{
		image: '/img/categories2',
		title: 'Unlimited Spicy Chat',
	},
	{
		image: '/img/categories3',
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
							<LazyImage
								loading='lazy'
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
