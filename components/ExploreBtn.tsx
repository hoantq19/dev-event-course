"use client";

import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button id="explore-btn" type="button" className="mt-6 mx-auto" onClick={() => { console.log("on click") }}>
            <a href="#event">
                Explore Events
                <Image src={'/icons/arrow-down.svg'} alt="arrow-down" width={24} height={24} />
            </a>
        </button>
    )
}

export default ExploreBtn