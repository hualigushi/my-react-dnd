/**
 * 拖动源连接器，连接一个真实DOM节点，另一头是react Dnd系统
 */
class TargetConnector{
    backend
    handlerId
    dropTargetRef
    constructor(backend){
        this.backend = backend
    }
    // 接收React Dnd对象
    receiveHandlerId(handlerId){
        this.handlerId=handlerId
        this.connect()
    }
    connect(){
        if(!this.handlerId||!this.dropTargetRef){
            return
        }
        this.backend.connectDropTarget(this.handlerId, this.dropTargetRef.current)
    }
    // 接收真实DOM
    receiveDropTarget(){
        return (dropTargetRef)=>this.dropTargetRef=dropTargetRef
    }
}
export default TargetConnector