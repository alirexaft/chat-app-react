import {notification} from "antd";

class Notification{
    success_notification(text) {
        notification.open({
            message: "success",
            description: text,
            style: {
                background: "#43a047",
                color: "white",
                fontFamily: "IRANSansMobileFaNum",
                borderRadius: "5px",
            }
        })
    }


    error_notification (text){
        notification.open({
            message: "error",
            description: text,
            style: {
                background: "#F3585c",
                color: "white",
                fontFamily: "IRANSansMobileFaNum",
                borderRadius: "5px",
            }
        })
    }
}

export default new Notification;