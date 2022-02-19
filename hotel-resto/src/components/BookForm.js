import React from "react";

function Form() {
    return (
        <section className="form">
            <form>
                <label> Date: </label> <br/>
                <input type="date"></input> <br/>
                <label> Rooms: </label> <br/>
                <input type="number" min="1" step="1"></input> <br/>
                <label> Adults: </label> <br/>
                <input type="number" min="1" step="1"></input> <br/>
                <label> Kids: </label> <br/>
                <input type="number" min="0" step="0"></input> <br/>
                <button> Book </button>
            </form>
        </section>
    )
}

export default Form;