import {useParams, useMatch, useSearchParams} from "react-router-dom";

export default function () {
    const [search,setSearch] = useSearchParams()
    let id = search.get('id');
    let title = search.get('title')
    let content = search.get('content')

    return (
        <div>
            <button onClick={()=>setSearch('id=008&title=哈哈&content=喜喜')}>点我更新收到的seach参数</button>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    )
}