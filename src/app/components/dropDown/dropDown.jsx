import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';
import Fetch from '../../lib/fetch'

export default async function DropDown() {
    const fetch = await Fetch();

    const DropdownContent = () => (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    + Lägg till måltid
                </Button>
            </DropdownTrigger>
            <DropdownMenu className={styles.dropDownMenu}>
                <DropdownItem key="new">{fetch.meals[1].strMeal}</DropdownItem>
                <DropdownItem key="new">{fetch.meals[2].strMeal}</DropdownItem>
                <DropdownItem key="new">{fetch.meals[3].strMeal}</DropdownItem>
                <DropdownItem key="new">{fetch.meals[4].strMeal}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )


    return (
        <DropdownContent />
    );
}
