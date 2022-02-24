import { createStore } from 'redux'
import reducer from './reducers'
import DragDropManagerImpl from './classes/DragDropManagerImpl'
import DragDropMonitorImpl from './classes/DragDropMonitorImpl'
import HandleRegistryImpl from './classes/HandleRegistryImpl'
/**
 * 创建拖拽管理器的工具
 * 整个Dnd应用的状态会放在rdux的仓库store
 */
function createDragDropManger(backendFactory) {
    // 创建一个仓库，存放Dnd项目的状态（数据）
    const store = createStore(reducer)
    // 创建注册表
    const registry = new HandleRegistryImpl(store)
    // 创建全局监听器
    const globalMonitor = new DragDropMonitorImpl(store, registry)
    // 创建管理器
    const manager = new DragDropManagerImpl(store, globalMonitor)
    const backend = backendFactory(manager)
    manager.receiveBackend(backend)
    return manager
}
export default createDragDropManger