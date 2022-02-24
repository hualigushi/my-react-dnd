/**
 * 拖动源连接器，连接一个真实DOM节点，另一头是react Dnd系统
 */
class SourceConnector{
    backend
    handlerId
    dragSourceRef
    constructor(backend){
        this.backend = backend
    }
    // 接收React Dnd对象
    receiveHandlerId(handlerId){
        this.handlerId=handlerId
        this.connect()
    }
    connect(){
        if(!this.handlerId||!this.dragSourceRef){
            return
        }
        this.backend.connectDragSource(this.handlerId, this.dragSourceRef.current)
    }
    // 接收真实DOM
    receiveDragSource(){
        return (dragSourceRef)=>this.dragSourceRef=dragSourceRef
    }
}
export default SourceConnector