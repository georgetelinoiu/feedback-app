function Intro(){
    return(
        <div>
            <br></br><br></br>
            <h1 id="titlu">Alegeti tipul de cont</h1>
            <div className="intro">
                <div id="profesor">
                    <h2><a href="#/profesori">Profesor</a></h2>
                </div>
                <div id="student">
                    <h2><a href="#/students">Student</a></h2>
                </div>
            </div>
        </div>
    );
}

export default Intro;