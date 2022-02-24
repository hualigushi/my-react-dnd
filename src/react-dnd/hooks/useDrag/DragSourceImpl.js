/**
 * 拖动源对象
 */
class DragSourceImpl{
    constructor(spec, monitor,connector){
        this.spec = spec
        this.monitor = monitor
        this.connector = connector
    }
    beginDrag(monitor){
        return this.spec.item()
    }
}
export default DragSourceImpl