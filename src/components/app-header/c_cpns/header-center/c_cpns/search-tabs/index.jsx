
import React, { memo, useState } from 'react'
import TabsWrapper from './style'
import classNames from 'classnames';

const SearchTabs = memo((props) => {
    const { tabsTitles, tabClick } = props
    const [tabsIndex, setTabsIndex] = useState(0)
    function tabsClickHandle(index) {
        setTabsIndex(index)
        if (tabClick) tabClick(index)
    }
    return (
        <TabsWrapper>
            {
                tabsTitles.map((item, index) => {
                    return (
                        <div className={classNames('item', { active: tabsIndex === index })}
                            key={item}
                            onClick={e => tabsClickHandle(index)}>{item}</div>
                    )
                })
            }
        </TabsWrapper>
    )
})


export default SearchTabs