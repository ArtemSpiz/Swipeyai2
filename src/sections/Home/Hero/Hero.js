import './Hero.css'
import Button from '../../../ui/Button/Button'
import { useEffect } from 'react'

function Hero() {
	useEffect(() => {
		const preloadPoster = document.createElement('link')
		preloadPoster.rel = 'preload'
		preloadPoster.as = 'image'
		preloadPoster.href =
			'https://cdn.assets-landing-candyai.com/marina/var16/video_poster.webp'
		document.head.appendChild(preloadPoster)
	}, [])
	return (
		<>
			<div className='Hero'>
				<div className='heroVideo'>
					<video
						className='heroImage'
						muted
						loop
						playsInline
						autoPlay
						poster='https://cdn.assets-landing-candyai.com/marina/var16/video_poster.webp'
					>
						<source
							type='video/mp4'
							src='https://cdn.assets-landing-candyai.com/marina/var16/video.mp4'
						/>
					</video>
				</div>
				<div className='heroRight'>
					<div className='heroRightImage'>
						<img
							src='/img/checkMark.png'
							alt='checkMark'
							loading='lazy'
							decoding='async'
						/>
					</div>

					<div className='heroRightTitle'>CREATE YOUR OWN AI SLUT</div>

					<Button className='heroBtn' />
				</div>
			</div>
		</>
	)
}

export default Hero
