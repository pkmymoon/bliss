"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";
import { FaHeart } from "react-icons/fa6";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi";

interface CardContent {
    title: string;
    user: string;
    imageOne: string;
    imageTwo: string;
    likes: string;
    location: string;
}

const Solution = (props: CardContent) => {
    return (
        <div className=" w-full flex flex-col gap-2 ">
            <div className=" flex gap-2 items-center ">
                <div className="size-6 rounded-full overflow-clip">
                    <img
                        className="w-full"
                        src="https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fmidjourney%2Fprofile%2Fprofile%2520(111).png&w=256&q=75"
                    />
                </div>
                <h2 className=" text-lg font-semibold text-primary">
                    {props.user}
                </h2>
            </div>
            <div className=" w-full aspect-square  rounded-xl overflow-clip">
                <ReactCompareSlider
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    itemOne={
                        <ReactCompareSliderImage
                            src={props.imageOne}
                            alt="Image one"
                        />
                    }
                    itemTwo={
                        <ReactCompareSliderImage
                            src={props.imageTwo}
                            alt="Image two"
                        />
                    }
                />
            </div>
            <div className=" flex items-center gap-2 ">
                <button className="size-10 flex items-center justify-center rounded-full bg-accent">
                    <HiLocationMarker className=" size-5 text-primary " />
                </button>
                <button className="size-10 flex items-center justify-center rounded-full bg-accent">
                    <HiChatBubbleOvalLeftEllipsis className=" size-5 text-primary " />
                </button>
                <div className="flex items-center gap-2 ">
                    <button className="size-10 flex items-center justify-center rounded-full bg-accent">
                        <FaHeart className=" size-4 text-rose-500 " />
                    </button>
                    <span className=" text-base font-medium text-primary">
                        {props.likes} Likes
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Solution;
