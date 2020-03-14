## Function Overview

The main task was to create a one to one mapping between `strOne` to `strTwo`. This means that a string like 'abc' could map to a string 'def' because `a -> d`, `b-> e`, `c->f`. Additionally string like 'foo' could not map to 'bar' becuase 'o' cannot map to two characters, although 'bar' could map to 'foo' for there would be enough characters from bar to foo. 

Diving deeper into my understanding of the problem strings like 'aabc' would map to 'defd' and more complex strings like 'aaaqqxlm' would map to 'xxxxtppl' but not vice-versa. This is because `a -> x`, `q -p`, `l -> t`, `m -> l`, `x -> x` would only work one way. 

## Approach

My general approach to this problem was to organize the strings based on the unique characters they have, and compare the character that appears the most in `strOne` with the character that appears the most in `strTwo`. 

If there is ever an instance where there are more unqiue characters in `strOne` then in `strTwo` the function would return false becuase a one to one mapping does not exisit. If there is an instance where every unqiue character in `strOne` contains less than or the same ammount of unique characters in `strTwo` then the function would return true.

## Implementation 

To implement this soultion I used both a HashTable and class `MaxHeap` to organize my data and create a working soultion. 

I started off by creating a HashTable for every unqiue character in both `strOne` and `strTwo`. I used the values from each of these hash objects to create a `MaxHeap`. 

The `MaxHeap` follows the rule that every value of each node is less than or equal to the value of its parent, with the maximum-value element at the root. With this logic in mind I then compared each max value of the two heaps subtracted them and reassigned the values. If there was a time when the top value of `strOneHeap` was greater than the top value of `strTwoHeap` I would return false. Otherwise I traversed the heap until all the values are 0 and `return true`.

## Code Overview

Below is a breakdown of the functions and classes I used to solve this problem. 

### Class MaxHeap

The class `MaxHeap` is a heap I created to assit with this problem it follows the two basic rules for a heap:

1. The tree must always be complete
2. Every value of each node is less than or equal to the value of its parent, with the maximum-value element at the root

#### buildHeap(array)

To build the heap I used an array to represent my heap using the following to formulas to represent a child and parent node. As I build the heap I call `siftDown()` to put it in it's correct place on the heap.

1. A child node was represented with the following:
    - `currentIndex` * 2 + 1
    - `currentIndex` * 2 + 2
2. A parent node of a child is represented with the following:
    - Math.floor((`currentIndex` - 1) / 2 )

Parameters: Takes in an array on integers

Return Value:Array that represents a MaxHeap

#### siftDown(currentIndex, endIndex, heap)

Will correctly place the currenIndex in the right place of the heap

Parameters: Takes in an index, end index and array

Return Value: Array with currentIndex in correct place

#### peek() 

Returns the max value from the Heap.

#### changeValue(index, value)

Takes in a `value` and replaces the `index` on the heap with that `value`


### Function isOneToOneMappable()

The main function of the program. Takes in two different strings from the command line, and will determine if there is a One to One mapping from `strOne` to `strTwo`.

**Parameters**
Takes in two values from command line using `process.argv`

**Return Value:**
A Boolean value representing if the two string values are mappable. 

**Exceptions:**
String muust be entered seperated by a single string. If a user enters less than two strings an error will be sent to the console. 