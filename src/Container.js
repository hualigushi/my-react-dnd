import React, { useState } from 'react'
import Card from './Card'

const style = {
    width: '200px'
}

export default function Container() {
    const [cards, setCards] = useState([
        { id: 'card1', text: 'card1' },
        { id: 'card2', text: 'card2' },
        { id: 'card3', text: 'card3' },
    ])
    const moveCard = (dragIndex, hoverIndex) => {
    console.log('moveCard ~ dragIndex', dragIndex);
        const dragCard = cards[dragIndex]
        let cloneCards = [...cards]
        cloneCards.splice(dragIndex, 1)
        cloneCards.splice(hoverIndex, 0, dragCard)
        setCards(cloneCards)
    }
    return (
        <div style={style}>
            {cards.map((card, index) => {
                return (
                    <Card key={card.id} text={card.text} id={card.id} index={index} moveCard={moveCard} />
                )
            })}
        </div>
    )
}