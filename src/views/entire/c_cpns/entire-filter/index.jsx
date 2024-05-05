import React, { memo, useState } from 'react'
import FilterWrapper from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
    const [selectItems, setSelectItems] = useState([])
    // 事件监听
    function itemClickHandle(item, index) {
        const newSelectItem = [...selectItems]
        if (newSelectItem.includes(item)) {//取消选中
            const itemIndex = newSelectItem.findIndex(findItem => findItem === item)
            newSelectItem.splice(itemIndex, 1)
        } else {//选中
            newSelectItem.push(item)
        }
        setSelectItems(newSelectItem)
    }
    return (
        <FilterWrapper>
            <div className="filter">
                {
                    filterData.map((item, index) => {
                        return <div key={item}
                            className={classNames('item', { active: selectItems.includes(item) })}
                            onClick={e => itemClickHandle(item, index)}
                        >{item}</div>
                    })
                }
            </div>
        </FilterWrapper>
    )
})


export default EntireFilter