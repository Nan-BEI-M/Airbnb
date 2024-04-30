import hyRequest from '@/services'
import React, { memo, useEffect, useState } from 'react'

const Home = memo(() => {
    const [higeScore, setHigeScore] = useState({})
    // 模拟发送网络请求
    useEffect(() => {
        hyRequest.get({ url: "/home/highscore" }).then(res => {
            console.log(res);
            setHigeScore(res)
        })
    }, [])
    return (
        <div>
            <h2>Home</h2>
            <div>{higeScore.title}</div>
            <div>{higeScore.subtitle}</div>
            <ul>
                {
                    higeScore.list?.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
})

export default Home