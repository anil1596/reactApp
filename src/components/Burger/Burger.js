import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    //to get array of keys
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        console.log('Outer loop');
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            console.log(igKey+"     "+i);
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;