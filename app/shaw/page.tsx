'use client'

import Image from "next/image";
import "./style.css";
import { useEffect, useState } from "react";

export default function Home() {
    const bearerTokens = [
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjEsInZhcnkiOjE3NjcwMzE3OTV9',
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjIsInZhcnkiOjE3NjcwNDgxNzJ9',
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjMsInZhcnkiOjE3NjcwNDgxNzJ9',
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjQsInZhcnkiOjE3NjcwNDgxNzJ9',
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjUsInZhcnkiOjE3NjcwNDgxNzJ9',
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjYsInZhcnkiOjE3NjcwNDgxNzJ9',
        'eyJwYXJhbXMiOnsiY2F0ZWdvcnlJZCI6InpkMzlqNG5kIiwiZW11bGF0b3IiOjAsImdhbWVJZCI6Ink2NXI3ZzgxIiwib2Jzb2xldGUiOjAsInBsYXRmb3JtSWRzIjpbXSwicmVnaW9uSWRzIjpbXSwidGltZXIiOjAsInZlcmlmaWVkIjoxLCJ2YWx1ZXMiOlt7InZhcmlhYmxlSWQiOiJ5bHE0eXZ6biIsInZhbHVlSWRzIjpbInF6bmU4MjhxIl19LHsidmFyaWFibGVJZCI6InJuMWttbXZsIiwidmFsdWVJZHMiOlsicWo3MDc0N3EiXX1dLCJ2aWRlbyI6MH0sInBhZ2UiOjcsInZhcnkiOjE3NjcwNDgxNzJ9'
    ]

    const [speedRunData, setSpeedData] = useState<any>({});
    const [dataLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let totalResult: any = {};

            await Promise.all(bearerTokens.map(async (element) => {
                const response = await fetch('https://www.speedrun.com/api/v2/GetGameLeaderboard2?_r=' + element, {
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
                totalResult[result.pagination.page] = result;
                // console.log(totalResult);
            }));
            let finalResults:any = {
                runList:[],
                playerList:[]
            }
            console.log(totalResult)
            for(let page in totalResult){
                //Build new Array for runList
                for(let run in totalResult[page].runList){
                    finalResults.runList.push(totalResult[page].runList[run])
                }
                //Build new Array for playerList
                for(let player in totalResult[page].playerList){
                    finalResults.playerList.push(totalResult[page].playerList[player])
                }
            }
            // console.log(finalResults)

            finalResults.runList.forEach((run: any) => {
                run.name = finalResults.playerList.filter((player: { id: any; }) => player.id == run.playerIds[0])[0].name;
            })

            setSpeedData(finalResults);
            // console.log(totalResult.runList);
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
                        {dataLoaded && speedRunData.runList.map((run: any, index: any) => (
                            <tr key={index}>
                                <td>{run.place}</td>
                                <td>{run.name}</td>
                                <td>{Math.floor(run.time / 3600) > 0 && <span>{Math.floor(run.time / 3600)}h</span>} {Math.floor((run.time % 3600) / 60)}m {run.time % 60}s</td>
                                <td>{Math.floor(run.timeWithLoads / 3600) > 0 && <span>{Math.floor(run.timeWithLoads / 3600)}h</span>} {(String(Math.floor((run.timeWithLoads % 3600) / 60)).padStart(2, '0'))}m {String(run.timeWithLoads % 60).padStart(2, '0')}s</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
