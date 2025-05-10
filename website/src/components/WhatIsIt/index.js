import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";

export default function Benefits() {
	return (
		<HomeSection alt="true">
			<div className={styles.innerAside}>
				<h2>What Is It?</h2>
			</div>
			<>
				<ImageBullet image="/img/splash/noun-radar.svg" alt="Connect Icon">FDC3 is an open standard for applications on financial desktop to interoperate and exchange data with each other.</ImageBullet>
				<ImageBullet  image="/img/splash/noun-speed.svg" alt="Connect Icon">
					Users benefit from a more joined-up experience, which reduces the "friction" in getting tasks done.
				</ImageBullet>
				<ImageBullet  image="/img/splash/noun-connect.svg" alt="Connect Icon"> 
				Applications can launch each other, respond to activity in other apps and request functionality from each other.
				</ImageBullet>
			</>
			<p>
				<a className={styles.cta} target='_blank' href="/pdf/FDC3-primer-2024.pdf">READ THE PRIMER</a>
				<a className={styles.cta} target='_blank' href="https://github.com/finos/FDC3">GITHUB REPO</a>
			</p>
		</HomeSection>


	)
}



