import {useMemo} from 'react'
function useConnectDropSource(connector){
    return useMemo(()=>connector.receiveDropTarget(),[connector])
}
export default useConnectDropSource