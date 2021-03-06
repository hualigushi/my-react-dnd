import {useMemo} from 'react'
import {DropTargetMonitorImpl} from '../../internals'
import useDragDropManager from '../useDragDropManager'

function useDropTargetMonitor(){
    const manager = useDragDropManager()
    return useMemo(()=> new DropTargetMonitorImpl(manager), [manager])
}
export default useDropTargetMonitor