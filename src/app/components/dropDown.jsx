import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';

export default function DropDown() {

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
                <DropdownItem key="new">Potatis</DropdownItem>
                <DropdownItem key="new">Köttbulle</DropdownItem>
                <DropdownItem key="new">Granat</DropdownItem>
                <DropdownItem key="new">Machete</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )


    return (
        <DropdownContent />
    );
}
