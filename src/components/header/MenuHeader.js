import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';

const MenuHeader = () => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.parentId ? <a href={category.slug}>{category.name}</a> : <span>{category.name}</span>}
                    {category.children.length > 0 ? (<ul>
                        {renderCategories(category.children)}
                    </ul>) : null}
                </li>
            )
        }
        return myCategories
    }
    return (
        <div className='menuHeader'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <ul className='d-flex'>
                        {category.categories.length > 0 ? renderCategories(category.categories) : null}
                    </ul>
                </Row>
            </Container>
        </div>
    )
}

export default MenuHeader