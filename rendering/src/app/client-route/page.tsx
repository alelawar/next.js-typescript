"use client"
// import { ServerSideFunction } from "@/utils/server-utils"

import React from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ClientRoutePage() {
    // const result = ServerSideFunction()
    // const theme = useTheme();
    const settings = {
      dots: true,
    };
    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="https://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="https://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="https://picsum.photos/400/200" />
                </div>
            </Slider>
        </div>
    )
}