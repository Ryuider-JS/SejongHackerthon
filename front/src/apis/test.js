import axios from "axios";

export const test = async (obj) => {
    try {
        await axios
            .post(
                // eslint-disable-next-line no-undef
                `http://${import.meta.env.VITE_REACT_APP_BASE_URL}/test2`,
                obj,
                {
                    withCredentials: true, // withCredentials를 여기서 설정
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => console.log(res));
    } catch (error) {
        console.error(error);
    }
};
