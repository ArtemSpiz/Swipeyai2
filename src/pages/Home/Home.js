import Card from '../../sections/Home/Card/Card'
import Categories from '../../sections/Home/Categories/Categories'
import Explore from '../../sections/Home/Explore/Explore'
import Hero from '../../sections/Home/Hero/Hero'

import './Home.css'
function Home() {
	return (
		<>
			<div className='Home'>
				<Hero />
				<Categories />
				<Explore />
				<Card />
			</div>
		</>
	)
}

export default Home
