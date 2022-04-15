import {useParams,useMatch} from "react-router-dom";

export default function () {
    const {id,title,content} = useParams()

    const x = useMatch('/home/message/detail/:id/:title/:content')
    console.log(x)
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