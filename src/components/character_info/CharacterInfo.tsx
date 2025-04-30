"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"

export default function CharacterInfo() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    });

    const [isHovering, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [isHovering2, setIsHovered2] = useState(false);
    const [isHovering3, setIsHovered3] = useState(false);
    const [isHovering4, setIsHovered4] = useState(false);
    const [isHovering5, setIsHovered5] = useState(false);
    const [isHovering6, setIsHovered6] = useState(false);
    return (
        <div className="relative mt-10">
            {/* Mobile Version */}
            <div className="relative md:hidden items-center justify-center">
                <div className="text-center justify-center flex py-1 px-10 mt-5 bg-divBorderPurple rounded-full mx-auto w-2/5">
                    <img
                        src="/header/symbol.png"
                        alt="Illustrative Example"
                        className="scale-50 mr-1"
                    />
                    <h1 className="text-center text-sm text-[#ffffb4]">
                        Projects
                    </h1>
                </div>

                {/* Content */}
                <div className="py-1 px-10 mt-5 bg-divBorderGreen rounded-full mx-auto w-4/5">
                    <h1 className="text-center text-s text-black">
                        List of In Progress and Completed Projects
                    </h1>
                </div>
            </div>

            <div className="flex flex-col md:hidden sm:space-x-4">
                <div ref={sliderRef} className="keen-slider text-lg text-white" style={{ height: 200 }}>
                    <div className="keen-slider__slide flex items-center justify-center">
                        <img src="character_info/famera/Famera_Idle.png" alt="" style={{ width: "80vw" }}/>
                    </div>
                    <div className="keen-slider__slide flex items-center justify-center">
                        <img src="character_info/olj/OLJ_Idle.png" alt="" style={{ width: "80vw"}} />
                    </div>
                    <div className="keen-slider__slide flex items-center justify-center">
                        <img src="character_info/settle_down/settle_down_idle.png" alt="" style={{ width: "80vw"}} />
                    </div>
                    <div className="keen-slider__slide flex items-center justify-center">
                        <img src="character_info/voluspa/voluspa_idle.png" alt="" style={{ width: "80vw"}} />
                    </div>
                    <div className="keen-slider__slide flex items-center justify-center">
                        <img src="character_info/goose_club/goose_club_idle.png" alt="" style={{ width: "80vw"}} />
                    </div>
                    <div className="keen-slider__slide flex items-center justify-center">
                        <img src="character_info/personal_project/personal_project_idle.png" alt="" style={{ width: "80vw"}} />
                    </div>
                </div>
            </div>

            {/* Desktop Version */}
            <div className="hidden md:flex">
                <div className="flex justify-center items-center py-1 px-10 z-10 bg-divBorderPurple rounded-r-full">
                    <img
                        src="/header/symbol.png"
                        alt="Illustrative Example"
                        className="scale-75 mr-1"
                    />
                    <h1 className="text-center text-sm text-[#ffffb4]">
                        Projects
                    </h1>
                </div>

                <div className="py-1 px-15 -ml-5 z-0 bg-divBorderGreen rounded-r-full">
                    <h1 className="text-center text-sm text-black">
                        List of projects that have been completed
                    </h1>
                </div>
            </div>

            <div className="hidden md:flex md:flex-row md:w-full md:align-items-center md:justify-center md:mx-5">
                <div className="grid grid-rows-3 grid-cols-2 mt-5 mx-5 gap-10">
                    <div className="grid-row-1 grid-col-1">
                        {
                            isHovering ? 
                            (
                                <input type="image" src="character_info/famera/Famera_Hover.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => setIsHovered(false)} onClick={() => {setClicked(true); setIsHovered(false) }}/>
                            ) : clicked ?
                            (
                                <input type="image" src="character_info/famera/Famera_Clicked.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => {setClicked(false); setIsHovered(false)}} />
                            ) :
                            (
                                <input type="image" src="character_info/famera/Famera_Idle.png" alt="" style={{ width: "40vw" }} onMouseOver={() => setIsHovered(true)} onClick={() => setClicked(true)} />
                            )
                        }
                    </div>
                    <div className="grid-row-1 grid-col-2">
                    {
                            isHovering2 ? 
                            (
                                <input type="image" src="character_info/olj/OLJ_Hover.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => setIsHovered2(false)} />
                            ) :
                            (
                                <input type="image" src="character_info/olj/OLJ_Idle.png" alt="" style={{ width: "40vw" }} onMouseOver={() => setIsHovered2(true)} />
                            )
                    }
                    </div>
                    <div className="grid-row-2 grid-col-1">
                    {
                            isHovering3 ? 
                            (
                                <input type="image" src="character_info/settle_down/settle_down_Hover.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => setIsHovered3(false)} />
                            ) :
                            (
                                <input type="image" src="character_info/settle_down/settle_down_Idle.png" alt="" style={{ width: "40vw" }} onMouseOver={() => setIsHovered3(true)} />
                            )
                    }
                    </div>
                    <div className="grid-row-2 grid-col-2">
                    {
                            isHovering4 ? 
                            (
                                <input type="image" src="character_info/voluspa/voluspa_Hover.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => setIsHovered4(false)} />
                            ) :
                            (
                                <input type="image" src="character_info/voluspa/voluspa_Idle.png" alt="" style={{ width: "40vw" }} onMouseOver={() => setIsHovered4(true)} />
                            )
                    }
                    </div>
                    <div className="grid-row-3 grid-col-1">
                    {
                            isHovering5 ? 
                            (
                                <input type="image" src="character_info/goose_club/goose_club_Hover.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => setIsHovered5(false)} />
                            ) :
                            (
                                <input type="image" src="character_info/goose_club/goose_club_Idle.png" alt="" style={{ width: "40vw" }} onMouseOver={() => setIsHovered5(true)} />
                            )
                    }
                    </div>
                    <div className="grid-row-3 grid-col-2">
                    {
                            isHovering6 ? 
                            (
                                <input type="image" src="character_info/personal_project/personal_project_Hover.png" alt="" style={{ width: "40vw" }} onMouseLeave={() => setIsHovered6(false)} />
                            ) :
                            (
                                <input type="image" src="character_info/personal_project/personal_project_Idle.png" alt="" style={{ width: "40vw" }} onMouseOver={() => setIsHovered6(true)} />
                            )
                    }
                    </div>
                </div>
            </div>
        </div>

    )
}
