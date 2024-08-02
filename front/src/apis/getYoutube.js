import axios from "axios";

export const getYoutube = async () => {
    try {
        const res = await axios.get(
            // eslint-disable-next-line no-undef
            `http://${import.meta.env.VITE_REACT_APP_BASE_URL}/resultresult`,
            {
                withCredentials: true, // withCredentials를 여기서 설정
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.status === 200) return res;
        else return false;
    } catch (error) {
        console.error(error);
    }
};
