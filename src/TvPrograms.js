import React, { useEffect, useState } from "react";

const TvPrograms = () => {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            const programData = await fetch('http://tv-api-p2x2o.ondigitalocean.app/SVT 1.json'
            );

            const data = await programData.json();
            setPrograms(data);
        };
        if (!programs.length) {
            fetchPrograms();
        }
    });

    return (
        <div>
            <h1 class="channel-title">SVT 1</h1>
            <ul class="program-list">
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