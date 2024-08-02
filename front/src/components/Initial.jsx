import { useState } from "react";
import img from "../imgs/capstoneLogo.png";
import { test } from "../apis/test";
import { useNavigate } from "react-router-dom";

export default function Initial() {
    const [categoryList, setCategoryList] = useState({
        음악: false,
        엔터: false,
        공부: false,
        브이로그: false,
        영화: false,
        코미디: false,
        여행: false,
        게임: false,
        요리: false,
        헬스: false,
        뉴스: false,
        과학: false,
        스포츠: false,
    });
    const navi = useNavigate();

    const handleCategoryClick = (category) => {
        setCategoryList((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };
    const onPostCategory = () => {
        setTimeout(() => {
            navi("/main");
        }, 2000);
    };

    return (
        <div
            className="relative z-0 flex flex-col items-center w-dvw h-dvh"
            style={{
                background:
                    "linear-gradient(to top right, #000000 31%, #F20087 100%)",
            }}
        >
            <div className="h-1/5">
                <img
                    src={img}
                    alt="logo"
                    className="absolute h-12 top-10 left-10 w-28"
                />
            </div>
            <div className="flex flex-col items-center w-full gap-4 h-1/5">
                <div className="text-6xl font-semibold">
                    Choose Your Algorithm
                </div>
                <div className="text-lg font-medium">
                    어떤 컨텐츠를 보고 싶으신가요?
                </div>
            </div>
            <div className="flex flex-col w-full gap-8 px-40 ">
                <div className="flex flex-wrap gap-4">
                    {Object.keys(categoryList).map((category, idx) => (
                        <div
                            key={idx}
                            className="h-14 w-32 rounded-[30px] z-10 cursor-pointer flex justify-center items-center"
                            style={{
                                background: !categoryList[category]
                                    ? "linear-gradient(to top left, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 28%, rgba(193, 193, 193, 0.1) 76%,  rgba(74, 74, 74, 0.1) 100%)"
                                    : "linear-gradient(to top left,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0.8) 20%,rgba(248, 174, 241, 0.85) 80%,rgba(184, 138, 166, 0.6) 100%)",
                                boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3)",
                            }}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <div
                                className="relative z-20 font-light text-white opacity-100"
                                style={{
                                    color: !categoryList[category]
                                        ? "#ffffff"
                                        : "#54012f",
                                }}
                            >
                                #{category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="px-20 py-2 mt-20 text-black bg-white rounded-3xl"
                onClick={onPostCategory}
            >
                콘텐츠 추천을 시작합니다.
            </button>
        </div>
    );
}
