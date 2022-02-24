import {useMemo} from 'react'
import useDragDropManager from '../useDragDropManager'
import {TargetConnector} from '../../internals'
function useDropTargetConnector(){
    // 先获取管理器
    const manager = useDragDropManager()
    //创建拖动源的连接器
    const connector = useMemo(()=> new TargetConnector(manager.getBackend()),[manager])
    return connector
} 
export default useDropTargetConnector