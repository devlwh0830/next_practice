import { useRef } from "react";

import Button from "../ui/button";
import classes from './event-search.module.css';

function EventSearch(props){
    const yeaInpytRef = useRef();
    const monthInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const selectedYear = yeaInpytRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear,selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yeaInpytRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
}

export default EventSearch;