export function setHeaders() {

    if (localStorage.getItem("access_token")) {
        return {
            Authorization:"Bearer " + localStorage.getItem("access_token"),
            // 'Content-Type': 'application/json',
            // Accept: 'text/plain',
        };
    } else {
        return {
            'Content-Type': 'application/json',
            // Accept: 'text/plain',
        };
    }

}