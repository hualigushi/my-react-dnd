import {useState, useLayoutEffect, useCallback} from 'react'
import equal from 'fast-deep-equal'
/**
 * 从监听器中收集属性并返回用来渲染组件
 * @param {*} collect 
 * @param {*} monitor 
 * @param {*} connector 
 */
function useCollectProps(collect,monitor, connector){
    const [collectedProp, setCollectedProp]=useState(()=>collect(monitor))

    const updateCollected = useCallback(()=>{
        // 当redux仓库中数据发生改变，monitor数据也会改变，然后会重新收集
        const nextValue = collect(monitor)
        // 如果新老属性相同，则不需要更新，提高性能
        if(!equal(collectedProp, nextValue)){
            setCollectedProp(nextValue)
        }
    },[collect, monitor])

    // 仓库状态变化后要重新计算属性并重新渲染组件
    useLayoutEffect(()=>{
        monitor.subscribeStateChange(updateCollected)
    },[monitor, updateCollected])
    
    return collectedProp
}
export default useCollectProps