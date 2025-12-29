'use client'

import Image from "next/image";
import "./style.css";
import { useEffect, useState } from "react";

export default function Home() {

    const [speedRunData, setSpeedData] = useState<any>({});
    const [dataLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://www.speedrun.com/api/v2/GetGameLeaderboard2?_r=eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjEsInZhcnkiOjE3NjcwMzE3OTV9", {
                "headers": {
                    "accept": "application/json",
                    "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "Referer": "https://www.speedrun.com/silksong?h=any-no-major-glitches-later-patches&x=zd39j4nd-ylq4yvzn.qzne828q-rn1kmmvl.qj70747q"
                },
                "body": null,
                "method": "GET"
            })
            const result = await response.json();

            result.runList.forEach((run:any)=>{
                run.name = result.playerList.filter((player: { id: any; }) => player.id == run.playerIds[0])[0].name;
            })

            setSpeedData(result);
            console.log(result.runList);
            setLoaded(true);
        }

        fetchData();


    }, [])
    return (
        <div className="flex min-h-screen items-center justify-center flex-col">
            {/* {JSON.stringify(speedRunData.runList[0].id)} */}
            <div className="justify-center align-middle">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>LRT</th>
                            <th>RTA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataLoaded && speedRunData.runList.map((run: any,index:any) => (
                            <tr key={index}>
                                <td>{run.place}</td>
                                <td>{run.name}</td>
                                <td>{Math.floor(run.time/3600) >0 && <span>{Math.floor(run.time/3600)}h</span>} {Math.floor((run.time%3600)/60)}m {run.time%60}s</td>
                                <td>{Math.floor(run.timeWithLoads/3600) >0 && <span>{Math.floor(run.timeWithLoads/3600)}h</span>} {(String(Math.floor((run.timeWithLoads%3600)/60)).padStart(2,'0'))}m {String(run.timeWithLoads%60).padStart(2,'0')}s</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
