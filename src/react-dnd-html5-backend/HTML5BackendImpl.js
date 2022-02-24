/**
 * 负责绑定DOM事件，修改状态
 * 派发action动作
 */
class HTML5BackendImpl {
    manager
    actions
    dragStartHandlerId // 记录当前被拖动的处理器ID
    dragOverTargetId
    constructor(manager) {
        this.actions = manager.getActions()
    }
    setup = () => {
        this.addEventListener(window)
    }
    // 绑定window事件
    addEventListener(target) {
        target.addEventListener('dragstart', this.handleTopDragStart)
        target.addEventListener('dragover', this.handleTopDragOver)
        target.addEventListener('dragend', this.handleTopDragEndCapture, true)
    }
    handleTopDragStart = (event) => { // 箭头函数，this指针指向
        this.actions.beginDrag(this.dragStartHandlerId)
    }
    handleTopDragOver = (event) => {// 箭头函数，this指针指向
        this.actions.hover(this.dragOverTargetId, {
            clientOffset: getEventClientOffset(event)
        })
    }
    handleTopDragEndCapture = () => {// 箭头函数，this指针指向
        this.actions.endDrag()
    }
    // 绑定拖动DOM元素
    connectDragSource(handlerId, domNode) {
        domNode.setAttribute('draggable', true)
        domNode.addEventListener('dragstart', (event) => this.handleDragStart(event, handlerId))
    }
    connectDropTarget(handlerId, domNode) {
        domNode.addEventListener('dragover', (event) => this.handleDragOver(event, handlerId))
    }
    handleDragStart(event, handlerId) {
        this.dragStartHandlerId = handlerId
    }
    handleDragOver(event, targetId) {
        this.dragOverTargetId = targetId
    }
}
function getEventClientOffset(event) {
    return {
        x: event.clientX,
        y: event.clientY
    }
}
export default HTML5BackendImpl