import React from 'react'

const Card = ({ title, total }) => {
    return (
        <div>
            <div className="card">
                <div className="card-data">
                    <h2>Gujarat</h2>
                    <p>{title}</p>
                    <ul><li><a href="#">total {title} : {total}</a></li></ul>
                    <ul><li><a href="#">sets : 2</a></li></ul>
                </div>
            </div>
        </div>
    )
}

export default Card
