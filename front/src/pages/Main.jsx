import { useState, useEffect } from "react";
import img from "../imgs/capstoneLogo.png";
import CachedIcon from "@mui/icons-material/Cached";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Person";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../imgs/1232134.png";
import { getYoutube } from "../apis/getYoutube";
const list = [
    {
        videoId: "https://www.youtube.com/watch?v=RG_wO09HRiA",
        thumnail: "https://i.ytimg.com/vi/RG_wO09HRiA/default.jpg",
        title: "☘️ 매장음악 광고없는☕ 스타벅스 매장음악곡 모음 🎧 STARBUCKS Soothing Jazz for study, work, read book",
    },
    {
        videoId: "https://www.youtube.com/watch?v=Q3JTrXdnqPQ",
        thumnail: "https://i.ytimg.com/vi/Q3JTrXdnqPQ/default_live.jpg",
        title: "하루 종일 듣기 좋은 노래 🎶일할때 듣기좋은 발라드 추천 광고없는 노래모음🍁 김범수/ 임창정/ 박효신/성시경/ 백지영/ 더원/태연/박명수/에일리/찬열/ 펀치/ 펀치/ 다비치/로꼬",
    },
    {
        videoId: "https://www.youtube.com/watch?v=-25qHJzjixw",
        thumnail: "https://i.ytimg.com/vi/-25qHJzjixw/default_live.jpg",
        title: "평화로운 마을을 거닐며 듣는 피아노 음악 🏘️",
    },
    {
        videoId: "https://www.youtube.com/watch?v=NC3894If20M",
        thumnail: "https://i.ytimg.com/vi/NC3894If20M/default.jpg",
        title: "[최신가요 실시간 인기차트] 2024년 5월 17일 3주차, 멜론차트 X, 종합차트O, 노래모음 KPOP 플레이리스트",
    },
    {
        videoId: "https://www.youtube.com/watch?v=y8vv3rPqcNw",
        thumnail: "https://i.ytimg.com/vi/y8vv3rPqcNw/default.jpg",
        title: "하루 종일 듣기 좋은 노래 🎶 일할때 듣기좋은 발라드 추천 광고없는 노래모음🎶 김범수 /임창정 /박효신/성시경/ 백지영/ 더원/태연/박명수/에일리/찬열, 펀치/다비치/로꼬, 펀치",
    },
    {
        videoId: "https://www.youtube.com/watch?v=BMv6MNg3Vqs",
        thumnail: "https://i.ytimg.com/vi/BMv6MNg3Vqs/default.jpg",
        title: "[Playlist] 아무생각 없이 틀어놓으면 극락가는 국내 노래모음 플레이리스트 | 노동요 카페 매장음악으로도 좋음 별로면 환불해드림 ㅋ",
    },
    {
        videoId: "https://www.youtube.com/watch?v=HofBTLQ1XAg",
        thumnail: "https://i.ytimg.com/vi/HofBTLQ1XAg/default_live.jpg",
        title: "🥤빠른 음악이 필요한 카페사장님들을 위한 텐션업❗️재즈플리😆 l 카페재즈, 매장음악, Positive Jazz Piano Music for Cafe",
    },
    {
        videoId: "https://www.youtube.com/watch?v=cK4LemjoFd0",
        thumnail: "https://i.ytimg.com/vi/cK4LemjoFd0/default_live.jpg",
        title: "잔잔하고 평화로운 카페 피아노 음악 l GRASS COTTON+",
    },
    {
        videoId: "https://www.youtube.com/watch?v=lYoV3z4o964",
        thumnail: "https://i.ytimg.com/vi/lYoV3z4o964/default.jpg",
        title: "[Playlist] 나 인디 좋아하네..💝 | 호불호 없이 하루종일 틀어놓기 좋은 국내 인디 노래모음 플레이리스트 | 노동요 카페 매장음악으로도 좋음ㅋ",
    },
];

