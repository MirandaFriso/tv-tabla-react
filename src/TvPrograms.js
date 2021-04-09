import React, { useEffect, useState } from "react";

const TvPrograms = ({channelName}) => {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            const programData = await fetch('http://tv-api-p2x2o.ondigitalocean.app/' + channelName + '.json'
            );

            const data = await programData.json();
            setPrograms(data);
        };
        if (!programs.length) {
            fetchPrograms();
        }
    });

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