import axios from "axios";

export default function useRequest() {

    const formatErrorResponse = (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    return error.response.data;
                case 500:
                    return { success: false, errors: { "*": ["Internal server error"] } };
                default:
                    return { success: false, errors: { "*": [error.response.status] } };
            }
        } else {
            return { success: false, errors: { "*": ["No response from server"] } };
        }
    };

    const post = async (url, body) => {
        let response = {};
        await axios({
            url: url,
            method: 'post',
            data: body,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(success => {
            response = success.data;
        })
        .catch(error => {
            response = formatErrorResponse(error);
        });
        return response;
    };

    const get = async (url, params) => {
        let response = {};
        await axios.get(url, {
            params: params
        })
        .then(success => {
            response = success.data;
        })
        .catch(error => {
            response = formatErrorResponse(error);
        });
        return response;
    };

    return { get, post };
}