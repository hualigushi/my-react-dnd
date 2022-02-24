import {DndContext} from '../core'
import {useContext} from 'react'

function useDragDropManager(){
    const value = useContext(DndContext)
    return value.dragDropManager
}
export default useDragDropManager