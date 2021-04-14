import React, { useEffect, useState } from "react";

const TvPrograms = ({channelName}) => {
    
    const url = `https://tv-api-p2x2o.ondigitalocean.app/${channelName}.json`
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setPrograms(data);
        }
        fetchData();
    }, [url])

    return (
        <div className="col-sm-4 offset-sm-4">
            <h1 className="channel-title">{channelName}</h1>
            <ul className="program-list">
                {programs.map((program) => (
                    <li class="program-list__item">
                        {program.start}
                        <br />
                        {program.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TvPrograms;