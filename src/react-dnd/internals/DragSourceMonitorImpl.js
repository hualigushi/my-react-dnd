/**
 * 拖动源监听器-内部监听器
 * 内部有一个指针指向全局监听器
 */
class DragSourceMonitorImpl {
    internalMonitor
    handlerId
    constructor(manager) {
        this.internalMonitor = manager.getGlobalMonitor()
    }
    receiveHandlerId(handlerId) {
        this.handlerId = handlerId
    }
    subscribeStateChange(listener) {
        return this.internalMonitor.subscribeStateChange(listener)
    }
    isDragging() {
        return this.internalMonitor.isDraggingSource(this.handlerId)
    }
}
export default DragSourceMonitorImpl