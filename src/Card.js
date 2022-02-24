import React, { useRef } from 'react'
// import { useDrag,useDrop } from 'react-dnd'
import { useDrag,useDrop } from './react-dnd'
import * as ItemTypes from './ItemTypes'

const style = {
    backgroundColor: 'red',
    padding: '5px',
    margin: '5px',
    border: '1px solid gray',
    cursor: 'move'
}

export default function Card({ id, index, text, moveCard }) {
    let ref = useRef()

    let [,drop] = useDrop({
        accept: ItemTypes.CARD,
        collect:()=>({}),
        hover(item,monitor){
            console.log('hover ~ item', item);
            const dragIndex = item.index
            const hoverIndex = index
            if(dragIndex === hoverIndex){
                return
            }
            const {top,bottom} = ref.current.getBoundingClientRect()
            console.log('hover ~ bottom', bottom);
            const halfOfHoverHeight = (bottom-top)/2
            const {y} = monitor.getClientOffset()
            const hoverClientY = y - top
            if((dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight)||(
                dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight
            )){
                moveCard(dragIndex, hoverIndex)
                item.index = hoverIndex
            }
        }
    })

    let [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => ({
            id, index
        }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    const opacity = isDragging ? .1 : 1
    drag(ref)
    drop(ref)
    return (
        <div ref={ref} style={{ ...style, opacity }}>
            {text}
        </div>
    )
}