export default function Main() {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            const result = await getYoutube();
            console.log(result);
        };
        fetchData();
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="flex">
            <div
                className={`h-dvh flex  flex-col relative transition-all duration-500 bg-[#292929] ${
                    !expanded ? "w-[65dvw]" : "w-[0dvw]"
                } ${expanded ? "opacity-0" : "opacity-1"} ${
                    expanded ? "p-0" : "p-8"
                }`}
            >
                <div className="flex justify-between">
                    <img src={img} alt="1234" className="w-24 h-10" />
                    <div className="flex justify-between gap-6">
                        <CachedIcon style={{ color: "white" }} />
                        <VolumeOffIcon style={{ color: "white" }} />
                        <ZoomInIcon style={{ color: "white" }} />
                        <MoreHorizIcon style={{ color: "white" }} />
                    </div>
                </div>
                <div className="mt-4 text-4xl font-extrabold">Contents</div>
                <div className="mb-4 text-4xl font-extrabold">Pick</div>
                <div className="flex flex-wrap w-full ml-6 h-3/4">
                    {list.map((val, idx) => (
                        <div
                            className="flex flex-col items-center flex-1"
                            key={idx}
                        >
                            <a
                                href={val.videoId}
                                className="w-40 cursor-pointer"
                            >
                                <img src={val.thumnail} alt={idx} />
                            </a>
                        </div>
                    ))}
                </div>
                <ArrowBackIosIcon
                    className="absolute cursor-pointer right-4 top-1/2"
                    onClick={toggleExpand}
                />
            </div>
            {/* 오른쪽 컴포넌트 */}
            <div
                className={`h-dvh flex flex-col p-8 relative transition-all duration-500 ${
                    expanded ? "w-[100dvw]" : "w-[35dvw]"
                }`}
                style={{
                    background:
                        "linear-gradient(to top right, #000000 10%, #430026 100%)",
                }}
            >
                <div className="flex items-center justify-end w-full gap-2">
                    <PersonIcon />
                    <DensityMediumIcon />
                </div>
                <div className="mt-4 text-5xl font-extrabold">Ji Woo's</div>
                <div className="text-5xl font-extrabold ">Chuck</div>
                <div
                    className={`relative my-4 ${expanded ? "hidden" : "flex"}`}
                >
                    <input
                        type="text"
                        style={{
                            background:
                                "linear-gradient(to top left, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 10%, rgba(193, 193, 193, 0.5) 50%, rgba(74, 74, 74, 0.2) 100%)",
                            opacity: "25%",
                            boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.9)",
                        }}
                        className="h-8 pl-8 w-60 rounded-2xl"
                        placeholder="search"
                    />
                    <SearchIcon
                        className="absolute bottom-1 left-2"
                        style={{ fontSize: "20px" }}
                    />
                </div>
                <div className="">#반려동물 #여행 #스포츠</div>
                <div className="flex justify-end w-full mb-4">
                    <div className="rounded-full size-10 bg-[#ff008e] flex justify-center items-center text-center">
                        <AddIcon />
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <div className="rounded-full size-10 bg-[#ff008e] flex justify-center items-center text-center">
                        <DeleteIcon />
                    </div>
                </div>
                <img
                    src={img1}
                    alt="1"
                    className={`w-[400px] h-[600px] absolute right-[88px] ${
                        !expanded ? "hidden" : "flex"
                    }`}
                />
                {/* <div
                    className="absolute w-2/5 opacity-0 bottom-1 left-1 h-1/5 rounded-2xl"
                    style={{
                        background:
                            "linear-gradient(to top left, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 10%, rgba(193, 193, 193, 0.5) 50%, rgba(74, 74, 74, 0.2) 100%)",
                        opacity: "25%",
                        boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.9)",
                    }}
                ></div> */}
            </div>

            <ArrowForwardIosIcon
                className={`absolute cursor-pointer left-4 top-1/2 ${
                    !expanded ? "opacity-0" : "opacity-1"
                }`}
                onClick={toggleExpand}
            />
        </div>
    );
}
