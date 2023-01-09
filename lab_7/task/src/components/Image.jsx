import React from "react";

function Image() {
    function addPict() {
        const image = document.getElementById("newImg");
        const forPict = document.getElementById("forPict");
        if (!image) {
            let image = document.createElement("img");
            image.src = "./assets/London.jpg";
            image.alt = "London_img";
            image.id = "newImg";
            forPict.append(image);
        }
    }

    function zoomIn() {
        const img = document.getElementById("newImg");
        if (img) {
            let currHeight = img.clientHeight;
            img.style.height = (currHeight + 20) + "px"
        }
    }

    function zoomOut() {
        const img = document.getElementById("newImg");
        if (img) {
            let currHeight = img.clientHeight;
            img.style.height = (currHeight - 20) + "px"
        }
    }

    function RemoveImg() {
        const img = document.getElementById("newImg")
        if (img) {
            img.remove();
        }
    }
        return (
            <div>
                <a href="https://www.london.gov.uk/">
                    <img alt="London_img"
                         src="./assets/London.jpg"
                         height="300"/>
                </a>
                <br/>
                <button onClick={addPict}>Add</button>
                <button onClick={zoomIn}>Plus</button>
                <button onClick={zoomOut}>Minus</button>
                <button onClick={RemoveImg}>Remove</button>
                <div id="forPict"></div>
            </div>
        );
}

export default Image;