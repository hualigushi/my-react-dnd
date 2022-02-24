import { useEffect, useMemo } from "react"
import DropTargetImpl from "./DropTargetImpl"

/**
 * 创建一个拖动源实例
 * @param {*} spec 
 * @param {*} monitor 
 * @param {*} connector 
 */
function useDropTarget(spec,monitor,connector){
    const dropTarget = useMemo(()=>new DropTargetImpl(spec, monitor, connector),[monitor, connector])
    
    useEffect(()=>{
        dropTarget.spec = spec
    },[spec])

    return dropTarget
}
export default useDropTarget