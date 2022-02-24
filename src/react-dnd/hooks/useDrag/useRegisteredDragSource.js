import {useLayoutEffect} from 'react'
import useDragDropManager from '../useDragDropManager'
import useDragSource from './useDragSource'
import useDragType from './useDragType'
import {registerSource} from '../../internals'
/**
 * 注册拖动源实例到注册表中 ，返回handlerId
 * @param {*} monitor 
 * @param {*} connector 
 */
function useRegisteredDragSource (spec, monitor, connector){
    const manager = useDragDropManager()
    // 拖动源实例
    const dragSource = useDragSource(spec, monitor, connector)
    // 拖动源类型
    const itemType = useDragType(spec)

    useLayoutEffect(()=>{
        const handlerId = registerSource(itemType, dragSource,manager)
        monitor.receiveHandlerId(handlerId)
        connector.receiveHandlerId(handlerId)
    },[connector, dragSource, itemType, manager, monitor])

}
export default useRegisteredDragSource