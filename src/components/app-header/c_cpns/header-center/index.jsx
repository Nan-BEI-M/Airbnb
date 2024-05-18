import React, { memo, useState } from 'react'
import { CenterWrapper } from './stye'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c_cpns/search-tabs'
import searchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c_cpns/search-sections'
import { CSSTransition } from 'react-transition-group'
const HeaderCenter = memo((props) => {
    // 获取isSearch
    const { isSearch, tabClick } = props
    const tabsTitles = searchTitles.map(item => item.title)
    const [tabIndex, setTabIndex] = useState(0)
    function tabsClickHandle(index) {
        setTabIndex(index)
    }
    function onTabClickHandle() {
        if (tabClick) tabClick()
    }
    return (
        <CenterWrapper>
            {<CSSTransition
                in={!isSearch}
                classNames="bar"
                timeout={250}
                unmountOnExit={true}>
                <div className="search-bar" onClick={onTabClickHandle}>
                    <div className="text">
                        搜索房源和体验
                    </div>
                    <div className="icon">
                        <IconSearchBar />
                    </div>
                </div>
            </CSSTransition>}
            <CSSTransition
                in={isSearch}
                classNames="detail"
                timeout={250}
                unmountOnExit={true}>
                <div className="search-detail">
                    <div className="tabs">
                        <SearchTabs tabsTitles={tabsTitles}
                            tabClick={tabsClickHandle} />
                    </div>
                    <div className="section">
                        <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
                    </div>
                </div>
            </CSSTransition>

        </CenterWrapper>
    )
})

export default HeaderCenter