# Data Structures & Algorithms
Practice using Data Structures and Algorithms

As a "self-taught" developer transitioning into engineer, I never had the opportunity to learn about data structures and algorithms in a formal setting. I have been working on my own to learn about them and practice using them. This repository is a collection of my work.

## Data Structures

### Arrays

- Algorithms
    - Linear Search - very basic! O(n)
    - Is it ordered?
        - Binary Search - O(log n)
            - Cut in half each time

- Strategies:
    - Two pointers
    - Sliding Windows
        - Two Pointers
        - Subarrays aka windows
        - Usually the window/subarray is "better" (shorter length, longer sum, etc)
    - Prefix sum O(1)
        - Integer arrays
        - Sum of all elements up to a certain index

 - Other Algorithms:
    - Two glass balls O(sqrt(n))
        - Jump square root until it breaks
        - and a building with N floors. Find the floor where the glass balls will break.
            - https://sites.google.com/site/mytechnicalcollection/algorithms/dynamic-programming/two-glass-balls

### Linked Lists
    - Single Linked List
        - Head
        - Tail
        - Node
            - Value
            - Next
    - Doubly Linked List
        - Head
        - Tail
        - Node
            - Value
            - Next
            - Previous
    - Time Complexity for linked list:
        - Insertion: O(1)
        - Removal: O(1) or O(n)
        - Searching: O(n)
        - Access: O(n)


### Queue
    - FIFO
    - Enqueue
    - Dequeue
    - Peek

### Stack
    - LIFO
    - Push
    - Pop
    - Peek

### Hashing
    - Hash Table
        - Hash Function
        - Collisions
            - Separate Chaining
            - Linear Probing
    - Hash Set (new Set())
        - Hash Function
        - Collisions
            - Separate Chaining
            - Linear Probing
    - Hash Map (new Map())
        - Hash Function
        - Collisions
            - Separate Chaining
            - Linear Probing        

### Arrays vs Linked Lists
    - Arrays
        - Fast lookups
        - Slow inserts
        - Slow deletes
        - Fixed size
        - Better than Linked Lists for Stack
    - Linked Lists
        - Slow lookups
        - Fast inserts
        - Fast deletes
        - Dynamic size
        - Better than Arrays for Queue

### ArrayList
An ArrayList is a dynamic array data structure that can grow or shrink in size as needed. It's similar to a regular Array in JavaScript, but provides more flexibility in terms of resizing and manipulation. 
    - Resizing
        - O(n) time complexity
        - O(n) space complexity
    - Amortization
        - O(1) time complexity
        - O(n) space complexity

### ArrayBuffer or Ring Buffer
A ring buffer is a fixed size array that is treated as if it were connected end-to-end. When the buffer is full, new data is written starting at the beginning of the buffer and overwriting the old.
    - Resizing
        - O(1) time complexity
        - O(1) space complexity
    - Amortization
        - O(1) time complexity
        - O(1) space complexity

### Sorting Algorithms

#### Bubble Sort
- O(n^2)
- Compare each item to the next item
- If the next item is smaller, swap them
- Repeat until no swaps are made

### Graphs
A series of nodes/vertices with some amount of connections.

#### Terminology
- adjacency list
    - Hash Map Data Structure
        - In JavaScript, Object with keys as the node and values as an array of connected nodes
        - Example:
            ```js
            {
                A: ['B', 'C'],
                B: ['A', 'D'],
                C: ['A', 'D'],
                D: ['B', 'C', 'E'],
                E: ['D']
            }
            ```
- Depth first traversal
    - Stack Data Structure
    - Can be iterative or recursive
- Breadth first traversal
    - Queue Data Structure
    - Can only be iterative
- cyclic
    - has a loop
    - beware of infinite loops
- acyclic
    - no loops
- directed
    - has arrows
    - edges are unidirectional
- undirected
    - no arrows
    - edges are bidirectional
    - convert the edges array to a graph (adjacency list)
- weighted
    - has values
- unweighted
    - no values