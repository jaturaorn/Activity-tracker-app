import yogaIcon from "../assets/yoga.png"
import zumbaIcon from "../assets/zumba.png"
import joggingIcon from "../assets/jogging.png"
import pilatesIcon from "../assets/pilates.png"
import absIcon from "../assets/abs.png"

export class ActivityIcon {
    static getIcon(type) {
        type = type.toLowerCase();
        switch (type) {
            case "yoga":
                return yogaIcon;
            case "zumba":
                return zumbaIcon;
            case "jogging":
                return joggingIcon;
            case "pilates":
                return pilatesIcon;
            case "abs":
                return absIcon;
        }
    }
}