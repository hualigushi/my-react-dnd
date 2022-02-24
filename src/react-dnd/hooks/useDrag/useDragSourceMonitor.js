import {useMemo} from 'react'
import {DragSourceMonitorImpl} from '../../internals'
import useDragDropManager from '../useDragDropManager'

function useDragSourceMonitor(){
    const manager = useDragDropManager()
    return useMemo(()=> new DragSourceMonitorImpl(manager), [manager])
}
export default useDragSourceMonitor