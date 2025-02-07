document.body.style.fontFamily = 'Arial';

let paragraphs = document.querySelectorAll('p');

const styles = [
    { color: "orange", backgroundColor: "yellow", fontSize: "16px", textAlign: "center" },
    { color: "blue", backgroundColor: "lightblue", fontSize: "14px", textAlign: "right" },
    { color: "white", backgroundColor: "red", fontSize: "12px", textAlign: "left" }
];

paragraphs.forEach((p, index) => {
    if (index < styles.length) {
        Object.assign(p.style, styles[index]);
        p.style.padding = "5px";
    }
});
