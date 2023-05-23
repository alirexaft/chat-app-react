import axios from "axios";
import { setHeaders } from './set_headers';


class Axios {

    async get(url) {
        try {
            var config = {
                method: 'get',
                url: url,
                headers: setHeaders()
            };

            return await axios(config)
                .then((response) => {
                    if (response.status === 200 ||response.status === 201) {
                        return response;

                    }
                })
                .catch((error) => {
                    console.log(error)
                    if (error.response.status === 401) {

                        window.location.replace("/login");
                        localStorage.setItem("access_token","")
                        return error
                    }else{
                        return error;
                    }

                });

        } catch (error) {
            console.log(error);
        }
    }

    async post(url, data) {

        try {
            var config = {
                method: 'post',
                url: url,
                data: data,
                headers: setHeaders()
            };
            return await axios(config)
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        return (response);
                    } else {

                        return response;
                    }
                })
                .catch(async(error) => {


                    return error;

                });

        } catch (error) {
            console.log("ERROR!!", error)
            return (error);
        }
    }

    async put(url, data) {
        try {

            var config = {
                method: 'put',
                url: url,
                data: data,
                headers: setHeaders()
            };

            return await axios(config)
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        return response;
                    } else {
                        console.log("putERRO1", response)
                        return response;
                    }
                })
                .catch((error) => {
                    console.log("putERROR2", error)
                    return error;
                });

        } catch (error) {
            console.log("putError3", error)
            return console.log(error);
        }
    }

    async patch(url, data) {
        try {

            var config = {
                method: 'patch',
                url: url,
                data: data,
                headers: setHeaders()
            };

            return await axios(config)
                .then((response) => {
                    return (response);
                })
                .catch((error) => {
                    return (error);
                });

        } catch (error) {
            return (error);
        }
    }

    async delete(url, data) {
        try {

            var config = {
                method: 'delete',
                url: url,
                data: data,
                headers: setHeaders()
            };

            return await axios(config)
                .then((response) => {
                    return (response);
                })
                .catch((error) => {
                    return (error);
                });

        } catch (error) {
            return (error);
        }
    }

}

export default new Axios();