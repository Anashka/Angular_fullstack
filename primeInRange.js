function primeInRange(lower=0,higher)
{
    
    for(j=lower;j<higher;j++)
    {
        for(i=2;i<j/2;i++)
        {
            if(j%i == 0)
            {
                break;
            }
            else
            {
                console.log(j);
                break;
            }
        }
    }
}

primeInRange(1,12);