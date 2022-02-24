# 启动
`npm start`

# 学习启示
1. hooks + 类 
2. backend 工厂

# 代码运行顺序
DndContext
DndProvider
createDragDropManger

HandleRegistryImpl constructor
DragDropMonitorImpl constructor
DragDropManagerImpl constructor

HTML5BackendImpl constructor
DragDropManagerImpl getActions
createDragDropActions
beginDrag.js createBeginDrag 
endDrag.js createEndDrag
hover.js createHover 

DragDropManagerImpl receiveBackend
HTML5BackendImpl setup
HTML5BackendImpl addEventListener


业务调用 useDrop
useDropTargetMonitor 
useDragDropManager
DropTargetMonitorImpl constructor  ->  DragDropManagerImpl getGlobalMonitor

useDropTargetConnector
useDragDropManager
DragDropManagerImpl getBackend
TargetConnector constructor

useRegisteredDropTarget
useDragDropManager
useDropTarget
DropTargetImpl constructor
useCollectProps
useConnectDropSource
TargetConnector receiveDropTarget

业务调用 useDrag 
useDragSourceMonitor
useDragDropManager
DragSourceMonitorImpl constructor -> DragDropManagerImpl getGlobalMonitor
useDragSourceConnector
useDragDropManager
DragDropManagerImpl getBackend
SourceConnector constructor
useRegisteredDragSource
useDragDropManager
useDragSource
DragSourceImpl constructor
useDragType
useCollectProps
DragSourceMonitorImpl ~ isDragging
DragDropMonitorImpl isDraggingSource
DragDropMonitorImpl getSourceId
useConnectDragSource ~ connector
SourceConnector ~ receiveDragSource
useDrop ~ spec {accept: 'CARD', collect: ƒ, hover: ƒ}
useDropTargetMonitor 
useDragDropManager
DropTargetMonitorImpl  constructor
DragDropManagerImpl getGlobalMonitor
useDropTargetConnector
useDragDropManager
DragDropManagerImpl getBackend
TargetConnector  constructor
useRegisteredDropTarget
useDragDropManager
useDropTarget
DropTargetImpl constructor
useCollectProps
useConnectDropSource
TargetConnector ~ receiveDropTarget



# 说明

![](F:\ts\my-react-dnd\pictures\dnd1.JPG)



![dnd2](F:\ts\my-react-dnd\pictures\dnd2.JPG)



![dnd3](F:\ts\my-react-dnd\pictures\dnd3.JPG)



![dnd4](F:\ts\my-react-dnd\pictures\dnd4.JPG)



![dnd5](F:\ts\my-react-dnd\pictures\dnd5.JPG)



![dnd6](F:\ts\my-react-dnd\pictures\dnd6.JPG)



![dnd7](F:\ts\my-react-dnd\pictures\dnd7.JPG)





![reactdnd2_1635074386436](F:\ts\my-react-dnd\pictures\reactdnd2_1635074386436.png)

