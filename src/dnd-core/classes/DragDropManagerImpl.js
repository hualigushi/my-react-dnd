import {createDragDropActions} from '../actions/dragDrop'
import {bindActionCreators} from 'redux'
class DragDropManagerImpl {
    backend
    store
    globalMonitor
    constructor(store,globalMonitor){
        this.store = store
        this.globalMonitor = globalMonitor
    }
    receiveBackend(backend){
        this.backend = backend
        this.backend.setup()
    }
    getBackend(){
        return this.backend
    }
    getGlobalMonitor(){
        return this.globalMonitor
    }
    getRegistry(){
        return this.globalMonitor.registry
    }
    getActions(){
        const actions = createDragDropActions(this)
        return bindActionCreators(actions,this.store.dispatch)
    }
}
export default DragDropManagerImpl