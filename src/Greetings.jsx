function Greetings(){

    const isLoogedIn= true;

     /* return(
     
    <div>
    {isLoogedIn? <h1>Welcome Here!</h1> : <h1>Please Log in</h1>}
    </div>
    
    );*/

     if (isLoogedIn){
        return <h1>Welcome Here!</h1>
     }else{
        return <h1>Please Log in</h1>
     }


}
export default Greetings;