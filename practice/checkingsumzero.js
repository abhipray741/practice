//checking sum zero problem 1
//[-5,-4,-3,-2,0,2,4.6.8]->input  array is sorted for this problem 
//[?,?]->input 

function getSumZero(array){
    for(let number of array)
    {
        for(let j=1;j<array.length;j++)
        {
            if(number+array[j] === 0)
            {
                return [number,array[j]];
            }
        }
    }
}
 
const result = getSumZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

//o(n^2) time complexity 

// another solution optimized solution two pointer solution 

function FindSumPair(array)
{
    let left=0;
    let right = array.length-1;
    while(left < right)
    {
        sum =array[left]+array[right];
        if(sum===0)
        {
            return[ array[left],array[right] ];
        } else if(sum>0)
        {
            right--;
        } else {
            left++;
        }

    }
}

let result1 = FindSumPair([-5,-4,-3,-2,0,2,4,6,8])

console.log(result1);