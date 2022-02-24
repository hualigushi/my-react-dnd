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

