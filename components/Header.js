import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			{/* <Image className="object-contain" alt="logo" src="https://links.papareact.com/ua6" width={200} height={100}/> */}
			<Image className="object-contain" alt="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" width={200} height={100}/>
		</header>
	)
}

export default Header