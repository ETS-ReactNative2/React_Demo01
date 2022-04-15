import {useLocation} from "react-router-dom";

export default function () {
    const {state:{id,title,content}} = useLocation()
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    )
}