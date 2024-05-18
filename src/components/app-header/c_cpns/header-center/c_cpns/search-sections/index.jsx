import React, { memo } from 'react'
import SectionWrapper from './style'

const SearchSections = memo((props) => {
    const { searchInfos = [] } = props
    return (
        <SectionWrapper>
            {
                searchInfos.map((item, index) => {
                    return (
                        <div key={item.title} className='item'>
                            <div className="title">{item.title}</div>
                            <div className="desc">{item.desc}</div>
                        </div>
                    )
                })
            }
        </SectionWrapper>
    )
})

export default SearchSections