const Spread = () => {
    const testSpread = ()=>{
        const areas=["kitchen","Hall","Cellar"];
        const areasCopy=[...areas];
        areas[0]="Patio";
        areas[2]="test";
        console.log("areas:",areas);
        console.log("areasCopy",areasCopy);
    };
    return(
        <div>
            <h2>Spread Operator Example</h2>
            <button onClick={testSpread}>
                Test Spread
            </button>
        </div>
    );
};
export default Spread;
