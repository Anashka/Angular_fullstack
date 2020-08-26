function isPrime(num)
{
    for(i=2;i<num/2;i++)
    {
        if (num%i == 0)
        {
            console.log("false");
            break;
        }
        else
        {
            console.log("true");
        }
    }

}