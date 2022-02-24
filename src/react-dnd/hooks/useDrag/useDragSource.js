import { useEffect, useMemo } from "react"
import DragSourceImpl from "./DragSourceImpl"

/**
 * 创建一个拖动源实例
 * @param {*} spec 
 * @param {*} monitor 
 * @param {*} connector 
 */
function useDragSource(spec,monitor,connector){
    const dragSource = useMemo(()=>new DragSourceImpl(spec, monitor, connector),[monitor, connector])
    
    useEffect(()=>{
        dragSource.spec = spec
    },[spec])

    return dragSource
}
export default useDragSource