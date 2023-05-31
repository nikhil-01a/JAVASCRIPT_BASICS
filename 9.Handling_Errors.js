/*
EXCEPTION: Interruption in the intended execution of code. Typically caused by errors.
ERROR: When things go wrong in our code, errors are what went wrong and exception is like 'where', 'when' and 'why'. Syntax errors are a type of exception that occurs when incorrect syntax is used.
THROWING AN EXCEPTION: Sending a message that something has gone wrong in the intended execution of code, this can be thrown by javascript or the developer with the throw keyword
*/

/*
UNCAUGHT EXCEPTION: We catch this with try, catch and finally
TRY: Block of code that may throw an exception
CATCH: Block of code that will run if an exception is thrown
FINALLY: Optional code that will run after try block or after the catch block.. Runs everytime whether an exception is thrown or not. 
*/

// FUNCTIONS TO THROW EXCEPTION AND LOG ONE
function criticalcode()
{
    throw "Throwing exception in critical code";
}

function logError(theException)
{
    console.log(theException);
}

// 1. Throwing an exception
console.log("----------- THROWING EXCEPTION --------------");
//throw 'myEception';      
//throw true;

// 2. TRY and CATCH
console.log("----------- TRY CATCH --------------");
try
{
    criticalcode();
}
catch (ex)
{
    console.log("Got an error");
    logError(ex);
}

// 3. Throwing in TRY and then CATCH
console.log("----------- Throwing in TRY CATCH --------------");
try
{
    throw "An exception that is thrown every time"; // Normally we do this in if statement or while getting a request
}
catch (ex)
{
    console.log("Got an error");
    logError(ex);
}

// 4. TRY, CATCH and FINALLY
console.log("----------- TRY, CATCH and FINALLY --------------");
try
{
    criticalcode();
}
catch (ex)
{
    console.log("Got an error");
    logError(ex);
}
finally
{
    console.log("Code in finally that runs no matter what");
}