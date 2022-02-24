import {useLayoutEffect} from 'react'
import useDragDropManager from '../useDragDropManager'
import useDropTarget from './useDropTarget'
import {registerTarget} from '../../internals'
/**
 * 注册拖动源 ，返回handlerId
 * @param {*} monitor 
 * @param {*} connector 
 */
function useRegisteredDropTarget (spec, monitor, connector){
    const manager = useDragDropManager()
    // 拖动源实例
    const dropTarget = useDropTarget(spec, monitor, connector)
    // 拖动源类型
    const itemType = spec.type

    useLayoutEffect(()=>{
        const handlerId = registerTarget(itemType, dropTarget,manager)
        monitor.receiveHandlerId(handlerId)
        connector.receiveHandlerId(handlerId)
    },[connector, itemType, manager, monitor, dropTarget])

}
export default useRegisteredDropTarget