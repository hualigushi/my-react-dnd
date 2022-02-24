import {HandlerRole} from '../interfaces'
import {getNextUniqueId} from '../utils'
import {addSource,addTarget} from '../actions/registry'
class HandleRegistryImpl{
    store
    types= new Map() // {key:handlerId, value: 类型}
    dragSources = new Map()// {key:handlerId, value: dragSource实例}
    dropTargets = new Map()// {key:handlerId, value: dragSource实例}
    constructor(store){
        this.store = store
    }
    addSource(type, dragSource){
        const handlerId = this.addHandler(HandlerRole.SOURCE, type, dragSource)
        this.store.dispatch(addSource(handlerId))
        return handlerId
    }
    addTarget(type, dragSource){
        const handlerId = this.addHandler(HandlerRole.TARGET, type, dragSource)
        this.store.dispatch(addTarget(handlerId))
        return handlerId
    }
    addHandler(role, type,handler){
        const handlerId = getNextHandler(role)
        this.types.set(handlerId, type)
        if(role === HandlerRole.SOURCE){
            this.dragSources.set(handlerId, handler)
        } else if(role === HandlerRole.TARGET){
            this.dropTargets.set(handlerId,handler)
        }
        return handlerId
    }
    getSource(sourceId){
        return this.dragSources.get(sourceId)
    }
    getSourceType(sourceId){
        return this.types.get(sourceId)
    }
    getTarget(targetId){
        return this.dropTargets.get(targetId)
    }
    getTargetType(targetId){
        return this.types.get(targetId )
    }
}
function getNextHandler(role){
    const id = getNextUniqueId()
    switch(role){
        case HandlerRole.SOURCE:
            return `S${id}`
        case HandlerRole.TARGET:
            return `T${id}`
        default:
            throw new Error(`未知的角色，${role}`)
    }
}
export default HandleRegistryImpl